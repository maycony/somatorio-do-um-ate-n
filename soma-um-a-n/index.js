function somaDoN(n) {
    let soma = 0
    for (let i = 1; i <= n; i++) {
        soma += i
    }
    return soma
}

const n = 5
const res = somaDoN(n)

console.log(`A soma e 1 até ${n} é ${res}`)