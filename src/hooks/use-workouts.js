import { useQuery, useMutation } from "react-query";
import queryClient from "../lib/query-client";
import { useRouter } from "next/router";
import { useUser } from "../components/auth/UserProvider";

export function useWorkouts() {
  const { user } = useUser();
  return useQuery("workouts", () =>
    fetch(`/api/workouts/${user.id}`).then(res => res.json())
  );
}

export function useCreateWorkout() {
  const router = useRouter();
  return useMutation(
    workout =>
      fetch("/api/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(workout)
      }).then(res => res.json()),
    {
      onSuccess: res => {
        queryClient.invalidateQueries("workouts");
        router.push(`/workout/${res.id}`);
      }
    }
  );
}
