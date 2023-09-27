function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('datanasc')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('VERIFIQUE OS DADOS E TENTE NOVAMENTE')
    }else {
        var fsex = document.getElementsByName('radiom')
        var idade = ano - Number(fano.value)
        var img = window.document.createElement('img')
        img.setAttribute('id', 'imagem')
        genero = ''
        if(fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', './guri.jpg')
                res.innerHTML = `Você é uma criança de ${idade} anos<br>` 
            }else if (idade < 21) {
                //adoslescente
                img.setAttribute('src', './jovem.jpg')
                res.innerHTML = `você é um jovem de ${idade} anos <br>`
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', './homemA.jpg')
                res.innerHTML = `você é um adulto de ${idade} anos <br>`
            }else {
                //idoso
                img.setAttribute('src', './idoso.jpg')
                res.innerHTML = `você é senhor de ${idade} anos <br>`
            }
        }else if (fsex[1].checked){
           genero = 'mulher'
           if (idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src', './guria.jpg')
            res.innerHTML = `você é uma criança de ${idade} anos <br>`
           }else if (idade < 21) {
            //jovem
            img.setAttribute('src', './jovemf.jpg')
            res.innerHTML = `você é uma moça de ${idade} anos <br>`
           }else if (idade < 50) {
            //adulta
            img.setAttribute('src', './mulherA.jpg')
            res.innerHTML = `você é uma adulta de ${idade} anos <br>`
           }else {
            //idosa
            img.setAttribute('src','./idosa.jpg')
            res.innerHTML = `você é uma sonhora de ${idade} anos <br>`
           }
        }
        //res.innerHTML = `você é ${genero} e possuí ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}