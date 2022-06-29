function processa(){
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')

    if (num1.value.length > 10 ||num2.value.length > 10  || num1.value.length == 0 || num2.value.length == 0) {
        window.alert('Valor inválido')
    }else{
        var opera = document.getElementsByName('opera')
        resultado = ''
        if(opera[0].checked){
            resultado = parseInt(num1.value) + parseInt(num2.value)
        }else if(opera[1].checked){
            resultado = parseInt(num1.value) - parseInt(num2.value)
        }else if(opera[2].checked){
            resultado = parseInt(num1.value) / parseInt(num2.value)
        }else if(opera[3].checked){
            resultado = parseInt(num1.value) * parseInt(num2.value)
        }   
    res.innerHTML = `O resultado é ${resultado}`
}

}