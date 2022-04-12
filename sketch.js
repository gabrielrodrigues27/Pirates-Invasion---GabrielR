//importando os módulos de Matter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//declarando as variáveis de configuração
var engine, world

//outras variáveis
var ground;
var backgroundImg
var tower, towerImg
var cannon
var angle = 20
var cannonball


function preload() {
  backgroundImg = loadImage("./assets/background.gif")
  towerImg = loadImage("./assets/tower.png")
}

function setup() {
  canvas = createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15

  //options dos corpos
  var options = {
    isStatic: true
  }

  //criando o solo
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options)
  World.add(world, ground)

  //criando a torre
  tower = Bodies.rectangle(160, 350, 160, 310, options)
  World.add(world, tower)

  // criando canhao
  cannon = new Cannon(180, 110, 130, 100, angle)

  //criando a bala de canhão
  cannonball = new CannonBall(cannon.x, cannon.y)


}

function draw() {
  background(189);
  //função image para exibir imagens na tela
  image(backgroundImg, 0, 0, width, height)

  Engine.update(engine);

  //exibindo o solo na tela
  rect(ground.position.x, ground.position.y, width * 2, 1)

  //exibindo a torre na tela
  push()//inicializa uma nova configuração
  imageMode(CENTER)
  image(towerImg, tower.position.x, tower.position.y, 160, 310)
  pop()//volta para a configuração antiga

  //exibindo o canhao na tela
  cannon.display()

  //exibindo a bala de canhão
  cannonball.display()


  text(mouseX + " / " + mouseY, mouseX, mouseY)
}
function keyReleased(){
  if(keyCode==DOWN_ARROW){
    cannonball.shoot()
  }
}