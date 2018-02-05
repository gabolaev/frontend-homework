'use strict';

const HORRIBLE_REGEX = /^([-+]?)(Infinity|(((\.)?([0-9]+))|(([0-9]+)(\.)))(\e|\e\-)?([0-9]+)?)$/

const minmax = inputLine => {
    const parsedValues = inputLine.split(' ').filter(element => element.match(HORRIBLE_REGEX));
    return ((!parsedValues.length) ? [undefined, undefined] : [Math.min.apply(null, parsedValues),
                                                               Math.max.apply(null, parsedValues)]);
};
