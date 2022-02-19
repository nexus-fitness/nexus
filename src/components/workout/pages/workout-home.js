import { ChevronRightIcon, FireIcon } from '@heroicons/react/solid';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React from 'react';

import { useWorkouts } from '../../../hooks/use-workouts';
import Button from '../../button';
import Card from '../../card';
import LoadingIcon from '../../loading-icon';
import Page from '../../page';
import { H1, Paragraph } from '../../typography';
import AddWorkout from '../overlays/add-workout';

export default function WorkoutsHome() {
  const router = useRouter();
  const { data: workouts, error, isLoading } = useWorkouts();

  const [showWorkoutDialog, setShowWorkoutDialog] = React.useState(false);
  const openWorkoutDialog = () => setShowWorkoutDialog(true);
  const closeWorkoutDialog = () => {
    setShowWorkoutDialog(false);
  };

  return (
    <Page>
      <div className='flex flex-col flex-1 space-y-4'>
        <H1>Workouts</H1>
        <div className='flex flex-col flex-1 space-y-2'>
          {isLoading && <LoadingIcon className='self-center w-12 h-12' />}
          {!isLoading &&
            !error &&
            (workouts && workouts.length > 0 ? (
              workouts.map(({ id, name, createdAt }) => (
                <Card key={id} className='flex bg-white border border-slate-200'>
                  <div className='flex-1 p-2'>
                    <div className='text-sm font-medium text-slate-900'>{name}</div>
                    <div className='text-sm font-medium text-slate-500'>
                      {dayjs(createdAt).format('MMM DD, YYYY h:mm a')}
                    </div>
                  </div>
                  <Button onClick={() => router.push(`/workout/${id}`)}>
                    <ChevronRightIcon className='w-6 h-6' />
                  </Button>
                </Card>
              ))
            ) : (
              <Paragraph>No workout history.</Paragraph>
            ))}
        </div>
        <Button onClick={() => openWorkoutDialog()}>
          <FireIcon className='inline-block w-6 h-6' />
          Workout Now
        </Button>
      </div>
      <AddWorkout open={showWorkoutDialog} onClose={closeWorkoutDialog} />
    </Page>
  );
}
