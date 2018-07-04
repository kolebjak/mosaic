export const isResponseSuccessfull = (response: { success: boolean }) => {
  if (response && response.success) {
    return true;
  }
  return false;
};

export const readAsDataURL = (file: File) => {
  const fr = new FileReader();

  return new Promise((resolve, reject) => {
    fr.onerror = () => {
      fr.abort();
      reject(new DOMException('Error reading file.'));
    };

    fr.onload = () => {
      resolve(fr.result);
    };
    fr.readAsDataURL(file);
  });
};

/** Get average color of image */
export const getAverageColor = (imageData: ImageData) => {
  const data = imageData.data;
  const rgb = { red: 0, green: 0, blue: 0 };
  for (let i = 0; i < data.length; i += 4) {
    rgb.red += data[i];
    rgb.green += data[i + 1];
    rgb.blue += data[i + 2];
  }
  return rgb;
};

export const loadImage = async (imageSrc: string) => new Promise((resolve) => {
  const image = new Image();
  image.crossOrigin = 'Anonymous';
  image.src = imageSrc;
  image.onload = () => {
    resolve(image);
  };
});
