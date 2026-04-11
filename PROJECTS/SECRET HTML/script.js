const btn1=document.getElementsByClassName("btn1")[0];
const btn2=document.getElementsByClassName("btn2")[0];

let btn1_count = 0;
let btn2_count = 0;

btn1.addEventListener("click", () => {
  btn1_count++;
  checkSecret();

  console.log("btn1_count ", btn1_count);
});

btn2.addEventListener("click", () => {
  btn2_count++;
  checkSecret();
  console.log("btn2_count ",btn2_count);
});

function checkSecret() {
  if (btn1_count === 3 && btn2_count === 2) {
    window.location.href = "secret.html"; // Redirect to secret.html
    btn1_count = 0;
    btn2_count = 0;
  }
}
