import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signupPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signupPromise, photoPromise])
    .then((results) =>
      results.map((result) => {
        if (result.status === 'fulfilled') {
          return {
            status: result.status,
            value: result.value,
          };
        }
        return {
          status: result.status,
          value: result.reason.message,
        };
      })
    );
}
