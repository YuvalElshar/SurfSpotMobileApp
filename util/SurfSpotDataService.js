function getSurfSpots() {
  fetch("https://localhost:44315/api/SurfSpots")
    .then((response) => response.json())
    .then((data) => {
      // Do something with the data
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
}

export default getSurfSpots;
