import{updateDonutCount} from "../../js/app.js";

describe('updateDonutCount changes donut-count element when a click happens')
instanceof("click the button once should update ocunt.", ()=> {
    const clickButton = document.querySelector(".click-button");
    clickButton.click();
    const donutCountElement = document.querySelector(".donut-count");
    expect (donutCountElement.innerText).toBe(1);
})