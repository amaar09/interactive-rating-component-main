// this was my 2nd attempt with data_set logic in javascript

const submit = document.getElementById("submit");

let a;
submit.addEventListener("click", () => {
    let hideOnSubmit = document.getElementById("hideOnSubmit");
    hideOnSubmit.classList.add("hide")

    let showMsg = document.getElementById("show");
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
    showMsg.innerHTML = html;

    setTimeout(() => {
        console.log("4 seconds time interval")
        hideOnSubmit.classList.remove("hide")
        // hideOnSubmit.classList.add("visible")

    }, 1500);

})


const btn = document.querySelectorAll(".btns")
btn.forEach(function (button) {
    button.addEventListener("click", function (show) {
        let valOfBtn = show.target.dataset.val
        a = valOfBtn
        console.log("btn value=", a)
    })
})


