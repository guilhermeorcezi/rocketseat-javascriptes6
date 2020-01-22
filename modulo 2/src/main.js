// Modulo 1
/*Ex1

class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        if (this.admin) return true;
        return false;
    }
}

class Admin extends Usuario{
    constructor(){
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true */

/*Ex 2

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
   
   const r = usuarios.map(usuario => usuario.idade);
   console.log(r);

   const re = usuarios.filter(usuario => usuario.idade > 18 && usuario.empresa === 'Rocketseat');
   console.log(re);

   const res = usuarios.find(usuario => usuario.empresa=='Google');
   console.log(res);

   const resp = usuarios.map(usu => ({...usu, idade : usu.idade * 2})).filter(usu => usu.idade <= 50);
   //const respo = resp.filter(usuario => usuario.idade <= 50);
   console.log(resp); */

   /*ex3
   const arr = [1,2,3,4,5];

   const r = arr.map(n => n+10);
   console.log(r);

   const usuario = { nome: 'Diego', idade: 23 };

   const re = usuario => usuario.idade;
   console.log(re(usuario));

   const nome = "Diego";
   const idade = 23;

   const mostraUsu = (nome="Diego", idade=18) => ({nome,idade});
   console.log(mostraUsu(nome,idade));
   console.log(mostraUsu(nome));

   const promise = () => new Promise(resolve, reject => resolve()); */

 /*ex 4
 
 const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
 };

 const {nome, endereco:{cidade, estado}} = empresa;
 console.log(nome);
 console.log(cidade);
 console.log(estado);

 function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
 }
console.log(mostraInfo({ nome: 'Diego', idade: 23 })); */

/*Ex5
const arr = [1, 2, 3, 4, 5, 6];

const [x,...y] = arr;
console.log(x);   
console.log(y);

const soma = (...params) => params.reduce((a,b) => a+b);
console.log(soma(1,2,3)); 

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome:'Gabriel'};
const usuario3 = {...usuario, endereco:{...usuario.endereco, cidade:'Lontras'} };
console.log(usuario2);
console.log(usuario3); */

/*Ex6

const usuario = 'Diego';
const idade = 23;
console.log(`O usuário ${usuario} possui ${idade} anos`); */

//Ex7

const nome = 'Diego';
const idade = 23;
const usuario = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};
console.log(usuario);

/* modulo 2
import Usuario, {idade as idadeUsuario} from './modulo2/ex1/function';

console.log('ex1');
console.log('ex2');
console.log(idade);
console.log('ex3');
console.log(idadeUsuario); */

// MODULO 4
//ex1

/*ex1 
//Funcão delay aciona o .then após 1s

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));


async function umPorSegundo() {
    await delay().then(() => console.log('1s'));
    await delay().then(() => console.log('2s'));
    await delay().then(() => console.log('3s'));
}

umPorSegundo(); */

/*ex2
import axios from 'axios';

async function getUserInfo(name){
    try{
        const res = await axios.get(`https://api.github.com/users/${name}`);
        console.log(res.data);
    }
    catch(err){
        console.log('usuário não existe');
        console.log(err);
    }
}

getUserInfo('diego3g');
getUserInfo('diego3g124123'); */

/*ex3
import axios from 'axios';

async function getRepositories(repo){ 
    try{
        const res = await axios.get(`https://api.github.com/repos/${repo}`);
        console.log(res.data);
    }
    catch(err){
        console.log('Repositório não existe');
    }
}

getRepositories('guilhermeorcezi/omnistack10-devradar');
getRepositories('rocketseat/dslkvmskv'); */

import axios from 'axios';
const buscaUsuario = async usuario => {
    try{
        const res = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(res.data);
    }
    catch(err) {
        console.log('Usuário não existe');
        console.log(err);
    }
}
   buscaUsuario('diego3g');
   buscaUsuario('diedsgo3g');
