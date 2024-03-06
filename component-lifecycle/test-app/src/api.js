export function fetchBio(person) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bio = `This is ${person}'s bio`;
      resolve(bio);
    }, 3000);
  });
}
