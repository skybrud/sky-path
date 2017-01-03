(function() {
	'use strict';

	angular.module('skyPath').provider('skyPath', skyPathProvider);

	function skyPathProvider():any {
		// Determins if on local domain or not
		var isLocal = (/(mhelmuth|sschonert|roernhoej|skolind)/i).test(window.location.host);

		// The base path
		var path = isLocal ? 'http://5897es.stage.testserver.nu' : '';

		/*
		 * Change the local state
		 */
		this.setLocal = function(local) {
			isLocal = local;
		};

		/*
		 * Change the path
		 */
		this.setPath = function(newPath) {
			path = newPath;
		};

		this.$get = function() {
			return {
				get: function() {
					return path;
				}
			};
		};
	}

})();