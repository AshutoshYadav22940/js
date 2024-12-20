function sum(a){
    return function(b){
        console.log(a+b);
        
    }
}
let sf=sum(10);
sf(4);
sf(74);
sf(34);
sf(45);
ghgy 