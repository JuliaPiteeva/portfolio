const parallax = document.querySelector(".parallax");
const layers = document.querySelectorAll(".parallax__layer");

function moveLayersDependsOnScroll(wScroll) {
  Array.from(layers).forEach((layer) => {
    const divider = layer.dataset.speed;
    const strate = (wScroll * divider) / 10;
    layer.style.transform = `translateY(-${strate}%)`;
  });
}

window.addEventListener("scroll", (e) => {
  const wScroll = window.pageYOffset;
  moveLayersDependsOnScroll(wScroll);
});
