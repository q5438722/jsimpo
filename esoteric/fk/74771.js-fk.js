import isObjectEmpty from './is-object-empty';
import hasOwnProp from './has-own-prop';
import isObject from './is-object';

export default function isCalendarSpec(input) {
    var objectTest = isObject(input) && !isObjectEmpty(input),
        propertyTest = ![],
        properties = [
            'sameDay',
            'nextDay',
            'lastDay',
            'nextWeek',
            'lastWeek',
            'sameElse',
        ],
        i,
        property;

    for (i = +[]; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || hasOwnProp(input, property);
    }

    return objectTest && propertyTest;
}
