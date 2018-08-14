const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

	console.log('===================='.green);
	console.log(`==tabla de ${base}==`.green);
	console.log('===================='.green);

	return new Promise((resolve, reject) => {
		let data = '';

		for(let i=1; i<=limite; i++) {
			data += `${base} * ${i} = ${base * i}\n`
		}
		resolve(data);
	});

};


let crearArchivo = ( base, limite = 10) => {
	return new Promise((resolve, reject ) => {

		if ( !Number(base)) {
			reject('No es un número');
		}
		let data = '';

		for(let i=1; i<=limite; i++) {
			data += `${base} * ${i} = ${base * i}\n`;
		}

		fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
			if (err)
				reject(err);
			else
				resolve(`tabla-${base}.txt ha sido creada!`.rainbow);
		});
	});
} 

module.exports = {
	crearArchivo,
	listarTabla
}


