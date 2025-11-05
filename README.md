# Spider-Man Multiverso

## Descrição
Este projeto é um site interativo dedicado ao multiverso do Homem-Aranha, apresentando as diferentes versões do herói interpretadas por Tobey Maguire, Andrew Garfield e Tom Holland. O site inclui páginas detalhadas para cada filme, com sinopses, trailers, galerias de imagens e navegação intuitiva. Desenvolvido com HTML, CSS e JavaScript, oferece uma experiência imersiva com carrosséis 3D, modais para vídeos e efeitos visuais dinâmicos.

## Funcionalidades
- **Página Inicial**: Carrossel 3D com cards para cada ator, com efeitos de hover que alteram o fundo da página.
- **Páginas Internas**: Detalhes de cada filme, incluindo ano, diretor, sinopse, botão para assistir trailer (modal com iframe do YouTube) e galeria de imagens.
- **Navegação**: Menu lateral com ícones e links para navegar entre filmes de cada ator.
- **Modal de Trailer**: Reprodução de trailers em modal responsivo, com fechamento via botão, clique fora ou tecla Escape.
- **Responsividade**: Design adaptável para diferentes dispositivos.
- **Vídeos de Fundo**: Vídeos em loop como fundo nas páginas internas para maior imersão.

## Tecnologias Utilizadas
- **HTML5**: Estrutura das páginas.
- **CSS3**: Estilização, incluindo variáveis CSS, flexbox, grid, transições e animações.
- **JavaScript**: Interatividade, como controle do carrossel, modais e eventos de hover.
- **Ferramentas**: Live Server (porta 5501) para desenvolvimento local no VS Code.

## Como Executar o Projeto
1. **Clone o repositório**:
```
git clone https://github.com/GelsonBario/Aranhaverso.git 
```

```
cd Aranhaverso
```


2. **Abra no VS Code**:
- Instale a extensão "Live Server" se ainda não tiver.
- Abra o arquivo `index.html` na raiz do projeto.
- Clique com o botão direito e selecione "Open with Live Server" (ou use o atalho Alt+L Alt+O).
- O site será aberto no navegador na porta 5501.

3. **Navegação**:
- Na página inicial, use os controles (01, 02, 03) para girar o carrossel.
- Clique nos cards para acessar as páginas de cada ator.
- Nas páginas internas, navegue entre filmes usando o menu lateral e assista aos trailers clicando nos botões.

## Estrutura do Projeto

```
spider-man-multiverso/ 
├── assets/ 
│ ├── css/ 
│ │ ├── components/ 
│ │ │ ├── _gallery.css 
│ │ │ ├── _link-button.css 
│ │ │ ├── _modal.css 
│ │ │ ├── _navigator.css 
│ │ │ └── _pills.css 
│ │ ├── global.css 
│ │ ├── home-page-styles.css 
│ │ ├── internal.css 
│ │ ├── reset.css 
│ │ └── settings.json 
│ ├── images/ 
│ │ ├── icons/ 
│ │ │ ├── spider.svg 
│ │ │ ├── spiderman1-andrew.png 
│ │ │ ├── spiderman1-tom.png 
│ │ │ └── spiderman1.png 
│ │ ├── spiderman-andrew/ 
│ │ │ ├── movie-01/ 
│ │ │ │ ├── gallery/ 
│ │ │ │ │ ├── image-01.png 
│ │ │ │ │ ├── image-02.png 
│ │ │ │ │ └── image-03.png 
│ │ │ │ └── logo.png 
│ │ │ └── movie-02/ 
│ │ │ ├── gallery/ 
│ │ │ │ ├── image-01.png 
│ │ │ │ ├── image-02.png 
│ │ │ │ └── image-03.png 
│ │ │ └── logo.png 
│ │ ├── spiderman-tobey/ 
│ │ │ ├── movie-01/ 
│ │ │ │ ├── gallery/ 
│ │ │ │ │ ├── image-01-full.jpg 
│ │ │ │ │ ├── image-02-full.jpg 
│ │ │ │ │ └── image-03-full.jpg 
│ │ │ │ └── logo.png 
│ │ │ ├── movie-02/ 
│ │ │ │ ├── gallery/ 
│ │ │ │ │ ├── image-01.png 
│ │ │ │ ├── image-02.png 
│ │ │ │ ├── image-03.png 
│ │ │ │ └── logo.png 
│ │ └── movie-03/ 
│ │ ├── gallery/ 
│ │ │ ├── image-01.png 
│ │ │ ├── image-02.png 
│ │ │ ├── image-03.png 
│ │ │ └── image-04.png 
│ │ └── logo.png 
│ ├── spiderman-tom/ 
│ │ ├── movie-01/ 
│ │ │ ├── gallery/ 
│ │ │ │ ├── image-01.png 
│ │ │ │ ├── image-02.png 
│ │ │ │ └── image-03.png 
│ │ │ └── logo.png 
│ │ ├── movie-02/ 
│ │ │ ├── gallery/ 
│ │ │ │ ├── image-01.jpeg 
│ │ │ │ ├── image-02.jpeg 
│ │ │ │ └── image-03.jpeg 
│ │ │ └── logo.png 
│ │ └── movie-03/ 
│ │ ├── gallery/ 
│ │ │ ├── image-01.jpeg 
│ │ │ ├── image-02.jpeg 
│ │ │ └── image-03.jpeg 
│ │ └── logo.png 
│ ├── pic-sm-bg-01.jpg 
│ ├── pic-sm-bg-02.jpg 
│ ├── pic-sm-bg-03.jpg 
│ ├── spider-man-01.png 
│ ├── spider-man-02.png 
│ ├── spider-man-03.png
│ ├── spider-man-background.jpg 
│ └── background.png 
│ ├── js/ 
│ │ ├── home.js 
│ │ └── internal.js 
│ └── videos/ 
│ ├── amazing-spiderman-2014-trailer.mp4 
│ ├── amazing-spiderman2-2014-trailer.mp4 
│ ├── spiderman-2002-trailer.mp4 
│ ├── spiderman-2002-trailer-teste.mp4 
│ ├── spiderman-2017-trailer.mp4 
│ ├── spiderman2-2004-trailer.mp4 
│ ├── spiderman2-2019-trailer.mp4 
│ ├── spiderman3-2007-trailer.mp4
│ └── spiderman3-2021-trailer.mp4 
├── pages/ 
│ ├── andrew-garfield/ 
│ │ ├── spiderman1.html 
│ │ └── spiderman2.html 
│ ├── tobey-maguire/ 
│ │ ├── spiderman1.html 
│ │ ├── spiderman2.html 
│ │ └── spiderman3.html 
│ └── tom-holland/ 
│ ├── spiderman1.html 
│ ├── spiderman2.html 
│ └── spiderman3.html 
├── index.html 
└── README.md
```


## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests. Para contribuir:
- Faça um fork do repositório.
- Crie uma branch para sua feature: `git checkout -b minha-feature`.
- Commit suas mudanças: `git commit -m 'Adiciona nova feature'`.
- Push para a branch: `git push origin minha-feature`.
- Abra um Pull Request.
