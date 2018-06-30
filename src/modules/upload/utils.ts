export const readAsDataURL = (file: File) => {
  const fr = new FileReader();

  return new Promise((resolve, reject) => {
    fr.onerror = () => {
      fr.abort();
      reject(new DOMException('Error reading file.'));
    };

    fr.onload = () => { resolve(fr.result); };
    fr.readAsDataURL(file);
  });
};
