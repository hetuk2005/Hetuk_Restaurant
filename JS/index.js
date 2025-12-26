const slider = document.querySelectorAll(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
let timer;

function showSlide(i) {
  // Wrap Around

  if (i >= slider.length) index = 0;
  else if (i < 0) index = slider.length - 1;
  else index = i;

  // Remove Active Class From All Slides
  slider.forEach((slide) => slide.classList.remove("active"));

  //Activate Current Slide
  slider[index].classList.add("active");

  //Restart Autoplay
  resetTimer();
}

//Next Slide
function nextSlide() {
  showSlide(index + 1);
}

//Previous Slide
function prevSlide() {
  showSlide(index - 1);
}

//Autoplay
function startTimer() {
  timer = setInterval(() => {
    nextSlide();
  }, 5000);
}

function resetTimer() {
  clearInterval(timer);
  startTimer();
}

// Button Events
nextBtn?.addEventListener("click", nextSlide);
prevBtn?.addEventListener("click", prevSlide);

//Start Slider
showSlide(index);
startTimer();

// Skeleton Loading

function skeletonLoading() {
  const container = document.querySelector(".delicious_div");
  container.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const skeletonDiv = document.createElement("div");
    skeletonDiv.className = "imageContainer";

    skeletonDiv.innerHTML = `
      <div class="delicious_child">
        <div class="skeleton skeleton_img"></div>
      </div>
      <div class="delicious_child2">
        <div class="skeleton skeleton_title"></div>
        <div class="skeleton skeleton_price"></div>
        <div class="skeleton skeleton_text"></div>
      </div>
    `;

    container.append(skeletonDiv);
  }
}

// API Fetching
let API = "https://hetuk-restaurant.onrender.com/menu";

const apiCall = () => {
  skeletonLoading();

  return fetch(API)
    .then((res) => res.json())
    .then((data) => {
      appendData(data);
    })
    .catch((err) => console.log("Error: ", err));
};

const appendData = (data) => {
  const dataShow = document.querySelector(".delicious_div");
  dataShow.innerHTML = "";

  data.slice(0, 6).map((el) => {
    const imageContainer = document.createElement("div");
    imageContainer.className = "imageContainer";

    imageContainer.innerHTML = `
            <div class="delicious_child">
                <img src="${el.img}" alt="Menu Image" class="items_img" loading="lazy">
            </div>
            <div class="delicious_child2">
                <h4 class="title">${el.title}</h4>
                <h6 class="price">₹${el.price}</h6>
            <p class="description">${el.description}</p>
            </div>
    `;

    dataShow.append(imageContainer);
  });
};

// document.querySelector(".footer_input").addEventListener("click", function () {
//   this.querySelector("input").focus();
// });

document.addEventListener("click", (e) => {
  const footerInput = e.target.closest(".footer_input");
  if (footerInput) {
    footerInput.querySelector("input")?.focus();
  }
});

apiCall();
