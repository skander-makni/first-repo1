let favs = document.getElementsByClassName("fa-heart");
let plusBtns=Array.from (document.getElementsByClassName("fa-plus-circle"));
let minusbtns=Array.from(document.getElementsByClassName("fa-minus-circle"));
let deletebtns = document.querySelectorAll(".fa-trash-alt");
//  let quets = Array.from(document.getElementsByClassName("quantity"));
//let unitprice =document.querySelectorAll(".unit-price");
//let totalprice =document.querySelectorAll(".total")
// favourite icon
for (let fav of favs){
    fav.addEventListener("click", function () {
        if(fav.style.color===  "red"){
        fav.style.color = "black"}
        else {
            fav.style.color="red"
        }
    })
}
//plusbtn
for (let i in plusBtns){
    plusBtns[i].addEventListener("click", function () {
        plusBtns[i].nextElementSibling.innerText++;
        totalSum()
    })
}
//minusbtns
for (let i in minusbtns){
    minusbtns[i].addEventListener("click", function () {
        minusbtns[i].previousElementSibling.innerText>0 &&
        minusbtns[i].previousElementSibling.innerText--; 
        totalSum()
    })
}
//deletebtn



for (let i = 0; i < deletebtns.length; i++){
    deletebtns[i].addEventListener("click", function(){
        deletebtns[i].parentNode.parentNode.parentNode.remove()
        totalSum()
    })
}
//function totalsum()
//{
    //let s= 0 ;
    //for (let i in quets){
     //s = s + unitprice[i].innerText.replace("$", "") * quets[i].innerText
    //}
    //totalprice.innerText = s +" $"
//}
function totalSum() {
    let qutes = Array.from(document.getElementsByClassName("quantity"));
    let unitPrices = document.querySelectorAll(".unit-price")
    let totalPrice = document.querySelector(".total")

    let s = 0;
    for (let i in qutes) {
        s = s + unitPrices[i].innerText.replace("$", "") * qutes[i].innerText
    }
    totalPrice.innerText = s + " $"
}
