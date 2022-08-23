// this was my first attempt with simple logic

const submit = document.getElementById("submit");

let a = "";
submit.addEventListener("click", () => {
    let hideOnSubmit = document.getElementById("hideOnSubmit");
    hideOnSubmit.classList.add("hide")
    console.log("us clicked submit")
    let show = document.getElementById("show");
    let html = `
   <div class="inside-show thank-container">
   <img class="thank-you-image" src="./images/illustration-thank-you.svg" alt="" />
   <p class="round-border">You selected ${a} out of 5</p>
   <h3 class="thank-written-size">Thank you!</h3>
   <p class="text-align-center">
     We appreciate you taking the time to give a rating. If you ever need
     more support, don’t hesitate to get in touch!
   </p>
 </div>`
    show.innerHTML += html;
})

const one = document.getElementById("one")
one.addEventListener("click", () => {
    console.log("you have clicked one")
    a = one.innerHTML;
    console.log(a)

})
const two = document.getElementById("two")
two.addEventListener("click", () => {
    console.log("you have clicked two")
    a = two.innerHTML;
    console.log(a)
})
const three = document.getElementById("three")
three.addEventListener("click", () => {
    console.log("you have clicked three")
    a = three.innerHTML;
    console.log(a)
})
const four = document.getElementById("four")
four.addEventListener("click", () => {
    console.log("you have clicked four")
    a = four.innerHTML;
    console.log(a)
})
const five = document.getElementById("five")
five.addEventListener("click", () => {
    console.log("you have clicked five")
    a = five.innerHTML;
    console.log(a)
})
