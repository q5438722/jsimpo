import isObjectEmpty from './is-object-empty';
import hasOwnProp from './has-own-prop';
import isObject from './is-object';

export default function isCalendarSpec(input) {
    const objectTest = isObject(input) && !isObjectEmpty(input);
    var propertyTest = false;
    const properties = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'];
    var i;
    var property;


    // Unknown loop control variable
    for (i = 0; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || hasOwnProp(input, property);
    }

    return objectTest && propertyTest;
}
