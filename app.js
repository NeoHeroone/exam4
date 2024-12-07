document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  header.innerHTML = `
    <nav>
      <div class="container">
        <h3 class="logo">Logo<span>Dev</span></h3>
        <ul class="nav-title">
          <li class="nav-list"><a href="./index.html" class="nav-link nav-link1">Home</a></li>
          <li class="nav-list"><a href="./portfolio.html" class="nav-link nav-link2">Portfolio</a></li>
          <li class="nav-list"><a href="./setup.html" class="nav-link nav-link3">Setup</a></li>
          <li class="nav-list"><a href="./about.html" class="nav-link nav-link4">About me</a></li>
          <li class="nav-list"><a href="./testimonial.html" class="nav-link nav-link5">Testimonials</a></li>
          <li class="nav-list"><a href="./contact.html" class="nav-link nav-link6">Contact</a></li>
        </ul>
      </div>
    </nav>
  `
  fetch("http://localhost:3000/setup").then((e) => e.json()).then((e) => {
    if (location.href == "http://127.0.0.1:5500/index.html") {
      const navHome = document.querySelector(".nav-link1")
      navHome.style.color = "white"
    }
    if (location.href == "http://127.0.0.1:5500/portfolio.html") {
      const navHome = document.querySelector(".nav-link2")
      navHome.style.color = "white"
    }
    if (location.href == "http://127.0.0.1:5500/setup.html") {
      const navHome = document.querySelector(".nav-link3")
      navHome.style.color = "white"
    }
    if (location.href == "http://127.0.0.1:5500/about.html") {
      const navHome = document.querySelector(".nav-link4")
      navHome.style.color = "white"
    }
    if (location.href == "http://127.0.0.1:5500/testimonial.html") {
      const navHome = document.querySelector(".nav-link5")
      navHome.style.color = "white"
    }
    if (location.href == "http://127.0.0.1:5500/contact.html") {
      const navHome = document.querySelector(".nav-link6")
      navHome.style.color = "white"
    }
    const setupImage = document.querySelector(".setupImage");
    setupImage.src = e.image
  })

  fetch("http://localhost:3000/aboutme").then((e) => e.json()).then((e) => {
    const aboutImage = document.querySelector(".aboutImage")
    aboutImage.src = e.image
  })

  footer.innerHTML = `
  <hr>
  <div class="container">
    <p>
      © JavohirDev 2020 - 2021 | Made with <i class="fa-regular fa-heart" style="color: #ff0000;"></i>
    </p>
  </div>
`
})