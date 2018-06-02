let displayMauSac= function(messsageSpread:string,...colors:string[]){
    for(let i in colors){
        console.log(colors[i]);
    }
}

let messsageSpread='Message Spread';
let MauSacs= ['Cam','Nâu','Xanh lá'];
displayMauSac(messsageSpread,...MauSacs);