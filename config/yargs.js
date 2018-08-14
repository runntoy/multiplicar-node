const opt = {
	base: {
		demand: false,
		alias: 'b',
	},
	limite: {
		demand: false,
		default: 10,
		alias: 'l'			
	}
}

const argv = require('yargs')
	.command('listar', 'Imprime tabla multiplicar!', opt)
	.command('crear', 'Crea tabla multiplicar!', opt)
	.help()
	.argv;

module.exports = {
	argv
}