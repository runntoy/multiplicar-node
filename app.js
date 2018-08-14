const argv  = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch( comando ) {
	case 'listar':
		console.log('Listar');

		listarTabla(argv.base, argv.limite)
		.then(lista => console.log(lista))
		.catch(err => console.log(err));
	break;

	case 'crear':
		console.log('crear');

		crearArchivo(argv.base, argv.limite)
		.then(archivo => console.log(`Archvio creado: ${ archivo }`))
		.catch( err => console.log(err));

	break;

	default:
	 	console.log('Comando no reconocido');
}


//let argv2= process.argv;

console.log(argv);
//console.log(argv2);

//console.log(base);

