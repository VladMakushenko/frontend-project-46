import fs from 'fs';
import path from 'path';

const readFile = (filePath) => {
  const directory = process.cwd(filePath);
  const fullPath = path.resolve(directory, filePath);
  const file = fs.readFileSync(fullPath, 'UTF-8');

  return file;
};

export default readFile;
