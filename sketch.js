const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

const drops = [];
var player;
var thunders = [];
var thunder;
var thunderlimit = 0;
var thunderMaxlimit = 20;

function preload(){
    for(var i = 1; i < 5; i++){
        thunders[i] = loadImage('images/thunderbolt/' + i + '.png');
    }
}

function setup(){
    createCanvas(windowWidth/4, windowHeight/1.3);
    engine = Engine.create();
    world = engine.world;

    player = new Umbrella(width/2, height/1.3);
    for(var i = 0; i < 50; i++){
        drops.push(new Drop(random(0, width), random(-height/2, 0)));
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    imageMode(CENTER);
    noStroke();

    if(frameCount % 120 === 0){
        thunder = Math.round(random(1, 4));
    }

    if(thunder){
        image(thunders[thunder], width/2, 0, width, height);
        thunderlimit++;
        if(thunderlimit > thunderMaxlimit){
            thunder = null;
            thunderlimit = 0;
        }
    }

    for(var i = 0; i < drops.length; i++){
        drops[i].show();
        drops[i].update();
    }

    player.show();
    player.update();
}   

