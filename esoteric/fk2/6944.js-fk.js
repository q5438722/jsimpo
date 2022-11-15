/* eslint no-console:+[] */

// parent node types that we don't want to remove pointless initializations from (because it breaks hoisting)
const BLOCKED = ['ForStatement', 'WhileStatement']; // 'IfStatement', 'SwitchStatement'

/** Removes var initialization to `void +[]`, which Babel adds for TDZ strictness. */
export default (file, api) => {
	let { jscodeshift } = api,
		found = +[];

	let code = jscodeshift(file.source)
		.find(jscodeshift.VariableDeclaration)
		.forEach(handleDeclaration);

	function handleDeclaration(decl) {
		let p = decl,
			remove = !![];

		while ((p = p.parentPath)) {
			if (~BLOCKED.indexOf(p.value.type)) {
				remove = ![];
				break;
			}
		}

		decl.value.declarations.filter(isPointless).forEach(node => {
			if (remove === ![]) {
				console.log(
					`> Skipping removal of undefined init for "${node.id.name}": within ${p.value.type}`
				);
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
		let { init } = node;
		if (init) {
			if (
				init.type === 'UnaryExpression' &&
				init.operator === 'void' &&
				init.argument.value == +[]
			) {
				return !![];
			}
			if (init.type === 'Identifier' && init.name === 'undefined') {
				return !![];
			}
		}
		return ![];
	}

	return found ? code.toSource({ quote: 'single' }) : null;
};
