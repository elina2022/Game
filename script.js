var $ = element => document.querySelector(element)
var $all = element => document.querySelectorAll(element)
var pizza = $("#pizza")
var clicks = 0
var score = $("#score")
var selling = 0
var sellingCount = $("#sellFor")
var selingButton = $("#sellingButton")
var toppings = $all(".toppingsItem")
var toppingsAll = $(".toppings")
var buyToppings = $all(".buyToppingsList")
var toppings = $all(".toppingsItem")
var workers = $all(".workers")
var nameID = $("#name")
var pointAdd = 1
var coinsPerClickHTML = $("#coinsPerClickHTML")
var coinsPerSecondHTML = $("#coinsPerSecondHTML")
var popupTopping = $("#popupTopping")
var okTopping = $("#okTopping")
var popupHired = $("#popupHired")
var okHired = $("#okHired")
var popupCoins = $("#popupCoins")
clickCounter = [0, 0, 0, 0, 0, 0]
clickCounter2 = [0, 0, 0]
clickCounter3 = [0, 0, 0]

pizza.onclick = function () { clickPlusMinus(1) }
sellingButton.onclick = function () { sellPizza() }

var namePrompt = prompt("What is your name?")
var welcomeAlert = alert("Welcome to your pizzeria " + namePrompt + ", click on the pizza to collect coins!")
nameID.innerText = "of " + namePrompt

function popupGone(popup) {
    popup.style.display = "none"
}

function clickPlusMinus() {
    clicks = clicks + pointAdd
    score.innerText = clicks
}

function sellPizza() {
    clicks = clicks + selling
    score.innerText = clicks
    selling = selling - selling
    sellingCount.innerText = selling
    for (let index = 0; index < toppings.length; index++) {
        toppings[index].style.opacity = "0"
    }
    for (let index = 0; index < buyToppings.length; index++) {
        buyToppings[index].style.opacity = "1"
    }
    for (let index = 0; index < clickCounter.length; index++) {
        clickCounter[index] = 0
    }
}

function buyToppingsButton(numberTopping, pointsToBuy, pointsForTopping) {
    clickCounter[numberTopping] = clickCounter[numberTopping] + 1
    if (clickCounter[numberTopping] == 1) {
        if (clicks >= pointsToBuy) {
            toppings[numberTopping].style.opacity = "1"
            buyToppings[numberTopping].style.opacity = "0.5"
            clicks = clicks - pointsToBuy
            score.innerText = clicks
            selling = selling + pointsForTopping
            sellingCount.innerText = selling
        } else {
            popupCoins.style.display = "inline"
            okCoins.style.display = "inline"
            clickCounter[numberTopping] = 0
        }
    } else if (clickCounter[numberTopping] >= 2) {
        popupTopping.style.display = "inline"
        okTopping.style.display = "inline"
    }
}

let perClick = 1
function pointsPerClick(numberTopping, pointsToBuy, workersPointAdd, workerNumber) {
    clickCounter2[numberTopping] = clickCounter2[numberTopping] + 1
    if (clickCounter2[numberTopping] == 1) {
        if (clicks >= pointsToBuy) {
            pointAdd = pointAdd + workersPointAdd
            workers[workerNumber].style.opacity = "0.5"
            clicks = clicks - pointsToBuy
            score.innerText = clicks

            perClick = perClick + workersPointAdd
            coinsPerClickHTML.innerText = perClick

            // coinsPerClickHTML = Number(coinsPerClickHTML)
            // coinsPerClickHTML.innerText = coinsPerClickHTML + workersPointAdd
        } else {
            popupCoins.style.display = "inline"
            okCoins.style.display = "inline"
            clickCounter2[numberTopping] = 0
        }
    } else if (clickCounter2[numberTopping] >= 2) {
        popupHired.style.display = "inline"
        okHired.style.display = "inline"
    }
}

let perSec = 0
function pointPerSec(numberTopping, pointsToBuy, pointsPerSecPoints, workerNumber) {
    clickCounter3[numberTopping] = clickCounter3[numberTopping] + 1
    if (clickCounter3[numberTopping] == 1) {
        if (clicks >= pointsToBuy) {
            setInterval(function () { clicks = clicks + pointsPerSecPoints; score.innerText = clicks }, 1000)
            workers[workerNumber].style.opacity = "0.5"
            clicks = clicks - pointsToBuy
            score.innerText = clicks

            perSec = perSec + pointsPerSecPoints
            coinsPerSecondHTML.innerText = perSec

        } else {
            popupCoins.style.display = "inline"
            okCoins.style.display = "inline"
            clickCounter3[numberTopping] = 0
        }
    } else if (clickCounter3[numberTopping] >= 2) {
        popupHired.style.display = "inline"
        okHired.style.display = "inline"
    }
}
