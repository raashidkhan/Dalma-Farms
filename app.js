const heroSliderAnimation = () => {
  // ==========================
  // Image Slider Function
  // ==========================//
  const imageArray = Array.from(
    document.querySelectorAll('.hero-images-slide')
  );

  imageArray[0].classList.add('activeImage');
  let counterForImage = 0;
  const imageSlide = (slideArray, classToAdd, classToRemove) => {
    slideArray.forEach((item) => {
      item.classList.remove(`${classToAdd}`);
      item.classList.remove(`${classToRemove}`);
    });

    counterForImage >= slideArray.length - 1
      ? (counterForImage = 0)
      : (counterForImage = counterForImage + 1);
    if (counterForImage === 0) {
      slideArray[counterForImage].classList.add(`${classToAdd}`);
      slideArray[slideArray.length - 1].classList.add(`${classToRemove}`);
    } else {
      slideArray[counterForImage].classList.add(`${classToAdd}`);
      slideArray[counterForImage - 1].classList.add(`${classToRemove}`);
    }
  };

  // ==========================
  // Text Slider Function
  // ==========================//
  const textArray = Array.from(document.querySelectorAll('.toSlide-js'));
  textArray[0].classList.add('active');

  let counterForText = 0;
  const textSlide = (slideArray, classToAdd, classToRemove) => {
    slideArray.forEach((item) => {
      item.classList.remove(`${classToAdd}`);
      item.classList.remove(`${classToRemove}`);
    });

    counterForText >= slideArray.length - 1
      ? (counterForText = 0)
      : (counterForText = counterForText + 1);
    if (counterForText === 0) {
      slideArray[counterForText].classList.add(`${classToAdd}`);
      slideArray[slideArray.length - 1].classList.add(`${classToRemove}`);
    } else {
      slideArray[counterForText].classList.add(`${classToAdd}`);
      slideArray[counterForText - 1].classList.add(`${classToRemove}`);
    }
  };
  setInterval(() => {
    imageSlide(imageArray, 'activeImage', 'wasActiveImage');
    textSlide(textArray, 'active', 'wasActive');
  }, 6000);
};
const hero = document.querySelector('.hero');
if (hero) {
  heroSliderAnimation();
}

// const gallerySwiper = function () {
document.addEventListener('DOMContentLoaded', () => {
  const swipers = document.querySelectorAll('.swiper-js');
  let isDown = false;
  let startX;
  let scrollLeft;
  swipers.forEach((swiper) => {
    swiper.addEventListener('mousedown', (e) => {
      isDown = true;

      startX = e.pageX - swiper.offsetLeft;
      scrollLeft = swiper.scrollLeft;
    });
    swiper.addEventListener('mouseleave', () => {
      isDown = false;
    });
    swiper.addEventListener('mouseup', () => {
      isDown = false;
    });
    swiper.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - swiper.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      swiper.scrollLeft = scrollLeft - walk;
    });
  });
});
// };
