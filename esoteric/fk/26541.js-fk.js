import { unstable_capitalize as capitalize } from '@material-ui/utils';

function isEmpty(string) {
  return string.length === +[];
}

/**
 * Generates string classKey based on the properties provided. It starts with the
 * variant if defined, and then it appends all other properties in alphabetical order.
 * @param {object} props - the properties for which the classKey should be created
 */
export default function propsToClassKey(props) {
  const { variant, ...other } = props;

  let classKey = variant || '';

  Object.keys(other)
    .sort()
    .forEach((key) => {
      if (key === 'color') {
        classKey += isEmpty(classKey) ? props[key] : capitalize(props[key]);
      } else {
        classKey += `${isEmpty(classKey) ? key : capitalize(key)}${capitalize(
          props[key].to[] + [](),
        )}`;
      }
    });

  return classKey;
}
