//viết Rest Parameter theo javascript
let displayColors= function(){
    for(let i in arguments){
        console.log(arguments[i]);
    }

    
}

displayColors('Red');
displayColors('Red','Green');
displayColors('Red','Green','Blue');

//viết rest parameter theo typescipt

let viewColor=function(message :string,...colors:string[]){
    for(let i in colors){
        console.log(colors[i]);
    }
}
var message = 'Message';
viewColor(message,'Red');
viewColor(message,'Red','Green');
let mang :string[]=['Red','Green','Blue']
viewColor(message,mang);