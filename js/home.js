function toggleMenu() {
    let menu = document.getElementById("menu_list");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";  
    } else {
        menu.style.display = "none";  
    }
}

let  menuButton = document.getElementById("menu_button");
function darkMode(){
    document.body.classList.toggle('darkMode');
    let button = document.getElementById("toggle-btn");
    
    if (document.body.classList.contains('darkMode')) {
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
}



function searchProduct() {
    // Kiritilgan qiymatni olish
    const input = document.getElementById("searchInput").value.toLowerCase();
  
    // Mahsulotlar ro'yxatini olish
    const products = document.querySelectorAll("#productList li");
  
    // Har bir mahsulotni tekshirish
    products.forEach((product) => {
      const productName = product.textContent.toLowerCase();
      
      // Agar mahsulot nomi qidiruvga mos kelsa, uni ko'rsatamiz, aks holda yashiramiz
      if (productName.includes(input)) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });
  }
  