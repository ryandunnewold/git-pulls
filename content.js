var transactions = document.getElementsByClassName('transaction');
for (var i = 0; i < transactions.length; i++) {
  var date = transactions[i].getElementsByClassName('transaction-section-title')[0].innerText
  var store = transactions[i].getElementsByClassName('transaction-title')[0].innerHTML
  var price = transactions[i].getElementsByClassName('transaction-amount')[0].innerHTML.replace('$', '')
  var link = document.createElement("a");
  link.href = "https://www.spendlyapp.com/transactions/new?price=" + price + "&store=" + store + "&date=" + date;
  link.target = "_blank";
  link.innerText = 'Add to Spendly';
  link.className = 'chrome-spendly-button'
  transactions[i].insertBefore(link, transactions[i].lastChild);
}
