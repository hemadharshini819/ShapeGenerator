let button=document.getElementById("button");
var numberInShape = 1;
var oldvalue =0; 

button.onclick = () => {
    let n=document.getElementById("number").value;
    const circle=document.getElementById("circle");
    const rectangle=document.getElementById("rectangle");
    const square=document.getElementById("square");
    const triangle=document.getElementById("triangle");
    const box=document.getElementById("box");

    n=Number(n) + Number(oldvalue);

    // n = n + oldvalue;

    for(let i=numberInShape;i<=n;i++){
        let shape=document.createElement("div");
        shape.innerHTML +=numberInShape;
        if(circle.checked) shape.classList.add("circle");
        
        else if(rectangle.checked) shape.classList.add("rectangle");
        
        else if(square.checked) shape.classList.add("square");

        else if(triangle.checked) shape.classList.add("triangle");
        else document.write("Invalid Input");
        
        numberInShape++;
        box.appendChild(shape);
        oldvalue=document.getElementById("box").lastElementChild.innerHTML;
        }
    };
    