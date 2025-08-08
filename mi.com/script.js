const allProductButtons = document.querySelectorAll(".product");
const allProductCards = document.querySelectorAll(".product-card");

allProductButtons.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        allProductButtons.forEach(t => {
            t.style.color = 'black';
        });
        allProductCards.forEach(card => {
            card.style.display = 'none';
        });
      
        tab.style.color = 'red';
        allProductCards[index].style.display = 'flex';
    });
});