window.addEventListener('DOMContentLoaded', function () {
  animateDomainPage();
});

function animateDomainPage() {
  const domainTitle = document.querySelectorAll('.main-title');
  const domainText = document.querySelector('.main-text');
  const form = document.querySelector('.form');
  const footerBorder = document.querySelector('.footer-border');
  const earth = document.querySelectorAll('.earth');
  const logo = document.querySelector('.logo');
  const button = document.querySelector('.connect-button');
  const mediaLinks = document.querySelector('.links');
  const year = document.querySelector('.year');
  const designText = document.querySelector('.design');
  const aside = document.querySelector('.to-main');
  const toMainTitle = document.querySelector('.to-main-title');
  const toMainButton = document.querySelector('.to-main-button');
  const memberBlock = document.querySelector('.member');
  const nftName = document.querySelector('.nft-name');
  const nftDomain = document.querySelector('.nft-domain');
  const etheriumQuantity = document.querySelector('.etherium-quantity');
  const etheriumImage = document.querySelector('.etherium-image');
  const cornersLT = document.querySelectorAll('.lt');
  const cornersLB = document.querySelectorAll('.lb');
  const cornersRT = document.querySelectorAll('.rt');
  const cornersRB = document.querySelectorAll('.rb');
  const bordersT = document.querySelectorAll('.t');
  const bordersB = document.querySelectorAll('.b');
  const bordersL = document.querySelectorAll('.l');
  const bordersR = document.querySelectorAll('.r');
  TweenMax.staggerTo([domainTitle, domainText, form], 0.5, {
    ease: 'power1.inOut',
    top: 0,
    stagger: 0.1,
    // delay: -0.4,
  })
    .to(footerBorder, 0.5, {
      ease: 'power1.inOut',
      width: '100%',
      // delay: -0.4,
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
    .to(aside, 0.5, {
      ease: 'power1.inOut',
      left: 0,
      delay: -0.4,
    })
    .to(bordersL, 0.15, {
      ease: 'none',
      height: 'calc(100% - 32px)',
    })
    .set(cornersLT, {
      borderTop: '1px solid var(--dark-grey)',
      borderLeft: '1px solid var(--dark-grey)',
    })
    .to(bordersT, 0.1, {
      ease: 'none',
      width: 'calc(100% - 32px)',
    })
    .set(cornersRT, {
      borderTop: '1px solid var(--dark-grey)',
      borderRight: '1px solid var(--dark-grey)',
    })
    .to(bordersR, 0.15, {
      ease: 'none',
      height: 'calc(100% - 32px)',
    })
    .set(cornersRB, {
      ease: 'none',
      borderBottom: '1px solid var(--dark-grey)',
      borderRight: '1px solid var(--dark-grey)',
    })
    .to(bordersB, 0.1, {
      ease: 'none',
      width: 'calc(100% - 32px)',
    })
    .set(cornersLB, {
      ease: 'none',
      borderBottom: '1px solid var(--dark-grey)',
      borderLeft: '1px solid var(--dark-grey)',
    })
    .staggerFrom([toMainTitle, toMainButton], 0.5, {
      ease: 'power1.inOut',
      top: '64px',
      stagger: 0.05,
      delay: -0.45,
    })
    .to([memberBlock, nftName, nftDomain, etheriumQuantity, etheriumImage], 1.49, {
      ease: 'power2.inOut',
      top: 0,
      delay: -0.45,
    })
    .from(earth, 1.5, {
      ease: 'power2.inOut',
      bottom: -150,
      delay: -1.5,
    })
    .to(earth, 10.5, {
      display: 'block',
      delay: -1.5,
    });
}