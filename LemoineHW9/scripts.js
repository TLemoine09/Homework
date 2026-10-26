function tellmewelcomehome(){
    let name = prompt("What is your name?");
    console.log("Welcome home master " + name);
}
tellmewelcomehome();

function addNumbers(a,b){
    return (a + b);
}

let total = addNumbers(40, 60);
console.log("The total is: " + total);
addNumbers(40 , 60);

function processNumber(num){
    if (num % 2 === 0 ){
        return num * 3;
    }else{
        return num * 2;
    }
}