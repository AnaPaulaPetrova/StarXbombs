// Função responsável pelo carregamento dos sprites.
function preloadAssets(scene){
    console.log(scene);

    scene.load.image( "fundo", "./assets/fundo.png"); // Cenário.
    scene.load.image( "plat", "./assets/plataforma.png");//mostra a imagem na tela

// PLAYER 

scene.load.spritesheet("player", "./assets/player.png", {frameWidth: 32, frameHeight: 48,});


// Coletável
scene.load.image("star", "./assets/star.png");

 // inimigos: bombs
 scene.load.image("bombs", "./assets/bomb.png");
}