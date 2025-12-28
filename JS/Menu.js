// API Fetching
let API = "https://hetuk-restaurant.onrender.com/menu";

let allData = [];
let currentPage = 1;
let limit = 6;

const apiCall = async () => {
  //   skeletonLoading();

  // Pagination Setup

  try {
    const res = await fetch(API);
    const data = await res.json();

    allData = data.menu || data;
    renderPage(currentPage);
    setupPagination();
  } catch (err) {
    console.log("Error: ", err);
  }
};

const renderPage = (page) => {
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedData = allData.slice(start, end);

  appendData(paginatedData);
};

const appendData = (data) => {
  const dataShow = document.querySelector(".menu_items");
  dataShow.innerHTML = "";

  data.map((el) => {
    const imageContainer = document.createElement("div");
    imageContainer.className = "imageContainer";

    imageContainer.innerHTML = `
            <div class="menu_items_img">
                <img src="${el.img}" alt="Menu Image" class="items_img" loading="lazy">
            </div>
            <div class="menu_details">
                <h4 class="title">${el.title}</h4>
                <h6 class="price">₹${el.price}</h6>
            </div>
    `;

    dataShow.append(imageContainer);
  });
};

// Pagination Button

const setupPagination = () => {
  const totalPages = Math.ceil(allData.length / limit);
  document.querySelector("#currentPage").innerHTML = currentPage;
  document.querySelector(".page_number span:last-child").innerHTML = totalPages;
  
  document.querySelector(".prev").onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
      setupPagination();
    }
  };

  document.querySelector(".next").onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPage(currentPage);
      setupPagination();
    }
  };
};

document.addEventListener("DOMContentLoaded", () => {
  apiCall();
});
