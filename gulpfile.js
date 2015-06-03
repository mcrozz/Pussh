grunt.loadNpmTasks('grunt-node-webkit-builder');

var Package = require('package.json');

grunt.initConfig({
	nodewebkit: {
		options: {
			platforms: ['win', 'osx', 'linux'],
			buildDir: './output'
		}
	},
	src: [ './Resources/**/*' ],
	platformOverrides: Package
});