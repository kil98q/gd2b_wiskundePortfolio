class Point {
  constructor(x,y,r,color) {
    this.x = x || 0;
    this.y = y || 0;
    this.r = r || 50;
    this.color = color || "Purple";
  }
  draw(context) {
    context.beginPath();
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.fillStyle = this.color;
    context.lineWidth =5;
    context.fill();
    context.stroke();
    context.closePath();
  }
}
