document.querySelector("#submit").addEventListener("click", ()=>{
    const color = document.querySelector("#color").value;

    document.body.style.backgroundColor = color;
    alert("you choosed the color: " + color );
})