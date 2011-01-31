window.console = {
	addError: function(args, level) {
		args = Array.prototype.slice.call(args);
		$('#zee-console').append('<div class="zee-console-'+level+'">'+args.join(', ')+'</div>');
	},
	log: function() {
		this.addError(arguments, 'log');
	},
	error: function() {
		this.addError(arguments, 'log');
	},
	warn: function() {
		this.addError(arguments, 'log');
	}
};