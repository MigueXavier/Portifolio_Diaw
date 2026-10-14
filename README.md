# Portfólio Console

Portfólio pessoal com interface de **console de videogame**, inspirada no menu principal do PS4 e feita em **pixel art**. Em vez de uma página rolável, o visitante navega por menus horizontais com o teclado ou o mouse, conhece os projetos e perfis, joga um jogo direto no navegador e entra em contato.

<!-- Adicione aqui uma captura de tela da tela inicial -->

## Funcionalidades

- **Menu estilo PS4:** o item em foco cresce, ganha borda colorida e nome, e uma prévia desfocada da seção aparece embaixo.
- **Perfis:** foto e texto de apresentação.
- **Projetos:** imagem, descrição, papel no projeto, tecnologias e botão para o repositório no GitHub.
- **Jogos:** jogo em Pygame rodando dentro do site, em um modal.
- **Configurações:** idioma (português ou inglês) e tema de cores (Console, Arcade ou Game Boy). As escolhas ficam salvas no navegador.
- **Fale comigo:** formulário que envia a mensagem para o meu e-mail.
- **Barra superior** em todas as telas, com caminho de navegação, botão de voltar e logo.

## Controles

| Ação | Teclado | Mouse / toque |
|---|---|---|
| Mover o foco | ← → (e ↑ ↓ nas configurações) | Clicar no item |
| Abrir / selecionar | Enter | Clicar no item já em foco |
| Voltar | Esc ou Backspace | Botão "Voltar" |

## Tecnologias

- **React** e **Vite**
- **React Router** para as telas e o botão voltar do navegador
- **CSS puro**, com temas feitos de variáveis CSS
- Fontes **Press Start 2P** e **VT323** (Google Fonts)
- **Web3Forms** para o envio do formulário de contato
- **Pygame** + **pygbag** (WebAssembly) para o jogo no navegador
- Hospedagem estática, pronta para o **Vercel**

## Como rodar

Requer o [Node.js](https://nodejs.org) (versão LTS).

```bash
npm install
npm run dev
```

Outros comandos:

```bash
npm run build     # gera o site em dist/
npm run preview   # serve o build localmente
```

### Variáveis de ambiente

O formulário de contato usa uma chave do [Web3Forms](https://web3forms.com), que vincula o formulário ao e-mail que recebe as mensagens. Crie um arquivo `.env.local` na raiz:

```
VITE_WEB3FORMS_KEY=sua_chave_aqui
```

Esse arquivo não vai para o Git. Reinicie o `npm run dev` depois de criá-lo.

## Estrutura

```
src/
├── components/   # Layout, MenuRow, MenuCard, PixelIcon, GameModal...
├── screens/      # Home, seções, perfil, projeto, configurações e contato
├── data/         # listas de seções, perfis, projetos, jogos, idiomas e temas
├── context/      # tema e idioma (salvos no localStorage)
├── i18n/         # dicionários pt.js e en.js
├── styles/       # themes.css (cores) e menu.css
└── assets/       # ícones e imagens em pixel art
public/
├── games/        # build do jogo gerado pelo pygbag
└── photos/       # fotos dos perfis
```

## Personalização

- **Novo projeto ou jogo:** acrescente um item em `src/data/projects.js` ou `games.js`, com `id`, `label` e `image`. Textos longos ficam em dois idiomas: `{ pt: "...", en: "..." }`.
- **Novo tema:** crie um bloco `[data-theme="nome"]` em `src/styles/themes.css` e adicione o tema em `src/data/themes.js`.
- **Textos da interface:** edite `src/i18n/pt.js` e `en.js`. Uma chave que falta aparece na tela com o próprio nome.
- **Ícones:** sprites em PNG de 32x32 com traço opaco e fundo transparente. O `PixelIcon` os colore pelo CSS, então acompanham o tema.

## O jogo

O jogo é o **Perdido no Algoritmo**, um puzzle de programação em blocos feito em Pygame. Ele não faz parte do código do site: é uma página independente gerada pelo pygbag e exibida em um `iframe` dentro do modal.

Para atualizar o jogo:

1. Gere a versão web com `pygbag` a partir do projeto Pygame (o `main.py` precisa ser assíncrono e os sons, em `.ogg`).
2. Copie o conteúdo de `build/web` para `public/games/<nome-do-jogo>/`.
3. Confira o caminho no campo `embed` do `games.js`.

Durante o desenvolvimento, o servidor do Vite não serve bem a página do pygbag. Por isso, no `npm run dev` o `embed` aponta para um servidor estático à parte:

```bash
python -m http.server 8002 --directory public
```

Na versão compilada, o caminho usado é o da própria pasta `public`.

## Publicação

O projeto é um site estático. No Vercel:

1. Importe o repositório (o preset Vite é detectado sozinho).
2. Cadastre a variável `VITE_WEB3FORMS_KEY` em *Settings > Environment Variables*.
3. Mantenha o `vercel.json` na raiz, que redireciona as rotas para o `index.html`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Atenção às letras maiúsculas e minúsculas nos caminhos de arquivos: o servidor diferencia, o Windows não.

## Autor

**Miguel Xavier**, estudante na PUC Minas. [GitHub](https://github.com/MigueXavier)