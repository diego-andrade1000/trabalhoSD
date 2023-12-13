<div align="center">
  <h1>Autenticação de Dois Fatores</h1>
  <img src="/images/logo.png" alt="Ti" width="400">
</div>

<h1 align="left">Introdução</h1>

Este trabalho aborda a disciplina de Sistemas Distribuídos nos cursos de Ciências da Computação e Sistemas de Informação, focalizando-se na implementação de um sistema de autenticação de dois fatores. A primeira etapa desse processo envolve a autenticação via e-mail, desenvolvida utilizando Node.js e Express. A segunda etapa é realizada por meio do reconhecimento facial, implementado por HTML e CSS.

<h1 align="left">Arquitetura do Projeto</h1>

<div align="center">
  <img src="/images/arquitetura.jpeg" alt="Arquitetura do Projeto" width="400">
</div>

<br>
A arquitetura do projeto desempenha um papel fundamental para garantir o funcionamento adequado, especialmente considerando a presença de dois tipos de verificações em uma única aplicação. O processo funciona da seguinte maneira: o cliente envia uma requisição ao middleware, que por sua vez direciona para a REST API. Esta, por sua vez, interage com o banco de dados para verificar as informações de e-mail e senha. Após a verificação, o banco de dados envia um token para a REST API, que, por sua vez, o encaminha de volta ao middleware e então para o cliente.

<br>

<br>Uma vez estabelecido esse token, o cliente utiliza-o para solicitar uma imagem do Teachable Machine ao middleware. Este redireciona a requisição para o modelo do Teachable Machine, incluindo o token e os dados da imagem. Posteriormente, o middleware recebe a resposta do Teachable Machine, compara o valor gerado com o token e, se a pontuação for superior a 0.9, o acesso é concedido.

<h1 align="left">Teachable machine</h1>

<table>
  <tr>
    <td><img src="/images/inicio.png" alt="Teachable machine" width="400"></td>
    <td><img src="/images/projects.png" alt="Teachable machine" width="400"></td>
    <td><img src="/images/imageProject.png" alt="Teachable machine" width="400"></td>
  </tr>
</table>

<div align="center">
  <img src="/images/exportModel.png" alt="Teachable machine" width="400">
</div>

O Teachable Machine é uma plataforma online do Google que usa a webcam para ensinar inteligência artificial de forma simples. Permite treinar a máquina para reconhecer objetos, pessoas, sons ou gestos, ajudando as pessoas a entenderem como funciona o aprendizado de máquina, sem exigir conhecimento avançado em programação. É uma maneira interativa de explorar e experimentar a IA.

A princípio, pretendíamos usar Python em vez dessa plataforma; no entanto, ela se mostrou muito eficaz e muito mais simples de usar, dessa forma, acabamos a utilizando. Visto que, basicamente, é só entrar no site deles, clicar em "Get Started", selecionar qual tipo de projeto você quer - no caso do nosso trabalho, é o Image Project.

Após isso, basta criar as classes, que referenciam um objeto específico para treinar a inteligência artificial para reconhecê-la. Neste projeto, criamos quatro classes: Tiago, Diego, Túlio e Diferente, que são os membros do grupo, e outra classe para pessoas aleatórias. Depois de criar as classes, basta adicionar imagens providas do computador ou utilizar a webcam para tirá-las. Nós utilizamos a webcam para as nossas classes, a fim de termos mais casos de teste, e algumas imagens da internet para a classe 'Diferente', que é mais para demonstração.

Além disso, ao treinar um modelo, é possível apenas clicar na opção de treinar, ou tem a possibilidade também de ir nas configurações avançadas e selecionar mais epochs, batch size e a learning rate.

- **Epochs (Épocas):** Representa o número de vezes que o conjunto de dados de treinamento é percorrido durante o treinamento do modelo. Por exemplo, treinar um modelo com 10 épocas significa que o conjunto de dados de treinamento será utilizado 10 vezes para ajustar o modelo.

- **Batch Size (Tamanho do Lote):** Refere-se à quantidade de exemplos de dados processados em uma única iteração durante o treinamento. Por exemplo, um batch size de 100 significa que o algoritmo processará 100 exemplos antes de atualizar os pesos do modelo.

- **Learning Rate (Taxa de Aprendizado):** Determina o tamanho dos passos que o algoritmo de otimização dá durante o treinamento para atualizar os parâmetros do modelo. A learning rate é fundamental para encontrar um equilíbrio entre a velocidade de convergência e a precisão do modelo.

Após o treinamento, é possível já ter uma previsão de como fica o projeto funcionando, para conferir se tudo está funcionando de maneira correta. Por fim, é só ir na aba de exportar o modelo, onde tem um código em HTML, com JavaScript dentro dele também. No entanto, ele assim não funciona; tem que fazer o upload do shareable link e inseri-lo no código. Fazendo isso, é só compilar e executar o projeto que ele funciona. Entretanto, para uma melhoria visual, melhoramos o front-end dele usando CSS.

