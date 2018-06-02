//bóc tách object trong typescprit

var employ={
    fname: "Dung",
    lname:"Trần",
    age:28
};

let {fname : f,lname : l,age :lv}= employ;
//hoac let {fname,lname,age} = employ;
console.log(f);
console.log(l);
console.log(lv);