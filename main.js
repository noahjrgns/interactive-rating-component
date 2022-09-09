let selection  = 0

function selection1() {
    selection = 1
}

function selection2() {
    selection = 2
}

function selection3() {
    selection = 3
}

function selection4() {
    selection = 4
}

function selection5() {
    selection = 5
}



function submit() {
    let main = document.querySelector("main")
    let btn = document.querySelector(".btn")

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