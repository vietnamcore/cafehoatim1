const PASSWORD = "admin123";

function login() {
  const pass = document.getElementById("password").value;
  if (pass === PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("admin-panel").style.display = "block";
    loadEditPanel();
  } else {
    alert("Sai mật khẩu!");
  }
}

function loadEditPanel() {
  const menu = JSON.parse(localStorage.getItem("menu")) || defaultMenu;
  const container = document.getElementById("edit-container");
  container.innerHTML = "";

  for (let category in menu) {
    const section = document.createElement("div");
    section.innerHTML = `<h3>${category}</h3>`;

    menu[category].forEach((item, index) => {
      const row = document.createElement("div");
      row.innerHTML = `
        <label>
          <input type="checkbox" ${item.available ? "checked" : ""} 
            onchange="toggleItem('${category}', ${index}, this.checked)">
          ${item.name} - ${item.price}
        </label>`;
      section.appendChild(row);
    });

    container.appendChild(section);
  }
}

function toggleItem(category, index, available) {
  const menu = JSON.parse(localStorage.getItem("menu")) || defaultMenu;
  menu[category][index].available = available;
  localStorage.setItem("menu", JSON.stringify(menu));
}

function saveChanges() {
  alert("Đã lưu thay đổi!");
}
