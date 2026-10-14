import perdido from "../assets/games-icons/perdido-no-algoritmo.png";

export const games = [
  {
    id: "perdido",
    label: "Perdido no Algoritmo",
    image: perdido,
    embed: "/games/perdido-no-algoritimo/index.html",
    description: {
      pt: "Puzzle de programação em blocos: monte uma sequência de comandos (IF, FOR, AND, OR) para guiar o personagem até a estrela, coletando itens e desviando das barreiras. 3 fases e 3 vidas.",
      en: "Block-programming puzzle: build a sequence of commands (IF, FOR, AND, OR) to guide the character to the star, collecting items and dodging barriers. 3 levels and 3 lives.",
    },
    controls: {
      pt: "Mouse: arraste os blocos para reorganizar, clique para apagar. Melhor no computador.",
      en: "Mouse: drag the blocks to rearrange them, click to delete. Best on desktop.",
    },
  }
];