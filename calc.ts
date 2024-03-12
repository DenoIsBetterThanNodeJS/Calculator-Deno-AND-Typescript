function calculator() {
    let exp:any = prompt("Expression: ");
    var expint = eval(exp);
    return expint;
    

}

while(true) {
try {
        console.log(calculator());
        }


catch(error) {
    console.log("Invalid Expression");
}
}