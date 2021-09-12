const buscarData = document.getElementById('btnData').addEventListener("click", (ev) => {
    ev.preventDefault();
    const input = document.getElementById('inputData').value
    buscaAPod.criaData(input)
    buscaAPod.criaUrl();
})

const buscaAPod = {
    url: 'https://api.nasa.gov/planetary/apod?api_key',
    api_key: 'ePZCAgQtjcla5RY1zfF4j3gPSIRJkPATwBL7cyeL',
    dataEscolhida: '2021-09-11',


    criaData: function (data) {
        this.dataEscolhida = data;
    },

    criaUrl: function () {
        retornaFotoApi.fotoDia(this.url, this.api_key, this.dataEscolhida)
        console.log(this.url, this.api_key, this.dataEscolhida)
    },
}

const retornaFotoApi = {
    async fotoDia(url, api_key, dataEscolhida) {
        try {
            await $.ajax({

                url: `${url}=${api_key}&date=${dataEscolhida}`,
                success(resposta) {
                    retornaFotoApi.retornaFoto(resposta)
                    console.log(resposta)
                }
            })
        } catch (error) {
            
        }
    },

    retornaFoto(data) {
        const imgData = document.getElementById('imgData')
        imgData.src = `${data.hdurl}`
        imgData.alt = `imagem nasa${data.date}`

    }

}

