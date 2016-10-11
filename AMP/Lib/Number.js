Number.prototype.gayAssFunction = function () {
    gayAssAnswer = false;
    if ((this% 1) ==0){
      gayAssAnswer = true
    }
    return gayAssAnswer;
};
Number.prototype.isDivisor = function(num){
  superGayAssFunctionAnswer = false;
  if ((this/num).gayAssFunction()) {
    superGayAssFunctionAnswer = true
  }
  return superGayAssFunctionAnswer;
}
Number.prototype.divisors = function () {
  ans = [];
  for(i=0;i<this;i++){
    if(this.isDivisor(i)){
      ans[ans.length] = i;
    }
  }
  return ans;
};
Number.prototype.primeFactorization = function () {
  var ans = [];
  var primes =[];
  var temp = this;
  for(let i = 2 ; i<=this/2;i++){
    if(i.divisors().length == 1){
      primes.push(i);
    }
  }
  for(let i = 0;i<primes.length;i++){
    while (temp.isDivisor(primes[i])) {
      ans.push(primes[i]);
      temp = temp / primes[i];
    }
  }

  return ans;
};
