const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world, box

function setup() {
    createCanvas(400,400)

    engine = Engine.create()
    world = engine.world

    var options={
        restitution: 1 
    }

    box = Bodies.circle(200,200,20,options)
    World.add(world,box)

  
}

function draw() 
{
    background(30)
  
}

