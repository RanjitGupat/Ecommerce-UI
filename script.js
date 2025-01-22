const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
};

if(close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
};

//cart working
if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready);

}else{
  ready();
}

//Cart javascript
function ready(){
  //Remove item from cart
  var removeCartItemButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartItemButtons);
  
  for(var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem);
  }
}

//Remove item from cart
function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();

}