const InputBack = document.getElementById("input-back");
const InputCurrent = document.getElementById("input-current");

let savednumber = "", sign = "", newstrnumber = "";
function pressbtn(value){
    newstrnumber += value;
    InputCurrent.innerText =  newstrnumber;
}
function pressbtn1(_sign){
    InputBack = newBack;
    InputBack.innerText = InputBack + " " + sign;
    clearAll();
}
function clearAll(){
    newstrnumber = "";
    InputCurrent.innerText = newstrnumber;
}
function deletelastfigure(){
    newstrnumber=newstrnumber.slice(0, newstrnumber.length -1);
    InputCurrent.innerText = newstrnumber;
}
function pressbtnequal(){
   if (savednumber && newstrnumber ){
    if(sign == "+" ){
        newstrnumber = `${Number(savednumber)+ 
        Number(newstrnumber) }`
    }
    if(sign == "/" ){
        newstrnumber = `${Number(savednumber)/ 
        Number(newstrnumber) }`
    }
    if(sign == "*" ){
        newstrnumber = `${Number(savednumber)* 
        Number(newstrnumber) }`
    }
    if(sign == "-" ){
        newstrnumber = `${Number(savednumber)-
        Number(newstrnumber) }`
    }
    savednumber="";
    InputBack.innerText = savednumber;
    InputCurrent.innerText = newstrnumber;
   }
}
function signs(_sign){
    sign = _sign;
    InputBack.innerText= newstrnumber + " " + sign;
    savednumber = newstrnumber;
    clearAll();
}
