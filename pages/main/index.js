window.addEventListener('DOMContentLoaded', function () {
  initMarquee(30);
  animateMainPage();
});

function animateMainPage() {
  const hand = document.querySelector('.hand');
  const topTitle = document.querySelector('.main-title.first');
  const bottomTitle = document.querySelector('.main-title.second');
  const borders = document.querySelectorAll('.border');
  const logo = document.querySelector('.logo');
  const button = document.querySelector('.connect-button');
  const mediaLinks = document.querySelector('.links');
  const year = document.querySelector('.year');
  const designText = document.querySelector('.design');
  const asideBlock = document.querySelector('.to-domain');
  const asideWrapper = document.querySelector('.body > .wrapper');
  const asideInsuline = document.querySelector('.to-domain-insuline-title');
  const asideTitle = document.querySelector('.to-domain-title');
  const asideButton = document.querySelector('.to-domain-button');
  asideBlock.addEventListener('click', leavingFromMain);
  TweenMax.staggerTo([hand, topTitle, bottomTitle], 0.5, {
    ease: 'power1.inOut',
    top: 0,
    stagger: 0.1,
  })
    .to(borders, 0.5, {
      ease: 'power1.inOut',
      width: '100%',
      delay: -0.4,
    })
    .to([logo, mediaLinks], 0.5, {
      ease: 'power1.inOut',
      top: 0,
      delay: -0.4,
    })
    .to(year, 0.5, {
      ease: 'power1.inOut',
      top: 0,
      delay: -0.4,
    })
    .to([button, designText], 0.5, {
      ease: 'power1.inOut',
      top: 0,
      delay: -0.4,
    })
    .to(asideWrapper, 0.5, {
      ease: 'power1.inOut',
      right: 0,
      width: '144px',
      overflow: 'visible',
      delay: 0.4,
    })
    .staggerFrom([asideInsuline, asideTitle, asideButton], 0.5, {
      ease: 'power1.inOut',
      top: '-104px',
      stagger: 0.1,
    });
}

function leavingFromMain() {
  const hand = document.querySelector('.hand');
  const topTitle = document.querySelector('.main-title.first');
  const bottomTitle = document.querySelector('.main-title.second');
  const logo = document.querySelector('.logo');
  const mediaLinks = document.querySelector('.links');
  const year = document.querySelector('.year');
  const button = document.querySelector('.connect-button');
  const designText = document.querySelector('.design');
  const aside = document.querySelector('.to-domain');
  const asideInsuline = document.querySelector('.to-domain-insuline-title');
  const asideTitle = document.querySelector('.to-domain-title');
  const asideButton = document.querySelector('.to-domain-button');
  aside.classList.add('opened');
  gsap.set(aside, {
    right: 0,
    zIndex: 1,
  });

  TweenMax.staggerTo([asideInsuline, asideTitle, asideButton], 0.5, {
      ease: 'power1.inOut',
      top: '-104px',
      stagger: 0.1,
    })
    .to(button, 0.5, {
      ease: 'power1.inOut',
      top: -48,
      delay: -0.2,
    })
    .to(designText, 0.5, {
      ease: 'power1.inOut',
      top: 40,
      delay: -0.5,
    })
    .to(year, 0.5, {
      ease: 'power1.inOut',
      top: 40,
      delay: -0.4,
    })
    .to(mediaLinks, 0.5, {
      ease: 'power1.inOut',
      top: 40,
      delay: -0.5,
    })
    .to(logo, 0.5, {
      ease: 'power1.inOut',
      top: -48,
      delay: -0.4,
    })
    .staggerTo([hand, topTitle, bottomTitle], 0.5, {
      ease: 'power1.inOut',
      top: 100,
      stagger: 0.1,
      delay: 0.1,
    })
    .to(aside, 1.5, {
      width: '100vw',
      delay: -1.5,
      ease: 'power1.inOut',
    });
}

function initMarquee(time) {
  const marqueeElements = document.querySelectorAll('.marquee-element');
  const arrayOfMarqueeElements = gsap.utils.toArray(marqueeElements);
  const widthsOfMarqueeElements = arrayOfMarqueeElements.map((el) => parseInt(window.getComputedStyle(el).width));
  const maxLengthOfMarqueeElement = Math.max(...widthsOfMarqueeElements);
  const lengthOfLastMarqueeElement = widthsOfMarqueeElements.slice(-1)[0];
  const gap = parseFloat(window.getComputedStyle(marqueeElements[0].parentNode).gap);
  let shift = 0;

  TweenMax.set(marqueeElements, {
    visibility: 'visible',
    x: (i) => {
      return marqueeElements[i - 1]
        ? shift += (marqueeElements[i - 1].offsetWidth) + gap
        : shift += lengthOfLastMarqueeElement + gap;
    }
  })
  TweenMax.set(marqueeElements, {
    x: '+=310', // 310, чтобы wellness был возле левого края
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
