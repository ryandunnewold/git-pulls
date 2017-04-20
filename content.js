var transactions = document.getElementsByClassName('transaction');
for (var i = 0; i < transactions.length; i++) {
  var month = transactions[i].getElementsByClassName('stacked-date-month')[0].innerHTML
  var day = transactions[i].getElementsByClassName('stacked-date-day')[0].innerHTML
  var store = transactions[i].getElementsByClassName('transaction-title')[0].innerHTML
  var price = transactions[i].getElementsByClassName('transaction-amount')[0].innerHTML.replace('$', '')
  var link = document.createElement("a");
  link.href = "https://www.spendlyapp.com/transactions/new?price=" + price + "&date=" + month + "," + day + "&store=" + store;
  link.target = "_blank";
  link.innerText = 'Add to Spendly';
  link.className = 'chrome-spendly-button'
  transactions[i].insertBefore(link, transactions[i].lastChild);
}
