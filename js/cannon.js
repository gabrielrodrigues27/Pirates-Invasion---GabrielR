class Cannon{
    constructor(x,y,width,height,angle){
        this.x = x
        this.y = y
        this.w = width
        this.h = height
        this.angle = angle
        this.baseimg = loadImage("./assets/cannonBase.png")
        this.cannonimg = loadImage("./assets/canon.png")
        
    }


    display(){
       //cano do canhao
        push ()
        imageMode(CENTER)
        image(this.cannonimg,this.x,this.y,this.w,this.h) 
        pop ()
       // base do canhao
       
        image(this.baseimg,70,20,200,200)
    }
}