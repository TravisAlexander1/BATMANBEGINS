class Drop{
    constructor(x, y){
        this.raidus = width/60;
        var options = {
            'restitution':0.8,
            'friction': 0.1,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, this.raidus, options);
    };

    update(){
        this.body.position.y += height/40;
        if(this.body.position.y > height){
            this.body.position.x = random(0, width);
            this.body.position.y = random(0, height);
        }
    };
    
    show(){
        fill(255);
        ellipse(this.body.position.x, this.body.position.y, this.raidus, this.raidus);
    };
}