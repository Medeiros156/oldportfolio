

const botaoVerMais = document.querySelector(".botaoVerMais");
const habilidades = document.querySelectorAll(".hidden");
const node = document.querySelector("#fundo");

function cliqueVer() {
  console.log('cliquever');
  habilidades.forEach((e) => {
    if (e.classList.contains("hidden")) {
      e.classList.remove("hidden");
      botaoVerMais.innerHTML = "Ver menos";
    } else {
      e.classList.add("hidden");
      botaoVerMais.innerHTML = "Ver mais";
    }
  });
}

function maisHabilidades(elemento) {
  elemento.addEventListener("click", cliqueVer);
}



maisHabilidades(botaoVerMais);

/* ---------------------------------------------------------- */

