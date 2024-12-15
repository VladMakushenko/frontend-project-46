import formatAsStylish from './stylish.js';
import formatAsPlain from './plain.js';

const formatDiff = (diff, format) => {
  switch (format) {
    case 'json':
      return JSON.stringify(diff);
    case 'plain':
      return formatAsPlain(diff);
    case 'stylish':
      return formatAsStylish(diff);
    default:
      throw new Error(`Sorry, '${format}' is the unknown format.`);
  }
};

export default formatDiff;
