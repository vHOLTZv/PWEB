function parte1(){
  for(let i =1; i<=10; i++){
    console.log("Primeira Parte:" + i);}}
setTimeout(parte1,2000);
fs.readFile('file.txt',(err,data) => {
  if (err) throw err;
  const registros = data.toString().split('\n');
  registros.forEach((resgistro,index) => {
    console.log("  segunda parte:" + index + " " + registro);});
});
