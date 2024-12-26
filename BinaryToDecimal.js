let a = 9;
let s = "";
while(a>0){
    s = (a%2) + s;
    a = Math.floor(a/2);
}
console.log(s)
