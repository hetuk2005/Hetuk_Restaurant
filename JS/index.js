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

//Next SLide
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
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

//Start Slider
showSlide(index);
startTimer();

// API Fetching
let API = "https://hetuk-restaurant.onrender.com/menu";

const apiCall = () => {
  fetch(API)
    .then((res) => res.json())
    .catch((err) => console.log("Error: ", err));
};

const appendData = (data) => {
  const dataShow = document.querySelector(".delicious_div");

  let product = data.slice(3, 7);

  const imageContainer = document.createElement("div");
  imageContainer.className = "imageContainer";

  for (let i = 3; i <= 6 && i < data.length; i++) {
    let item = data[i];

    imageContainer.innerHTML = `
            <div class="delicious_child">
                <img src alt>
            </div>
            <div class="delicious_child2">
                <h6 class="title"></h6>
                <h6 class="price"></h6>
                <p class="description"></p>
            </div>
    `;
  }
};
