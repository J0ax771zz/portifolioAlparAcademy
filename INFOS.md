==========================================================================================================================
CURSO 1: HTML
==========================================================================================================================
HISTORIA DO HTML
==========================================================================================================================

O HTML foi criado por Tim Burners Lee em 1991, que também criou a W3C ou WWW(Wold Wide Web Consertion) o HTML 2 foi lançado em 1995 hoje em dia estamos no HTML 5 que tem o enforque em semântica.


HTML não é uma linguagem de programação, já que se trata de uma linguagem de marcação.

O HTML foi criado para projetos acadêmicos onde era necessário passar seu ip atráves do protocolo HTTP(HyperText Transfer Protocol)
A maioria dos sites hoje  em dia utilizam o protocolo HTTPS (HyperText Transfer Protocol Secure) pois é mais seguro que o HTTP para transferência de dados graças a sua criptografia SSL (Secure Sockets Layer).

Hoje em dia não existe site sem HTML, e os sites são hospedados atráves do DNS (Domain Name Server) que transforma nomes em endereço IP.

Um site nada mais é do que um conjutos de documentos HTML que podem conter um ou mais arquivos e pastas.
Os documentos são escritos atráves de tags HTML, as tags são a forma que o elemento vai ser e o comportamento dele.

Regras básicas e convenções
Para ter um documento HTML você deve usar a extensão .html ao final do nome do arquivo.

A página inicial deve receber o nome de index.html para sempre ser aberta por padrão pelo navegador.

====================================================================================================================================================================================================================================================

TAGS
==========================================================================================================================

O sistema de elementos (tags) do HTML é composto pela tagname, envolto pelos sinais de maior e menor. Ex: <div>.

O elemento pode possuir nenhum ou muitos atributos, que podem mudar o comportamento e a aparência do conteúdo, que acompanha o elemento.

Exceto pela tag de quebra de linha <br> e algumas outras, toda tag aberta necessita ser fechada, para fechar uma tag, você adiciona ela novamente e coloca uma barra á frente do nome.
Exemplo: <div>Akguma coisa </div>.

Tags básicas do HTML:

<h1></h1> Título.
<h2></h2> Subtítulo.
<p></p> Paragráfo.
<strong></strong> Negrito.
<i></i> Itálico.
<u></u> Sublinhado.
<a href="link">link</a> Define um link para outra página.
<img /> Define uma imagem.

==========================================================================================================================
==========================================================================================================================
A PARTE QUE FALTA
==========================================================================================================================

Cabeçalho (<head>): recebe as informaçãoes que serão utilizadas pelos mecanismos de busca e outras configurações de comportamento da página.

Body (<body>): É a parte que recebe todo o conteúdo visível, e até mesmo código JavaScript.

==========================================================================================================================
==========================================================================================================================
LISTAS
==========================================================================================================================

Existem três tipos de listas: ordenadas (<ol>), não ordenadas (<ul>), e de definição (<dl>).

<ul></ul> Inicia a lista não ordenada.
<ol></ol> Inicia a lista ordenada.
<li></li> Item da lista.
<dl></dl> Inicia uma lista de definição.
<dd></dd> Descrição da definição.

==========================================================================================================================
==========================================================================================================================
Tabelas
==========================================================================================================================

As tabelas servem para exibir dados aos usuário.

Eram muito utilizadas na estrutura dos sites no passado, Hoje ainda estão presentes, mas apenas para o seu real propósito.

Mas com o CSS, a maioria dos sites hoje é desenvolvido com o conceito tableless (sem tabela).

As tabelas possues suas próprias tags, mas podem ser combinadas com as tags de conteúdo.

<table></table> Inicia a tabela.
<thead></thead> Define o cabeçalho de uma tabela.
<tbody></tbody> Define o corpo da tabela.
<tr></tr> Table Row, Define uma linha de uma tabela.
<th></th> Table Heading, Define uma celúla de cabeçalho da coluna da tabela.
<td></td> Table Data, Define uma célula da coluna da tabela.


==========================================================================================================================
==========================================================================================================================
Formulários
==========================================================================================================================

São a base essencial da internet e dos sites atualmente.

O preenchimento dos formulários geram dados, que serão convertidos em informações.

Onde há interação entre o usuário e o site, o formulário está presente.
Seja em um login, seja enviando uma mensagem pelo WhatsApp.

Tags de formulário:

"<form></form>" Define a área do formulário, e recebe todos os campos.
"<input />" É a forma que o usuário interage com o sistema.
"<textarea></textarea>" É similiar ao input, mas permite maior quantidade de texto.
"<select></select>" Input para a seleção de lista.
"<button></button>" Botão que envia o formulário para o sistema.


==========================================================================================================================
==========================================================================================================================
Dividindo a página
==========================================================================================================================

Existe uma outra forma de dividir a estrutura de uma página, que não seja usando uma tabela.

Para isso, usamos a tag <div>, que cria um container, onde podemos incluir elementos, inclusive outras tags <div>.

Quando temos um encadeamento de divs, a <div> mais externa é chamada de div parent (pai).
Consequentemente, as divs internas são chamadas de div filhas.

==========================================================================================================================
CUSO 2: CSS
==========================================================================================================================
CSS
==========================================================================================================================

CSS Significa Cascading Style Sheets (Folhas em Estilo de Cascata), e serve para estilizar os arquivos HTML.

O CSS possui diversas configurações de estilo que são escritas uma abaixo da outra. O nome "cascata" vem dessa
configuração.

Como o CSS funciona? Atráves de seletores, propriedade e valor.

Exemplo: seletor{
    propriedade: valor;
}

Seletor: Os seletores buscam pelos elementos HTML.
Propriedade: As propriedades definem os estilos que serão implementados.
Valor: Os valores definem os estilos que serão implementados.

O CSS foi proposto pela primeira vez em 1994 por Håkon Wium Lie.
E o proposito desta ferramenta é deixar os sites mais bonitos e estilizados.

==========================================================================================================================
Formas de inserção:

Inline: O CSS é feito diretamente no elemento, também utilizando o style, mas como atributo.

<p style="color: red;">Texto</p>

Interno: O CSS é feito na mesma página do HTML, inserindo as tags <style></style> no head da página.

Externo: O CSS é feito em um documento à parte, e inserido no head do HTML da página que será inserido, usando o elemento
<link rel="stylesheet" href="./style.css">


==========================================================================================================================
TEXTOS

Font-Size: Essa propriedade determina o tamanho que a fonte será exibida.
O tamanho padrao é 16 pixels, especificado no documento como px.

Existem ainda outras formas de determinar o tamanho de uma fonte, como pela porcentagem (%), centímetros (cm), milímetros(mm), ou ainda por pontos (pt).

Pontos inclusive, é a medida utilizada no Microsoft Word.

Font-Weight: o font weight determina o peso da fonte. Ou seja, quão fina ou grossa é a linha da fonte.
Podemos trabalhar com valores basais como bold (negrito), ou regular (normal).
Mas é possível especificar a grossura da fonte utilizando números também, que podem variar entre 100 e 900

100 - extremamente fina
400 - regular
700 - negrito

Text-Align: O text-align determina o alinhamento do texto, podendo ser:

text-align: center; //texto ao centro
text-align: left; //texto a esquerda
text-align: right; //texto a direita
text-align: justify; //texto justificado

Text-Decoration: O text-decoration determina as linhas do texto, podendo ser:

text-decoration: underline; //linha abaixo do texto
text-decoration: line-through; //linha no meio
text-decoration: overline; //linha acima do texto

E os elementos pode ser usados todos juntos.

Text-Ident: o text-ident determina a indentação do texto que é afastar o texto da margem. A especificação é dada em pixels(px)

text-indent: 50px;

Color: o color determina a cor do texto, podendo ser:

color #FF0000; (hexadecimal)
color: red; (nome da cor)
color: rgb (255,0,0); (RGB)
========================================================================================================================
DISPLAY

Inline: é o display que conduz os textos, permitindo que os elementos sejam exibidos na mesma linha, Padrão para elementos como <span>, <button>, <inputd> e <a>.

Block: É o display que coloca os conteúdos em blocos. Padrão para elementos como <div>, <p> e <h1>. O block permite que configuremos a altura e a largura dos elementos.

Flex e Grid: São dois tipos de block, mas o flex exibe as informações do bloco na horizontal, enquanto o grid exibe as informações do bloco na vertical.

Inline-Block: o inline-block mistura as propriedades do inline e do block, permitindo que textos sejam colocados em 
blocos com dimensionamento de altura e largura.

========================================================================================================================
MARGIN

Margin determina o espaçamento em volta da caixa.

A margem pode ser definida de modo único, que reflete em todos os lados da caixa, mas também podemos definir especificando a margem de cada lado de forma direta, ou de forma indireta.

margin: 50px;

Forma indireta:
seguindo a ordem: top, right, bottom e left.
margin: 10px 20px 30px

Forma direta: 
margin-top: 10px;
margin-bottom: 30px;
margin-left: 20px;

c
PADDING

O padding é como o margin, mas trabalha o espaçamento interno da caixa.

Inclusive, pode ser definido de modo único, e também ser especificado de forma direta ou indireta.

padding: 50px;

Forma indireta:
seguindo a ordem: top, right, bottom e left.
padding: 10px 20px 30px;

Forma direta:
padding-top: 10px;
padding-bottom: 30px;
padding-left: 20px;

========================================================================================================================
LEMBRE-SE

O MARGIN SERVE PARA ESPAÇAMENTO EXTERNO DA CAIXA, JÁ O PADDING SERVE APENAS PARA ESPAÇAMENTO INTERNO.

========================================================================================================================
BORDER

Border cuida do espaço "no meio", entre o margin e o padding.
A propriedade permite que definamos sua espessura, cor e forma, também de forma direta ou indireta.

Forma indireta:
border: 5px solid red;

Forma direta:
border-color: red;
border-width: 5px; Todas as bordas
border-style: solid;
border-top: 50px; Cada lado especifico

========================================================================================================================
BACKGROUND

O backgorund cuida do comportamento do fundo do nosso site.

Como nos demais elementos, podemos trabalhar de forma mais especifica, e de forma indireta.

Forma indireta: 
background: red;

Forma direta:
background-color: red(255,000,000);
background-image: url(link da imagem);
background: linear-gradient(red,blue);


========================================================================================================================
POSITION

Static: É a posição padrçao, os Elementos são posicionados de acordo com a renderização, e não sçai afetados pela propriedades de posicionamento left, right, top e bottom.

Relative: Define o posicionamento baseado na posição atual.
Com o relative, podemos utilizar as propriedades de posicionamento que mencionamos acima (left, right, top e bottom);

Absolute: Define o posicionamento relacionamento relacionado ao primeiro elemento ancestral não estatico na página.
Ou seja, o elemento ancestral precisa ter um position definido, ou o body será usando como paramêtro.

Fixed: Diferente do absolute, esse posicionamento  fixa o elemento na tela, mas referente ao viewport, que é conhecido
como a tela do usuário.

Sticky: Esse posicionamento funciona como uma mistura do static e do fixed, iniciando estático, e se movendo enquanto
acompanha o scroll na página

========================================================================================================================
FLEXBOX E GRID

Flexbox e Grid oferecem muitos beneficíos para o design de layouts em CSS.

O Flexbox simplifica a criação de layouts unidimensionais, proporcionando flexibilidade, alinhamento fácil e ajustes automáticos para dispositivos variados. Por outro lado, usar o Grid é ideal para layouts bidimensionais complexos
oferecendo controle preciso sobre linhas, colunas e espaçamento.

Ambos são ferramentas essenciais para desenvolvedores front-end, permitindo layouts responsivos, adaptáveis e visualmente equilibrados em diferentes contextos.

O Flexbox e o Grid são como os assistentes de organização do seu design. Eles tornam mais fácil do que nunca criar layouts fluidos e proporcionar uma experiência incrível em qualquer dispositivo, e lembrando você pode combinar isso
com o @media (fará sentido mais a diante).


========================================================================================================================
FLEXBOX

O Flexbos é um elemento flexível, que ativa diversas configurações aplicáveis para os elementos filho, podendo manipular suas alturas e larguras.

Para ativá-lo, usamos a propriedade display: flex;
e suas configurações são:

Flex-Direction: Essa propriedade define a direção que o conteúdo será mostrado. Por padrão, os conteúdos são exibidos em linha, mas podem ser exibidos como:

row: //Conteúdo exibido em linha
column: //Conteúdo exibido em coluna
row-reverse //Conteúdo exibido em linha, mas da direitra pra esquerda e na ordem inversa
column-reverse: //Conteúdo exibido em coluna, mas com as informações de baixo para cima e na ordem inversa

Flex-Wrap : O flex-wrap permite ativar o desativar a quebra de linha, impedindo que uma nova linha seja criada, caso os elementos extrapolem o tamanho do site, evitando a quebra de layout.
Podemos usar as propriedades:

wrap: 
nowrap

Flex-Flow: o flex-flow permite a configuração do flex-direction e do flex-wrap ao mesmo tempo.

========================================================================================================================
JUSTIFY-CONTENT

Essa propriedade alinha os itens no eixo escolhido, seja vertical ou horizontal.

Esse alinhamento pode ser definido de acordo com a necessidade, trabalhando com as seguintes opções:

flex-start: alinha o conteúdo no início
flex-end: alinha o conteúdo ao final 
center: alinha o conteúdo ao centro
space-around: coloca um espeço entre cada elemento, incluindo as bordas, mas somando os espaçamentos.
space-between: separa os conteúdos igualmente, sem contar as bordas
space-evenly: separa o conteúdo igualmente, incluindo as bordas.
stretch: expande o conteúdo, de modo a preencher o container


========================================================================================================================
ALIGN-ITEMS

Essa propriedade alinha os itens no eixo cruzado. Ou seja, se o container for row, os itens serão alinhados na vertical, e se o container for column, os itens serão alinhados na horizontal.

Esse alinhamento pode ser definido de acordo com a necessidade, trabalhando com as seguintes opções:

flex-start: alinha o conteúdo no início
flex-end: alinha o conteúdo no final
center: alinha o conteúdo ao centro
stretch: expande o conteúdo, de modo a preencher o container

========================================================================================================================
GAP

Essa prpriedade define o espaçamento de cada item, seja para linhas ou para colunas.

Aqui podemos trabalhar com valores, podendo selecionar a unidade de medida que desejarmos (porcentagem, px, cm, etc).

Da mesma forma que trabalhamos com o padding, podemos determinar valores diretos e indiretos.

forma indireta:
gap: 10px;

forma direta:
row-gap: 10px;
column-gap: 30px;

========================================================================================================================
FLEX-BASIS

Essa propriedade define tamanho inicial do item em relação ao espaço disponivel.

Caso elemento não seja flexível, a prrpriedade não fará efeito.

========================================================================================================================
FLEX-GROW

Essa propriedade faz com que os itens cresçam, de acordo com o número definido pela direção do container, a partir do flex-basis.
O valor padrão é 1.

========================================================================================================================
FLEX-SHRINK

Essa propriedade faz com que os itens diminuam de acordo com o número definido pela direção do container, a partir do flex-basis.

========================================================================================================================
FLEX

É um atalho para as três propriedades, e os valores dever ser definidos na ordem flex-grow, flex-shrink, flex-basis.

flex: 1 1 auto;


========================================================================================================================
GRID

O grid é uma forma de display, colocando a visualização em formato de grade.~

Para desenvolvermos um grid, tralhamos com as propriedades de template, que definirão a quantidade de linhas (grid-template-rows) e de colunas (grid-template-columns).

Também podemos usar as unidades de medida que já conhecemos, mas aqui podemos usar até uma nova chamada fr (fraction) que, da mesma forma que o flex-grow, define uma porcentagem para cada elemento.

Para trabalharmos com valores automáticos de dimensionamento do grid, podemos ainda usar as propriedades grid-auto-columns e grid-auto-rows


========================================================================================================================
TRANSFORM

Essa propriedade permite aplicar transformações aos elementos, permitindo definições de rotação, escala, translação e deformação.

O transform não afeta o layout da página, apenas a apresentação visual do elemento, permitindo que múltiplicas transformações possam ser combinadas, para criar elementos mais complexos.

Rotate: Essa propriedade faz o elemento rotacionar a quantidade de graus determinado.
Exemplo: transform: rotate(45deg);

Escala (Ou zoom): Essa propriedade faz o item aumentar x vezes.
Exemplo: transform: scale(1.5);

Translate: Essa propriedade faz com que os itens se desloquem.
Exemplo: transform: translate(20px, 30px);

Skew: Essa propriedade deforma os elementos.
Exemplo: transform: skew(20deg, 10deg);

========================================================================================================================
TRANSPARÊNCIA

O texto pode se tornar transparente quando trabalhamos a propriedade color em conjunto com a propriedade rgba( o a vem de alfa, que define a transparência).

color: rgba (255, 0, 0, 0.5)

========================================================================================================================
BOX-SHADOW

Essa propriedade adiciona sombras a um elemento. Sua declaração deve seguir a ordem apresentada abaixo

box-shadow: h-shadow v-shadow blur spread-color

h-shadow: deslocamento horizontal da sombra
v-shadow: deslocamento vertical da sombra
blur: torna a sombra mais ou menos focada
spread: define o tamanho da sombra
color: define a cor da sombra

========================================================================================================================
OPACITY

Essa propriedade controla a transparência de um elemento, trabalhando com valores que podem variar entre zero e um, sendo zero totalmente transparente, e um totalmente opaco.

Caso eu deseje colocar um elemento com transparência de 70%, preciso declarar opacity: 0.7;

========================================================================================================================
PSEUDO-CLASSES

As pseudo-classes no CSS são seletores que permitem estilizar elementos, com base em estados específicos ou posições no documento. Elas oferecem uma forma poderosa de aplicar estilos, com base em diferentes condições  e interações.

Embora exista uma grande variedade de pseudo-classes, aqui mencionaremos algumas que são mais utilizadas.

Lembre-se a declaração das pseudo-classes é feito por:

nomaDaClasse:nomeDaPseudoClasse


:hover: Essa pseudo-classe é acionada quando o cursor do mouse está sobre um elemento, sendo mais comumente usando em links e botões.

:active: Essa pseudo-classe é acionada quando o elemento é clicado ou tocado. Também é comumente usando em links e botões.

:not : Essa pseudo-classe nega a seleção de elementos que correspodem ao seletor especificado.

:focus : Essa pseudo-classe é adicionada quando o elemento está em foco, normalmente após ser clicado. Normalmente utilizado em inputs

:nth-child : Essa pseudo-classe é trabalha com os elementos filhos, baseando-se nos indices dos elementos em uma lista

========================================================================================================================
PSEUDO-ELEMENTOS

Os pseudo-elementos estilizam partes específicas de um... elemento!
Ou seja, podem ser usados para estilizar partes específicas de um HTML, e também são uma ferramenta poderosa para detalhar o design e a personalização do CSS.

Lembre-se: a declaração dos pseudo-elementos é feita por nomeDoElemento::nomeDoPseudoElemento

::before e ::after: Esses pseudo-elementos permitem inserir conteúdo antes ou depois do conteúdo real de um elemento.
A inserção desse pseudo-elemento depende da inserção da propriedade content pra funcionar.

::first-line : Esse pseudo-elemento seleciona a primeira linha dentro de um elemento.

::first-letter : Esse pseudo-elemento seleciona a primeira letra de um elemento.

::selection : Esse pseudo-elemento adiciona uma estilização quando selecionamos um texto ou outro elemento.

========================================================================================================================
TRANSIÇÕES

Referem-se a mudanças sutíes entre os estados de um elemento, sendo normalmente aplicadas às propriedades de cor, tamanho e posição, proporcionando uma experiência visual mais fluida.

Transition : O transition possui uma declaração de sintaxe, que segue uma ordem específica, conforme orientado abaixo:

transition: propriedade duração funcao-timing atraso;

Caso desejamos adicionar várias transições para propriedades diferentes com configurações diferentes, podemos adicionar vírgulas entre as transições.

Propriedade: indica qual propriedade será afetada pela transição, podendo trabalhar de maneira específica (background-color, por exemplo), ou de maneira genérica (usando o all).

Duração: Deine o tempo total que a transição levará para ser concluída. Pode ser especificada em segundos (s), ou milissegundos (ms).

========================================================================================================================
ANIMAÇÕES

Toda animação é feita quadro a quadro. Então é importante definir qual é o quadro que inicia a animação e qual quadro encerra.

A esses quadros de início e fim damos o nome de keyframes, pois fornecem um controle detalhado da animação.

No CSS, são especificados com @keyframes

========================================================================================================================
@KEYFRAMES

Quando declaramos os keyframes, podemos trabalhar com valores absolutos ou valores relativos.

Quando determinamos valores absolutos, consideramos apenas um frame de início, e um frame de fim, Mas ao trabalharmos com valores relativos, podemos definir uma sequência de frames que são chaves no funcionamento da animação.

A definição de diversos keyframes é feita em porcentagem sendo 0% o frame inicial, e 100% o frame final.

========================================================================================================================
RESPONSIVIDADE 

Todo o desenvolvimento feito até o momento foi feito considerando o tamanho de tela do dispositivo que usamos para escrever o CSS e o HTML. Se exibirmos o site em algum outro dispositivo que possua uma configuração diferente, a visualização pode não funcionar como o esperad.

É ai que a responsividade entra, tornando o layout mais fluido, de modo que se adeque a diferentes dispositivos e tamanhos de tela.

A responsividade também pode ser encontrada pelos termos "Design Responsivo" e "Design Adaptativo".

========================================================================================================================
MEDIA QUERIES

Pense no media query como uma espécie de "comando mágico" do CSS, que permite ajustar estilos dependendo das características do dispositivo.

Ou seja, haverá adaptação com base na altura e na largura da tela, resolução, orientação e até mesmo o tipo de dispositivo.

A responsividade basicamente dá instruções específicas para diferentes cenários, empilhando os elementos em telas pequenas, e espalhando-os em telas grandes.

Determinamos o tamanho máximo e minímo das telas nessas instruções, usando os comandos max-width e min-width, respectivamente.


Exemplo: @media screen and (min-width: 600px) and (max-width: 800px) {
    Estilos para telas entre 600px e 800px

    .container {
        padding: 20px;
    }
}

========================================================================================================================
UNIDADES RELATIVAS

As unidades relativas são maneiras de definir tamanhos em relação a algum outro valor, geralmente em relação ao tamanho de fonte ao elemento pai. Elas são úteis para criar layouts mais flexíveis e adaptáveis.

As duas unidades mais usadas são a em e a rem, onde a em trabalha as características focando no elemento pai, e a rem trabalha as características focando no elemento raiz (normalmente o tamanho da fonte definido no <html>), proporcionando uma consistência global, visto que o rem não é afetado pelo tamanho das fontes no elemento pai.

Ou seja, o rem atua nas mudanças de forma global, impactando todo o layout de uma vez.

Ao usar unidades realtivas, você pode criar estilos mais dinâmicos e consistentes, facilitando a contrução de designs que funcionam bem em diversos contextos.

========================================================================================================================
IMAGENS RESPONSIVAS

Imagens responsivas são aquelas que se adaptam de forma inteligente ao tamanho da tela ou do container em que estão inseridas, com o objetivo de serem exibidas de maneira eficiente, e de forma que seja agradável esteticamente, em diferentes dispositivos e resoluções.

Para criar imagens responsivas, geralmente, você utiliza a propriedade max-width: 100% .

Isso garante que a largura da imagem não ultrapasse a largura do contêiner pai, impedindo que a imagem fique cortada ou distorcida.

========================================================================================================================
DESIGN MOBILE-FIRST

A abordagem "Mobile-Firts" no design web consiste em priorizar a experiência do usuário em dispositivos móveis desde o início do desenvolvimento. Isso implica em criar e otimizar o design para smartphones e tablets, antes de expandi-lo para telas maiores, como desktops.

Ao adotar essa abordagem, benefícios como foco na maioria dos usuários, melhoria no desempenho, facilidade de adaptação para telas maiores, foco na essencialidade e alinhamento às tendências do mercado são alcançados.

A implementação envolve estabelecer estilos base para dispositivos móveis, destacar conteúdo essencial, realizar testes iniciais em dispositivos móveis e expandir gradualmente para telas maiores conforme necessário.

O Mobile-First não apenas responde às demandas crescentes de uso de dispositivos móveis, mas também resulta em designs web mais eficientes e adapáveis, proporcionando uma experiência consistente e satisfatória em todos os dispositivos.

========================================================================================================================
PERFORMANCE

A performance em um site é fundamental para proporcionar uma eperiência positiva ao usuário. Isso envolve o carregamento rápido de páginas, a renderização eficiente de conteúdo e a resposta rápida ás interações do usuário.

Alguns aspectos cruciais incluem otimização de imagens, minificação de código, uso eficiente de cache, priorização de conteúdo crítico e carregamento assíncrono de recursos.

Para garantir interações responsivas, é essencial otimizar o código JavaScript, utilizar regras de estilo CSS eficientes e monitorar constantemente o desempenho com ferramentas como LightHouse e PageSpeed Insights.

Testes em diversos dispositivos e navegadores, juntamente com atualizações e otimizações contínuas, contribuem para manter um alto padrão de performance ao longo do tempo.
A performance não apenas impacta a satisfação do usuário, mas também é crucial para o posicionamento nos motores de busca.

========================================================================================================================
JS PARA WEB

O JavaScript é uma oura parte crucial em sites, antigamente e principalmente hoje em dia, é com ele que tornamos nossos sites funcionais, e podemos construir aplicações WEB úteis, como o WhatsApp web, Youtube, etc...

Para construimos essas aplicações WEB, precisamos fazer a manipulação dos Document Object Model, também conhecidos como DOM.

O DOM nos permite alterar tanto aspectos visuais como comportamentais dos documentos.

Para inserirmos códigos no HTML, precisamos colocar a tag <script></script> dentro da tag <body>, mas nos pés do body.

Isso evita erros de execução no código, pois todos os elementos da página já terão sido carregados.

O DOM é uma parte importante do desenvolvimento web interativo, permitindo a criação de páginas dinâmicas e responsivas por meio da manipulação programática dos elementos da página.

========================================================================================================================
WINDOW

Window é um objeto global que recebe esse nome por possuir todas as informações do navegador, como versão tamanho da janela, altura, largura, etc.

Com essas informações, o desenvolvedor sabe o que pode ser utilizado, e se o navegador está desatualizado.

========================================================================================================================
SELEÇÃO DE ELEMENTOS

Assim como no CSS, existe uma série de elementos que podem ser modificados dinamicamente no JS.

Aqui abordaremos os mais comuns:

getElementById : com o getElementById podemos facilmente selecionar um elemento que possui um Id. Lembre-se que os IDs são únicos.

getElementsByClassName: com o getElementByClassName nós buscamos por elementos que conrtenham aquela classe. Note que o termo está no plural permitindo a busca por todos os elementos que possuam aquela classe. Ou seja, o seu retorno é um array de elementos.

getElementsByTagName : funciona da mesma forma que o getElementsByClassName, porém ao invés de buscar pela classe, busca por elementos com aquela tag.

querySelector e querySelectorAll : O querySelector e querySelectorAll são funcões relativamente novas, elas buscam por elementos , porém usando seletores do CSS

========================================================================================================================
MANIPULANDO CONTEÚDO COM JS NA WEB

innerHTML: é utilizado para retornar códigos HTML atráves do JS.

getAttribute : o getAttribute nos permite ver atributos de certos elementos, para que possam ser repassados do HTML ao JS.

Para fazermos a coleta dos atributos, escrevemos da seguinte forma: data-[qualquerNome] = "[valor]".

setAttribute : O setAttribute adiciona ou modifica o valor de uma propriedade.

style : O style nos permite alterar o estilo de um elemento, a partir do JavaScript.

className : com o className podemos alterar toda a classe do elemento, ou buscar a mesma informação.

classList : com o classList, podemos facilmente consultar e manipular classes de um elemento, e de uma forma até melhor do que comparar diretamente pelo className.

appendChild : Nos permite pegar um elemento do HTML de um parent, e mover para outro.

removeChild : Já o removeChild remove o parentesco de um filho.

createElement : nos permite criar elementos dinamicamente, criando o que quisermos, com o conteúdo que precisamos

==========================================================================================================================
EVENTOS

Tudo o que acontece é um evento. Um click no mouse, apertar uma tecla, mover o cursor... Ou seja, são diversos os eventos disparados ao mesmo tempo.

Quando declarados, os eventos podem acabar se sobrescrevendo e, para evitarmos isso, podemos usar o addEventListener(), que permite a execução de quantos eventos quisermos.

Embora no exemplo tenhamos trabalhado com o onClick(), podemos trabalhar com resize, scroll, mouse move, entre vários outros.

==========================================================================================================================
CONSUMO DE API

API significa Application Programming Interface (Interface de Programação de Aplicação), que permite a interação com bibliotecas, frameworks, sistemas operacionais, e até mesmo comunicação entre aplicações pela internet.

Basicamente, podemos trabalhar com as API's em duas frentes no JS: XML e JSON.

==========================================================================================================================
REST, SOAP, JSON, XML

Existem dois padrões principais de API's na web: SOAP e REST.

O SOAP, utilizando principalmente em sistemas legados, é um protocolo que usa XML para transmitir os dados. Suas principais vantagens são a segurança e a tipagem explícita, além de uma estrutura rígida e integrada.

Já o REST é baseado em princípios e restrições que definem como os recursos são manipulados e acessados, usando os métodos HTTP (GET, POST, PUT, PATCH, DELETE).

Ao contrário do SOAP, o REST não é um protocolo, mas sim um estilo arquitetural. Ele utiliza JSON para troca de dados, que é mais leve queo XML.

Os recursos no REST são facilmente identificáveis, geralmente por meio da URL, e a tipagem de dados e o formato são mais flexíveis. Os métodos HTTP indicam as operações a serem realizadas, não o corpo da requisição.

==========================================================================================================================
XMLHTTPREQUEST

Ao criar uma instância do xhr e utilizar o método open, você pode configurar a requisição para passar informações adicionais.

Um exemplo é o evento onreadystatechange, que executa uma função sempre que o estado da requisição muda. No entanto, só com isso não é possível saber se a requisição foi concluída.

Para isso, é necessário verificar tanto o estado quanto o status da requisição. O status é um código que indica o resultado da chamada: o código 200 significa que a requisição foi bem sucedida, enquanto os códigos 400 ou 500 indicam erros.

o readystate, por sua vez, é uma propriedade do xhr que também está relacionada ao seu estado e é baseada em eventos.

==========================================================================================================================
FETCH API

A função fetch faz parte da API do JavaScript introduzida em 2015, com essa função temos uma forma mais fácil de acessar API's e é baseado em Promises.

Promises são de fato assincronas, e é usada para chamadas demoradas, para criar uma promise, usamos a classe Promise.

A classe Promisse permite tratar operações assíncronas de forma mais organizada, com os métodos then (para sucesso) e catch (para erro).

Podemos encadear vários then e catch, e se um then falhar, os seguintes são ignorados até um catch tratar o erro. Se não houver catch, o código falha. Para simular um finally, basta adicionar um then após o catch.

==========================================================================================================================
TRY CATCH

O try... catch é uma forma de protegermos o código em caso de erros, devendo utilizar em todos os lugares que podem gerar um risco, como em conexões com aplicações, com bancos de dados, informações advindas de usuários, etc.

Erros que não são tratados em JavaScript interrompem a execução do código restante e podem inclusive, fazer o site parar de funcionar.

==========================================================================================================================
BOOTSTRAP
==========================================================================================================================
O Bootstrap é uma ferramenta front-end para construção de sites e sistemas web. Ele é um conjunto de estilos CSS prontos que ajudam a poupar tempo de desenvolvimento.

O principal atrativo do Bootstrap é sua grid, que divide o site em 12 colunas, facilitando a organização. Além disso, ele oferece classes preestilizadas para estilizar tabelas, imagens, formulários e outros componentes úteis.

==========================================================================================================================
BREAKPOINTS
==========================================================================================================================
Os Breakpoints definem a responsividade das classes dos Bootstrap, e muitos deles aceitam breakpoints.

Os Breakpoints são separados em

===============================
Breakpoints / Sufixo da classe / Largura
Extra Small /     none         / >576px
Small       /      sm          / >576px
Medium      /      md          / >768px
Large       /      lg          / >992px
Extra Large /      xl          / >1200px
Extra extra large / xxl        / >1400px


==========================================================================================================================
CONTAINERS
==========================================================================================================================
O container é um elemento que comporta todo um conteúdo, que pode ser fixo ou flúido, dependendo de sua declaração. Normalmente, é utilizado um container por página.

Para trabalharmos com valores fixos, podemos utilizar a classe .container, mas podemos também trabalhar com a fluidez ao usarmos a classe .container-fluid

Os containers aceitam a utilização de breakpoints

==========================================================================================================================
GRID
==========================================================================================================================
O sistema de grid utiliza linhas e colunas, que podem ser segmentados em até 12 partes, tanto fixas quanto fluidas.

Para determinarmos o tamanho fixo de uma coluna, basta inserir o sufixo -[numero de colunas 1-12]. Se eu colocar o valor "col-4", significará que a coluna ocupará 4 espaçõs, entre os 12 existentes.

Para trabalhar com valores fluidos, basta colocar o col sem valor. 

Podemos ainda utilizar breakpoints no grid, e utilizar aida .row-cols-[numero], que define o máximo de linhas que uma coluna terá.

==========================================================================================================================
TIPOGRAFIA
==========================================================================================================================
O Bootstrap muda o tamanho daas fontes por conta própria, então os headings de 1 a 6 já possuem um tamanho definido.

Mas podemos utilizar esses elementos junto ao parágrafo, através da aplicação das classes.

==========================================================================================================================
IMAGEM E FIGURES
==========================================================================================================================
Para estilizar imagens para que esta fique responsiva, utilizamos a classe .img-fluid. Com isso, a imagem terá uma largura de 100% e altura automática.

Para dar uma borda redonda para uma imagem, basta acrescentar a classe rounded.

As figures são imagens, com texto descritivo abaixo.

==========================================================================================================================
FORMULÁRIOS
==========================================================================================================================
O Bootstrap oferece várias funcionalidades para criar formulários responsivos, e bem estilizados.

Ele inclui classes para campos de entrada, como text fields, selects, checkboxes e radios, além de opções para formatação de labels e mensagens de erro.

O framework também facilita a criação de formulários com layout flexível, usando sua grid system.

Ele oferece botões de envio e componentes como alertas e tooltips para validação e feedback.

Além disso o Bootstrap suporta a personalização de estilos com classes predefinidas, permitindo um design consistente e adaptável a diferentes dispositivos.

==========================================================================================================================
COMPONENTES
==========================================================================================================================
Um componente é a junção de vários elementos, e a maioria necessita da inclusão do arquivo de JavaScript no Bootstrap.

Existem diversos componentes, e todos podem ser consultados em: 
https://getbootstap.com/docs/5.3/components/

Accordion: 
Accordions(arcodeões) são aqueles menus suspensos, que exibem apenas o título, e necessitam ser clicados para exbir mais informações.


Alerts:
São formas de alertar o usuário sobre alguma coisa que acontece no sistema. Existe uma infinidade de alertas.

Badges:
Os badges(ou emblemas) adicionam um estilo a um texto auxiliar, que possui caráter informativo


Outras configurações:
Podemos ainda adicionar cores de fundo, transformar os conteúdos em pílulas, estilizar botões...

O Bootstrap possui um vasto universo de customizações, que deixam as páginas mais bonitas e funcionais.

Até ouso dizer que, a partir desse momento, você começará a ver as páginas web com outros olhos!

====================================================================================================================================================================================================================================================
ORIENTAÇÃO A OBJETOS
==========================================================================================================================
A Orientação a Objetos (OO, POO ou OOP) é um paradigma da programação.Ou seja, é uma forma de pensar e programar.

Esse paradigma trata tudo como se fosse um objeto, e os objetos descrevem as características de algumas coisas.

Pense nas características físicas de uma pessoa. São todas as mesmas? Não. Mas existem elementos-chave que podemos usar para parametrizar as características.

Elementos como cor do cabelo, cor dos olhos, e nomes são elementos que se repetem em todas as pessoas.

E podemos usar essas características para memorizar (ou escrever) sobre as pessoas. Assim, garantimos que todas as pessoas possuam a mesma estrutura.

Na orientação a objetos, as coisas funcionam da mesma forma.

==========================================================================================================================
Classes

São os modelos ou "plantas" para a criação de objetos. Elas definem atributos (características) e métodos (comportamentos) que os objetos da classe terão.

A classe serve como um molde para criar múltiplos objetos, permitindo que compartilhem as mesmas propriedades e comportamentos.

Cada objeto instanciado de uma classe pode ter valores diferentes para seus atributos, mas todos compartilham a mesma estrutura definida pela classe

==========================================================================================================================
Abstração
==========================================================================================================================
A abstração na POO oculta os detalhess complexos e exibe apenas as informações essenciais, permitindo que o programador se concentre na funcionalidade. Isso é feito por meio de classes e interfaces, tornando o código mais modular, reutilizavel e fácil de manter

==========================================================================================================================
Encapsulamento
==========================================================================================================================
O encapsulamento na POO oculta os dados internos de uma classe, permitindo o acesso e modificação apenas por meio de métodos públicos, garantindo segurança e integridade dos dados.

==========================================================================================================================
Herança
==========================================================================================================================
A herança na POO permite criar uma nova classe baseada em uma existente, reutilizando, modificando ou expandindo seus atributos e métodos. Isso facilita a reutilização de código e a criação de hierarquiass de classes.

==========================================================================================================================
Polimorfismo
==========================================================================================================================
O polimorfismo na POO permite que objetos de classes diferentes compartilhem o mesmo método, mas com comportamentos distintos, tornando o código mais flexível e escalável.

==========================================================================================================================
PROTÓTIPOS
==========================================================================================================================
São um mecanismo onde objetos herdam caracteristícas de outros objetos de mode que o compartilhamento das funcionalidades acontece sem a necessidade de definir classes, no sentido tradicional.

Todo objeto no JavaScript possui uma propriedade interna chamada [[Prototype]], que referencia outro objeto.

Quando você tenta acessar uma propriedade ou método que não está presente no próprio objeto, o motor do JavaScript busca essa propriedade no objeto referenciado pelo [[Prototype]].

Esse processo continua até que a propriedade seja encontrada ou até que o final da cadeia de protótipos seja alcançado.

==========================================================================================================================
WRAPPERS
==========================================================================================================================
É um padrão de design que envolve um objeto, adicionando funcionalidades extras sem modificar sua estrutura original, como validação ou tratamento de erros.

Cada tipo primitivo (string, number, boolean) de protótipo, possui um objeto wrapper associado, que contém métodos úteis. Com isso, o JavaScript automaticamente converte para os objetos wrapper correspondentes, permitindo que os métodos sejam acessados.

==========================================================================================================================
PROTÓTIPOS STRING
==========================================================================================================================
O protótipo String.prototype oferece uma variedade de métodos para manipulação e consulta de strings

chatAt(index) = Retorna o caractere na posição especificada
trim() = Remove o espaço em branco do início e do fim da string
padStart(lenght, fillString) = Adiciona caracteres a string para que ela tenha um tamanho específico.
slice(start, end) = Extrai uma seção da string e retorna uma nova string
toLowerCase() e toUpperCase() = Convertem a string para minúscula ou maiúscula, repectivamente.
includes(searchString, position) = Verifica se a string contém a substring especificada.

==========================================================================================================================
PROTÓTIPOS NUMBER
==========================================================================================================================
O protótipo Number.prototype inclui métodos que são úteis para operações matemáticas e formatação de números.

toFixed(digits) = Retorna o caractere na posição especificada
toString(base) = onverte um número para uma string, em uma base específica (por exemplo, binário, hexadecimal ...).
toPrecision(precision) = Formata um número com um número específico de dígitos significativos.

==========================================================================================================================
PROTÓTIPOS BOOLEAN
==========================================================================================================================
O protótipo Boolean.prototype é mais simples, já que os valores booleanos são geralmente diretos (verdadeiro ou falso).
Ele não possui métodos exlcusivos que são frequentemente utilizados como nos casos de herda métodos de Object.prototype, como String e Number. Entretanto, ele herdará os métodos, mas retornando a resposta como true ou false.

==========================================================================================================================
PROTÓTIPOS ARRAYS
==========================================================================================================================
Os métodos de prototype para Arrays, possso dizer com segurança, são os mais importantes, e serão muito usados durante sua carreira em JavaScript, então lembre-se deles.

push(element1, ..., elementN) = Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array
pop() = Remove o último elemento de um array e o retorna. Isso muda o tamanho do array.
shift() = Remove o primeiro elemento de um array e o retorna. Isso também muda o tamanho do array.
unshift(element1, ..., elementN) = Adiciona um ou mais elementos ao início do array e retorna o novo comprimento do array.
slice(start, end) = Retorna uma cópia de um array a partir do índice inicial até uma posição antes do índice final.
splice(start, deleteCount, item11, ..., itemN) = Altera o conteúdo de um array, adicionando novos elementos enquanto remove elementos antigos.
forEach(callback) = Executa uma função fornecida uma vez para cada elemento do array.
map(callback) = Cria um novo array com os resultados da chamada de uma função fornecida em cada elemento do array.
filter(callback) = Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
reduce(callback, initialValue) = Aplica uma função contra um acumulador e cada valor do array (da esquerda para a direita) para reduzi-lo a um único valor.

==========================================================================================================================
PADRÕES DE DESENVOLVIMENTO
==========================================================================================================================
Padrões de desenvolvimento são soluções reutilizáveis para problemas comuns no design de software, Eles representam as melhores práticas de desenvolvedores experientes, simplificando a comunicação de conceitos complexos, Usar padrões acelera o desenvolvimento e melhora a qualidade e manutenibilidade do código.

A importância:
Ajudam a resolver problemas de forma eficaz e criativa, já que o código nem sempre é livre de erros.

Eficiência: Evitam a reinvenção da roda, com soluções testadas e comprovadas, para problemas comuns.
Qualidade: Promovem práticas de desenvolvimento que resultam em código mais limpo, organizado e testável.
Comunicação: Facilitam a comunicação entre desenvolvedores, permitindo que discutam soluções de alto nível mais facilmente.
Manutenibilidade: Facilitam a manutenção e a melhoria do código, pois padrões bem estabelecidos são mais fáceis de entender e modificar.

==========================================================================================================================
PADRÕES CRIACIONAIS SINGLETON
==========================================================================================================================
Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a essa instância. Em JavaScript, isso pode ser alcançado usando módulos ou fechamentos (closures) para garantir que uma função construtora seja chamada apenas uma vez.

==========================================================================================================================
PADRÕES CRIACIONAIS FACTORY METHOD
==========================================================================================================================
Define uma interface para criar um objeto, mas deixa que as subclasses decidam qual classe instanciar. Em JavaScript , isso pode ser implementado usando funções simples que retornam instâncias de diferentes classes baseadas em condições.

==========================================================================================================================
PADRÕES ESTRUTURAL ADAPTER
==========================================================================================================================
Permite que interfaces incompatíveis colaborem. Em JavaScript, pode ser tão simples quanto uma função que traduz ou mapeia chamadas de uma interface para outra.

==========================================================================================================================
PADRÕES ESTRUTUIRAL DECORATOR
==========================================================================================================================
Adiciona responsabilidades a um objeto dinamicamente. Em JavaScript, isso pode ser feito estendendo um objeto com novas funcionalidades sem modificar o código original.

==========================================================================================================================
PADRÕES COMPORTAMENTAIS OBSERVER
==========================================================================================================================
Define uma depêndencia um-para-muitos entre objetos, de modo que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.
JavaScript tem um suporte inerente para o padrão Observer através de eventos e manipuladores de eventos.

==========================================================================================================================
ARQUITETURA
==========================================================================================================================
A arquitetura de software é o conjunto de estruturas necessárias para entender o sistema, que inclui elementos de software, relações entre eles e propriedades desses elementos e relações.
Abordaremos três conceitos principais.

Componentes: As unidades básicas de funcionalidade no sistema. Em JavaScript, componentes podem variar de simples funções a classes complexas ou módulos.

Conectores: Os meios pelos quais os componentes interagem uns com os outros.
Isso pode incluir chamadas de função, eventos e callbacks.

Configuração:
A disposição específica de componentes e conectores. A configuração de uma aplicação JavaScript pode ser influenciada por padrões de design, framework e a necessidade de escalabilidade e manutenibilidade.

==========================================================================================================================
MODÚLOS
==========================================================================================================================
Organizam o código, separando lógicas e permitindo a injelção de dependências, permitindo a construção de páginas complexas e de forma muito mais fácil.

Eles são definidos com a função angular.module, onde se especifica o nome do módulo e suas dependências.

==========================================================================================================================
CONTROLADORES
==========================================================================================================================
Os controladores, ou controllers, tem o papel crucial na interação entre a view e o model, funcionando como intermediário, abrigando a lógica de negóciosda aplicação web.

Os controladores são escritos no JavaScript, juntamente dos módulos.

==========================================================================================================================
EXPRESSÕES
==========================================================================================================================
No AngularJS, as expressões sçao trechos de código JavaScript inseridos no HTML.

Por exemplo, em {{'yet' + '!'}}, ocorre uma concatenação.

Você também pode usar variáveis, realizar cálculos matemáticos e até criar ou atualizar valores diretamente nas expressões.

==========================================================================================================================
DIRETIVAS
==========================================================================================================================
Diretivas são a forma que o Angular se localiza no seu  documento HTML.

São atributos ou elementos especiais usados para esconder o HTML, adicionando comportamento ou funcionalidades à interface. Elas permitem manipular o DOM, criar componentes reutilizáveis, aplicar lógica condicional e interagir com os dados de maneira eficiente.

Os elementos são iniciados por ng-, e falaremos sobre alguns deles a seguir

ng-app = define a raiz da aplicação AngularJS e auto-inicializa a aplicação quando a página é carregada.

ng-controller = Associa um controlador a uma parte específica do DOM, permitindo que o controlador manipule os dados e lógicas dentro desse escopo.

ng-bind = O uso do ng-bind substitui {{ exemplo }} para inserir o valor de uma expressão AngularJS, evitando que o valor apareça antes da tela ser totalmente carregada, ou em caso de erro, melhorando a experiência do usuário.

ng-model = Realiza a vinculação de dados bidirecional (two-way-binding) entre os elementos de entrada de formulário no HTML e o modelo no $scope. Usado em inputs, selects e textareas.

ng-repeat = Define um loop semelhante ao for em nossa aplicação.

ng-clic = Define um evento de clique em um botão, e devemos passar uma função para essa diretiva.

ng-if = Remove ou cria um elemento do DOM baseado na verdade do valor de uma expressão.

ng-show/ng-hide = Mostra ou esconde um elemento baseado na verdade do valor de uma expressão.
Diferente do ng-if, não remove o elemento. Apenas altera sua visibilidade.

ng-class = Define ou altera dinamicamente classes CSS de um elemento com base em uma expressão, utilzando um objeto onde as propriedades são os nomes das classes e os valores true ou false determinam se a classe será aplicada.

ng-style = Permite definir estilos CSS, inline de um elemento dinamicamente.


