class Box{
    constructor(x,y,width,height)
    {
        var options = 
        {
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1

        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
    
        World.add(world,this.body);
    }

        display(){

            var pos = this.body.position;

            var angle = this.body.angle;

            push();//like an on button

            translate(pos.x,pos.y);//by default the rotating position of any object is 0,0 so translate function is used to change it
            rotate(angle);//to rotate the object

            rectMode(CENTER);
            strokeWeight(3);//boundary thickness
            stroke("green");//boundary Colour
            fill(255);
            rect(0,0,this.width,this.height);
            
            pop();//like a stop button

        }

}
