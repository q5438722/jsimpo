import {
    createMuiTheme,
    createTheme,
    adaptV4Theme
} from '@material-ui/core/styles';
const theme1 = createMuiTheme(), theme2 = createTheme(), theme3 = createMuiTheme(adaptV4Theme({ 'palette': { 'primary': { 'main': '#ff5252' } } })), theme4 = createTheme(adaptV4Theme({ 'palette': { 'primary': { 'main': '#ff5252' } } }));
