class Box {
     constructor(x,y,w,h){
       var option1 = {
       restitution : 1,
       friction : 1,
       density : 1
    }
    
    this.body = Bodies.rectangle(x,y,w,h,option1);
    World.add(world, this.body);

    this.width = w;
    this.height = h;
}

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
    }
}