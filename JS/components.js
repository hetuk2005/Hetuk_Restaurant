export const navBar = () => {
  return `
    
            <div class="nav_parent">
                <div class="nav_child1">
                    <div class="location_child">
                        <img src="./Utilies/Location.svg" alt="Location"
                            class="location_img">
                        <p class="loaction_text">Restaurant St, Delicious City,
                            Mumbai, 401203, INDIA</p>
                    </div>
                    <div class="seprator"></div>
                    <div class="time_child">
                        <img src="./Utilies/Clock.svg" alt="Clock"
                            class="time_img">
                        <p class="time_text">Daily: 8:00 am to 10:00 pm</p>
                    </div>
                </div>
                <div class="nav_child2">
                    <div class="call_child"><svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="21px" fill="currentColor"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" class="call_img" /></svg>
                        <p>+91 9876543210</p> 
                    </div>
                    <div class="seprator"></div>
                    <div class="mail_child">
                    <svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="21px" fill="currentColor"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" class="mail_img" /></svg>
                        <p>booking@restaurant.com</p>
                    </div>
                </div>
            </div>
            <div class="nav_parent2">
                <div class="logo_child">
                    <img src="./Utilies/Logo.svg" alt="Logo" class="logo_img">
                    <img src="./Utilies/Menu.svg" alt="Menu" class="menu_img">
                  </div>
                <div class="list_nav">
                    <ul>
                        <li>HOME</li>
                        <li class="dropdown">MENU <i
                                class="fa fa-angle-down"></i>
                            <ul class="dropdown_menu">
                                <li>VEG</li>
                                <li>NON-VEG</li>
                            </ul>
                        </li>
                        <li>ABOUT US</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <div class="nav_button">
                    <button class="default">
                        FIND A TABLE
                    </button>
                    <img src="./Utilies/Menu.svg" alt="Menu" class="menu_img1">
                </div>
            </div>
        </nav>
        <div class="list_nav_none">
            <button class="close_btn">&times;</button>
            <img src="./Utilies/Logo.svg" alt="Logo">
            <ul>
                <li>HOME</li>
                <li class="dropdown_none">MENU <i
                        class="fa fa-angle-down"></i>
                    <ul class="dropdown_menu_none">
                        <li>VEG</li>
                        <li>NON-VEG</li>
                    </ul>
                </li>
                <li>ABOUT US</li>
                <li>CONTACT</li>
            </ul>
        </div>
    `;
};

export const navStyle = () => {
  return `
.nav_parent p {
  color: #fff;
  font-size: 15px;
}

.call_img,.mail_img{
color: #fff;
}

.call_child:hover .call_img,.mail_child:hover .mail_img,.call_child:hover p,.mail_child:hover p{
  color: var(--golden);
  cursor: pointer;
}

.nav_parent,
.location_child,
.time_child,
.call_child,
.mail_child,
.nav_child1,
.nav_child2,
.nav_parent2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo_child {
  width: 20%;
  display: flex;
  align-items: center;
}

.nav_parent {
  justify-content: space-between;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
}

.nav_parent img {
  width: 17px;
  height: 17px;
  object-fit: cover;
}

.nav_child1,
.nav_child2 {
  padding: 21px;
  gap: 30px;
}

.seprator {
  width: 9px;
  height: 9px;
  border: 1px solid var(--golden);
  transform: rotate(45deg);
}

.location_child,
.time_child,
.call_child,
.mail_child {
  gap: 5px;
}

.nav_parent2 {
  padding: 31px 21px;
  justify-content: space-between;
}

.logo_img,
.list_nav_none > img {
  width: 165px;
  height: 50px;
  object-fit: cover;
}

.menu_img,
.menu_img1,
.list_nav_none {
  display: none;
}

.list_nav ul,
.list_nav_none ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  transition: all 0.3s ease-in-out;
}

.dropdown_menu,
.dropdown_menu_none {
  position: absolute;
  top: 100%;
  left: -11px;
  width: 170px;
  box-shadow: 0 4px 13px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  flex-direction: column;
  gap: 0 !important;
}

.list_nav ul li,
.list_nav_none ul li {
  width: 130px;
  height: auto;
  text-align: center;
  color: #fff;
  position: relative;
  display: inline-block;
  padding: 15px 21px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.list_nav_none ul li::after,
.list_nav ul li::after {
  content: "";
  position: absolute;
  top: 0;
  left: 15%;
  width: 75%;
  height: 0.1em;
  background-color: var(--golden);
  opacity: 0;
  transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
  transform: scale(0);
  transform-origin: center;
}

.list_nav_none ul li:hover::after,
.list_nav_none ul li:focus::after,
.list_nav ul li:hover::after,
.list_nav ul li:focus::after {
  opacity: 1;
  transform: scale(1);
}

.dropdown_menu_none li:hover::after,
.dropdown_menu_none li:focus::after,
.dropdown_menu li:hover::after,
.dropdown_menu li:focus::after {
  opacity: 0 !important;
}

.dropdown:hover .dropdown_menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown_menu li,
.dropdown_menu_none li {
  display: block;
  padding: 15px;
  background: var(--golden);
  transition: 0.3s ease;
  color: #000 !important;
}

.dropdown_menu li:hover,
.dropdown_menu_none li:hover {
  background: #000;
  color: var(--golden) !important;
  border: 2px solid #f0f0f0;
}

.nav_button > button,.footer_sub button {
  padding: 15px 45px;
  background-color: var(--golden);
  border: 2px solid var(--golden);
  font-weight: 550;
  font-size: 15px;
  cursor: pointer;
  position: relative;
  color: #000;
  z-index: 1;
}

.nav_button > button::after,.footer_sub button::after {
  content: "";
  position: absolute;
  height: 0;
  width: 100%;
  top: 0;
  left: 0;
  background: #000;
  transition: all 0.3s ease;
  z-index: -1;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}

.nav_button > button:hover::after,.footer_sub button:hover::after {
  height: 100%;
  border-radius: 0;
}

.nav_button > button:hover,.footer_sub button:hover {
  color: #fff;
}

.list_nav ul li:hover {
  color: var(--golden);
}


/*scroll arrow*/

html {
  scroll-behavior: smooth;
}

.fas {
  color: #000;
}

.to-top {
  background: var(--golden);
  position: fixed;
  bottom: 13px;
  right: 33px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: var(--golden) !important;
  text-decoration: none;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  z-index: 100;
}

.to-top.active {
  bottom: 32px;
  pointer-events: auto;
  opacity: 1;
}
.to-top::after {
  content: "Back to Top";
  position: absolute;
  bottom: 57px;
  right: -11px;
  background: var(--golden);
  color: #000;
  padding: 5px 9px;
  font-size: 13px;
  border-radius: 5px;
  font-weight: 600;
  opacity: 0;
  transform: translateY(5px);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.to-top:hover::after {
  opacity: 1;
  transform: translateY(0);
}

/*Custom scrollbar*/
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background-color: #000;
}
::-webkit-scrollbar-thumb {
  background-color: var(--golden);
  border-radius: 10px;
}

@media (max-width: 430px) {
  .nav_parent,
  .list_nav,
  .nav_button {
    display: none;
  }
  .logo_child {
    width: 100%;
    justify-content: space-between;
  }
  .menu_img,
  .menu_img1 {
    width: 35px;
    height: auto;
    display: inline-block;
  }
  .list_nav_none {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background-color: #000;
    padding-top: 81px;
    transition: all 0.3s ease-in-out;
    z-index: 15;
    display: inline-block;
  }
  .list_nav_none ul {
    flex-direction: column;
    gap: 7px;
    padding-left: 21px;
  }
  .list_nav_none.active {
    left: 0;
  }
  .list_nav_none .dropdown_menu_none {
    position: relative;
    left: -11px;
    top: 5px;
    width: 100%;
    transform: translateY(0) !important;
    margin-top: 5px;
  }
  .dropdown_none.open .dropdown_menu_none {
    opacity: 1;
    visibility: visible;
  }
  .dropdown_menu_none {
    opacity: 1;
    visibility: visible;
    position: relative;
    top: 0;
    left: 0;
    transform: translateY(0);
  }
  .dropdown_menu_none li {
    background-color: #000;
    color: #fff !important;
    padding-bottom: 11px !important;
  }
  .close_btn {
    position: absolute;
    top: 31px;
    right: 27px;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    z-index: 11;
    background: transparent;
    padding: 0 7px;
    border-radius: 50%;
    border: 2px solid #fff;
  }
}

@media (min-width: 431px) and (max-width: 1340px) {
  .nav_child1,
  .nav_child2 > .seprator,
  .list_nav {
    display: none;
  }
  .menu_img1 {
    display: inline-block;
  }
  .nav_child2 {
    width: 100%;
  }
  .nav_button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
  }
  .list_nav_none {
    position: fixed;
    top: 0;
    left: -100%;
    width: 45%;
    height: 100vh;
    background-color: #000;
    padding-top: 81px;
    transition: all 0.3s ease-in-out;
    z-index: 15;
    display: inline-block;
  }
  .list_nav_none ul {
    flex-direction: column;
    gap: 7px;
    padding-left: 21px;
  }
  .list_nav_none.active {
    left: 0;
  }
  .list_nav_none .dropdown_menu_none {
    position: relative;
    left: -11px;
    top: 5px;
    width: 100%;
    transform: translateY(0) !important;
    margin-top: 5px;
  }
  .dropdown_none.open .dropdown_menu_none {
    opacity: 1;
    visibility: visible;
  }
  .dropdown_menu_none {
    opacity: 1;
    visibility: visible;
    position: relative;
    top: 0;
    left: 0;
    transform: translateY(0);
  }
  .dropdown_menu_none li {
    background-color: #000;
    color: #fff !important;
    padding-bottom: 11px !important;
  }
  .close_btn {
    position: absolute;
    top: 31px;
    right: 27px;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    z-index: 11;
    background: transparent;
    padding: 0 7px;
    border-radius: 50%;
    border: 2px solid #fff;
  }
  .list_nav_none > img {
    margin: 15px auto;
    display: block;
  }
  .list_nav_none ul li {
    text-align: left;
  }
  .list_nav_none ul {
    justify-content: left;
  }
}
    `;
};

/*Navbar Media Query Styling */

window.onload = () => {
  const menuIcon = document.querySelector(".menu_img");
  const menuIcon1 = document.querySelector(".menu_img1");
  const sideBar = document.querySelector(".list_nav_none");
  const dropDown = document.querySelector(".dropdown_none");
  const closeBtn = document.querySelector(".close_btn");

  menuIcon.addEventListener("click", () => {
    sideBar.classList.toggle("active");
  });

  menuIcon1.addEventListener("click", () => {
    sideBar.classList.toggle("active");
  });

  dropDown.addEventListener("click", () => {
    dropDown.classList.toggle("open");
  });

  closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("active");
  });
};
