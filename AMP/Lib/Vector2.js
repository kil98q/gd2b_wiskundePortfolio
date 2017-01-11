class Vector2 {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  invert(){
    this.x = -this.x;
    this.y = -this.y;
  }
  magnitude(){
    return Math.sqrt(this.x*this.x+this.y*this.y);
  }
  angle(){
    return Math.atan2(this.y,this.x);
  }
  scalarMultiple(scalar)
  {
    var ans = new Vector2(this.x*scalar,this.y*scalar);
    return ans;
  }
  add(value)
  {
    temp = new Vector2(this.x+value.x,this.y+value.y);
    this.x = temp.x;
    this.y = temp.y;
  }
  sub(value)
  {
    temp = new Vector2(this.x-value.x,this.y-value.y);
    this.x = temp.x;
    this.y = temp.y;
  }
  normalize(){
    this.x = this.x/this.magnitude();
    this.y = this.y/this.magnitude();
  }
}
