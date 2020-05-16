const parallaxBudda = document.querySelector(".parallax-budda");
const layersBudda = document.querySelectorAll(".parallax__layer-budda");

function moveLayersDependsOnScroll(wScroll) {
  Array.from(layersBudda).forEach((layer) => {
    const divider = layer.dataset.speed;
    const strate = (wScroll * divider) / 10;
    layer.style.transform = `translateY(-${strate}%)`;
  });
}

window.addEventListener("scroll", (e) => {
  const wScroll = window.pageYOffset;
  //   let windowMargin = -window.innerHeight; //отступ сверху
  let parallaxContainerRect = parallaxBudda.getBoundingClientRect(); //положение блока, вернет объект
  let parallaxContainerPosition = parallaxContainerRect.top;
  let newScroll = Math.abs(parallaxContainerPosition);

  if (parallaxContainerPosition <= 0) {
    moveLayersDependsOnScroll(newScroll);
  } else {
    Array.from(layersBudda).forEach((layer) => {
      const goHome = 0;
      layer.style.transform = `translateY(-${goHome}%)`;
    });
  }
});
