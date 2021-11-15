var data = new Date();
var dia = data.getDate();
var mes = data.getMonth();
function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            artigos: [
                { id: uuidv4(), dia: dia, mes: mes = mes + 1, ano: "2021", titulo: "Ansiedade", autor: "Luis", imagem: "https://zenklub.com.br/blog/wp-content/uploads/2020/11/ansiedade-sintomas.jpg", resumo: "Este artigo falará sobre ansiedade devido as redes sociais", conteudo: "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently."},
                { id: uuidv4(), dia: dia, mes: mes = mes + 1, ano: "2021", titulo: "Depressao", autor: "Luis", imagem: "https://zenklub.com.br/blog/wp-content/uploads/2020/11/ansiedade-sintomas.jpg", resumo: "Este artigo falará sobre depressao devido as redes sociais", conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
                { id: uuidv4(), dia: dia, mes: mes = mes + 1, ano: "2021", titulo: "Sindrome ", autor: "Luis", imagem: "https://zenklub.com.br/blog/wp-content/uploads/2020/11/ansiedade-sintomas.jpg", resumo: "Este artigo falará sobre sindrome burnout devido as redes sociais", conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
            ]
        }
    }

    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

function incluirArtigo() {
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strTitulo = document.getElementById('inputTitle').value;
    let strAutor = document.getElementById('inputAutor').value;
    let strConteudo = document.getElementById('inputConteudo').value;
    let strResumo = document.getElementById('inputResumo').value;
    let strImage = document.getElementById('inputImage').value;


    //Testes

    // verificar se o Titulo está vazio
    if (inputTitle.value == "") {
        alert("Título não informado");

        // Deixa o input com o focus
        inputTitle.focus();
        // retorna a função e não olha as outras linhas
        return;
    }
    // verificar se o Autor está vazio
    if (inputAutor.value == "") {
        alert("Autor não informado");

        // Deixa o input com o focus
        inputAutor.focus();
        // retorna a função e não olha as outras linhas
        return;
    }
    // verificar se o Conteúdo está vazio
    if (inputConteudo.value == "") {
        alert("Conteúdo não informado");

        // Deixa o input com o focus
        inputConteudo.focus();
        // retorna a função e não olha as outras linhas
        return;
    }
    // verificar se o Conteúdo está vazio
    if (inputResumo.value == "") {
        alert("Resumo não informado");

        // Deixa o input com o focus
        inputResumo.focus();
        // retorna a função e não olha as outras linhas
        return;
    }
    // verificar se o Imagem está vazio
    if (inputImage.value == "") {
        alert("Imagem não informado");

        // Deixa o input com o focus
        inputImage.focus();
        // retorna a função e não olha as outras linhas
        return;
    }

    let novoArtigo = {
        id: uuidv4(),
        dia: dia,
        mes: mes,
        ano: "2021",
        titulo: strTitulo,
        autor: strAutor,
        imagem: strImage,
        resumo: strResumo,
        conteudo: strConteudo
    };
    objDados.artigos.push(novoArtigo);

    // Salvar os dados no localStorage novamente
    salvaDados(objDados);
    document.getElementById('inputTitle').value=null;
    document.getElementById('inputAutor').value=null;
    document.getElementById('inputImage').value=null;
    document.getElementById('inputResumo').value=null;
    document.getElementById('inputConteudo').value=null;
}

// Configura os botões
document.getElementById('btnPublicar').addEventListener('click', incluirArtigo);