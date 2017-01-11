var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var Vector = new Vector2(3,-4);
var ballLocation = new Vector2(100 ,100);
var screenSize = new Vector2(800,480);
var ball = new Point(ballLocation.x,ballLocation.y,50,"blue");

setInterval(loop,10);

function loop() {
  ballLocation.x += Vector.x;
  ballLocation.y += Vector.y;
  ball.x = ballLocation.x;
  ball.y = ballLocation.y;
  context.clearRect(0,0,800,480)
  ball.draw(context);
  console.log(ballLocation.x);
  if ((ballLocation.y) < !screenSize.y){
    Vector.invert();
    Vector.x = - Vector.x;
  }
  if ((ballLocation.y) > screenSize.y){
    Vector.invert();
    Vector.x = - Vector.x;
  }
  if ((ballLocation.x) < !screenSize.x){
    Vector.invert();
    Vector.y = - Vector.y;
  }
  if ((ballLocation.x) > screenSize.x){
    Vector.invert();
    Vector.y = - Vector.y;
  }
}
