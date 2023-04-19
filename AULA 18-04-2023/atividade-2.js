const clientes = [
    {
        nome: "Leo",
        saldo: 6000
    },
    {
        nome: "Juan",
        saldo: 0
    },
    {
        nome: "Keiko",
        saldo: -200
    }

]
//   let   i=0;    i<3    i++;   
for (let atributos of clientes) {
    if (atributos.saldo > 0) {
        console.log(`O cliente ${atributos.nome} possui saldo positivo de R$${atributos.saldo}`)
    } else if (atributos.saldo < 0) {
        console.log(`O cliente ${atributos.nome} possui saldo negativo de R$${atributos.saldo}`)
    }else{
        console.log(`O cliente ${atributos.nome} não possui saldo R$${atributos.saldo}`)
    
}
}