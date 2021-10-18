/*var myApp = {}

(function(){
	myApp.add = function (a, b){
		return a + b;
	}
})();
IIFE*/

/*CommonJS * Browser
Module.exports = function add(a, b){
	return a*b;
}
var add = require("./add");





Module Bundler, se ejecuta antes de poner el sitio web en linea, es decir que lee todos los archivos javascript, rescata toda la sintaxis y agrupa en un archivo. Una vez que se ejecuta todos los archivos a traves del browserify. Crea un archivo masivo donde estaran los script "bundle.js"*/


ES6+Webpack2
//js1
export const add = (a, b) => a + b;
//or
export default function add(){
	return a + b;
}

//js2
import { add } from './add';
//or
import add from './add';