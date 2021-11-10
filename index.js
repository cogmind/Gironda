let arr = [10, 8, 6, 15];
let mat = [0.5, 0.75, 1.0, 0.35];

function onClickButton() {
  let maxrep6 = document.getElementById("maxrep6").value;

  let out = [];
  for (let m of mat) {
    out.push(Math.round(maxrep6 * m));
  }
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    output += arr[i] + " x " + out[i] + "kg <br />";
  }
  document.getElementById("out").innerHTML = output;
}
