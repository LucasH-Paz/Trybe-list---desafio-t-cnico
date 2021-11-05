# Trybe Todos tech challenge
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![MongoDb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

Bem Vindo(a) ao repositório Trybe Todos tech challenge!

Este projeto foi desenvolvido durante o curso da trybe de desenvolvimento web. O objetivo aqui era desenvolver uma aplicação que ajudasse as pessoas da empresa fictícia **Ebytr** a se organizarem, sendo assim criada uma lista de tarefas (todos ;) ) em que cada pessoa pudesse inserir suas tarefas e ordená-las conforme nome, data ou status. Essas tarefas são persistidas em um banco de dados.

## Oque foi desenvolvido
Para esse projeto, foram desenvolvidos:
- Interface gráfica usando [React](https://pt-br.reactjs.org/);
- API que gerencia o acesso ao banco de dados, feita usando [Express](https://expressjs.com/pt-br/), um pacote para [NodeJS](https://nodejs.org/en/);
- Banco de dados não relacionais em [MongoDB](https://github.com/nodkz/mongodb-memory-server);
- Estilos usando [CSS3](https://www.w3schools.com/css/), [React-bootstrap](https://react-bootstrap.github.io/) e 💚;
- Controle de qualidade de código [ES-Lint](https://eslint.org/);

## Requisitos
Para rodar essa aplicação você precisa:
- Ambiente NodeJS configurado e gerenciador de pacotes npm instalado;
- MongoDB instalado e iniciado na sua máquina;

## Setup para rodar a aplicação
Para rodar localmente esta aplicação, siga os passos abaixo:

1.  Abra seu terminal e crie uma pasta (O projeto será instalado dentro dela):

```
mkdir projects

```

2.  Clone este repositório:

```
cd projects
git clone https://github.com/LucasH-Paz/Trybe-list-desafio-tecnico.git

```

3.  Instale as dependências (pode levar alguns minutos):

```
cd Trybe-list-desafio-tecnico
cd back-end
npm i
cd ..
cd front-end
npm i

```
4.  Crie um arquivo **.env** dentro do diretório **back-end**, observe o arquivo *.env-template* para determinar as variáveis necessárias (A variável PORT deve ser diferente de 3000);

5.  Inicie as aplicações:
```
cd ..
cd back-end
npm start
// Abra um novo terminal
cd ..
cd front-end
npm strat

```
Você deve ver a interface para gerenciar as tarefas, e se sim, está pronte para começar a usar a aplicação 🥳.
Mas se alguma coisa não correu bem, confira se a sua máquina possui instalados os requisitos mencionados no começo deste readme e se seu mongoDB esta iniciado. Tambem não hesite em me contatar para eventuais dúvidas: lucas.hpaz@outlook.com.

## Como rodar os testes
Entre no diretório back-end e execute o seguinte comando para testes da API:

    NAME=tasks npm test
Para testar a cobertura de testes execute o seguinte comando, tambem dentro do diretório back-end:

     npm run test:coverage

## Próximos passos
Buscando sempre evoluir, algumas melhorias ainda podem ser implementadas, tais quais:
- Configurar uma mensagem amistosa de feedback da API;
- Criação de testes de integração para o front-end;
- Tornar as mensagens notificações dinâmicas conforme retorno da api;
- Adicionar lógica de login e autenticação de usuário;