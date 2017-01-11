a_up = document.getElementById('a_up');
a_down = document.getElementById('a_down');
b_up = document.getElementById('b_up');
b_down = document.getElementById('b_down');
c_up = document.getElementById('c_up');
c_down = document.getElementById('c_down');
button = document.getElementById('button')

button.addEventListener("click",calcy)
function calcy() {
  a = new Ratio(a_up.value,a_down.value);
  b = new Ratio(b_up.value,b_down.value);
  c = a.add(b);
  c_up.value = c.divident;
  c_down.value = c.divider;
  console.log(c);
}
