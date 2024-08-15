        // Cria e mostra os elementos do Jogo na tela
function createAssets(scene) {
    scene.add.image(500, 210, "fundo"); // mostra o tamanho total da imagem da tela, com pontos x, y e a imagem.
    //scene.add.image(500, 480, "plat");
    plataforma = scene.physics.add.staticGroup();// sofre fisica em termo de colisão sem sofrer a gravidade.
    plataforma.create(500, 480, "plat");

       //player

    //scene.add.image(500, 250, "player");
    player = scene.physics.add.sprite(500, 250, "player");
    player.setCollideWorldBounds(true); // ele limita o movimento dentro da tela.
    player.setBounce(0.2);
    criarAnimacao(scene);
    player.anims.play("parado", true);

    // Star: coletavel
    var pos = Phaser.Math.FloatBetween(100, 900);
    star = scene.physics.add.sprite(pos, 0, "star");
    star.setBounce(0.2);

        // Bombs
        bombs = scene.physics.add.group();

       // Colliders
    
    scene.physics.add.collider(player, plataforma); // cria a colisão entre a plataforma e o player.
    scene.physics.add.collider(star, plataforma);
    scene.physics.add.overlap(star, player, coletarStar);
    scene.physics.add.collider(bombs, plataforma);
    scene.physics.add.overlap(bombs, player, gameOver);


      // Entrada do Teclado 
    teclado = scene.input.keyboard.createCursorKeys();

      // HUD - Head ups display
      var configTxt={
        fontSize: "25px",
        fontFamily: "Arial Black",
      };
      pontosTxt = scene.add.text(20, 20,"Pontos: 0", configTxt);

}
function gameOver( player, bombs) {
    player.setVisible(false);
    isGameOver = true;
    var configTxt={
        fontSize: "65px",
        fontFamily: "Arial Black",
      };
      player.scene.add.text(300, 200,"Game Over", configTxt);

      player.scene.input.once("pointerdown",(player)=>{
        player.scene.star("Game");
 });
}

function coletarStar(star, player) {
    let pos = Phaser.Math.FloatBetween(100, 900);
    star.setX(pos);
    star.setY(0);
    star.setVelocityY(0);
    pontos = pontos + 10;
    pontosTxt.setText("Pontos: " + pontos);

    // CRIAR BOMBA
    bomb = bombs.create(pos, 0, "bombs");
    bomb.setBounce(1); // quicada maior
    bomb.setCollideWorldBounds(true); // não sai da cena.
    bomb.setVelocity(50);
}
function criarAnimacao(scene) {
    var parado = {
        key: "parado",
            frames:[{key: "player", frame: 4}],
    }
    scene.anims.create(parado);

    var left = {
        key: "left",
            frames:scene.anims.generateFrameNumbers("player", {start: 0, end: 3}),
            frameRate: 10, //taxa de velocidade.
            repeat: -1, // para ficar so repetindo.
    };
    scene.anims.create(left);

    var right = {
        key: "right",
            frames:scene.anims.generateFrameNumbers("player", {start: 5, end: 8}),
            frameRate: 10, //taxa de velocidade.
            repeat: -1, // para ficar so repetindo.
    };
    scene.anims.create(right);
}