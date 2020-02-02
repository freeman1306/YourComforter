const createImage = url =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", error => reject(error));
    image.setAttribute("crossOrigin", "anonymous");
  });

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 */
const getCroppedImage = async (imageSrc, pixelCrop) => {
  const image = await createImage(imageSrc);

  const canvas = document.createElement("canvas");
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (pixelCrop.center) {
    ctx.drawImage(
      image,
      image.width / 2 - pixelCrop.width / 2,
      image.height / 2 - pixelCrop.height / 2,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );
  } else {
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );
  }

  // As Base64 string
  // return canvas.toDataURL("image/jpeg", 0.5);

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(file => {
      resolve(URL.createObjectURL(file));
    }, "image/jpeg");
  });
};

export default getCroppedImage;
