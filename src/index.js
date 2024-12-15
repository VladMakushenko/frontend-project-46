import readFile from './utils/readFile.js';
import getFileExtension from './utils/getFileExtension.js';
import parseData from './parsers.js';
import getObjectDiff from './getObjectDiff.js';
import formatDiff from './formatters/index.js';

const genDiff = (file1, file2, format) => {
  const firstFile = readFile(file1);
  const secondFile = readFile(file2);
  const firstFileExtension = getFileExtension(file1);
  const secondFileExtension = getFileExtension(file2);
  const firstFileData = parseData(firstFile, firstFileExtension);
  const secondFileData = parseData(secondFile, secondFileExtension);

  const diff = getObjectDiff(firstFileData, secondFileData);
  const formattedDiff = formatDiff(diff, format);
  return formattedDiff;
};

export default genDiff;
