export const navBar = () => {
  return `
            <div class="nav_parent">
                <div class="nav_child1">
                    <div class="location_child">
                        <img src="../Utilies/Location.svg" alt="Location"
                            class="location_img">
                        <p class="loaction_text">Restaurant St, Delicious City,
                            Mumbai, 401203, INDIA</p>
                    </div>
                    <div class="seprator"></div>
                    <div class="time_child">
                        <img src="../Utilies/Clock.svg" alt="Clock"
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
                <a href="../index.html">
                    <img src="../Utilies/Logo.svg" alt="Logo" class="logo_img">
                </a>
                    <img src="../Utilies/Menu.svg" alt="Menu" class="menu_img">
                  </div>
                <div class="list_nav">
                    <ul>
                        <li><a href="../index.html" class="nav_link">HOME</a></li>
                        <li class="dropdown"><a href="../HTML/Menu.html" class="nav_link">MENU </a><i
                                class="fa fa-angle-down"></i>
                            <ul class="dropdown_menu">
                                <li> <a href="../HTML/Menu.html?category=Veg">VEG</a></li>
                                <li> <a href="../HTML/Menu.html?category=Non-Veg">NON-VEG</a></li>
                            </ul>
                        </li>
                        <li><a href="../HTML/About.html" class="nav_link">ABOUT US</a></li>
                        <li> <a href="../index.html#contact" class="nav_link">CONTACT</a></li>
                    </ul>
                </div>
                <a href="./index.html#reservation_child1">
                <div class="nav_button">
                    <button class="default">
                        FIND A TABLE
                    </button>
                    </a>
                    <img src="../Utilies/Menu.svg" alt="Menu" class="menu_img1">
                </div>
            </div>
        </nav>
        <div class="list_nav_none">
            <button class="close_btn">&times;</button>
                <a href="../index.html">
                    <img src="../Utilies/Logo.svg" alt="Logo" class="logo_img">
                </a>
            <ul>
                <li><a href="../index.html" class="nav_link">HOME</a></li>
                <li class="dropdown_none"><a href="../HTML/Menu.html" class="nav_link">MENU </a> <i
                        class="fa fa-angle-down"></i>
                    <ul class="dropdown_menu_none">
                        <li><a href="../HTML/Menu.html?category=Veg">VEG</a></li>
                        <li><a href="../HTML/Menu.html?category=Non-Veg">NON-VEG</a></li>
                    </ul>
                </li>
                <li><a href="../HTML/About.html" class="nav_link">ABOUT US</a></li>
                <li> <a href="./index.html#contact" class="nav_link">CONTACT</a></li>
            </ul>
        </div>
    `;
};

export const footerBar = () => {
  return `
            <div class="footer_parent">
                <div class="footer_child1">
                    <ul>
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="../HTML/Menu.html">MENU </a></li>
                        <li><a href="../HTML/About.html">About Us</a></li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div class="footer_child2">
                    <img src="../Utilies/Logo.svg" alt="Logo"
                        class="footer_logo" loading="lazy">
                    <p class="footer_add">Restaurant St, Delicious City,
                        Mumbai, 401203,
                        INDIA</p>
                    <p class="footer_link">booking@hetuk.com</p>
                    <p class="footer_request">Booking Request : +91
                        9876543210</p>
                    <p class="open">Open: 10:00 am - 11:00 pm</p>
                    <div class="wrapper">
                        <div class="square"></div>
                        <div class="square"></div>
                        <div class="square"></div>
                    </div>
                    <h4>Get News & Offers</h4>
                    <p class="discount">Subscribe us & get <a>25% off</a></p>
                    <div class="footer_sub">
                        <div class="footer_input">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                height="21px" viewBox="0 -960 960 960"
                                width="21px" fill="currentColor"><path
                                    d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
                                    class="mail_img" /></svg>
                            <input type="text" placeholder="Your Mail">
                        </div>
                        <button><a href="#">Subscribe</a></button>
                    </div>
                </div>
                <div class="footer_child3">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-whatsapp"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-map"></i>
                </div>
            </div>
            <div class="text_footer">
                <p class="copyright">© 2025 Hetuk. All Rights Reserved |
                    Crafted
                    by</p><a href> Hetuk
                    Patel</a>
            </div>
  `;
};

export const navStyle = () => {
  return `
.nav_parent p {
  color: #fff;
  font-size: 15px;
}

.nav_link.active{
  color: var(--golden);
  text-shadow: 0 0 10px var(--golden);
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
.list_nav_none > a > img {
  width: 165px;
  height: 50px;
  object-fit: cover;
}

.menu_img,
.menu_img1,
.list_nav_none {
  display: none;
}

li.active_page > i {
  color: var(--golden);
  text-shadow: 0 0 8px var(--golden);
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

.dropdown.active i{
  transform: rotate(180deg);
}

.dropdown_menu_none li:hover::after,
.dropdown_menu_none li:focus::after,
.dropdown_menu li:hover::after,
.dropdown_menu li:focus::after {
  opacity: 0 !important;
}

.dropdown.active .dropdown_menu {
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

.default,.footer_sub button {
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

.default::after,.footer_sub button::after {
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

.default:hover::after,.footer_sub button:hover::after {
  height: 100%;
  border-radius: 0;
}

.default:hover,.footer_sub button:hover {
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
    .dropdown_none i {
  transition: transform 0.3s ease;
}
.dropdown_none.open i {
  transform: rotate(180deg);
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
    .dropdown_none i {
  transition: transform 0.3s ease;
}
.dropdown_none.open i {
  transform: rotate(180deg);
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
  .list_nav_none > a > img {
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

export const footerStyle = () => {
  return `
footer {
  background: url(../Utilies/footer-bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  padding: 50px;
}

.footer_parent {
  display: flex;
  padding: 51px 171px;
  justify-content: space-between;
  align-items: center;
}

.footer_child1 ul {
  list-style: none;
  text-align: center;
  opacity: 0.7;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 21px;
  display: inline-block;
}

.footer_child1 ul li {
  position: relative;
  cursor: pointer;
}

/* Footer Underline Animation */

.footer_child1 ul li {
  position: relative;
  margin: 61px 0;
  padding: 11px 0;
}

.footer_child1 ul li:hover {
  opacity: 1;
  color: var(--golden);
}

.footer_child1 ul li::after,
.button1::after,
.button2::after,
.button::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: var(--golden);
  opacity: 0;
  transform: scale(0);
  transform-origin: center;
  transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
}

.button::after {
  background-color: #fff !important;
  width: 33% !important;
  left: 27% !important;
}

.button1::after,
.button2::after {
  background-color: #fff;
}

.footer_child1 ul li:hover::after,
.footer_child1 ul li:focus::after,
.button1:focus::after,
.button2:focus::after,
.button:focus::after,
.button1:hover::after,
.button2:hover::after,
.button:hover::after {
  opacity: 1;
  transform: scale(1);
}

.footer_child2 {
  position: relative;
  padding: 90px 70px;
  height: 91vh;
  z-index: 1;
  font-size: 17px;
  background: url(../Utilies/form-pattern.png);
  background-color: #000;
  overflow: hidden;
  text-align: center;
}

.footer_child2::before,
.footer_child2::after {
  content: "";
  position: absolute;
  width: 15px;
  top: 0;
  height: 100%;
  background: url(../Utilies/footer-form-pattern.svg);
  background-repeat: no-repeat;
  background-size: cover;
}

.footer_child2::after {
  right: 0;
}

.footer_child2::before {
  left: 0;
}

.footer_logo {
  margin-bottom: 41px;
  width: 170px;
  height: 51px;
  object-fit: cover;
}

.footer_child2 p {
  padding: 7px 0;
  opacity: 0.7;
  letter-spacing: 0.5px;
}

.footer_child2 p:hover {
  opacity: 1;
}

.footer_link:hover,
.footer_request:hover {
  color: var(--golden);
  cursor: pointer;
}

.footer_child2 h4 {
  font-size: 35px;
  font-weight: 100;
  letter-spacing: 1px;
}

.discount {
  text-transform: capitalize;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 21px;
}

.footer_input {
  display: flex;
  background-color: #1d1d1d;
  justify-content: center;
  align-items: center;
  position: relative;
}

.footer_input:active,
.footer_input input:active {
  border: 1px solid var(--golden);
}

.footer_sub {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer_input svg {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 1;
  width: 15px;
  height: 15px;
}

.footer_input input {
  padding: 20px;
  padding-left: 41px;
  width: 250px;
  caret-color: #fff;
  background-color: transparent;
  border: none;
  transition: all 0.3s ease-in-out;
}

.footer_input input:active {
  padding: 15px;
}

.footer_input input::placeholder {
  padding: 25px;
  opacity: 1;
  color: #fff;
  letter-spacing: 1.5px;
}

.footer_sub button {
  padding: 17px !important;
  width: 150px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer_child3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 51px;
  font-size: 31px;
  color: var(--golden);
}

.footer_child3 i {
  cursor: pointer;
}

.text_footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
}

.copyright {
  letter-spacing: 1.5px;
  margin-left: 91px;
  text-align: center;
  font-size: 17px;
  opacity: 0.7;
}

.text_footer a {
  font-size: 17px;
  color: var(--golden);
  text-decoration: underline;
}


@media (max-width: 430px){

  .to-top {
    right: 15px;
  }
  footer {
    height: auto;
    padding: 0;
    background-size: cover;
    padding: 51px 15px;
  }
  .footer_parent {
    padding: 0;
    flex-direction: column;
  }
  .footer_child1 ul {
    display: flex;
    font-size: 13px;
    justify-content: center;
    gap: 11px;
  }
  .footer_child2 {
    padding: 31px;
    height: auto;
    width: 100%;
  }
  .footer_child3 {
    flex-direction: row;
    gap: 25px;
    margin: 25px 0;
  }
  .footer_sub {
    flex-direction: column;
    gap: 21px;
  }
  .footer_input,
  .footer_sub button {
    width: 100%;
  }
  .text_footer {
    gap: 0;
    flex-direction: column;
  }
  .copyright {
    letter-spacing: normal;
    margin: 0;
    font-size: 13px;
  }
  .text_footer a {
    font-size: 13px;
  }
}


@media (min-width: 321px) and (max-width: 430px){
  .person {
    padding-right: 165px;
  }
  .icon_wrapper .time {
    padding-right: 145px;
  }
  .service_card a {
    width: 80%;
    display: block;
    margin: auto;
  }
  .card_content a {
    margin: 21px auto;
  }
}


@media (min-width: 431px) and (max-width: 1340px){

  footer {
    padding: 21px 0;
    height: auto;
    background-size: cover;
  }
  .footer_parent {
    flex-wrap: wrap;
    padding: 51px 31px;
    justify-content: center;
    height: auto;
  }
  .footer_child2 {
    order: 1;
    height: auto;
    width: 100%;
  }
  .footer_child1 {
    order: 2;
    margin-right: 150px;
  }
  .footer_child1 ul {
    font-size: 17px;
    gap: 31px;
  }
  .footer_child1 ul,
  .footer_child3 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-content: center;
  }
  .footer_child3 {
    order: 3;
    gap: 71px;
  }
  .footer_child3 i:last-child {
    grid-column: 1/3;
    width: calc(50%-20px);
    margin-inline: auto;
  }
  .copyright {
    margin: 0;
  }
  .to-top {
    right: 17px;
  }
}
`;
};

// Highlight Navbar

export const setActive = () => {
  const currentPath = window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav_link").forEach((link) => {
    const linkPath = link.getAttribute("href").split("/").pop();
    const parentli = link.closest("li");

    if (
      linkPath === currentPath ||
      (currentPath === "") & (linkPath === "index.html")
    ) {
      link.classList.add("active");
      parentli.classList.add("active_page");
    } else {
      link.classList.remove("active");
      parentli.classList.remove("active_page");
    }
  });
};

setActive();

/*Navbar Media Query Styling */

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu_img");
  const menuIcon1 = document.querySelector(".menu_img1");
  const sideBar = document.querySelector(".list_nav_none");
  const dropDown = document.querySelector(".dropdown_none");
  const dropDownDesktop = document.querySelector(".dropdown");
  const closeBtn = document.querySelector(".close_btn");

  menuIcon.addEventListener("click", () => {
    sideBar.classList.toggle("active");
  });

  menuIcon1.addEventListener("click", () => {
    sideBar.classList.toggle("active");
  });

  dropDownDesktop.addEventListener("click", (e) => {
    e.stopPropagation();
    dropDownDesktop.classList.toggle("active");
  });

  document.addEventListener("click", () => {
    dropDownDesktop.classList.remove("active");
  });

  dropDown.addEventListener("click", () => {
    dropDown.classList.toggle("open");
  });

  closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("active");
  });
});

// Loader

window.addEventListener("DOMContentLoaded", function () {
  const loader = this.document.querySelector("#loader");
  if (loader) {
    this.setTimeout(() => {
      loader.classList.add("fade_out");
    }, 1500);
  }
});
