
function countToTen(){
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

countToTen(10);

function squareNumber(num){
    return num * num;
}
function printSquare(num){
    let squared = squareNumber(num);
    console.log("The square of " + num + " is: " + squared);
}
printSquare(30);

function welcomeUser(name){
    console.log("Welcome, " + name + "!");
}
welcomeUser("Tory");