const openHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
const cityNames = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const citiesData = {
  Seattle: {
    MinCustomers: 23,
    MaxCustomers: 65,
    CustomerPerHour: [],
    AverageCookiesPerCust: 6.3,
    CookieSalesPerHour: [],
    TotalCookiesSold: 0,
    Calculating: function () {
      for (let i = 0; i < openHours.length; i++) {
        const ranNum = randomNumber(this.MinCustomers, this.MaxCustomers);
        this.CustomerPerHour.push(ranNum);
        this.CookieSalesPerHour.push(ranNum * this.AverageCookiesPerCust);
      }
    },
  },
  Tokyo: {
    MinCustomers: 3,
    MaxCustomers: 24,
    CustomerPerHour: [],
    AverageCookiesPerCust: 1.2,
    CookieSalesPerHour: [],
    TotalCookiesSold: 0,
    Calculating: function () {
      for (let i = 0; i < openHours.length; i++) {
        const ranNum = randomNumber(this.MinCustomers, this.MaxCustomers);
        this.CustomerPerHour.push(ranNum);
        this.CookieSalesPerHour.push(ranNum * this.AverageCookiesPerCust);
      }
    },
  },
  Dubai: {
    MinCustomers: 11,
    MaxCustomers: 38,
    CustomerPerHour: [],
    AverageCookiesPerCust: 3.7,
    CookieSalesPerHour: [],
    TotalCookiesSold: 0,
    Calculating: function () {
      for (let i = 0; i < openHours.length; i++) {
        const ranNum = randomNumber(this.MinCustomers, this.MaxCustomers);
        this.CustomerPerHour.push(ranNum);
        this.CookieSalesPerHour.push(ranNum * this.AverageCookiesPerCust);
      }
    },
  },
  Paris: {
    MinCustomers: 20,
    MaxCustomers: 38,
    CustomerPerHour: [],
    AverageCookiesPerCust: 2.3,
    CookieSalesPerHour: [],
    TotalCookiesSold: 0,
    Calculating: function () {
      for (let i = 0; i < openHours.length; i++) {
        const ranNum = randomNumber(this.MinCustomers, this.MaxCustomers);
        this.CustomerPerHour.push(ranNum);
        this.CookieSalesPerHour.push(ranNum * this.AverageCookiesPerCust);
      }
    },
  },
  Lima: {
    MinCustomers: 2,
    MaxCustomers: 16,
    CustomerPerHour: [],
    AverageCookiesPerCust: 4.6,
    CookieSalesPerHour: [],
    TotalCookiesSold: 0,
    Calculating: function () {
      for (let i = 0; i < openHours.length; i++) {
        const ranNum = randomNumber(this.MinCustomers, this.MaxCustomers);
        this.CustomerPerHour.push(ranNum);
        this.CookieSalesPerHour.push(ranNum * this.AverageCookiesPerCust);
      }
    },
  },
};

citiesData.Seattle.Calculating();
citiesData.Tokyo.Calculating();
citiesData.Dubai.Calculating();
citiesData.Paris.Calculating();
citiesData.Lima.Calculating();

console.log(citiesData);

const cityData = document.getElementById("cityData");
const article = document.createElement("article");

for (i = 0; i < cityNames.length; i++) {
  const h2 = document.createElement("h2");
  h2.textContent = cityNames[i];
  article.appendChild(h2);
  const ul = document.createElement("ul");
  for (i = 0; i < openHours.length; i++) {
    const li = document.createElement("li");
    // const cityName = citiesData.cityNames[i];
    li.textContent = `${openHours[i]} ${citiesData.Tokyo.CookieSalesPerHour[i]} cookies`;
    ul.appendChild(li);
  }
  article.append(ul);
}

cityData.appendChild(article);
