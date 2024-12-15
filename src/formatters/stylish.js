import _ from 'lodash';

const getSpaces = (depth, spaces = 4, offset = 2) => ' '.repeat(depth * spaces - offset);

const stringify = (value, depth) => {
  if (!_.isObject(value)) return String(value);

  const entries = _.entries(value);
  const nestedLines = entries.map(([key, val]) => `${getSpaces(depth)}  ${key}: ${stringify(val, depth + 1)}`);

  return `{\n${nestedLines.join('\n')}\n${getSpaces(depth - 1)}  }`;
};

const formatOutput = (obj, depth) => {
  const { key, type, children, value, value1, value2 } = obj;

  switch (type) {
    case 'added': {
      return `${getSpaces(depth)}+ ${key}: ${stringify(value, depth + 1)}`;
    }
    case 'removed': {
      return `${getSpaces(depth)}- ${key}: ${stringify(value, depth + 1)}`;
    }
    case 'unchanged': {
      return `${getSpaces(depth)}  ${key}: ${stringify(value, depth + 1)}`;
    }
    case 'changed': {
      const oldLine = `${getSpaces(depth)}- ${key}: ${stringify(value1, depth + 1)}`;
      const newLine = `${getSpaces(depth)}+ ${key}: ${stringify(value2, depth + 1)}`;
      return `${oldLine}\n${newLine}`;
    }
    case 'parent': {
      const nestedLines = children.map((child) => formatOutput(child, depth + 1));
      return `${getSpaces(depth)}  ${key}: {\n${nestedLines.join('\n')}\n  ${getSpaces(depth)}}`;
    }
    default: {
      throw new Error(`Sorry, the type '${type}' is unknown.`);
    }
  }
};

const formatAsStylish = (diff) => `{\n${diff.map((obj) => formatOutput(obj, 1)).join('\n')}\n}`;

export default formatAsStylish;
