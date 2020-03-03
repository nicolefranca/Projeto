alert("Bem-vinda ao Show do Milhão")
let name = prompt("Coloque seu nome:")

let play = window.confirm("Você quer jogar?")

if(play === true ){
    var question1 = (prompt
    ("Digite o resultado da expressão a seguir: 23 + 2:" +
    "\n a.10 \n b.25 \n c.20"))

    var question2 =  (prompt
    ("Qual a cor da banana? \n" +
    "a.amarela \n b.branca \n c.cinza"))

    var question3 =  (prompt
    ("Complete a frase: La \n a.gosta \n" +
    "b.boratoria \n c.ranja"))

}else{
    alert("Cancelamento de jogo! Obrigada")
}
document.getElementById("oi").innerHTML = "Oi, " + name +"!"
if(question1 === "b"){
    document.getElementById("r1").innerHTML = "Resposta 1"
}else{
    document.getElementById("w1").innerHTML = "Resposta 1"
}if(question2 === "a"){
    document.getElementById("r2").innerHTML = "Resposta 2"
}else{
    document.getElementById("w2").innerHTML = "Resposta 2"
}if(question3 === "b"){
    document.getElementById("r3").innerHTML = "Resposta 3"
}else{
    document.getElementById("w3").innerHTML = "Resposta 3 "
}
