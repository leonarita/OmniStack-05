# Projeto "Twitter"

<br>
<img src="/frontend/src/assets/logo.svg">
<br>

## Projeto desenvolvido no evento OmniStack 05.0 fornecido pela empresa RocketSeat.

Nessa semana, foi desenvolvido uma aplicação full stack integrando backend (com NodeJS), frontend (com ReactJS) e mobile (com React-Native).
<br>
<br>
A linguagem de programação utilizada foi o **`Javascript`**.

<br>
Esse projeto permite postagem de tweets e likes on real time.

<br>
<br>
<img src="/uploads/foto1.png">
<br>

### 1. Backend

Para o backend, foram utilizadas ferramentas como `express`, `mongoose`, `cors` e `socket.io`. 
<br>
<br>
Foram feitas as seguintes funcionalidades:
  1. Models;
  2. Controllers;
  3. Conexão com banco de dados;
  4. Criação das rotas;
  5. Aplicação on real time.

<br>

### 2. Frontend

Para o frontend, foram utilizadas ferramentas como `axios`, `react-router-dom` e `socket.io-client`. 
<br>
<br>
Possui duas telas: 
  1. Tela inicial para entrar no twiter;
  2. Tela de postagem, clistagem e curtidas.

<br>
<img src="/uploads/foto2.png">
<br>

### 3. Mobile

Foi utilizando o React-Native com o `Expo` para a criação da aplicação mobile.
<br>
Para o mobile, foram utilizadas ferramentas como `axios`, `react-navigation` e `socket.io-client`. 
<br>
<br>
Possui três telas: 
  1. Tela inicial para entrar no twiter;
  2. Tela de postagem;
  3. Tela de clistagem e curtidas.

<br>
<img src="/uploads/foto3.png">
<br>

### 4. Funcionalidade On Real Time

Ao postar ou curtir um tweet, as telas de todos os dispositivos serão atualizados automaticamente.
<br>
Essa funcionalidade é devida ao `socket.io` e `socket.io-client`.
