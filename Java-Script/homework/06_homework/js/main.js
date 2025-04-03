let users = [];
let counter = document.getElementById("counter");
let btn = document.querySelector(".btn");
let resetBtn = document.getElementById("resetBtn");
let outContainer = document.querySelector(".outContainer");

btn.onclick = function () {
  // Отримуємо значення з полів та обрізаємо пробіли
  let name = document.getElementById("name").value.trim();
  let age = document.getElementById("age").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let gender = document.getElementById("gender").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let errorMsg = document.getElementById("errorMsg");
  let ageError = document.getElementById("ageError");

  // Спочатку очищуємо повідомлення про помилки
  errorMsg.textContent = "";
  ageError.textContent = "";

  // Перевірка: усі поля мають бути заповнені, крім поля "стать"
  if (
    name === "" ||
    age === "" ||
    email === "" ||
    phone === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    errorMsg.textContent = "Будь-ласка, заповність всі поля";
    return;
  }

  // Перевірка віку (вік має бути не менше 18)
  let ageNumber = parseInt(age);
  if (ageNumber < 18) {
    ageError.textContent = "Користувачу повинно бути більше 18 років";
    return;
  }

  // Перевірка співпадання паролів
  if (password !== confirmPassword) {
    errorMsg.textContent = "паролі не співпадають";
    return;
  }

  // Якщо всі перевірки пройдено, створюємо об'єкт користувача
  let user = {
    name: name,
    age: age,
    email: email,
    phone: phone,
    gender: gender,
    password: password
  };

  users.push(user);
  counter.textContent = users.length;
  console.log(users);
};

resetBtn.onclick = function () {
  outContainer.innerHTML = "";
  outContainer.innerHTML += "<h3>Зареєстровані користувачі</h3>";

  users.forEach(function (user) {
    let imgSrc = "";
    if (user.gender === "m") {
      imgSrc = "./img/man.jpg";
    } else if (user.gender === "w") {
      imgSrc = "./img/woman.jpg";
    } else {
      imgSrc = "./img/other.jpg";
    }

    // Формуємо HTML-картку для кожного користувача
    outContainer.innerHTML += `
      <div class="item">
        <img src="${imgSrc}" alt="Аватар">
        <h5>Ім'я: ${user.name}</h5>
        <ul>
          <li>Років: ${user.age}</li>
          <li>Email: ${user.email}</li>
          <li>Телефон: ${user.phone}</li>
          <li>Стать: ${
            user.gender === "m"
              ? "Чоловік"
              : user.gender === "w"
              ? "Жінка"
              : "Не вказано"
          }</li>
        </ul>
      </div>
    `;
  });
};