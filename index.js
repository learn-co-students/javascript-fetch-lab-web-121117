const token = getToken();
const userName = 'djovercash'
const lab = 'javascript-fetch-lab'

function getIssues() {
  fetch(`https://api.github.com/repos/${userName}/${lab}/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  json.forEach(issue => document.getElementById('issues').innerHTML = `<li>${issue.body}</li>`);
  console.log(json);
}

function createIssue() {
  const data = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  const repo = `${userName}/${lab}`
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => getIssues());
}

function showResults(json) {
  let results = document.getElementById('results');
  results.append(`<a href='${json.html_url}'></a>`);
  results.innerHTML = `${json.full_name}`;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json));
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
