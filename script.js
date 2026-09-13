function moveRandomEl(elm) {
  const padding = 30;
  const maxX = Math.max(10, window.innerWidth - elm.offsetWidth - padding);
  const maxY = Math.max(10, window.innerHeight - elm.offsetHeight - padding);

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  elm.style.position = "fixed";
  elm.style.left = `${newX}px`;
  elm.style.top = `${newY}px`;
  elm.style.zIndex = "9999";
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  moveRandom.setAttribute("href", "#");
  moveRandom.style.position = "fixed";
  moveRandom.style.zIndex = "9999";
  moveRandom.style.transition = "left 0.25s ease, top 0.25s ease";

  const moveAway = (event) => {
    if (event) event.preventDefault();
    moveRandomEl(moveRandom);
  };

  const evadeMouse = (event) => {
    if (!event) return;
    const rect = moveRandom.getBoundingClientRect();
    const nearX = Math.abs(event.clientX - rect.left) < 110;
    const nearY = Math.abs(event.clientY - rect.top) < 80;

    if (nearX && nearY) {
      moveAway();
    }
  };

  moveRandom.addEventListener("mouseenter", moveAway);
  moveRandom.addEventListener("mousemove", evadeMouse);
  moveRandom.addEventListener("touchstart", function (event) {
    event.preventDefault();
    moveAway();
  }, { passive: false });
  moveRandom.addEventListener("click", function (event) {
    event.preventDefault();
    moveAway();
  });

  document.addEventListener("mousemove", evadeMouse);
  window.addEventListener("resize", () => moveRandomEl(moveRandom));
  setInterval(moveAway, 1600);
  moveRandomEl(moveRandom);
}