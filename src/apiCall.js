export const fetchStuff = async () => {
  try {
    const response = await fetch('https://api.github.com/gists/fce0f5b884ffd813850ffb6919fe6bf7');
    const data = await response.json();
    return data.files['tournaments.json'].content

  } catch (error) {
    throw new Error('Something went wrong on api server!');

  }
}