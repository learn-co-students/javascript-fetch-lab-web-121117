const token = '43185097e7f7b26adc6a634a0dc84c7292f672ff';
const BASE_URL = 'https://api.github.com'

function getIssues() {
  const repo = 'lindsaycriswell/javascript-fetch-lab'
  fetch(`${BASE_URL}/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  const issues = document.getElementById('issues')

  json.forEach(function(issue){
    for(key in issue) {
      if (key === 'title') {
        let t = document.createElement('p')
        t.innerHTML = issue[key]
        issues.append(t)
      }
      if (key === 'body') {
        let b = document.createElement('p')
        b.innerHTML = issue[key]
        issues.append(b)
      }
    }
  })
}

function createIssue() {
  const repo = 'lindsaycriswell/javascript-fetch-lab'
  let title = document.getElementById('title').value;
  let text = document.getElementById('body').value;

  const postData = {
    title: `${title}`,
    body: `${text}`
  }

  fetch(`${BASE_URL}/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => getIssues());
}

function showResults(json) {
  const results = document.getElementById('results');
  for(key in json) {
    if (key === 'html_url') {
      let par = document.createElement('p')
      par.innerHTML = `<a href=${json[key]}>${json[key]}</a>`;
      results.append(par);
    }
  }
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${BASE_URL}/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
