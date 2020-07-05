Array.prototype.forEach2 = function(Callback) {
    for (let i = 0; i < this.length; i++) {
        Callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})