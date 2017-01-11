var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var info = document.getElementById('info');

setInterval(loop,10);

var Vector = new Vector2(2,3);
var ball = new Point(100,100,10,"red");
function loop() {
  ball.x += Vector.x;
  ball.y += Vector.y;
  info.innerHTML = "Mignigtudde: "+ Vector.magnitude() + "<br>"+"UNGLE: " + Vector.angle()+ "<br>"+"CURDUNUTS: "+ball.x+ ", "+ ball.y;
  context.clearRect(0,0,canvas.width,canvas.height);
  ball.draw(context);
  if (ball.x<ball.r || ball.x>800-ball.r) {
    Vector.x = -Vector.x;
  }
  if (ball.y<ball.r || ball.y>600-ball.r) {
    Vector.y = -Vector.y;
  }
}
