//Crea un array
var names = ["Maria", "Antony", "Joy", "Juan"];
var otro = "Joy";
function orden(names,otro){
	//Añade tu nombre al final 
	names.push("Ernesto");
	console.log(names);
	//Escribir una función que toma un nombre y verifica si la lista tiene ese nombre. Debe devolver un valor de tipo boolean - true/false. 
	if(names[2] == otro){
		console.log(true);
	}else{
		console.log(false);
	};
};

orden(names,otro);