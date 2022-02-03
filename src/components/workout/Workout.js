import React from "react";
import _ from "lodash";
import { useRouter } from "next/router";
import { H1, H2, Paragraph } from "../typography";
import Button from "../button";
import Card from "../card";
import SetsView from "./SetsView";
import AddExercise from "./AddExercise";
import AddSet from "./AddSet";
import { useWorkout } from "../../hooks/use-workout";
import { useSets, useDeleteExercise } from "../../hooks/use-sets";
import { useExercises } from "../../hooks/use-exercises";
import Layout from "../layout";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/solid";

export default function Workout() {
  const router = useRouter();
  const { workoutId } = router.query;

  const [activeExerciseId, setActiveExerciseId] = React.useState(null);
  const [exercisesById, setExercisesById] = React.useState({});

  const [showExerciseDialog, setShowExerciseDialog] = React.useState(false);
  const openExerciseDialog = () => setShowExerciseDialog(true);
  const closeExerciseDialog = exerciseId => {
    setShowExerciseDialog(false);
    setActiveExerciseId(exerciseId || null);
    if (exerciseId) {
      openSetsDialog();
    }
  };

  const [showSetsDialog, setShowSetsDialog] = React.useState(false);
  const openSetsDialog = () => setShowSetsDialog(true);
  const closeSetsDialog = () => {
    setShowSetsDialog(false);
    setActiveExerciseId(null);
  };

  const addSetToExercise = exerciseId => {
    setActiveExerciseId(exerciseId);
    openSetsDialog();
  };

  const { data: workout, isLoading: isLoadingWorkout } = useWorkout(workoutId);
  const { data: sets, isLoading: isLoadingSets } = useSets(workoutId);
  const { data: exercises, isLoading: isLoadingExercises } = useExercises();
  const mutation = useDeleteExercise();

  React.useEffect(() => {
    if (exercises) {
      setExercisesById(
        exercises.reduce((acc, exercise) => {
          acc[exercise.id] = exercise;
          return acc;
        }, {})
      );
    } else {
      setExercisesById({});
    }
  }, [exercises]);

  const isLoading = isLoadingWorkout || isLoadingSets || isLoadingExercises;

  let setsByExercise;
  if (sets && !isLoadingSets) {
    setsByExercise = _.groupBy(sets, "exerciseId");
  }

  const deleteExercise = async (workoutId, exerciseId) => {
    await mutation.mutateAsync({ workoutId, exerciseId });
  };

  return (
    <Layout>
      <div className="flex-1 flex flex-col space-y-2">
        <H1>Workout</H1>
        {isLoading && "Loading workout..."}
        {!isLoading && workout && <H2>{workout.name || workout.id}</H2>}
        {!isLoading && !(sets && sets.length) && (
          <Paragraph>To get started, add an exercise.</Paragraph>
        )}
        {!isLoading &&
          sets &&
          Object.entries(setsByExercise).map(
            ([exerciseId, setsForExercise]) => (
              <Card
                key={exerciseId}
                className="px-6 py-4 border border-gray-200"
              >
                <div className="flex mb-4 text-sm font-medium text-gray-900">
                  {exercisesById[exerciseId]
                    ? exercisesById[exerciseId].name
                    : "Unknown Exercise"}
                  <div className="ml-auto">
                    <TrashIcon onClick={() => deleteExercise(workoutId, exerciseId)} className="text-slate-900 w-6 h-6" />
                  </div>
                </div>
                <SetsView sets={setsForExercise} />
                <div className="mt-4 flex flex-row-reverse">
                  <Button onClick={() => addSetToExercise(exerciseId)}>
                    Add Set
                  </Button>
                </div>
              </Card>
            )
          )}
        <Button type="submit" onClick={openExerciseDialog}>
          Add Exercise
        </Button>
      </div>
      <AddExercise isOpen={showExerciseDialog} close={closeExerciseDialog} />
      <AddSet
        isOpen={showSetsDialog}
        close={closeSetsDialog}
        workoutId={workoutId}
        exerciseId={activeExerciseId}
      />
      <Button className={"mt-5 flex justify-center"} onClick={() => router.push("/workout")}>
        Finish Workout
        <CheckCircleIcon className="w-6 h-6 ml-1" />
      </Button>
    </Layout>
  );
}
