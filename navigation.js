var navigation = document.querySelector("#primary_navigation")

var navToggle = document.querySelector(".mobile_nav_toggle")



navToggle.addEventListener("click", () => {
     const visibility = navigation.getAttribute("data-visible")
     if(visibility == "false") {
          navigation.setAttribute('data-visible', true)
          navToggle.setAttribute("aria-expanded", true)
     }
     else {
          navigation.setAttribute('data-visible', false)
          navToggle.setAttribute("aria-expanded", false)
     }
})












