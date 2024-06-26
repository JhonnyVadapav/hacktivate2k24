// Some random colors
const colors = ["#ED1996ff", "#fff", "#F140A9ff", "#C489CEff", "#00AEEFff", "#59C9F3ff"];


const numBalls = 100;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.textContent = Math.random() < 0.5 ? "0" : "1"; // Generate 0's and 1's randomly
  ball.style.color = ball.textContent === "0" ? "orange" : "black"; // Set color based on content
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random() / 2}em`;
  ball.style.height = ball.style.width;
  balls.push(ball);
  document.body.append(ball);
} // Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [{
        transform: "translate(0, 0)"
      },
      {
        transform: `translate(${to.x}rem, ${to.y}rem)`
      }
    ], {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});