class Umbrella{
    constructor(x, y){
        this.raidus = width/60;
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, this.raidus, options);
        this.images = [];
        for(var i = 1; i < 9; i++){
            this.images[i] = loadImage('images/Walking Frame/walking_' + i + '.png');
        }
        this.imageNum = 8;
    };

    update(){
        if(frameCount % 3 === 0){
            this.imageNum--;
            if(this.imageNum < 1){
                this.imageNum = 8;
            }
        }
    };

    show(){
        image(this.images[this.imageNum], this.body.position.x, this.body.position.y, width/2, height/2);
    };
}