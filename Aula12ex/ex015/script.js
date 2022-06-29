function verificar(){
    var data = new Date()
    //var ano = data.getFullYear
    ano = 2022
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if(fano.value.length == 0 || fano.length > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                //CRIANCA
                img.setAttribute('src','foto-bebe-m.png')
            }else if(idade <21){
                //JOVEM
                img.setAttribute('src','foto-jovem-m.png')
            }else if(idade < 50){
                //ADULTO
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                //IDOSO
                img.setAttribute('src','foto-idoso-m.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                //CRIANCA
                img.setAttribute('src','foto-bebe-f.png')
            }else if(idade <21){
                //JOVEM
                img.setAttribute('src','foto-jovem-f.png')
            }else if(idade < 50){
                //ADULTO
                img.setAttribute('src','foto-adulto-f.png')
            }else{
                //IDOSO
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        res.innerHTML= `Detectamos genero ${genero} e idade ${idade}`
        res.appendChild(img)
    }
}