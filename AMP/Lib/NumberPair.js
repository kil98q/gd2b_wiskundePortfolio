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
  gcd()
  {
    var a = this.a;
    var b = this.b;
    var t = 0;
    while (b!=0){
      t = b;
      b = a % b;
      a = t;

    }
    return a;
  }
}
class Ratio extends NumberPair
{
  //Niks in maar er staat nu wel iets haha
  constructor(divident,divider){
    super(divident,divider);
    this.divident = divident;
    this.divider = divider;
  }
  add(ratio){
    let divident = this.divident * ratio.divider + ratio.divident *this.divider;
    let divider = this.divider * ratio.divider;
    var ans = new Ratio(divident,divider);
    return ans;
  }
  simplify()
  {
    let _Numberpair = new NumberPair(this.divident,this.divider);
    let _NumberpairDivider = _Numberpair.gcd();
    return new Ratio(_Numberpair.a/_NumberpairDivider,_Numberpair.b/_NumberpairDivider);
  }
}
