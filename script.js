const texto = `
Primeiramente, queria pedir desculpas por te incomodar.

Só queria desabafar uma última vez.

Nunca entendi exatamente o motivo de tudo ter acabado entre nós. Talvez eu não tenha me esforçado o suficiente, talvez não tenha conseguido demonstrar o quanto eu me importava com você. Desde a nossa primeira conversa, eu já tinha me encantado com o seu jeito. Você sempre foi uma pessoa boa, e isso só fez eu gostar ainda mais de você.

Quando te vi na academia pela primeira vez, fiquei com medo de ir conversar. Acabei pedindo ajuda ao Kennedy para pedir seu Instagram. Depois daquele dia, você não saiu mais da minha cabeça.

Reconheço que fui insistente e, em alguns momentos, invasivo. Peço desculpas de verdade por isso. Antes do ano acabar, eu precisava colocar isso pra fora. Tudo o que vivemos, mesmo em pouco tempo, ficou marcado em mim.

Sei que é difícil aceitar quando um ciclo se encerra, e eu entendo que você não queira mais nada. Quero que saiba que ainda gosto de você, mas vou respeitar seu espaço e seguir meu caminho em silêncio. Só espero que você não fique com raiva de mim.

Independentemente de tudo, você foi uma das pessoas mais incríveis que eu conheci. Se um dia quiser conversar ou desabafar, estarei aqui. Eu queria começar 2026 com você, mas entendo que isso não será possível. Então vou fazer o meu melhor para seguir em frente.

Te desejo paz, sorte na sua caminhada, que tudo dê certo com sua fé e que sua jornada seja leve, próspera e feliz.

Sempre vou lembrar com carinho do tempo que passamos conversando, jogando Minecraft e Roblox. Foram momentos simples, mas muito bons. Vou sentir falta, mas sei que vou conseguir superar.

Se puder me desejar boa noite uma última vez, eu agradeceria. 🌙✨
`;

const elemento = document.getElementById("texto");
let i = 0;

function escrever() {
  if (i < texto.length) {
    elemento.innerHTML += texto.charAt(i);
    i++;
    setTimeout(escrever, 55);

  }
}

escrever();
const envelope = document.getElementById("envelope");
const carta = document.getElementById("carta");

envelope.addEventListener("click", () => {
  envelope.classList.add("aberto");

setTimeout(() => {
  envelope.style.display = "none";
  carta.classList.remove("escondida");

  setTimeout(() => {
    escrever();
  }, 800); // pausa emocional
}, 1200);

});
