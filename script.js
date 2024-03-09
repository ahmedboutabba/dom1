// Add your JavaScript code here
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
  
    items.forEach(item => {
      const quantityValue = item.querySelector('.quantity-value');
      const likeButton = item.querySelector('.like');
      const deleteButton = item.querySelector('.delete');
      const minusButton = item.querySelector('.minus');
      const plusButton = item.querySelector('.plus');
  
      // Initial total price calculation
      const price = 10; // Change this to the actual price of the item
      totalPrice += parseInt(quantityValue.textContent) * price;
  
      // Event listener for like button
      likeButton.addEventListener('click', function() {
        likeButton.classList.toggle('active');
      });
  
      // Event listener for delete button
      deleteButton.addEventListener('click', function() {
        item.remove();
        updateTotalPrice();
      });
  
      // Event listener for minus button
      minusButton.addEventListener('click', function() {
        let quantity = parseInt(quantityValue.textContent);
        if (quantity > 1) {
          quantity--;
          quantityValue.textContent = quantity;
          updateTotalPrice();
        }
      });
  
      // Event listener for plus button
      plusButton.addEventListener('click', function() {
        let quantity = parseInt(quantityValue.textContent);
        quantity++;
        quantityValue.textContent = quantity;
        updateTotalPrice();
      });
    });
  
    // Function to update total price
    function updateTotalPrice() {
      totalPrice = 0;
      items.forEach(item => {
        const quantityValue = item.querySelector('.quantity-value');
        const price = 10; // Change this to the actual price of the item
        totalPrice += parseInt(quantityValue.textContent) * price;
      });
      totalPriceElement.textContent = totalPrice;
    }
  });