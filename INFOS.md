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