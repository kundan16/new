var list = document.getElementById("projects");
var node = document.createElement("p");
var textnode = document.createTextNode("war");
node.appendChild(textnode);
function sayHello() { 
    document.getElementById('foo').innerHTML = 'Hi there!'; 
     document.location.href = '/activity'
} 

for(let i = 0; i < 5; i++)
{
    console.log("hhh\n");
    list.appendChild(node.appendChild(textnode));
}