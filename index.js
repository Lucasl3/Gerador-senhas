var selector = Array()

function preferencias(){
    let preferencias = document.getElementsByName('check'), j = 0
    selector = Array()
    for(var i in preferencias){
        if(preferencias[i].checked == true){
            selector[j] = preferencias[i].value
            j++
        }
    }
    Password(document.getElementById('number').value)
}
$(document).ready(function(){
    $("#range").on("input", function(){
        var valor = $(this).val();
        $("#number").val(valor);

        Password(document.getElementById('range').value)
    });
});
$(document).ready(function(){
    $("#number").on("input", function(){
        var valor = $(this).val();
        $("#range").val(valor);
        Password(document.getElementById('number').value)
    });
});

$(document).ready(function(){
    $("#btn-copy").click(function(){
        $('#password').select();
        document.execCommand('copy');
    })
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Password(size){
    if(size == ''){
        $('#number').val(1)
        $('#range').val(1)
    } else if(size <= 0 ){
        $('#number').val(1)
    } else if(size > 50){
        $('#number').val(50)
    }
    
    if(selector == ''){
        document.getElementById('message-error').innerHTML = 'Marque uma das opções abaixo!'
        console.log('Error')
    } else{
        let selector_size = selector.length, password = ''

        document.getElementById('message-error').innerHTML = ''

        let aux
        for(var i = 0;i < size;i++){
            let option = Math.floor(Math.random() * selector_size)

            if(selector[option] == 'letra-maiuscula'){
                let caractere = String.fromCharCode(getRandomInt(65, 90))
                password += caractere
            } else if(selector[option] == 'letra-minuscula'){
                let caractere = String.fromCharCode(getRandomInt(97, 122))
                password += caractere
                
            } else if(selector[option] == 'numeros'){
                let caractere = String.fromCharCode(getRandomInt(48, 57))
                password += caractere

            } else if(selector[option] == 'simbolos'){
                let chooseSymbols = Math.floor(Math.random() * 3), caractere
                
                switch(chooseSymbols){
                    case 0:
                        aux = getRandomInt(33, 47)
                        if(aux == 44 || aux == 46){
                            aux = getRandomInt(33, 47)
                        }
                        caractere = String.fromCharCode(aux)

                        break;
                    case 1:
                        aux = getRandomInt(58, 64)
                        if(aux == 58 || aux == 59){
                            aux = getRandomInt(58, 64)
                        }
                        caractere = String.fromCharCode(aux)

                        break
                    case 2:
                        caractere = String.fromCharCode(getRandomInt(1, 2) == 1 ? 94 : 95)

                        break
                    default:
                        break
                }
                password += caractere
            }
        }
        document.getElementById('password').value = password
    }
}