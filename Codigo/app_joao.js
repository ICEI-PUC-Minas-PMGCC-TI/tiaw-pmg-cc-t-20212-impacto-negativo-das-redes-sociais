//Leitura de Dados

function leDados() {
    let strDados = localStorage.getItem('relatos');
    let objDados = {};

    if (strDados) { objDados = JSON.parse(strDados); }
    else {
        objDados = {
            Relatos: [
                { Nome: "Izabella", Idade: "18", Relato: "Eu acho que rede sociais podem contribuir muito com a ilusão de algo perfeito, por exemplo, se você ver uma pessoa bonita na rua, quando você acaba tendo o insta dela e apesar de ela ser bonita em ambos, ela parece ser inacessível no mundo virtual. Isso contribui muito com a comparação tóxica com algo que não existe.Porém elas são ótimas no quesito de obter conhecimento e conhecer pessoas, fiz muitas amizades assim", Aceito: true },
                { Nome: "José", Idade: "21", Relato: "Acho que as redes sociais afetam minha saúde mental de uma forma não tão convencional. Eu sou um artista plástico e as redes sociais são a principal ferramenta de divulgação do meu trabalho - meu sustento depende delas. Isso faz com que qualquer mínima alteração no algoritmo dessas redes tenha um grande impacto sobre o alcance do meu trabalho, o que impacta enormemente meu bem-estar, gerando certa sensação de insuficiência e inadequação, já que não importa o qual boa seja minha arte, ela pode não chegar às pessoas por não se adequar ao conteúdo que o algoritmo considere digno de engajamento. Ao mesmo tempo que não quero me render a essa situação e produzir apenas conteúdos instagramáveis (as famosas dancinhas), há uma pressão para tentar compensar isso de todas formas possíveis, e isso acaba gerando grande ansiedade e frustração (além do impacto na própria renda).", Aceito: true },
                { Nome: "Thamires", Idade: "22", Relato: "Bom, as redes sociais que mais uso são whatsapp e instagram. Percebo que o instagram reforça sentimentos de ansiedade e insegurança em mim, principalmente quando se trata de estética, corpos padrões e até mesmo estilo de vida", Aceito: true }]
        }

    } return objDados;

}

// Salva Dados
function salvaDados(dados) {
    localStorage.setItem('relatos', JSON.stringify(dados));
}

// Incluir Relato
function incluirRelato() {
    // Ler os dados do LocalStorage
    let objDados = leDados();
    // Incluir um novo relato
    let strnome = document.getElementById('inputNome').value;
    let idade = document.getElementById('inputIdade').value;
    let relato = document.getElementById('inputRelato').value;

    let novoRelato = {
        Nome: strnome,
        Idade: idade,
        Relato: relato,
        Aceito: false
    };
    objDados.Relatos.push(novoRelato);

    // Salvar os dados no LocalStorage novamente.
    salvaDados(objDados);

    //Atualiza os dados da Tela - Fim
}

// Printar Dados

function imprimeDados() {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados();
    for (i = 0; i < objDados.Relatos.length; i++) {
        if(objDados.Relatos[i].Aceito){
            strHtml += `<div class="col-12 col-sm-12 col-md-12 col-lg-12 relato_visu">
        <img src = "img/Group.png" class="img" style=
        height: 48px><br><br>
        <p>${objDados.Relatos[i].Relato}</p></a>
        <h1> ${objDados.Relatos[i].Nome} </h1>
        <h2> ${objDados.Relatos[i].Idade} anos </h2>
        <img src = "img/Group.png" class="img2" style=
        height: 48px><br><br>
        <hr>
    </div>
</div>`;
        }
    }

    tela.innerHTML = strHtml;
}

document.getElementById('btnIncluirRelato').addEventListener('click', incluirRelato);

