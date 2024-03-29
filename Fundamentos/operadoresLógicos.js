/*
v e v -> v
v e f -> f
f e f -> f

v ou v -> v
f ou v -> v
f ou f -> f

v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

!v -> f
!f -> v
*/

function compras(trabalho, trabalho2) {
    const comprarSorvete = trabalho || trabalho2
    const comprarTv50 = trabalho && trabalho2
    // const comprarTv32 = !!(trabalho ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false,false))