class NumberPair {
  constructor(a,b) {
    this.a = a
    this.b = b
    console.log("allah uckbar",this.a,this.b);
  }
  sum(){
    return this.a+this.b;
  }
  difference(){
    return Math.abs(this.a-this.b)
  }
  division(){
    return this.a/this.b;
  }
  longDivision(){
    answer;
    floor =  Math.floor(this.a/this.b);
    mod = this.a % this.b;
    ans = floor+".";
    for (var i = 0; i < 100; i++) {
    
    }
    return ans
  }
}
