// API Fetching
let API = "https://hetuk-restaurant.onrender.com/menu";

const apiCall = () => {
  //   skeletonLoading();

  return fetch(API)
    .then((res) => res.json())
    .then((data) => {
      appendData(data);
    })
    .catch((err) => console.log("Error: ", err));
};

const appendData = (data) => {
  const dataShow = document.querySelector(".menu_items");
  dataShow.innerHTML = "";

  data.map((el) => {
    const imageContainer = document.createElement("div");
    imageContainer.className = "imageContainer";

    imageContainer.innerHTML = `
            <div class="menu_img">
                <img src="${el.img}" alt="Menu Image" class="items_img" loading="lazy">
            </div>
            <div class="menu_details">
                <h4 class="title">${el.title}</h4>
                <h6 class="price">₹${el.price}</h6>
            <p class="description">${el.description}</p>
            </div>
    `;

    dataShow.append(imageContainer);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  apiCall();
});
