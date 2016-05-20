var shoppingList = [];

function getNewItem()
{
  var newItem = document.getElementsByClassName("search")[0].value;
  return newItem;
}

function isItemInList(item){
  for(i=0;i<shoppingList.length;i++){
    if (shoppingList[i] === item){
      return true;
      }
  }
  return false;
}

function CompareAndAdd(newItem)
{
  var doesItemExists = isItemInList(newItem);
  if (doesItemExists){
    var ShouldAddItem = confirm ("קיים פריט דומה. להוסיף בכל זאת?");
    if (ShouldAddItem) {
      addShoppingListItem(newItem);

    }
    else {
      return;
    }
  }
  else {
    addShoppingListItem(newItem);
  }
}

function addShoppingListItem(newItem)
{
    var node = document.createElement("LI");
    var textnode = document.createTextNode(newItem);
    node.appendChild(textnode);
    document.getElementById("DaShoppinglist").appendChild(node);

    shoppingList.push(newItem);
}
