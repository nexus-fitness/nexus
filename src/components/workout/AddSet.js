import { CheckIcon, ChevronRightIcon, XIcon } from '@heroicons/react/solid';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import React from 'react';

import { useCreateSet } from '../../hooks/use-sets';
import fitcode from '../../lib/fitcode';
import { useUser } from '../auth';
import Button from '../button';
import { Input, Label } from '../forms';
import { H2 } from '../typography';
import SetsView from './SetsView';

export default function AddSet({ isOpen, close, workoutId, exerciseId }) {
  const [sets, updateSets] = React.useState(null);

  const mutation = useCreateSet();
  const user = useUser();

  const handleInput = (rawInput) => {
    updateSets(fitcode(rawInput, { workoutId, exerciseId }));
  };

  const commit = async () => {
    await Promise.all(sets.map((set) => mutation.mutateAsync({ ...set, userId: user.user.id })));
    updateSets(null);
    close();
  };

  return (
    <DialogOverlay isOpen={isOpen} onDismiss={close} aria-label='Add Sets'>
      <DialogContent className='!w-screen md:!w-half-screen'>
        <div className='flex flex-col space-y-4'>
          <form
            className='flex flex-col flex-none space-y-4'
            onSubmit={(event) => {
              const form = event.currentTarget;
              handleInput(form.fitcode.value);
              event.preventDefault();
            }}
            autoComplete='off'
          >
            <H2>Add Sets</H2>
            <div className='flex flex-wrap justify-between items-baseline mb-4'>
              <Label htmlFor='exercise-name'>Type your FitCode™</Label>
            </div>
            <div className='flex'>
              <Input
                autoFocus
                autoComplete='off'
                type='text'
                name='fitcode'
                placeholder='5@185, 4@195, 2@205'
              />
              <Button className='p-1' type='submit'>
                <ChevronRightIcon className='w-6 h-6' />
              </Button>
            </div>
          </form>
          <div className='flex-1'>
            <SetsView sets={sets} />
          </div>
          <div className='flex space-x-4'>
            <Button className='flex-1' onClick={() => close()}>
              <XIcon className='inline-block w-6 h-6' />
            </Button>
            <Button className='flex-1' disabled={!(sets && sets.length > 0)} onClick={commit}>
              <CheckIcon className='inline-block w-6 h-6' />
            </Button>
          </div>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
}
