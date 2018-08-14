var baseUrl = 'https://github.com'
var owner = document.querySelector('.author a.url').innerText
var project = document.querySelector('[data-pjax="#js-repo-pjax-container"]').innerText

window.location.href = `${baseUrl}/${owner}/${project}/compare/stable...master?expand=1&title=PROD: `
