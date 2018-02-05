'use strict';

function getMin(data) {
  return data.reduce((min, current) => current < min ? current : min, data[0]);
}

function getMax(data) {
  return data.reduce((max, current) => current > max ? current : max, data[0]);
}

const HORRIBLE_REGEX = /^([-+]?)(Infinity|(((\.)?([0-9]+))|(([0-9]+)(\.)))(\e|\e\-)?([0-9]+)?)$/
const minmax = inputLine => {
    let parsedValues = inputLine.split(' ').filter(element => element.match(HORRIBLE_REGEX));
    let floatedValues = parsedValues.map(value => parseFloat(value));
    return ((!parsedValues.length) ? [undefined, undefined] : [getMin(floatedValues), getMax(floatedValues)]);
};
