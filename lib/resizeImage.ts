export const useResizeImage = (file: any, imageSize: number = 100) => {
  const reader = new FileReader();
  const image = new Image();
  const canvas = document.createElement('canvas');

  // Data Uri to Blob
  const dataURItoBlob = (dataURI: any) => {
    const bytes = dataURI.split(',')[0].indexOf('base64') >= 0 ? atob(dataURI.split(',')[1]) : unescape(dataURI.split(',')[1]);
    const mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const max = bytes.length;
    const ia = new Uint8Array(max);
    for (let i = 0; i < max; i += 1) ia[i] = bytes.charCodeAt(i);
    return new Blob([ia], { type: mime });
  };

  // Resize Function
  const resize = () => {
    let { width, height } = image;

    if (width > height) {
      if (width > imageSize) {
        height *= imageSize / width;
        width = imageSize;
      }
    } else if (height > imageSize) {
      width *= imageSize / height;
      height = imageSize;
    }
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d')?.drawImage(image, 0, 0, width, height);

    const newImageUrl = canvas.toDataURL(file.type);

    return dataURItoBlob(newImageUrl);
  };

  // Return Promise Resize
  return new Promise((resolve, reject) => {
    if (!file.type.match('image/*')) {
      reject(new Error('Not an Image'));
      return;
    }
    reader.onload = (readerEvent) => {
      image.onload = () => resolve(resize());
      image.src = readerEvent.target?.result as string;
    };

    reader.readAsDataURL(file);
  });
};
