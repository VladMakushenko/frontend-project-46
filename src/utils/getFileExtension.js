import path from 'path';

const getFileExtension = (filePath) => {
  const extension = path.extname(filePath).slice(1);
  return extension;
};

export default getFileExtension;
