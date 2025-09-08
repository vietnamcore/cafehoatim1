const defaultMenu = {
  "Café": [
    { name: "Café Đen", price: "15k", available: true },
    { name: "Café Sữa Đá", price: "20k", available: true },
    { name: "Cacao Sữa", price: "28k", available: true }
  ],
  "Trà": [
    { name: "Lipton", price: "20k", available: true },
    { name: "Trà Đào", price: "28k", available: true }
  ],
  "Trà Sữa": [
    { name: "Trà Sữa Truyền Thống", price: "25k", available: true },
    { name: "Trà Sữa Matcha", price: "30k", available: true }
  ],
  "Nước Ép": [
    { name: "Cam Ép", price: "25k", available: true },
    { name: "Táo", price: "30k", available: true }
  ],
  "Đồ Ăn Chay": [
    { name: "Mì Cay Chay", price: "25k - 35k", available: true },
    { name: "Chả Giò Chiên", price: "20k", available: true },
    { name: "Lẩu Chay", price: "69k - 199k", available: true }
  ]
};

function loadMenu() {
  const menu = JSON.parse(localStorage.getItem("menu")) || defaultMenu;
  const container = document.getElementById("menu-container");
  container.innerHTML = "";

  for (let category in menu) {
    const catTitle = document.createElement("h2");
    catTitle.textContent = category;
    container.appendChild(catTitle);

    menu[category].forEach(item => {
      const card = document.createElement("div");
      card.className = "card" + (item.available ? "" : " hidden");
      card.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
      container.appendChild(card);
    });
  }
}

document.addEventListener("DOMContentLoaded", loadMenu);
