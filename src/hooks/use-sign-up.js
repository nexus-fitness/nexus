import { useMutation } from '@tanstack/react-query';

export default function useSignUp(options = {}) {
  return useMutation(
    ['sign-up'],
    ({ email, firstName }) =>
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/sign-up`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, firstName }),
      }).then((response) => (response.ok ? response.json() : response)),
    options,
  );
}
