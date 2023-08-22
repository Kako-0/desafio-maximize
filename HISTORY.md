# Decisões de Desenvolvimento

## Ferramentas e Bibliotecas

### Next.js e React

Para criar uma aplicação web moderna, foi escolhido framework Next.js, tanto por ter um melhor desempenho que outros frameworks como o vite.js e o CRA como também por ter suporte a SSR, o que permite uma velocidade de carregamento da página melhor, mlehor SEO e facilidade no manuseio de metadados. O React foi escolhido como a biblioteca principal devido à sua popularidade, comunidade ativa e eficiência e facilidade na construção de interfaces.

### Firebase

O Firebase foi selecionado como a plataforma de backend para armazenamento de dados. A escolha se deu pela facilidade de uso e integração, já que o foco deste desafio não está no backend, mas sim no front e uso de apis.

### Email.js

A biblioteca Email.js foi escolhida para a funcionalidade de envio de emails. A decisão foi baseada mais uma vez pela simplicidade de integração, visto que não é necessário um backend para usá-lo e no suporte a templates de modelos de email.

## Automação e Testes Executados

Durante o desenvolvimento, foram realizados apenas teste manuais, embora não seja a melhor solução, essa escolha se deu pelo fato de ser uma micro aplicação simples.

## Ideias para Implementações Futuras

Se houvesse mais tempo disponível, algumas ideias adicionais poderiam ser implementadas:

1. Uma página inicial de autorização para entrar no /manager, podendo utilizar até mesmo o Authentication do próprio Firebase para realizar as autenticações.
2. Devido ao tempo, criar o drawer do botão menu criado para o mobile e telas menores.

## Decisões Tomadas

1. Todos os icons foram trocados de .svg por um .jsx, dessa forma fica mais fácil usá-lo diretamente dentro dos componentes, além de aplicar comportamentos mais dinâmicos

2. SASS. Inicialmente no projeto, foi utilizado o CSS3 puro, porém vi que ao usar um pre-processador, eu teria uma melhor legibilidade e organização no código, Também foi usado em conjunto a metodologia BEM para nomeação das classes.

3. Optei por utilizar as fontes importadas pelo "next/fonts" ao invés de baixar pelo link dos assets, pois o Next.js já oferece otimizações automáticas.

4. A imagem de fundo foi importada do figma, visto que não havia layouts para o mobile e telas menores, crei o background da imagem com o nome "CONTATO" de forma programável, facilitando uma melhor responsividade para telas menores.

5. Falando em Figma, criei o layout de como ficaria a tela em telas mobile.

6. O uso do Firebase se deu pela praticidade ao criar um backend e banco de dados, já que o foco era o frontend.

7. O manager criado por mim, foi feito de forma mais minimalista. Optei em não criar um página inteira para visualizar uma única mensagem, porém criei um accordion que mostra com mais detalhes sobre as informações para cada mensagem salva no banco de dados, além de um mecanismo de busca por nome.
