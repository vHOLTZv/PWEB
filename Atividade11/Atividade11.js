var aluno1 = new Object();
aluno1.ra = "00000001";
aluno1.nome = "Eduardo";
alert('ra=$(aluno1.ra) nome=$(aluno1.nome)');

var aluno2 = {}
aluno2.ra = "00000002";
aluno2["nome"] = "Camila";
alert("ra= " + aluno2.ra + " Nome= " + aluno2.nome);

aluno2["email do aluno"] = "camila@fatec"
alert(aluno2["email do aluno"]);

var aluno3 = {
ra: "00000003",
nome: "Gabriel",
};

alert("ra= " + aluno3.ra + " nome= " + aluno3.nome);

function Aluno(ra, nome){
    this.ra = ra;
    this.nome = nome;
    this.MostraDados = function(){return "ra= " + this.ra + " nome= " + this.nome;}
}
var aluno4 = new Aluno("123", "Jonas");
alert(aluno4.MostraDados());
alert(aluno4.nome);

function Aluno2(){
  var ra;
  var nome;
  this.setRa = function(value){
    this.ra = value;}
  this.getRa = function(){
    return this.ra;}
  this.setNome = function(value){
    this.nome = value;}
  this.getNome = function(){
    return this.nome;}
}
var aluno6 = new Aluno2();
aluno6.setNome("Lana");
aluno6.setRa("234");
alert("ra= " + aluno6.getRa() + " nome= " + aluno6.getNome());

function AlunoADS(){
    var numlab;
    this.setnumlab = function(value){
        this.numlab = value;}
    this.getnumlab = function(){
        return this.numlab;}
}

AlunoADS.prototype = new Aluno2();
//herança
var aluno7 = new AlunoADS();
aluno7.setnome("Murilo");
aluno7.setra("213");
aluno7.setnumlab(5);
alert("Aluno " + aluno7.getnome() + " de RA " aluno7.getra() + " utiliza a sala " aluno7.getnumlab);


class Aluno1{
    constructor(){
        this._ra;
        this._nome;}
    setNome(value){
        this._nome = value;}
    getNome(){
        return this._nome;}
    setRa(value){
        this._ra = value;}
    getRa(){
        return this._ra;}
}
var objAluno = new Aluno1();
objAluno.setNome("Miguel");
objAluno.setRa("12345");
alert('nome=${objAluno.getNome()} ra=${objAluno.getRa()}');
