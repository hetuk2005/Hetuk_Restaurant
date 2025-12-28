// API Fetching
let API = "https://hetuk-restaurant.onrender.com/menu";

let allData = [];
let filterData = [];
let currentPage = 1;
let limit = 6;

const apiCall = async () => {
  //   skeletonLoading();

  // Pagination Setup

  try {
    const res = await fetch(API);
    const data = await res.json();

    allData = data;
    filterData = allData;
    renderPage(currentPage);
    setupPagination();
  } catch (err) {
    console.log("Error: ", err);
  }
};

const renderPage = (page) => {
  const container = document.querySelector(".menu_items");
  container.classList.add("fade_out");

  setTimeout(() => {
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedData = filterData.slice(start, end);

    appendData(paginatedData);
    container.classList.remove("fade_out");
  }, 200);
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

// FIlter Setup

const setupFilter = () => {
  const filterText = document.querySelector(".filter_child p");
  const filterBox = document.querySelector(".filter_child");

  document.querySelectorAll(".filter_child ul li").forEach((li) => {
    li.addEventListener("click", (e) => {
      e.stopPropagation();

      const value = li.getAttribute("data-filter");

      // Update filter text
      filterText.innerText = value === "All" ? "Filter" : value;

      // Apply filter
      if (value === "All") {
        filterData = allData;
      } else {
        filterData = allData.filter((item) => item.category === value);
      }

      currentPage = 1;
      renderPage(currentPage);
      setupPagination();

      // Close dropdown
      filterBox.classList.remove("active");
    });
  });
};

// Pagination Button

const setupPagination = () => {
  const totalPages = Math.ceil(filterData.length / limit);
  document.querySelector("#currentPage").innerHTML = currentPage;
  document.querySelector(".page_number span:last-child").innerHTML = totalPages;

  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  // Disable / Enable buttons
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages || totalPages === 0;

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
  const filterBox = document.querySelector(".filter_child");

  filterBox.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent body click
    filterBox.classList.toggle("active");
  });

  // Close when clicking outside
  document.addEventListener("click", () => {
    filterBox.classList.remove("active");
  });

  apiCall();
  setupFilter();
});
