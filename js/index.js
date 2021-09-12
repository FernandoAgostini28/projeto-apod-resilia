const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const api_key = 'ePZCAgQtjcla5RY1zfF4j3gPSIRJkPATwBL7cyeL';
const data = '2021-09-11'

function retornaFoto() {
    
}

function fotoDia() {
    try {
        $.ajax({

            url: url + api_key,
            success(resposta) {
                console.log(resposta)
            }
        })
    } catch {

    }
}
