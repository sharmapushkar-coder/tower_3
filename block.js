class Block{
    constructor(x, y, width, height) {
      //super(x,y);
        var options = {
           
            restitution :0.9,
            friction :0.5,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.remove=true

      }
      display(){
        if(this.body.speed < 5){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
          
         //super.display();
         }
         else{
           World.remove(world, this.body);
           if(this.remove==true){
            this.remove=false;
           }
          }
      

      }
}