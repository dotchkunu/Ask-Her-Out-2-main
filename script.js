function moveRandomEl(elm) {
  const padding = 20;
  const maxX = window.innerWidth - elm.offsetWidth - padding;
  const maxY = window.innerHeight - elm.offsetHeight - padding;

  const newX = Math.max(padding, Math.random() * maxX);
  const newY = Math.max(padding, Math.random() * maxY);

  elm.style.position = "fixed";
  elm.style.left = `${newX}px`;
  elm.style.top = `${newY}px`;
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  const evadeMouse = (event) => {
    const rect = moveRandom.getBoundingClientRect();
    const nearX = Math.abs(event.clientX - rect.left) < 120;
    const nearY = Math.abs(event.clientY - rect.top) < 80;

    if (nearX && nearY) {
      moveRandomEl(moveRandom);
    }
  };

  moveRandom.addEventListener("mouseenter", function (event) {
    event.preventDefault();
    moveRandomEl(event.target);
  });

  moveRandom.addEventListener("mousemove", evadeMouse);
  moveRandom.addEventListener("touchstart", function (event) {
    event.preventDefault();
    moveRandomEl(event.target);
  }, { passive: false });
  moveRandom.addEventListener("click", function (event) {
    event.preventDefault();
    moveRandomEl(event.target);
  });

  document.addEventListener("mousemove", evadeMouse);
  window.addEventListener("resize", () => moveRandomEl(moveRandom));
  moveRandomEl(moveRandom);
}