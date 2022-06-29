let form = document.querySelector("form");
let input = document.querySelector("input");
let small = document.querySelector("small");
let errorIcon = document.querySelector(".error_icon");

form.addEventListener("submit", (e) => {
   e.preventDefault()
   const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if (regEx.test(input.value.trim())) {
      small.classList.add("hide")
      errorIcon.classList.add("hide")      
      input.style.border = "2px solid rgba(115, 245, 115, 0.534)"
   } else {      
      small.classList.remove("hide")
      small.innerHTML = "Please provide a valid email"
      errorIcon.classList.remove("hide")
      input.style.border = "2px solid red"
      
   }
})