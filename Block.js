class Block{
    constructor(x, y, width, height,) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.0,
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 255;
        World.add(world, this.body);
      }
      display(){
       // console.log(this.body.speed);
        if (this.body.speed<5){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("pink")
        rect(pos.x, pos.y, this.width, this.height);
        }
        else{
          World.remove(world,this.body);
          push();
          this.visiblity = this.visiblity-2;
          tint(255, this.visiblity);
          pop();
        }
      }
        Score()
        {
          if(this.visiblity<0 && this.visiblity>-105)
          {
            score++
            console.log(this.visiblity);
          }
        }
        
      }
