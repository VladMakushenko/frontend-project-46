import _ from 'lodash';

const setQuotes = (value) => (_.isString(value) ? `'${value}'` : value);
const stringify = (value) => (_.isObject(value) || _.isArray(value) ? '[complex value]' : setQuotes(value));

const formatOutput = (obj, parentName) => {
  const { key, type, children, value, value1, value2 } = obj;

  const parentKey = parentName ? `${parentName}.${key}` : key;

  switch (type) {
    case 'added':
      return `Property ${setQuotes(parentKey)} was added with value: ${stringify(value)}`;
    case 'removed':
      return `Property ${setQuotes(parentKey)} was removed`;
    case 'unchanged':
      return '';
    case 'changed':
      return `Property ${setQuotes(parentKey)} was updated. From ${stringify(value1)} to ${stringify(value2)}`;
    case 'parent':
      return children.map((child) => formatOutput(child, parentKey)).filter((child) => !!child).join('\n');
    default:
      throw new Error(`Sorry, the type '${type}' is unknown.`);
  }
};

const formatAsPlain = (diff) => `${diff.map((obj) => formatOutput(obj)).join('\n')}`;

export default formatAsPlain;
