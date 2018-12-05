const path = "https://pixabay.com/api/";
const apiKey = "9656065-a4094594c34f9ac14c7fc4c39";

export function getImages() {
  return fetch(`${path}/?key=${apiKey}&q=beautiful+landscape&image_type=photo`)
    .then(resp => resp.json())
    .then(data => data);
}
