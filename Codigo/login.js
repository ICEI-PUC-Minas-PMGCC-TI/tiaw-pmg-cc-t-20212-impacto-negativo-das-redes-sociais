let json_info;


const verifica_logado = () =>{
    if(  sessionStorage.getItem('usuario') && sessionStorage.getItem('senha')){
        let logado = document.querySelector('.login_button')
        logado.remove()
        $('.cad').remove()
        let multiplo = $('.item_multiplo')
        multiplo.append(`<a class="nav-link login_button"  data-toggle="modal" data-target="#exampleModal">${sessionStorage.getItem('usuario')}</a>`)
    }else{
        $('.cadRe').remove();
        $('.favoritos').remove();
    }
}

checa_pedencias();

async function checa_pedencias(){
    if(sessionStorage.getItem('admin')){
        console.log("AB")
        if(localStorage.getItem('relatos')){
            console.log("A")
            let arts = JSON.parse(localStorage.getItem('relatos'));
            console.log(arts)
            for(let i=0;i<arts.Relatos.length;i++){
                console.log(arts.Relatos[i].Aceito);
                if(!arts.Relatos[i].Aceito){
                    adiciona_artigo_pendente(arts.Relatos[i])
                }
            }
        }
        let navbar = $('.navbar-nav')
        console.log(navbar)
        navbar.append(`<li class="nav-item">
        <a class="nav-link login_button"  data-toggle="modal" data-target="#modalPendencia">Relatos pendentes</a>
      </li>`)
        navbar.append(`<li class="nav-item">
        <a class="nav-link login_button"  href="Cadastro_Artigo.html" >Cadastrar Artigos</a>
        </li>`)
    }
}

function adiciona_artigo_pendente(artigo){
    let wrapper_atigos = $('.artigos_pedentes')
    wrapper_atigos.append(`<div><div>${artigo.Nome}</div><div>${artigo.Relato}</div><div><button onclick="aceitareq('${artigo.Nome}', this)">Aceitar</button><button>Rejeitar</button></div></div>`)
}

verifica_logado()

const aceitareq = (nomeRelato, htmlRelato) => {
    console.log("AAN")
    let relatos = JSON.parse(localStorage.getItem('relatos')).Relatos
    for(let i=0;i<relatos.length;i++){
        if(relatos[i].Nome == nomeRelato){
            relatos[i].Aceito = true;
        }
    }
    let objDados = {
        "Relatos": relatos
    }
    localStorage.setItem('relatos', JSON.stringify(objDados));
    console.log($(htmlRelato).parent())
    $(htmlRelato).parent().parent().remove();
}

const atualiza_json = () =>{
    fetch("https://api.jsonbin.io/v3/b/616f7fedaa02be1d445bea51/latest")
    .then( response => response.json())
    .then( response =>{
        json_info = response.record
    })
}
atualiza_json()
const constroiDadosCadastro = () =>{
    let email = document.querySelector("#email_cadastrar").value
    let username = document.querySelector("#username_cadastrar").value
    let senha = document.querySelector("#senha_cadastrar").value
    console.log(email)
    console.log(senha)
    console.log(username)
    if( username == '' || senha == '' || email == ''){
        alert("todos os campos devem ser preenchidos")
        return;
    }
    cadastrar(username, senha, email)
}

const constroiDadosLogin = () =>{
    let username = document.querySelector("#username_login").value
    let senha = document.querySelector("#senha_login").value
    if( username == '' || senha == ''){
        alert("todos os campos devem ser preenchidos")
        return;
    }
    login(username,senha)
}

const login = (username, senha) => {
    console.log("entra");
    location.reload();
    if(json_info == undefined){
        alert("os dados do servidor ainda não foram carregados")
        return;
    }
    for( usuario of json_info.usuarios){
        if( username == usuario.user && senha == usuario.senha){
            console.log("logo");
            sessionStorage.setItem('usuario', usuario.user)
            sessionStorage.setItem('senha', usuario.senha)
            if(usuario.admin){
                sessionStorage.setItem('admin', true)
            }
        }
    }  
}

const cadastrar = (username, senha, email) =>{
    if(json_info == undefined){
        alert("os dados do servidor ainda não foram carregados")
        return;
    }
    json_info.usuarios.push({'user' : username, 'senha': senha, 'email': email})
    console.log(json_info)
    fetch("https://api.jsonbin.io/v3/b/616f7fedaa02be1d445bea51/",{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(json_info)
    }).then(function(res){ 
        atualiza_json()
        alert("cadastrado com sucesso");
    })
    .catch(function(res){ alert("Não foi possivel adicionar o usuario") })
}


