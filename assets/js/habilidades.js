const skills = document.querySelectorAll(".skill-box");
const descricao = document.querySelector(".texto-descricao");
const roller = document.querySelector(".roller-wrapper");
const progress = document.querySelector(".skill-progress");
const sobreSkill = [
  "<h3>HTML</h3> <br> <p>HTML (Hypertext Markup Language) é uma linguagem de marcação utilizada na construção de páginas na Web. Ela permite definir a estrutura e o conteúdo de uma página web, como texto, imagens, vídeos e links. Com HTML, é possível criar páginas que são interpretadas e exibidas pelos navegadores da Web.</p> <br>",
  "<h3>CSS</h3> <br> <p>CSS (Cascading Style Sheets) é um mecanismo para adicionar estilo a um documento web. Ele permite definir a aparência e a apresentação de uma página web, como cores, fontes, espaçamentos, alinhamentos e efeitos visuais. Com CSS, é possível separar o conteúdo de uma página da sua apresentação visual, o que torna a manutenção e o desenvolvimento de sites mais eficientes.</p> <br>",
  "<h3>JavaScript</h3> <br> <p>JavaScript é uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web. Ele permite adicionar interatividade e dinamismo a uma página web, como animações, validações de formulário, efeitos visuais, entre outras funcionalidades. Com JavaScript, é possível criar aplicativos web complexos e sofisticados.</p> <br>",
  "<h3>ReactJS</h3> <br> <p>ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. Ele foi desenvolvido pelo Facebook e é amplamente utilizado em empresas e projetos de desenvolvimento web. Com ReactJS, é possível criar componentes reutilizáveis e construir interfaces de usuário de forma mais eficiente e escalável.</p> <br>",
  "<h3>Sass</h3> <br> <p>Sass (Syntactically Awesome Style Sheets) é uma linguagem de folhas de estilo. Basicamente, o Sass potencializa o CSS, permitindo escrever estilos de forma mais eficiente e produtiva. Ele adiciona recursos como variáveis, funções, aninhamento, herança e outras funcionalidades que tornam a criação e a manutenção de estilos mais fácil e organizada.</p> <br>",
  "<h3>Git</h3> <br> <p>Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software. Ele permite gerenciar o histórico de alterações em arquivos e projetos, permitindo que várias pessoas trabalhem em um mesmo projeto simultaneamente e sem interferências. Com Git, é possível criar ramificações (branches), mesclar (merge) alterações, reverter (revert) mudanças, entre outras funcionalidades.</p> <br>",
  "<h3>Github</h3> <br> <p>Github é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite hospedar projetos de software, documentação, código-fonte e outros arquivos, além de oferecer recursos de colaboração, como pull requests, issues, wikis, entre outros. Com Github, é possível compartilhar e colaborar em projetos de forma mais eficiente e colaborativa.</p> <br>",
  "<h3>Typescript</h3> <br> <p>TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que estende a sintaxe do JavaScript, adicionando tipos estáticos opcionais. Com TypeScript, os desenvolvedores podem escrever códigos mais escaláveis, mais legíveis e mais fáceis de manter, além de aproveitar os recursos adicionais de segurança de tipo e recursos de refatoração do código. O TypeScript é executado em qualquer navegador, host ou sistema operacional que suporta o JavaScript.</p> <br>",
  "<h3>NodeJs</h3> <br> <p>Node.js é uma plataforma de software livre e de código aberto construída sobre o motor JavaScript do Google Chrome, que permite que desenvolvedores escrevam códigos do lado do servidor usando JavaScript. Com o Node.js, os desenvolvedores podem criar aplicativos de rede escaláveis, em tempo real e de alto desempenho usando uma linguagem de programação familiar e uma vasta biblioteca de módulos de código aberto disponíveis na internet.</p> <br>",
  "<h3>Bootstrap</h3> <br> <p>Bootstrap é um framework front-end de código aberto para desenvolvimento de sites e aplicativos web. Ele contém uma coleção de componentes HTML, CSS e JavaScript que podem ser usados para criar layouts responsivos, estilizados e interativos com facilidade. Bootstrap foi desenvolvido pela equipe do Twitter e é amplamente usado por desenvolvedores web para criar sites e aplicativos rapidamente e com qualidade profissional.</p> <br>",
  "<h3>Jquery</h3> <br> <p>jQuery é uma biblioteca JavaScript de código aberto que simplifica a manipulação e a interação com documentos HTML, CSS e DOM em páginas web. Com o jQuery, é possível escrever códigos mais curtos e limpos para adicionar efeitos visuais, animações, interatividade e dinamismo às páginas web. O jQuery também oferece uma grande quantidade de plugins e extensões para expandir suas funcionalidades.</p> <br>",
  "<h3>Mui</h3> <br> <p>MUI (Material-UI) é uma biblioteca de componentes de interface do usuário para React que segue os princípios de design do Google Material Design. Com MUI, os desenvolvedores podem criar interfaces de usuário estilizadas e responsivas com facilidade, usando uma coleção de componentes pré-fabricados. Além disso, MUI oferece recursos de personalização avançados e suporte para temas personalizados, permitindo que os desenvolvedores criem interfaces de usuário únicas e atraentes para seus projetos.</p> <br>",
];

const skillProgress = [
  90 /* HTML */, 85 /* CSS */, 90 /* JavaScript */, 80 /* ReactJS */,
  80 /* Sass */, 80 /* Git */, 85 /* Github */, 60 /* Typescript */,
  90 /* NodeJs */, 90 /* Bootstrap */, 90 /* Jquery */, 85 /* Mui */,
];
skills.forEach((e, i) => {
  e.addEventListener("mouseover", (evento) => {
    roller.innerHTML = "";
    descricao.innerHTML = `${sobreSkill[i]}`;
    progress.innerHTML = `
    <div class="skill-progress-bar" role="progressbar" aria-valuenow="${skillProgress[i]}" aria-valuemin="0" aria-valuemax="100" style="width: ${skillProgress[i]}%;">
		<span>${skillProgress[i]}%</span>
	</div>
    `;
  });
  e.addEventListener("mouseout", (evento, elemento) => {
    progress.innerHTML = "";
    descricao.innerHTML = "";

    roller.innerHTML = `
    
                <div class="roller">
                  <div id="rolltext">
                    <div class=" hero glitch-title layers"  style="color: #E44D26">HTML</div>
                    <div class=" hero glitch-title layers"  style="color: #264DE4">CSS</div>
                    <div class=" hero glitch-title layers"  style="color: #E9CA32">Javascript</div>
                    <div class=" hero glitch-title layers"  style="color: #90C53F">Nodejs</div>
                    <div class=" hero glitch-title layers"  style="color: #4AD0E9">React</div>
                    <div class=" hero glitch-title layers"  style="color: #DE4C36">GitHub</div>
                    <div class=" hero glitch-title layers"  style="color: #CC6699">SASS</div>
                    <div class=" hero glitch-title layers"  style="color: #105C9F">Typescript</div>
                    <div class=" hero glitch-title layers"  style="color: #673AB7">Bootstrap</div>
                    <div class=" hero glitch-title layers"  style="color: #0000FF">MUI</div>
                    <div class=" hero glitch-title layers"  style="color: #fafafa">Jquery</div>
                  </div>
                </div>
              
    `;
  });
});
