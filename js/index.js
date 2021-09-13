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
        const nasa = document.getElementById('nasa')
        if(nasa !== null){
        nasa.remove();
        }
        const bemVindo = document.getElementById('bem-vindo')
        if(bemVindo !== null){
        bemVindo.remove()
        }

        const body = document.getElementById('body')
        body.innerHTML='';
        body.innerHTML +=`
        <section>
            <img class='imgNasa' id='imgData' src="" alt="">
        </section>
        <section class='info' style="display: flex; flex-direction: column; flex-wrap: wrap;">
            <div class="body-texto titulo-body">
                <p > Titulo: <span >${data.title}</span></p>
            </div>
            <div class="body-texto">
                <p> Explanation: <span>${data.explanation}</span></p>
            </div>
            <div  style="display: flex; justify-content: space-between; align-items: center;">
                <div class="body-texto">
                    <p>Data: <span>${data.date}</span></p>
                </div>
                <div class="body-texto">
                    <p>Media Type: <span> ${data.media_type}</span></p>
                </div>
                <div class="body-texto">
                    <p>Service Version<span> ${data.service_version} </span></p>
                </div>
            </div>
            <div class="body-texto">
                <p>URL: <span>${data.url}</span></p>
            </div>
        </section>`
        const imgData = document.getElementById('imgData')
        if(imgData !== null){
        imgData.src = `${data.hdurl}`
        imgData.alt = `imagem nasa${data.date}`
        }
        
    }

}

