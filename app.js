const mouse = document.querySelector(".cursor");

const burger = document.querySelector(".burger");

function toggleForm() {
  document.body.classList.toggle("activeForm");
}

function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}

function activeCursor(e) {
  const item = e.target;

  if (item.id === "signIn") {
    mouse.classList.add("nav-active");
    gsap.to(".title-swipe", 1, { y: "0%" });
  } else {
    mouse.classList.remove("nav-active");
    gsap.to(".title-swipe", 1, { y: "100%" });
  }

  if (
    item.id === "logo" ||
    item.classList.contains("burger") ||
    item.classList.contains("social") ||
    item.id === "signUp"
  ) {
    mouse.classList.add("links-active");
  } else {
    mouse.classList.remove("links-active");
  }
}
function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "black" });
    gsap.to("#logo", 1, { color: "black" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
    document.body.classList.add("hide");
    document.getElementById(".nav-bar").style.zIndex = "-1";
    document.getElementById(".line1").style.zIndex = "10";
    document.getElementById(".line2").style.zIndex = "10";
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.to("#logo", 1, { color: "white" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
    document.body.classList.remove("hide");
  }
}

// barba page transitions

// barba.init({
//   views: [
//     {
//       namespace: "home",
//     },
//     {
//       namespace: "burgerP",
//     },
//   ],
// });

//event listener

burger.addEventListener("click", navToggle);
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);
