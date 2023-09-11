function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Imagem de Mateus Pinheiro fazendo um joia com um fone de ouvido amarelo"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mateus Pinheiro sorrindo em um banheiro com fundo amarelo"
    )
  }

  // substituir a imagem
  // se tiver light mode, adicionar a imagem light
  // se tiver dark mode, manter a imagem normal
}
