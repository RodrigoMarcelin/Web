function produto(nome, valor) {
    return {
        nome,
        valor,
        desconto: 0.1
    }
}

console.log(produto('sabao', 12))