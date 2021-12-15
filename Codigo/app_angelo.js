var data = new Date();
var dia = data.getDate();
var mes = data.getMonth();
function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
function leDados() {
    let strDados = localStorage.getItem('favoritos');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            artigos: [
                {dia: dia, mes: mes = mes + 1, ano: "2021", titulo: "Ansiedade", autor: "Luis", imagem: "https://zenklub.com.br/blog/wp-content/uploads/2020/11/ansiedade-sintomas.jpg", resumo: "Este artigo falará sobre ansiedade devido as redes sociais", conteudo: "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently." },
                {dia: dia, mes: mes = mes, ano: "2021", titulo: "Depressao", autor: "Luis", imagem: "https://zenklub.com.br/blog/wp-content/uploads/2020/11/ansiedade-sintomas.jpg", resumo: "Este artigo falará sobre depressao devido as redes sociais", conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                {dia: dia, mes: mes = mes, ano: "2021", titulo: "Sindrome ", autor: "Luis", imagem: "https://zenklub.com.br/blog/wp-content/uploads/2020/11/ansiedade-sintomas.jpg", resumo: "Este artigo falará sobre sindrome burnout devido as redes sociais", conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
            ],
            favoritos: [
               //quando clicado em favoritos clonar o artigo favoritado que foi selecionado
                {},
            ]

        }
    }

    return objDados;
}

function salvafavoritos (troxa) {
localStorage.setItem("favoritos",objDados.artigos[troxa])

}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });
    return vars;
}

function imprimeDados() {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados();
    console.log(objDados)
    for (i = 0; i < objDados.length; i++) {
        strHtml +=
         `
        <div class="col-12 col-sm-12 col-md-12 col-lg-4 box-fav">
        <a href="Artigo.html?id=${i}">
           <img src="${objDados[i].imagem}">
                <div class="artigo">
                    <h1>${objDados[i].titulo}</h1>
                    <p>${objDados[i].resumo}</p></a>
            
                </div>
        </div>
        `       


    }
    tela.innerHTML = strHtml;
}


// Configura ao carregar tela
onload = imprimeDados()