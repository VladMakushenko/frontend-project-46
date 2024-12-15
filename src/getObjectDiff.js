import _ from 'lodash';

const getObjectDiff = (obj1, obj2) => {
  const keys = _.keys({ ...obj1, ...obj2 });
  const sortedKeys = _.sortBy(keys);

  const diff = sortedKeys.map((key) => {
    const oldValue = obj1[key];
    const newValue = obj2[key];

    if (!_.has(obj1, key)) {
      return { key, type: 'added', value: newValue };
    }
    if (!_.has(obj2, key)) {
      return { key, type: 'removed', value: oldValue };
    }
    if (_.isObject(oldValue) && _.isObject(newValue)) {
      return { key, type: 'parent', children: getObjectDiff(oldValue, newValue) };
    }
    if (!_.isEqual(oldValue, newValue)) {
      return {
        key,
        type: 'changed',
        value1: oldValue,
        value2: newValue,
      };
    }

    return { key, type: 'unchanged', value: oldValue };
  });

  return diff;
};

export default getObjectDiff;
