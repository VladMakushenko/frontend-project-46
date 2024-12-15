import { describe, test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'UTF-8');

describe('Generate output based on the difference between two files', () => {
  const expectedStylish = readFile('expected_stylish.txt');
  const expectedPlain = readFile('expected_plain.txt');
  const expectedJSON = readFile('expected_json.txt');

  const formats = ['json', 'yml'];

  test.each(formats)('Should output diff in different formats', (format) => {
    const file1 = getFixturePath(`file1.${format}`);
    const file2 = getFixturePath(`file2.${format}`);

    expect(genDiff(file1, file2)).toEqual(expectedStylish);
    expect(genDiff(file1, file2, 'stylish')).toEqual(expectedStylish);
    expect(genDiff(file1, file2, 'plain')).toEqual(expectedPlain);
    expect(genDiff(file1, file2, 'json')).toEqual(expectedJSON);
  });
});
