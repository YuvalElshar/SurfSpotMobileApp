const GOOGLE_API_KEY = "AIzaSyD2ZGf-lk1rLV-wFNeqhgY9WieshCfLSHY";

function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=hybrid&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  console.log(imagePreviewUrl);
  return imagePreviewUrl;
}

export default getMapPreview;
