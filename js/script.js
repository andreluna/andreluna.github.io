function mostrarImagens() {
    var imagens = [
        'images/000.png', 'images/001.png', 'images/002.png', 
        'images/003.png', 'images/004.png', 'images/005.png',
        'images/006.png', 'images/007.png', 'images/008.png',
        'images/009.png', 'images/010.png', 'images/011.png',
        'images/012.png', 'images/013.png', 'images/014.png',
        'images/015.png', 'images/016.png', 'images/017.png',
        'images/018.png', 'images/019.png', 'images/020.png',
        'images/021.png'
    ];
    var imagensMostradas = [];
    var imagem1 = document.getElementById('imagem1');
    var imagem2 = document.getElementById('imagem2');
    var imagem3 = document.getElementById('imagem3');
  
    while (imagensMostradas.length < 3) {
      var imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
      if (imagensMostradas.indexOf(imagemAleatoria) === -1) {
        imagensMostradas.push(imagemAleatoria);
      }
    }
  
    imagem1.src = imagensMostradas[0];
    imagem2.src = imagensMostradas[1];
    imagem3.src = imagensMostradas[2];
}
  