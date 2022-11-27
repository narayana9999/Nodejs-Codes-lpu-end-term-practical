document.querySelector("#perform").addEventListener("click", ()=>{
    const operation = document.querySelector("#op").value;
    const num1 = Number(document.querySelector("#num1").value);
    const num2 = Number(document.querySelector("#num2").value);
    let res;
    switch(operation){
        case "add":
            res = num1+num2;
            break;
        case "sub":
            res = num1-num2;
            break;
        case "mul":
            res = num1*num2;
            break;
        case "div":
            res = num1/num2;
            break;
        default:
            res = 0;
    }
    document.querySelector("#res").innerHTML = `Result : ${res}`;
});
