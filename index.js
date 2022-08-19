const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeBtn = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.querySelector("span").classList.toggle("active");
});

// fill in the table with data

orders.forEach((order) => {
  const row = document.createElement("tr");
  const trContent = `
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.shipping}</td>
                            <td class="${
                              order.shipping === "Declined"
                                ? "danger"
                                : order.shipping === "Pending"
                                ? "warning"
                                : "primary"
                            }">${order.paymentStatus}</td>
                            <td class="primary">Details</td>
    `;

  row.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(row);
});
