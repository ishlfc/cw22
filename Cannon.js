class Cannon {
    constructor(x,y,w,h,angle) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
        this.cannon_image = loadImage("./assets/canon.png")
        this.cannon_base = loadImage("./assets/cannonBase.png");
    }
    display() {
        //code to create cannon top
        push();
            imageMode(CENTER);
            image(this.cannon_image,this.x,this.y,this.w, this.h);
            
        pop();
        //code to create cannon bottom
        image(this.cannon_base,70, 20, 200, 200);
        noFill();
    }
}