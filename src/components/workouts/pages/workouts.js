import dayjs from 'dayjs';
import _ from 'lodash';
import Head from 'next/head';
import React from 'react';
import { useToggle } from 'react-use';

import useWorkouts from '../../../hooks/use-workouts';
import Button from '../../button';
import LoadingIcon from '../../loading-icon';
import { usePageContext } from '../../page';
import { H1 } from '../../typography';
import WorkoutList from '../../workout-list';
import AddWorkout from '../overlays/add-workout';
import WorkoutsMoreActions, {
  WORKOUTS_ORDERBY,
} from '../overlays/workouts-more-actions';

export default function WorkoutsPage() {
  const { data: workouts, isLoading } = useWorkouts();

  const [orderBy, setOrderBy] = React.useState(WORKOUTS_ORDERBY.Recent);

  const [showAddWorkout, toggleAddWorkout] = useToggle(false);
  const [showMoreActions, toggleMoreActions] = useToggle(false);

  const onMoreAction = React.useCallback(
    () => toggleMoreActions(true),
    [toggleMoreActions]
  );

  usePageContext({
    title: 'My Workouts',
    onMoreAction,
  });

  const orderedWorkouts = React.useMemo(() => {
    if (!workouts) return [];

    switch (orderBy.key) {
      case WORKOUTS_ORDERBY.Name.key:
        return _.sortBy([...workouts], ['name']);
      case WORKOUTS_ORDERBY.Recent.key:
      default:
        return [...workouts].sort((a, b) =>
          dayjs(a.createdAt).isBefore(dayjs(b.createdAt)) ? 1 : -1
        );
    }
  }, [orderBy, workouts]);

  return (
    <>
      <Head>
        <title>Workouts</title>
      </Head>
      <div className='flex flex-col flex-1 space-y-4'>
        <H1>All Workouts</H1>
        {isLoading && (
          <LoadingIcon className='justify-self-center self-center w-12 h-12' />
        )}
        {!isLoading && <WorkoutList workouts={orderedWorkouts} />}
        <Button onClick={() => toggleAddWorkout(true)}>New Workout</Button>
      </div>
      <AddWorkout
        open={showAddWorkout}
        onClose={() => toggleAddWorkout(false)}
      />
      <WorkoutsMoreActions
        open={showMoreActions}
        onClose={() => toggleMoreActions(false)}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        totalWorkouts={workouts ? workouts.length : undefined}
      />
    </>
  );
}