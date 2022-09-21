window.addEventListener('DOMContentLoaded', function () {
  initMarquee(30);
  const hand = document.querySelector('.hand');
  const topTitle = document.querySelector('.main-title.first');
  const bottomTitle = document.querySelector('.main-title.second');
  const logo = document.querySelector('.logo');
  const mediaLinks = document.querySelector('.links');
  const year = document.querySelector('.year');
  const button = document.querySelector('.connect-button');
  const designText = document.querySelector('.design');
  const asideWrapper = document.querySelector('.body > .wrapper');
  const asideInsuline = document.querySelector('.to-domain-insuline-title');
  const asideTitle = document.querySelector('.to-domain-title');
  const asideButton = document.querySelector('.to-domain-button');
  TweenMax.staggerTo([hand, topTitle, bottomTitle], 0.5, {
    top: 0,
    stagger: 0.1,
  })
    .to([logo, mediaLinks], 0.5, {
      top: 0,
      delay: 0.1
    })
    .to(year, 0.5, {
      top: 0,
      delay: 0.1
    })
    .to([button, designText], 0.5, {
      top: 0,
      delay: 0.1
    })
    .to(asideWrapper, 0.5, {
      right: 0,
      width: '144px',
      overflow: 'visible',
    })
    .staggerFrom([asideInsuline, asideTitle, asideButton], 0.5, {
      top: '-104px',
      stagger: 0.1,
    })
});

function initMarquee(time) {
  const marqueeElements = document.querySelectorAll('.marquee-element');
  const arrayOfMarqueeElements = gsap.utils.toArray(marqueeElements);
  const widthsOfMarqueeElements = arrayOfMarqueeElements.map((el) => parseInt(window.getComputedStyle(el).width));
  const maxLengthOfMarqueeElement = Math.max(...widthsOfMarqueeElements);
  const lengthOfLastMarqueeElement = widthsOfMarqueeElements.slice(-1)[0];
  const lengthOfFirstMarqueeElement = widthsOfMarqueeElements[0];
  const gap = parseFloat(window.getComputedStyle(marqueeElements[0].parentNode).gap);
  let shift = 0;

  gsap.set(marqueeElements, {
    visibility: 'visible',
    x: (i) => {
      return marqueeElements[i - 1]
        ? shift += (marqueeElements[i - 1].offsetWidth) + gap
        : shift += lengthOfLastMarqueeElement + gap;
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