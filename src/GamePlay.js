GamePlayManager = {   //ObjetoGamePlayManager
    init: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //Haciendo nuestro juego totalmente responsivo
        game.scale.pageAlignHorizontally = true; //Centrando nuestro juego horizontalmente
        game.scale.pageAlignVertically = true; // Centrando nuestro juego verticalmente
    },
    preload: function(){
        game.load.image('background', 'assets/images/background.png'); //cargando la imagen del backgroud
        game.load.spritesheet('horse', 'assets/images/horse.png', 84, 156, 2) //Cargando nuestro spritesheet en el cual tomamos el primer cballo de mar indicamos las dimensiones del ancho y el largo en conjunto con cuantas imagenes contiene la imagen principal
    },
    create: function(){
        console.log("Create");
        game.add.sprite(0,0,'background'); // implementando el background en la esquina superior izquierda coordenadas 0,0
        this.horse = game.add.sprite(0,0, 'horse'); //Guardando la instancia de nuestro caballo para poder acceder a sus propiedades, 'this' se ocupa para que este se encuentre dentro de todo nuestro objeto GamePlayManager
        this.horse.frame = 1 //Accediendo a la propiedad frame y toma el dibujo con los ojos abiertos por el 1, si ponemos 0 toma el dibujo con ojos cerrados.
        this.horse.x = game.width/2  //Posicionando nuestro caballo en el centro de la pantalla
        this.horse.y = game.height/2 //Posicionando nuestro caballo en el centro de la pantalla
        this.horse.anchor.setTo(0.5); //Tomando el anchor de nuestro caballo justamente en su centro
    },
    update: function(){
        //this.horse.angle +=1 Rotando nuestro caballo 1 posicion mas cada frame
        var pointerX = game.input.x; //Encontrando las coordenadas de nuestro mouse en X
        var pointerY = game.input.y; //Encontrando las coordenadas de nuestro mouse en Y

        var distX= pointerX - this.horse.x; //Sacando la distancia en X que existe entre nuestro caballo y el mouse
        var distY= pointerY - this.horse.y; //Sacando la distancia en Y que existe entre nuestro caballo y el mouse



        console.log('x:' + pointerX);
        console.log('y:' + pointerY);

    }
}


var game = new Phaser.Game(1136,640, Phaser.CANVAS); //instanciamos juego en facer con sus especificaciones

game.state.add('gameplay',GamePlayManager); //Agregamos un estado que le vamos a llamar gameplay y se le asigna el objeto GamePlayMañager
game.state.start('gameplay'); //Llama a cada uno de los metodos

