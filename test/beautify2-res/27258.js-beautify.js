import renameProps from'../util/renameProps';export default function transformer(file,api,options){const j=api.jscodeshift;const root=j(file.source);const printOptions=options.printOptions;renameProps({root,componentName:'TextareaAutosize',props:{rows:'minRows',rowsMin:'minRows',rowsMax:'maxRows'},});renameProps({root,componentName:'TextField',props:{rowsMin:'minRows',rowsMax:'maxRows'},});return root.toSource(printOptions)}import renameProps from'../util/renameProps';export default function transformer(file,api,options){const j=api.jscodeshift;const root=j(file.source);const printOptions=options.printOptions;renameProps({root,componentName:'TextareaAutosize',props:{rows:'minRows',rowsMin:'minRows',rowsMax:'maxRows'},});renameProps({root,componentName:'TextField',props:{rowsMin:'minRows',rowsMax:'maxRows'},});return root.toSource(printOptions)}import renameProps from'../util/renameProps';export default function transformer(file,api,options){const j=api.jscodeshift;const root=j(file.source);const printOptions=options.printOptions;renameProps({root,componentName:'TextareaAutosize',props:{rows:'minRows',rowsMin:'minRows',rowsMax:'maxRows'},});renameProps({root,componentName:'TextField',props:{rowsMin:'minRows',rowsMax:'maxRows'},});return root.toSource(printOptions)}