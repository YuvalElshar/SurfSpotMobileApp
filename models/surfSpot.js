function surfSpot() {
  constructor(
    id,
    title,
    location,
    description,
    bestMonthsToSurf,
    bestTideToSurf,
    dangers,
    waveLenght,
    waveDiraction,
    images,
    rating
  );
  this.id = id;
  this.title = title;
  this.location = location;
  this.description = description;
  this.bestMonthsToSurf = bestMonthsToSurf;
  this.bestTideToSurf = bestTideToSurf;
  this.dangers = dangers;
  this.waveLenght = waveLenght;
  this.waveDiraction = waveDiraction;
  this.images = ""; //todo
  this.rating = 4; //todo
}

module.exports = surfSpot;
