export const hideOnScroll = () => {
  const homepageMainMessageSearch = document.getElementById("homepageSearch");
  const hideAndShowSearch = document.getElementById("hideAndShowSearch");
  const mainNavbarSearch = document.getElementById("main-navbar__search");
  const mainNavbar = document.getElementById("main-navbar");
  const currentScrollPos = window.pageYOffset;
  if (currentScrollPos > "50") {
    if (homepageMainMessageSearch)
      homepageMainMessageSearch.style.display = "none";
    if (hideAndShowSearch) hideAndShowSearch.style.display = "block";
    if (mainNavbar) mainNavbar.style.backgroundColor = "white";
  } else {
    if (homepageMainMessageSearch)
      homepageMainMessageSearch.style.display = "flex";
    if (hideAndShowSearch) hideAndShowSearch.style.display = "none";
    if (mainNavbarSearch) mainNavbarSearch.style.display = "none";
    if (mainNavbar) mainNavbar.style.backgroundColor = "transparent";
  }
};
export const hideOnScrollForNavbar = () => {
  // const homepageMainMessageSearch = document.getElementById("homepageSearch");
  const hideAndShowSearch = document.getElementById("hideAndShowSearch");
  const mainNavbarSearch = document.getElementById("navbar__search");
  const mainNavbar = document.getElementById("navbar");
  const currentScrollPos = window.pageYOffset;
  if (currentScrollPos > "50") {
    // homepageMainMessageSearch.style.display = "none";
    hideAndShowSearch.style.display = "block";
    mainNavbar.style.backgroundColor = "white";
  } else {
    // homepageMainMessageSearch.style.display = "flex";
    hideAndShowSearch.style.display = "none";
    mainNavbarSearch.style.display = "none";
    mainNavbar.style.backgroundColor = "transparent";
  }
};

export const showFilter = () => {
  const popUpFilter = document.querySelector(".pop-up-filter");
  if (popUpFilter.style.display === "flex") {
    popUpFilter.style.display = "none";
  } else {
    popUpFilter.style.display = "flex";
  }
};

export const showSearchBar = () => {
  const mainNavbarSearch = document.getElementById("main-navbar__search");
  if (mainNavbarSearch.style.display === "flex") {
    mainNavbarSearch.style.display = "none";
  } else {
    mainNavbarSearch.style.display = "flex";
  }
};
export const showSearchBarForNavbar = () => {
  const mainNavbarSearch = document.getElementById("navbar__search");
  if (mainNavbarSearch.style.display === "flex") {
    mainNavbarSearch.style.display = "none";
  } else {
    mainNavbarSearch.style.display = "flex";
  }
};
export const gotoListingPage = () => {
  if (window.location.pathname !== "/listings") {
    window.location = "/listings";
  }
};
