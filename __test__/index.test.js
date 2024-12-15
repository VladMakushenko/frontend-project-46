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
  const json1 = getFixturePath('file1.json');
  const json2 = getFixturePath('file2.json');
  const yml1 = getFixturePath('file1.yml');
  const yml2 = getFixturePath('file2.yml');
  const expectedStylish = readFile('expected_stylish.txt');
  const expectedPlain = readFile('expected_plain.txt');
  const expectedJSON = readFile('expected_json.txt');

  const testCases = [
    [json1, json2, expectedStylish],
    [yml1, yml2, expectedStylish],
    [json1, json2, expectedStylish, 'stylish'],
    [yml1, yml2, expectedStylish, 'stylish'],
    [json1, json2, expectedPlain, 'plain'],
    [yml1, yml2, expectedPlain, 'plain'],
    [json1, json2, expectedJSON, 'json'],
    [yml1, yml2, expectedJSON, 'json'],
  ];

  test.each(testCases)('Should output diff in different formats', (file1, file2, expected, format = 'stylish') => {
    const result = genDiff(file1, file2, format);
    expect(result).toEqual(expected);
  });
});
