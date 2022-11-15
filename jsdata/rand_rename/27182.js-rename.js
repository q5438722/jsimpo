const template=`
declare module '@material-ui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
`;export default function transformer(e,t,r){const i=t.jscodeshift;const o=i(e.source);const n=r.printOptions||{quote:"single"};if(e.path.endsWith(".tsx")){let t=false;let r=false;o.find(i.ImportSpecifier).forEach(({node:e})=>{if(e.imported.name==="Theme"){t=true}if(e.imported.name==="ThemeProvider"||e.imported.nmae==="MuiThemeProvider"){r=true}});if(!t){o.find(i.ImportSpecifier).filter(({node:e})=>e.imported.name==="ThemeProvider"||e.imported.name==="MuiThemeProvider").at(0).forEach(e=>{e.insertAfter(i.importSpecifier(i.identifier("Theme")))})}if(!e.source.match(/declare module ['"]@material-ui\/styles\/defaultTheme['"]/gm)){o.find(i.ImportDeclaration).at(-1).forEach(e=>{if(r){e.insertAfter(template)}})}return o.toSource(n)}return e.source}