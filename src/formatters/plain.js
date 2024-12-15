import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value) || _.isArray(value)) return '[complex value]';
  if (_.isString(value)) return `'${value}'`;

  return value;
};

const formatOutput = (obj, parentName) => {
  const { key, type, children, value, value1, value2 } = obj;

  const parentKey = parentName ? `${parentName}.${key}` : key;

  switch (type) {
    case 'added':
      return `Property '${parentKey}' was added with value: ${stringify(value)}`;
    case 'removed':
      return `Property '${parentKey}' was removed`;
    case 'unchanged':
      return '';
    case 'changed':
      return `Property '${parentKey}' was updated. From ${stringify(value1)} to ${stringify(value2)}`;
    case 'parent':
      return children.map((child) => formatOutput(child, parentKey)).filter((child) => !!child).join('\n');
    default:
      throw new Error(`Sorry, the type '${type}' is unknown.`);
  }
};

const formatAsPlain = (diff) => `${diff.map((obj) => formatOutput(obj)).join('\n').trim()}`;

export default formatAsPlain;
