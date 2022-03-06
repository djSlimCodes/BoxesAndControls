import "./styles.css";
document.querySelector("#container").append("Squares go here!");

console.clear();

const buttonsParent = document.getElementById("buttonsParent");

let selectedBox = [0, 0];

buttonsParent.addEventListener("click", (ev) => {
  if (!ev.target.closest("button")) return;

  const id = ev.target.id;
  const [x, y] = selectedBox;
  const previosIndex = [...selectedBox];

  if (id === "up") {
    if (Number(x) === 0) return;
    selectedBox[0] -= 1;
  } else if (id === "left") {
    if (Number(y) === 0) return;
    selectedBox[1] -= 1;
  } else if (id === "right") {
    if (Number(y) === 2) return;
    selectedBox[1] += 1;
  } else if (id === "down") {
    if (Number(x) === 2) return;
    selectedBox[0] += 1;
  }

  const prevBox = document.getElementById(
    `${previosIndex[0]}-${previosIndex[1]}`
  );
  const nextBox = document.getElementById(
    `${selectedBox[0]}-${selectedBox[1]}`
  );

  prevBox.classList.remove("red");
  nextBox.classList.add("red");
});
