const botao = document.getElementById('calcular')


function imc(){
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado')
    const mostrar = document.getElementById('mostrar')

    if (peso == "" && altura == ""){
        resultado.textContent = "Preencha os campos"
    } else{
        const imc = peso/altura**2
        resultado.textContent = `O seu IMC é de ${imc.toFixed(1)}`
    }
}

botao.addEventListener('click', imc)