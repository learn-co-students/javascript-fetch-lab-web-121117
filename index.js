const token = ''

function getIssues() {
  fetch('https://api.github.com/repos/julientregoat/javascript-fetch-lab/issues', {
    headers: {Authorization: `token ${token}`}
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  json.forEach(issue => document.getElementById('issues').innerHTML += `<li>${issue.body}</li>`)
}

function createIssue() {
  const issueData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  const repo = 'julientregoat/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => getIssues());
}

function showResults(json) {
  $('#results').append(`<a href='${json.html_url}'>${json.full_name}</a>`)
  console.log(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
