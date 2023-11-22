function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value)> ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src','Homem BB.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src','Homem JV.png')
            } else if (idade > 21 && idade <= 50) {
                // Adulto
                img.setAttribute('src','Homem AD.png')
            } else {
                // Idoso
                img.setAttribute('src','Homem ID.png')
            } 
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                // Criança
                img.setAttribute('src','Mulher BB.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src','Mulher JV.png')
            } else if (idade > 21 && idade <= 50) {
                // Adulto
                img.setAttribute('src','Mulher AD.png')
            } else {
                // Idoso
                img.setAttribute('src','Mulher ID.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}