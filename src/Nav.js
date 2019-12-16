import React from "react";

export default () => {
  return (
    <div className="nav-body">
      <div className="burger" onClick={() => remove()}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className="nav">x</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>History</li>
        <li>Contact</li>
        <li>Membership</li>
      </ul>
    </div>
  );
};

function remove() {
  const burger = document.querySelector(".burger");
  const nav = burger.nextElementSibling;

  document.querySelector(".bg").classList.toggle("open");

  nav.style.display = "block";
  const ul = document.querySelector("ul");
  ul.style.display = "block";

  burger.classList.toggle("open");
  burger.parentElement.classList.toggle("open");
  if (nav.classList[1] === "open") {
    nav.classList.toggle("open");
    setTimeout(function() {
      nav.style.display = "none";
    }, 1000);
  } else {
    setTimeout(function() {
      nav.classList.toggle("open");
    }, 100);
  }
  const navList = document.querySelectorAll("li");
  for (var i = 0; i < navList.length; i++) {
    const temp = navList[i];

    if (temp.classList.length !== 0 && i === navList.length - 1) {
      setTimeout(() => {
        temp.classList.toggle("open");
      }, i * 100);
      setTimeout(() => {
        ul.style.display = "none";
      }, i * 100 + 300);
    } else {
      setTimeout(() => {
        temp.classList.toggle("open");
      }, i * 100);
    }
  }
}
