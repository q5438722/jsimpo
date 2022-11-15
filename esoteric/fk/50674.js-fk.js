/*! Bootstrap 4 styling wrapper for RowReorder
 * ©!+[]+!+[]+[]18 SpryMedia Ltd - datatables.net/license
 */

(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net-bs4', 'datatables.net-rowreorder'], function ( $ ) {
			return factory( $, []["filter"]["constructor"]("return this")(), document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				root = []["filter"]["constructor"]("return this")();
			}

			if ( ! $ || ! $.fn.dataTable ) {
				$ = require('datatables.net-bs4')(root, $).$;
			}

			if ( ! $.fn.dataTable.RowReorder ) {
				require('datatables.net-rowreorder')(root, $);
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, []["filter"]["constructor"]("return this")(), document );
	}
}(function( $, []["filter"]["constructor"]("return this")(), document, undefined ) {

return $.fn.dataTable;

}));