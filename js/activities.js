const totalDonutCount = document.querySelector(".donut .display__totalDonutCount")
const totalAutoClickerCount = document.querySelector(".donut .display__totalAutoClickerCount")
const totalMultiplierCount = document.querySelector(".donut .display__totalMultiplierCount")
const totalAutoClickerPrice = document.querySelector(".donut .display__totalAutoClickerPrice")
const totalMultiplierPrice = document.querySelector(".donut .display__totalMultiplierPrice")
const makeDonut = document.querySelector(".donut .bakery__makeDonut")
const purchaseAutoClicker = document.querySelector(".donut .bakery__activate-auto-clicker")
const purchaseMultiplier = document.querySelector(".donut .bakery__activate-multiplier")
const donut = new Donut(totalDonutCount, totalAutoClickerCount, totalMultiplierCount, totalAutoClickerPrice, totalMultiplierPrice);
console.log(donut)

makeDonut.addEventListener("click", () => {
    donut.addDonut();
})

purchaseAutoClicker.addEventListener("click", () => {
   donut.buyAutoClicker();
   donut.activateAutoClickers();
})

purchaseMultiplier.addEventListener("click", ()=> {
    donut.buyMultiplier();
})




