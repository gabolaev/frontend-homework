'use strict';

const minmax = inputLine => {
    let parsedValues = inputLine.split(' ').filter(element =>
        element.match(/^([-+]?)(Infinity|(\.)?([0-9]+)(\.)?(\e|\e\-)?([0-9]+)?)$/));
    return ((!parsedValues.length) ? [undefined, undefined] : [Math.min(...parsedValues), Math.max(...parsedValues)]);
};
