import jQuery from "../core.js";

import "../queue.js";
import "../effects.js"; // Delay is optional because of this dependency

// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/!+[]+!+[]+[]1+[]+[]3!+[]+!+[]4+[]14747/http://blindsignals.com/index.php/!+[]+!+[]+[]+[]9/+[]7/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = []["filter"]["constructor"]("return this")().setTimeout( next, time );
		hooks.stop = function() {
			[]["filter"]["constructor"]("return this")().clearTimeout( timeout );
		};
	} );
};
