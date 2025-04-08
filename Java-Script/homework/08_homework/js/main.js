// Массив товаров
const products = [
    {
      id: 1,
      title: "Iphone 16 Pro Max",
      price: 1699.99,
      image: "/img/Iphone13promax.jpg",
      category: "smartphones"
    },
    {
      id: 2,
      title: "Samsung S25 Ultra",
      price: 1599.99,
      image: "/img/samsung.jpg",
      category: "smartphones"
    },
    {
      id: 3,
      title: "TV Samsung",
      price: 499.99,
      image: "/img/tel1.jpg",
      category: "tv"
    },
    {
      id: 4,
      title: "TV Xiaomi",
      price: 399.99,
      image: "/img/tel2.jpg",
      category: "tv"
    },
    {
      id: 5,
      title: "Fridge BOSCH",
      price: 899.99,
      image: "/img/xolod1.jpg",
      category: "fridge"
    },
    {
      id: 6,
      title: "Fridge MAZERATTI",
      price: 269.99,
      image: "/img/xolod2.jpg",
      category: "fridge"
    },
    {
      id: 7,
      title: "Headphones APPLE",
      price: 199.99,
      image: "/img/nau1.jpg",
      category: "headphones"
    },
    {
      id: 8,
      title: "Headphones HUAWEI",
      price: 99.99,
      image: "/img/nau2.jpg",
      category: "headphones"
    }
    // Можно добавить другие товары при необходимости
  ];
  
  // Корзина – массив для хранения выбранных товаров
  let cart = [];
  
  /* Функция отрисовки товаров */
  function renderProducts(productsList) {
    const container = document.getElementById("products-container");
    container.innerHTML = ""; // очищаем контейнер
  
    productsList.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <div class="product-info">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-price">${product.price} $</p>
          <button class="add-to-cart">Купить</button>
        </div>
      `;
      // При клике на кнопку "Купить" вызываем функцию добавления в корзину
      card.querySelector(".add-to-cart").addEventListener("click", () => {
        addToCart(product.id);
      });
      container.appendChild(card);
    });
  }
  
  /* Функция фильтрации товаров */
  function filterProducts() {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    const selectedCategory = document.getElementById("category-select").value;
  
    const filtered = products.filter(product => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  
    renderProducts(filtered);
  }
  
  document.getElementById("search-input").addEventListener("input", filterProducts);
  document.getElementById("category-select").addEventListener("change", filterProducts);
  
  /* Функция добавления товара в корзину */
  function addToCart(productId) {
    // Находим товар по id
    const product = products.find(prod => prod.id === productId);
    if (!product) return;
  
    // Проверяем, есть ли уже такой товар в корзине
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      // Добавляем новый объект в корзину, добавляя свойство quantity
      cart.push({ ...product, quantity: 1 });
    }
    
    renderCart();
    updateCartCount();
    // Убираем вызов openCart(), чтобы корзина не открывалась автоматически
  }
  
  /* Функция отрисовки корзины */
  function renderCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = ""; // очищаем контейнер корзины
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Корзина пуста</p>";
      return;
    }
  
    cart.forEach(item => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <span class="cart-item-title">${item.title}</span>
        <img src="${item.image}" alt="${item.title}" class="product-image-wrapper">
        <span class="cart-item-price">${item.price} $</span>
        <div class="quantity-controls">
          <button class="decrease" data-id="${item.id}">–</button>
          <span class="item-quantity">${item.quantity}</span>
          <button class="increase" data-id="${item.id}">+</button>
        </div>
        <button class="remove" data-id="${item.id}">Удалить</button>
      `;
      cartContainer.appendChild(cartItem);
    });
  }
  
  /* Функция обновления счётчика товаров в корзине */
  function updateCartCount() {
    const countEl = document.getElementById("cart-count");
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    countEl.textContent = totalCount;
  }
  
  /* Изменение количества товара */
  function changeQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
  
    item.quantity += delta;
    if (item.quantity < 1) {
      removeFromCart(productId);
    } else {
      renderCart();
      updateCartCount();
    }
  }
  
  /* Удаление товара из корзины */
  function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
    updateCartCount();
  }
  
  /* Обработчики для кнопок изменения количества и удаления */
  // Делегирование событий на контейнере корзины
  document.getElementById("cart-container").addEventListener("click", e => {
    const target = e.target;
    const id = Number(target.getAttribute("data-id"));
    if (target.classList.contains("increase")) {
      changeQuantity(id, 1);
    }
    if (target.classList.contains("decrease")) {
      changeQuantity(id, -1);
    }
    if (target.classList.contains("remove")) {
      removeFromCart(id);
    }
  });
  
  /* Очистка корзины */
  document.getElementById("clear-cart").addEventListener("click", () => {
    cart = [];
    renderCart();
    updateCartCount();
  });
  
  /* Открытие/закрытие корзины (выезжающая панель) */
  const openCartBtn = document.getElementById("openCart");
const closeCartBtn = document.getElementById("closeCart");
const cartPanel = document.getElementById("cart-panel");
const cartOverlay = document.getElementById("cart-overlay");

function openCart() {
  cartPanel.classList.add("open");
  cartOverlay.style.display = "block";
}

function closeCart() {
  cartPanel.classList.remove("open");
  cartOverlay.style.display = "none";
}

openCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
  /* Отображаем товары при загрузке страницы */
  document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
    renderCart();
    updateCartCount();
  });
  