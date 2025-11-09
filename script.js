function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'um Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'homem-bebe.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'homem-adolescente.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'homem-jovem.png')
            }else if(idade < 103){
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
            }else {
                //morreu
                img.setAttribute('src', 'ja-morreu.png')
                genero = " um defunto"
            }
        } else if(fsex[1].checked){
            genero = 'uma Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'mulher-bebe.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'mulher-adolescente.png')
            }else if(idade < 40){
                //adulto
                img.setAttribute('src', 'mulher-jovem.png')
            }else if(idade < 60){
                //idoso
                img.setAttribute('src', 'mulher-adulta.png')
            }
            else if(idade < 103){
                //idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }else {
                //morreu
                img.setAttribute('src', 'ja-morreu.png')
                genero = 'uma defunta'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}