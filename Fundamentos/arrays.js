const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])// não dara erro, só ficara undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)

// Array em javascript não precisa ter um tipo especificado
valores.push({id: 3}, false, null, 'teste')// inclui o valor ao array
console.log(valores)

console.log(valores.pop())// remove o ultimo da lista
delete valores[0]// deleta a posicao escolhida

console.log(typeof valores)// Array em javascript é um objeto