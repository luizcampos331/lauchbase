const nome = "Luiz";
const sexo = "M";
const idade = 55;
const contribuicao = 40;

if(sexo === "M") {
  if(contribuicao >= 35 && (contribuicao + idade) === 95) {
    console.log(`${nome}, você pode se aposentar!`)
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
  }
} else if(sexo === "F"){
  if(contribuicao >= 30 && (contribuicao + idade) === 85) {
    console.log(`${nome}, você pode se aposentar!`)
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
  }
}