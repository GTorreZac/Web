console.log("Hello World");

const fs = require("fs");
fs.readFile("input.txt","utf-8",(err,fd)=>{
	if(err){
		console.log("There was an error: " + err);
	}else{
		console.log("The file says: \n" + fd);
	}
});