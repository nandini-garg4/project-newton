class Rope{
    
constructor(body1,body2,offsetX,offsetY)
{
    this.offsetX=offsetX
    this.offsetY=offsetY
var options={
 bodyA:body1,
 bodyB:body2,
 pointB:{x:this.offsetX,y:this.offsetY}
}

this.rope=Constraint.create(options);
World.add(world,this.rope);
}
display(){

    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;
    strokeWeight(3);
    //line(pointA.x,pointA.y,pointB.x,pointB.y)
    var string1X = pointA.x
        var string1Y = pointA.y
        
        var string2X = pointB.x+this.offsetX
        var string2Y = pointB.y+this.offsetY
        line (string1X,string1Y,string2X,string2Y);
}
}

