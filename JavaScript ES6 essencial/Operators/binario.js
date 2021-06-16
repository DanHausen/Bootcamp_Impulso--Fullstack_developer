//in
something in somethingItems

//Arrays
var arvores = new Array('pau-brasil', 'cedro', 'carvalho', 'cerejeira');
0 in arvores;           // retorna true
2 in arvores;           // retorna true
4 in arvores;           // retorna false
'cedro' in arvores;     // retorna false (devemos especificar o numero do indice e não o valor)
'length' in arvores;    // retorna true (pois é uma propriedade de array)

// Objetos predefinidos
"PI" in Math;               // retorna true
var minhaString = new String("coral");
"length" in minhaString;    // retorna true

//Objetos personalizados
var meuCarro = {marca: "Honda", modelo: "Com rodas", ano: 2018};
"marca" in meuCarro;         // retorna true
"modelo" in meuCarro;        // retorna true

//instanceof
objeto instanceof tipoObjeto;
var dia = new Date(2020,05,17);
if(dia instanceof Date){
    //code here
}