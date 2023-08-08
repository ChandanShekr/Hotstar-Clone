newFunction();
function newFunction() {
  let movies = [
    {
      name: "falcon and the winter soldier",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, maxime error molestiae iusto molestias ab repudiandae deserunt qui exercitationem quaerat et a eius fugit iure doloremque corrupti similique quam inventore excepturi commodi natus. Quibusdam autem reiciendis libero minus necessitatibus optio at. Quasi distinctio repellat debitis error ut accusantium laudantium dolorum!",
      image: "./images/slider-2.png",
    },

    {
      name: "loki",
      des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, maxime error molestiae iusto molestias ab repudiandae deserunt qui exercitationem quaerat et a eius fugit iure doloremque corrupti similique quam inventore excepturi commodi natus. Quibusdam autem reiciendis libero minus necessitatibus optio at. Quasi distinctio repellat debitis error ut accusantium laudantium dolorum!",
      image: "./images/slider-1.png",
    },
    {
      name: "wanda vision",
      des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, maxime error molestiae iusto molestias ab repudiandae deserunt qui exercitationem quaerat et a eius fugit iure doloremque corrupti similique quam inventore excepturi commodi natus. Quibusdam autem reiciendis libero minus necessitatibus optio at. Quasi distinctio repellat debitis error ut accusantium laudantium dolorum!",
      image: "./images/slider-3.png",
    },
    {
      name: "raya and the last dragon",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, maxime error molestiae iusto molestias ab repudiandae deserunt qui exercitationem quaerat et a eius fugit iure doloremque corrupti similique quam inventore excepturi commodi natus. Quibusdam autem reiciendis libero minus necessitatibus optio at. Quasi distinctio repellat debitis error ut accusantium laudantium dolorum!",
      image: "./images/slider-4.png",
    },
    {
      name: "luca",
      des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, maxime error molestiae iusto molestias ab repudiandae deserunt qui exercitationem quaerat et a eius fugit iure doloremque corrupti similique quam inventore excepturi commodi natus. Quibusdam autem reiciendis libero minus necessitatibus optio at. Quasi distinctio repellat debitis error ut accusantium laudantium dolorum!",
      image: "./images/slider-5.png",
    },
  ];

  const carousel = document.querySelector(".caraousel");
  let sliders = [];

  let slideIndex = 0;
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }

    const slide = document.createElement("div");
    const imgElement = document.createElement("img");
    const content = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    imgElement.src = movies[slideIndex].image;
    h1.textContent = movies[slideIndex].name;
    p.textContent = movies[slideIndex].des;

    //for setting up the elements
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    slide.appendChild(content);
    carousel.appendChild(slide);

    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    if (sliders.length > 2) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }

    slideIndex++;
  };

  for (let i = 0; i < 3; i++) {
    createSlide();
  }

  setInterval(() => {
    createSlide();
  }, 3000);
}

//for video-card animation
const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach((item) => {
  const video = item.querySelector("video");
  const image = item.querySelector(".video-card-image");

  item.addEventListener("mouseover", () => {
    video.style.display = "block";
    video.play();
    image.style.display = "none";
  });

  item.addEventListener("mouseleave", () => {
    video.style.display = "none";
    video.pause();
    image.style.display = "block";
  });

  // Initially, show the image and hide the video
  video.style.display = "none";
  image.style.display = "block";
});

//for card sliders
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
