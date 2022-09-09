let selection  = 0

function select(i) {
    selection = i
}



function submit() {
    let main = document.querySelector("main")

    if (selection < 1) {
        btn.textContent = "select your rating"
    } else {
        main.innerHTML = `
        <div class="thank-you-state">
            <img src="./images/illustration-thank-you.svg" alt="thank-you-illus">
            <h2>You selected ${selection} out of 5</h2>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
        </div>
    `
    }

    
}
