class Bird{
    constructor(x,y)
    {
        var options = 
        {
            'restitution' : 0.5,
            'friction' : 1,
            'density' : 1.5

        }
        
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
    
        World.add(world,this.body);//adding this.body to world

    }

        display(){

            var pos = this.body.position;
            pos.x = mouseX;//controlling the bird with the mouse pointer
            pos.y = mouseY;

            var angle = this.body.angle;

            push();

            translate(pos.x,pos.y);
            rotate(angle);

            rectMode(CENTER);
            strokeWeight(3);
            stroke("blue");
            fill("green");
            rect(0,0,this.width,this.height);
            
            pop();

        }

}