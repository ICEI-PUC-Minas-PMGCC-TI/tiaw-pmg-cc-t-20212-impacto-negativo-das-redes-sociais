var data = new Date();
var dia = data.getDate();
var mes = data.getMonth();

function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            artigos: [
                { dia: 12, mes: 12, ano: "2021", titulo: "O perigo do uso excessivo das redes sociais", autor: "Luís Fillipe Magalhães", imagem: "https://zenklub.com.br/blog/wp-content/uploads/2020/11/ansiedade-sintomas.jpg", resumo: "Entenda mais sobre as características da dependência das redes sociais", conteudo: "Atualmente, muitos psicólogos e psiquiatras alertam que o uso das redes sociais pode ser viciante e sua dependência geram algumas doenças e síndromes, como Ansiedade, irritabilidade, falta de auto controle, dentre outros problemas. Diante disso, as redes sociais de fato são um problema real da sociedade contemporânea? <br>Um estudo realizado pela Chicago Booth School of Business indicava, cinco anos atrás, que o Facebook, Twitter e outras redes sociais têm uma capacidade de viciar superior à do tabaco ou do álcool porque, entre outras coisas, acessá-las é simples, rápido e gratuito. Os casos mais comuns de dependência, as pessoas tem como características muitas das vezes a baixa autoestima, insatisfação pessoal, depressão e ate mesmo a falta de afeto, no qual muita das vezes, as pessoas tentam suprir essa necessidade de afeto com os famosos likes, sendo que o perfil majoritário de dependentes é de jovens de 16 a 24 anos. <br><br>Mas o que caracteriza esta dependência? <br>Existem muitos indícios que podem caracterizar se essa dependência se encaixa ou não em seu quadro, embora a última palavra sempre corresponde a um profissional médico. Estes são os principais casos: <br>•	Nervosismo quando não se tem acesso à Internet, a rede social não funciona ou está mais lenta do que o habitual. <br>•	Consultar as redes sociais assim que se levanta e antes de se deitar. <br>•	Sentir-se inquieto se não tiver o smartphone ao alcance da mão. <br>•	Caminhar utilizando as redes sociais. <br>•	Sentir-se mal se não receber likes (curtidas), retweets ou visualizações. <br>•	Preferir a comunicação com amigos e familiares através de redes sociais em vez de frente a frente. <br>•	Achar que a vida dos outros é melhor do que a sua, em função do que vê nas redes. <br><br>Caso tenha se identificado com um ou mais itens desta lista de “Sintomas”, recomendamos a procura de um profissional da área (Psicólogo/Psiquiatra), para que possa ser diagnosticado da melhor forma possível, e iniciar os devidos tratamentos para reverter o quadro de dependência. <br>Fontes: https://www.iberdrola.com/compromisso-social/como-redes-sociais-afetam-jovens <br>https://www.conexasaude.com.br/blog/uso-excessivo-das-redes-sociais/", aceito: true },
                { dia: 12, mes: 12, ano: "2021", titulo: "Os impactos positivos das redes sociais", autor: "Luís Fillipe Magalhães", imagem: "https://inovasocial.com.br/wp-content/uploads/2020/06/promover-saude-mental-na-empresa-inovacao-social-inovasocial-destaque.jpg", resumo: "As redes sociais podem assumir papeis transformadores, conferiremos agora seus pontos positivos", conteudo: "Nem só de pontos negativos se dá o uso das redes sociais, em outro artigo podemos ver um pouco mais sobre o perigo das dependências das redes sociais, agora iremos aprender e refletir um pouco a respeito de suas influencias positivas em nossa sociedade contemporânea.<br><br>Redes sociais facilitam as amizades. <br>Um de seus maiores pontos positivos, utilizando as redes sociais, nunca foi tão fácil de fazer novas amizades, algumas décadas atras, era bastante difícil se conectar com as pessoas, principalmente se você fosse uma pessoa um pouco mais introvertida. Com a ascensão das redes sociais e dispositivos móveis é inegável sua influência nesse meio. <br>Redes Sociais permitem comunicação rápida: <br>Em meio ao período em que vivemos, as redes sociais a cada dia mais facilitam nossa comunicatividade, sendo assim, a todo momento podemos estar conectados e por dentro das ultimas noticias em todo o mundo. <br>Redes sociais ajudam a encontrar pessoas como você: <br>Em todas as redes sociais atualmente, já existem algoritmos para facilitar você a encontrar pessoas com interesse em comum. Mas para que isso ocorra da melhor maneira possível, é necessário que você abra mão um pouco de sua privacidade, para que o algoritmo funcione da melhor forma, procurando pessoas com os mesmos interesses e opiniões que você, criando assim um grupo social online. Para muitas pessoas, isso não é aceitável. Manter informações pessoais importantes privadas é necessário, porém, compartilhar seus gostos e desgostos, interesses e obsessões, podem realmente contribuir para uma sociedade mais aberta. <br>Redes sociais tem o poder de mobilização: <br>Seja para um protesto político, um evento importante ou conseguir doações de sangue para um amigo enfermo, lá está ela, espalhando seu apelo e agregando voluntários. <br>Todos os pontos ressaltados aqui, são extremamente interessantes, mas e nos ajudam no dia a dia, afinal de contas, as ferramentas existem para serem utilizadas, mas é preciso dosar, educar e aprender a gerenciar a vida online e a vida offline para que possamos extrair os benefícios de vivermos conectados em rede. <br><br>Fonte: https://www.oficinadanet.com.br/tecnologia/25827-o-impacto-positivo-das-de-redes-sociais-na-sociedade", aceito: true },
                { dia: 12, mes: 12, ano: "2021", titulo: "O vício nas redes", autor: "Luís Fillipe Magalhães e Thalyta Andrade", imagem: "https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/assistnciapsicolgicaonline.jpg", resumo: "Uma entrevista realizada com Thalyta Andrade, graduanda em psicologia", conteudo: "Conversamos com a graduanda em psicologia Thalyta Andrade, pela qual separou um pouco de seu tempo para nos ajudar a entender um pouco mais sobre o vício nas redes sociais. Abaixo segue o que ela nos enviou: <br><br>Para muitos de nós, o hábito de conferir as redes sociais logo ao acordar ou várias vezes ao dia se tornou tão natural.Quando esse hábito passa a prejudicar nosso dia a dia, impactando o que chamamos na psicologia de funcionalidade(sua capacidade de lidar com as demandas do cotidiano), podemos caracterizá - lo como patológico e, desde que cumpra mais alguns critérios, como sucessivos fracassos em controlar o uso, como um vício.<br> Com apenas um clique, a dopamina, neurotransmissor que gera felicidade é liberada no cérebro.Assim, de forma simplificada, as redes sociais são viciantes por exigirem pouco esforço para gerar recompensa.O uso excessivo de redes sociais está associado à baixa autoestima em adolescentes e a transtornos como ansiedade e depressão.Em adolescentes mais jovens, esse uso exagerado associa - se a distúrbios de distorção de imagem e transtornos alimentares, além da diminuição da capacidade de foco, apresentando assim um déficit atencional que prejudica a aprendizagem.<br><br>Pedimos a ela se ela poderia listar algumas caracteristicas de uma pessoa viciada nas redes sociais, veja abaixo o que ela nos enviou:<br><br>Leia os itens a seguir e veja com quais você se identifica. Quanto maior for o número de itens que você se identificar, maior a probabilidade de você ser viciado em redes sociais. <br>⬜ Dificuldade em sair do aplicativo, mesmo que queira<br>⬜ Você consegue não usar o celular/ a rede social<br>⬜ Você sente muita ansiedade quando, por alguma razão, não consegue entrar na rede<br>⬜ Quando se dá conta, já passou horas conectado à rede social<br>⬜ Você deixa de cumprir suas obrigações e abandona atividades que envolvem socialização por gastar muito tempo nas redes sociais<br>⬜ Você perdeu o interesse em outras atividades, como hobbys que tinha antes, por preferir passar tempo em alguma rede social<br>⬜ Você se irrita muito quando pedem que deixe o celular de lado. < br > <br>Também pedimos a ela possa nos dar dicas de como enfrentar e combater este problema, confira logo abaixo: <br><br>Limite o uso do celular, definindo horários específicos para sua utilização.<br>Comprometa-se a abrir as redes sociais e/ou olhar as notificações em horários pré-determinados, como às 8h, 15h e 18h, por exemplo. Nos outros horários, dificulte seu acesso ao aparelho, deixando-o desligado ou silenciado e fora do seu alcance.<br><br>Baixe aplicativos de monitoramento.<br>Existem aplicativos que registram o tempo gasto em cada rede social, bem como o tempo que você passou com a tela ligada. Existem ainda aplicativos que bloqueiam o celular durante o tempo estipulado, o que pode te auxiliar a seguir a dica anterior.<br><br>Escolha um novo hobby para praticar.<br>Esse ponto está relacionado à mudança de hábitos, de forma a substituir o uso do celular por outras atividades que também gerem recompensa (embora com mais esforço para o cérebro). Caso tenha muita dificuldade em fazer isso sozinho, a psicoterapia pode te ajudar.<br><br>Identifique os gatilhos que o levam a entrar na rede social.<br>Em quais momentos do dia você abre o instagram, por exemplo? Um gatilho é um fator ou situação que nos leva a determinada ação. Por exemplo, abrir o WhatsApp (ação) ao se sentir ansioso (gatilho). Identificando os gatilhos, será mais fácil para você se engajar intencionalmente em outra tarefa.<br><br>Com isso, agradecemos imensamente a participação da Graduanda Thalyta Andrade, com sua entrevista, nos ajudando a entender um pouco mais a respeito deste tema. Esperamos que tenham gostado.", aceito: true },
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
        dia: dia,
        mes: mes,
        ano: "2021",
        titulo: strTitulo,
        autor: strAutor,
        imagem: strImage,
        resumo: strResumo,
        conteudo: strConteudo,
        aceito: false
    };
    objDados.artigos.push(novoArtigo);

    // Salvar os dados no localStorage novamente
    salvaDados(objDados);
    document.getElementById('inputTitle').value = null;
    document.getElementById('inputAutor').value = null;
    document.getElementById('inputImage').value = null;
    document.getElementById('inputResumo').value = null;
    document.getElementById('inputConteudo').value = null;
    alert("Artigo Publicado com sucesso!")
}

// Configura os botões
document.getElementById('btnPublicar').addEventListener('click', incluirArtigo);


// JS Tela Artigos
function imprimeDados() {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados();

    for (i = 0; i < objDados.artigos.length; i++) {
        strHtml +=
            `
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 box-artigo">
            <a href="Artigo.html?id=${i}">
               <img src="${objDados.artigos[i].imagem}">
                    <div class="artigo">
                        <h2>${objDados.artigos[i].titulo}</h2>
                        <p>${objDados.artigos[i].resumo}</p></a>
                        <button type="button" class="btn btn-danger Fav" onclick="salvafavoritos(${i})"href="favoritos.html?id=${i}"title="Favoritar">Favoritar</button>
                    </div>
            </div>
        `
    }
    tela.innerHTML = strHtml;
}

function salvafavoritos(troxa) {
    let strDados = localStorage.getItem('favoritos');
    let artigos = [];

    if (strDados) {
        artigos = JSON.parse(strDados);

    }
    let objDados = leDados();
    artigos.push(objDados.artigos[troxa])
    localStorage.setItem("favoritos", JSON.stringify(artigos))
    console.log(objDados.artigos[troxa])
    window.location = "favoritos.html"
}


// Tela Artigo

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });
    return vars;
}
function imprimeArtigo() {
    let tela = document.getElementById('tela_Artigo');
    let objDados = leDados();
    let id = getUrlVars()["id"]
    let indice_artigo;
    console.log(id)
    console.log(objDados)
    for (let i = 0; i < objDados['artigos'].length; i++) {

        if (objDados['artigos'][i]['id'] == id) {
            indice_artigo = i
        }
    }
    console.log(objDados.artigos[indice_artigo])
    let strhtml = `<div class="col-12 col-sm-12 col-md-12 col-lg-12 artigo_visu">
                        <img src="${objDados.artigos[id].imagem}">
                            <h2>${objDados.artigos[id].titulo}</h2>
                            <h3>Autor: ${objDados.artigos[id].autor} - ${objDados.artigos[id].dia}/${objDados.artigos[id].mes}/2021</h3>
                            <p>${objDados.artigos[id].conteudo}</p></a>
                    </div>
                </div>`;
    tela.innerHTML = strhtml;
}
//home artigos


function imprimeArt() {
    let tela = document.getElementById('home');
    let strHtml = '';
    let objDados = leDados();

    for (i = 0; i < 3; i++) {
        strHtml +=
            `
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 box-artigo">
            <a href="Artigo.html?id=${i}">
               <img src="${objDados.artigos[i].imagem}" class="imgvisuhome">
                    <div class="artigo">
                        <h2>${objDados.artigos[i].titulo}</h2>
                        <p>${objDados.artigos[i].resumo}</p></a>
                    </div>
            </div>
        `
    }
    tela.innerHTML = strHtml;
}
