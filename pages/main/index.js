window.onload = function(){
  initMarquee(6);
}

function initMarquee(time) {
  const marqueeElements = document.querySelectorAll('.marquee-element');
  const arrayOfMarqueeElements = gsap.utils.toArray(marqueeElements);
  const widthsOfMarqueeElements = arrayOfMarqueeElements.map((el) => parseInt(window.getComputedStyle(el).width));
  const maxLengthOfMarqueeElement = Math.max(...widthsOfMarqueeElements);
  const lengthOfLastMarqueeElement = widthsOfMarqueeElements.slice(-1)[0];
  const gap = parseFloat(window.getComputedStyle(marqueeElements[0].parentNode).gap);
  let shift = 0;

  gsap.set(marqueeElements, {
    x: (i) => {
      return marqueeElements[i - 1] ? shift += (marqueeElements[i - 1].offsetWidth) + gap : shift += lengthOfLastMarqueeElement + gap;
    }
  });

  gsap.to(marqueeElements, {
    duration: time,
    ease: 'none',
    x: '-=' + shift,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x + shift) % shift - maxLengthOfMarqueeElement),
    },
    repeat: -1,
  });
}