/*
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
*/
// Check off specific todos by clicking
$('ul').on('click', 'li', function(){
 $(this).toggleClass('completed');
});

// Click on X to delete todos
$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // Grab new todo text from input
    var todoText = $(this).val();
    $(this).val('');
    // Create a new li and add to ul
    $('ul').append('<li class="list-group-item"> <span><i class="fa fa-trash"></i></span> ' + todoText + '</li>')
  }
});

$('.fa-plus').click(function(){
  $("input[type='text']").fadeToggle();
});
