const button = document.querySelector('header .menu-button');
const header = document.querySelector('body header');

const subMenuContent = document.createElement('div');
subMenuContent.innerHTML = `<div>
<a href="#home">Home</a>
<a href="#stacks">Stacks</a>
<a href="#projects">Projetos</a>
<a href="#contact">Contato</a>
</div>`
subMenuContent.classList.add("links-navbar-resposive-mode");

button.onclick = () => {
    const active = button.classList.toggle('active');
    if(active){
        header.appendChild(subMenuContent)
    }else header.removeChild(subMenuContent)
    
}

/*
<div>
    <a href="">Home</a>
    <a href="">Stacks</a>
    <a href="">Projetos</a>
    <a href="">Contato</a>
</div>

classe CSS:"links-navbar-resposive-mode"
*/