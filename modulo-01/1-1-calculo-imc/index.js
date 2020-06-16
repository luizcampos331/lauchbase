const nome = "Luiz"
const peso = 77
const altura = 1.81

const imc = peso / (altura * altura)

if(imc >= 30 ) {
  console.log(`${nome} está acima do peso`);
} else if (imc >= 18.5) {
  console.log(`${nome} está com peso ideal`)
} else {
  console.log(`${nome} está abaixo do peso`)
}