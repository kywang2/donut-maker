class Donut {

    constructor (donutTotalCount, clickerTotalCount, multiplierTotalCount, clickerTotalPrice, multiplierTotalPrice){
        this.donutTotalCount = donutTotalCount;
        this.clickerTotalCount = clickerTotalCount;
        this.multiplierTotalCount = multiplierTotalCount;
        this.clickerTotalPrice = clickerTotalPrice;
        this.multiplierTotalPrice = multiplierTotalPrice;
        this._donutAmount = 0;
        this._clickerAmount = 0;
        this._clickerPrice = 100;
        this._multiplierAmount = 0;
        this._multiplierPrice = 10;  
    }

    addDonut(){
        this._donutAmount+=Math.pow(1.2, this._multiplierAmount);
        this.donutTotalCount.innerText = Math.round(this._donutAmount);
        this.clickerTotalPrice.innerText = Math.round(this._clickerPrice);
        this.clickerTotalCount.innerText = Math.round(this._clickerAmount);
        this.multiplierTotalPrice.innerText = Math.round(this._multiplierPrice);
        this.multiplierTotalCount.innerText = Math.round(this._multiplierAmount);
    }

    buyAutoClicker(){
        if(this._donutAmount>=this._clickerPrice){
            this._donutAmount-=this._clickerPrice;
            this._clickerAmount+=1;
            this._clickerPrice = Math.round(this._clickerPrice*1.1);
            this.donutTotalCount.innerText = Math.round(this._donutAmount);
            this.clickerTotalPrice.innerText = Math.round(this._clickerPrice);
            this.clickerTotalCount.innerText = Math.round(this._clickerAmount);
        }
    }

    buyMultiplier(){
        if(this._donutAmount>=this._multiplierPrice){
            this._donutAmount-=this._multiplierPrice;
            this._multiplierAmount+=1;
            this._multiplierPrice=Math.round(this._multiplierPrice*1.1);
            this.donutTotalCount.innerText = Math.round(this._donutAmount);
            this.multiplierTotalPrice.innerText = Math.round(this._multiplierPrice);
            this.multiplierTotalCount.innerText = Math.round(this._multiplierAmount);
        }
    }

    activateAutoClickers(){
        setInterval(() => {
            this._donutAmount+=this._clickerAmount*Math.pow(1.2, this._multiplierAmount);
            this.donutTotalCount.innerText = Math.round(this._donutAmount);
        }, 1000);
    }

    restartGame(){
        this._donutAmount = 0;
        this._clickerAmount = 0;
        this._clickerPrice = 100;
        this._multiplierAmount = 0;
        this._multiplierPrice = 10; 
        this.donutTotalCount.innerText = Math.round(this._donutAmount); 
        this.clickerTotalPrice.innerText = Math.round(this._clickerPrice);
        this.clickerTotalCount.innerText = Math.round(this._clickerAmount);
        this.multiplierTotalPrice.innerText = Math.round(this._multiplierPrice);
        this.multiplierTotalCount.innerText = Math.round(this._multiplierAmount);

    }

    
}
