class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.03,
            length:100,
        }
        this.body = Constraint.create(options)
        World.add(world,this.body)
    }
    display(){
    var pointA = this.body.bodyA.position;
    var pointB = this.body.bodyB.position;
    line(pointA.x,pointA.y,pointB.x,pointB.y); 


    }
    
} 