var config = {
    width: 1000,
    height: 500,
    scale: {autoCenter: Phaser.Scale.CENTER_BOTH}, //centraliza a tela na horizontal.
    scene: {
        preload: preload,     //carregamento
        create: create,         // criação
        update: update,        //atualização, tambem conhecido como loop infinito.
    },
    physics: {
        default: "arcade",
        arcade:{
            gravity:{ y: 300}
        },
    },
};

var game = new Phaser.Game(config); // criando uma intancia do jogo. cria uma tela preta na web.

function preload() {
    preloadAssets(this);
}
function create() {
    createAssets(this);
}
function update() {
    updateGame(this);
}