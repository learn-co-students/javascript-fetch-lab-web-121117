const token = 'f68ddd741b92590e61597ee7e11bdba252cc43e9';
const base_url = 'https://api.github.com'
// const repo = 'brianabaker/javascript-fetch-lab'

function getIssues() {
  fetch(`${base_url}/repos/brianabaker/javascript-fetch-lab/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  json.map(function(obj){
  let li = document.createElement('li')
  let link = document.createElement('a')
  link.setAttribute('href', obj.html_url)
  link.setAttribute('target', "_blank")
  link.innerHTML = obj.title
  console.log(obj.url)
  let issuesDiv = document.querySelector("#issues")
  li.appendChild(link)
  issuesDiv.appendChild(li)
  })
}

function createIssue() {
  let title = document.querySelector('#title').value
  let body = document.querySelector('#body').value
  let postData = {
    title: `${title}`,
    body: `${body}`,
  }
  fetch( `${base_url}/repos/brianabaker/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => getIssues(json))
}

function forkRepo() {
  fetch(`${base_url}/repos/learn-co-curriculum/javascript-fetch-lab/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function showResults(json) {
  let link = document.createElement('a')
  link.setAttribute('href', json.html_url)
  console.log(json.html_url)
  link.innerHTML = json.name
  let resultsDiv = document.querySelector("#results")
  resultsDiv.appendChild(link);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
