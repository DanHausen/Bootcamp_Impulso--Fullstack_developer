//Testing

// var myName = "Daniel";
// var age = 25;
// var year = 1995;
//alert("Oi, " + myName + ". Você possui " + age + " anos e nasceu em " + year);
//alert(frase.replace("2021", "2022"));

// var frase = "Hoje é maio de 2021";
// console.log("Teste no console da web");
// console.log(frase.replace("maio", "junho"));

// var lista = ["Daniel", "Ana", "Mônica"]; //list
// console.log(lista);
// lista.push("Nero");
// console.log(lista);
// console.log(lista.length);
// lista.pop();
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" | "));

// var games = [{name: "Halo", ano: "2021", nomeCompleto: "Halo Infinite"}, {name: "Zelda", ano: "2022", nomeCompleto: "The Legend of Zelda Breath of the Wild 2"}, {name: "God of War", ano: "2023", nomeCompleto: "God of War Ragnarok"}]; //dictionary
// console.log(games);
// console.log(games[0].nomeCompleto);

// var idade = prompt("Me diga sua idade");
// if(idade >= 18)
// alert("Maior de idade");
// else
// alert("Menor de idade");

// var maximo = prompt("Digite o valor maximo");
// var contador = 0;
// while (contador <= maximo){
//     console.log(contador);
//     contador++;
// }

// fibonacci(prompt("Insira o limite"));
// function fibonacci(num){
//     var a = 1, b = 0, temp;  
//     while (num >= 0){
//       temp = a;
//       a = a + b;
//       b = temp;
//       console.log(b);
//       num--;
//     }  
//     return b;
//   }

// var d = new Date();
// console.log(d);
// console.log(d.getMonth() + 1);
// console.log(d.getMinutes());

// function setReplace(frase, nome, newNome){
//     return frase.replace(nome, newNome);
// }
// alert(setReplace("Daniel é lindo", " é lindo", " é feio"));

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado</b>";
    //alert("Clicou");
}

function redirecionar(){
    //window.open("https://danhausen.com.br"); //abrir em nova janela
    window.location.href = "https://danhausen.com.br"; //abrir na mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado";
    elemento.innerHTML = "Obrigado";
    //alert("Passou o mouse");
}

function restore(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregou");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}