let messageEl = document.getElementById('message-el');

let cardEl = document.getElementById('cards-el');
let sumEl = document.getElementById('sum-el');
let newbtn = document.getElementById('new-btn');
let amtSpan = document.getElementById('amtSpan');
let amount = 100;
amtSpan.textContent = amount;
let cards = [];
let sum;
function random(){
    let rNum = Math.floor(Math.random()*13+1);
    switch(rNum){
        case 1:
            return 11;
        case 11,12,13:
            return 10;
        default:
            return rNum;
    }
}
function startGame(){
    if(amount<10){
        messageEl.textContent="Not enough amount!"
        return;
    }
    amount-=10;
    cards=[];
    sum=0;
    let num1 = random();
    let num2 = random();
    cards.push(num1);
    cards.push(num2);
    sum+=num1+num2;
    render();
}
function render(){
    
    cardEl.textContent = "Cards: "
    for(let i = 0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" ";
    }
    sumEl.textContent="Sum: "+sum;
    if(sum<=20){
        messageEl.textContent="Do you want to draw a new card?"
        newbtn.disabled=false;
    } else if(sum==21){
        messageEl.textContent="You've got Blackjack!";
        newbtn.disabled=true;
        amount+=100;
    } else {
        messageEl.textContent="You're out of the game!"
        newbtn.disabled=true;
    }
    amtSpan.textContent=amount;
}
function newCard(){
    let card = random();
    cards.push(card);
    sum+=card;
    render();
}