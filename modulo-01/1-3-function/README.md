# Funções
Sistema em JavaScript básico com resultado em linha de comando.

## Intuito
Sistema tem o intuito de reforçar os aprendizados em programação com JavaScript.

## Objetivo
Programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

Percorre o array de usuários e para cada usuário chama-se uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:
```
function calculaSaldo(receitas, despesas) {}
```

Uma segunda função recebe como parâmetro um array de números e retorna a soma deles e usa-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:
```
function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
}
```

A função calculaSaldo utiliza a função somaNumeros para calcular a soma de receitas e despesas e no fim retorna o saldo do usuário, ou seja receitas - despesas:
```
Fulano possui saldo POSITIVO de 43.3
Sicrano possui saldo NEGATIVO de -90.3
```