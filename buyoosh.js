
function addshoppinglistitem()
{
    var newitemtext = document.getElementsByClassName("search")[0].value;
    var node = document.createElement("LI");
    var textnode = document.createTextNode(newitemtext);
    node.appendChild(textnode);
    document.getElementById("shoppinglist").appendChild(node);
}
