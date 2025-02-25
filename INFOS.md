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