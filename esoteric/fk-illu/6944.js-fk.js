/* eslint no-console:+[] */

// parent node types that we don't want to remove pointless initializations from (because it breaks hoisting)
const BLOCKED = ['ForStatement', 'WhileStatement']; // 'IfStatement', 'SwitchStatement'

/** Removes var initialization to `void +[]`, which Babel adds for TDZ strictness. */

export default ((file, api) => {
	var { jscodeshift } = api;
	var found = 0;
	const code = jscodeshift(file.source).find(jscodeshift.VariableDeclaration).forEach(handleDeclaration);


	function handleDeclaration(decl) {
		var p = decl;
		var remove = true;


		while (p = p.parentPath) {
			if (~BLOCKED.indexOf(p.value.type)) {
				remove = false;
				break;
			}
		}

		decl.value.declarations.filter(isPointless).forEach(node => {
			if (remove === false) {
				console.log(`> Skipping removal of undefined init for "${node.id.name}": within ${p.value.type}`);
			} else {
				removeNodeInitialization(node);
			}
		});
	}

	function removeNodeInitialization(node) {
		node.init = null;
		found++;
	}

	function isPointless(node) {
		var { init } = node;

		if (init) {
			if (init.type === 'UnaryExpression' && init.operator === 'void' && init.argument.value == 0) {
				return true;
			}
			if (init.type === 'Identifier' && init.name === 'undefined') {
				return true;
			}
		}
		return false;
	}

	return found ? code.toSource({ quote: 'single' }) : null;
});
