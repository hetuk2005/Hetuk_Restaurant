// Skeleton Loading

const showSkeleton = () => {
  const skeletonContainer = document.querySelector(".loading_menu");
  skeletonContainer.innerHTML = "";

  for (let i = 0; i < limit; i++) {
    const div = document.createElement("div");
    div.className = "skeleton_card";
    skeletonContainer.append(div);
  }

  skeletonContainer.style.display = "grid";
  document.querySelector(".menu_items").style.display = "none";
};

const hideSkeleton = () => {
  document.querySelector(".loading_menu").style.display = "none";
  document.querySelector(".menu_items").style.display = "grid";
};

// API Fetching
let API = "https://hetuk-restaurant.onrender.com/menu";

let allData = [];
let filterData = [];
let currentPage = 1;
let limit = 6;
let selectedType = "All";
let selectedCategory = "All";

const apiCall = async () => {
  showSkeleton();

  // Pagination Setup

  try {
    const res = await fetch(API);
    const data = await res.json();

    allData = data;
    filterData = data;
    hideSkeleton();
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
                <p class="desc">${el.description}</p>
            </div>
    `;

    dataShow.append(imageContainer);
  });
};

const applyFilter = () => {
  let result = allData;

  if (selectedType !== "All") {
    result = result.filter(
      (item) => item.type.toLowerCase() == selectedType.toLowerCase()
    );
  }

  if (selectedCategory !== "All") {
    result = result.filter(
      (item) => item.category.toLowerCase() == selectedCategory.toLowerCase()
    );
  }

  filterData = result;
  currentPage = 1;

  if (filterData.length === 0) {
    document.querySelector(".menu_items").innerHTML =
      "<p style='color:#fff;text-align:center;'>No items found</p>";

    document.querySelector("#currentPage").innerText = 0;
    document.querySelector(".page_number span:last-child").innerText = 0;

    document.querySelector(".prev").disabled = true;
    document.querySelector(".next").disabled = true;

    return;
  }

  renderPage(currentPage);
  setupPagination();
};

// FIlter Setup

const setupFilter = () => {
  const filterText = document.querySelector(".filter_child p");
  const filterBox = document.querySelector(".filter_child");

  document.querySelectorAll(".filter_child ul li").forEach((li) => {
    li.addEventListener("click", (e) => {
      e.stopPropagation();
      selectedCategory = li.dataset.filter;

      if (selectedCategory === "All") {
        selectedCategory = "All";
        selectedType = "All";

        filterText.innerHTML = "Filter";

        document
          .querySelectorAll(".button_menu button")
          .forEach((b) => b.classList.remove("active"));
      } else {
        filterText.innerHTML = selectedCategory;
      }

      applyFilter();
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

document.querySelectorAll(".button_menu button").forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedType = btn.innerText.trim();

    applyFilter();

    document
      .querySelectorAll(".button_menu button")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

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
