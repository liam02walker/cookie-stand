const openHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

const table = document.getElementById("cityData");
const tableHeader = document.getElementById("tableHeader");
const tableBody = document.getElementById("tableBody");
const tableFooter = document.getElementById("tableFooter");

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to create each Cookie Store with their set values
function CookiesStore(location, minCust, maxCust, average) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookies = average;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookieSold = 0;
}
CookiesStore.prototype.calculateSales = function () {
  for (let i = 0; i < openHours.length; i++) {
    let ranNum = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(ranNum);
    let CookPerHour = ranNum * this.averageCookies;
    this.cookiesPerHour.push(Math.floor(CookPerHour));

    this.totalCookieSold = this.totalCookieSold + CookPerHour;
  }
};
CookiesStore.prototype.render = function () {
  this.calculateSales();
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = this.location;
  tr.appendChild(th);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }

  const totalTD = document.createElement("td");
  totalTD.textContent = Math.floor(this.totalCookieSold);
  tr.appendChild(totalTD);

  tableBody.appendChild(tr);
};

// Creating each initial cities
const cities = [
  new CookiesStore("Seattle", 23, 65, 6.3),
  new CookiesStore("Tokyo", 3, 24, 1.2),
  new CookiesStore("Dubai", 11, 38, 3.7),
  new CookiesStore("Paris", 20, 38, 2.3),
  new CookiesStore("Lima", 2, 16, 4.6),
];

// Creating totals at the end of each rows
const headerRow = document.createElement("tr");
const blankTD = document.createElement("td");
headerRow.appendChild(blankTD);

for (let i = 0; i < openHours.length; i++) {
  const th = document.createElement("th");
  th.textContent = openHours[i];
  headerRow.appendChild(th);
}
const totalHeader = document.createElement("th");
totalHeader.textContent = "TOTAL";
headerRow.appendChild(totalHeader);
tableHeader.appendChild(headerRow);

// Renders all initial locations onto the page
for (i = 0; i < cities.length; i++) {
  cities[i].render();
}

// Form to add a new location
const locationForm = document.getElementById("locationForm");

locationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const location = event.target.location.value;
  const minCust = event.target.minCustomers.value;
  const maxCust = event.target.maxCustomers.value;
  const cookAvg = event.target.averageCookies.value;

  const newLocation = new CookiesStore(location, minCust, maxCust, cookAvg);
  cities.push(newLocation);
  newLocation.render();
  createFooterRow();
});

// Creating the Total row at the footer of the table
function createFooterRow() {
  //Remove old tr from DOM
  const trID = document.getElementById("totalRow");
  trID?.remove();

  //Create new TR
  const tr = document.createElement("tr");
  tr.setAttribute("id", "totalRow");
  const th = document.createElement("th");
  th.textContent = "Hourly Totals";
  tr.appendChild(th);

  let totalTotals = 0;

  for (i = 0; i < openHours.length; i++) {
    let hourlyTotal = 0;
    for (j = 0; j < cities.length; j++) {
      hourlyTotal += cities[j].cookiesPerHour[i];
      totalTotals += cities[j].cookiesPerHour[i];
    }
    const thTotal = document.createElement("th");
    thTotal.textContent = hourlyTotal;
    tr.appendChild(thTotal);
  }
  const thTotal = document.createElement("th");
  thTotal.textContent = totalTotals;
  tr.appendChild(thTotal);
  tableFooter.appendChild(tr);
}
createFooterRow();
