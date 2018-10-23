
var json = new XMLHttpRequest();
json.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var object = JSON.parse(this.responseText);

        object.forEach(function(currency) {
            var table = document.getElementById("coin-table");
            table.innerHTML += `<tr><td>${currency.rank}</td>
            <td>${currency.name}</td>
            <td>$${currency.price_usd}</td>
            <td>${currency.percent_change_1h}%</td>
            <td>${currency.percent_change_24h}%</td>
            <td>${currency.percent_change_7d}%</td></tr>`;
        });
    }
};
json.open(
    "GET",
    "https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=20",
    true
); // initialise the request
json.send();
