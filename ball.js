class Ball {
    ellipse(x, y, w, [h]){ 
     var options = {
      'restitution':1,
   }
       this.body = Bodies.rectangle(x, y, w, h, [detail]);
       this.width = width;
       this.height = height;
       World.add(world, this.body);
     }
     display(){
       var pos =this.body.position;
      
       rectMode(CENTER);
       fill("green");
       
       
     }
   }