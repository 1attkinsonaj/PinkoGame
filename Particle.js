class Particle {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0.2
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.v_color 
        var ColorChanger =Math.round(random(1,5))
       // var ColorChanger=3
        World.add(world, this.body);

        if(ColorChanger===1){
            this.v_color="red"
        }
        else if(ColorChanger===2){
            this.v_color="blue"
        }
        else if(ColorChanger===3){
            this.v_color="green"
        }
        else if(ColorChanger===4){
            this.v_color="yellow"
        }
        else if(ColorChanger===5){
            this.v_color="orange"
        }

        else {this.v_color="white"}
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.v_color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};