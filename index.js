const token = 'f67448ead2080de2321fe6ba424e0f76a4594db7'

function getIssues() {
  fetch('https://api.github.com/repos/The-Endless-Bummer/javascript-fetch-lab/issues', {
    method: "get",
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  let resultsDiv = $('#results')
  for(el of json){
      const issueLi = document.createElement("li")
      issueLi.append(el['url'])
      resultsDiv.append(issueLi)
  }
}

function createIssue() {
  let issueTitle = document.getElementById('title').value
  let issueText = document.getElementById('body').value
  fetch('https://api.github.com/repos/The-Endless-Bummer/javascript-fetch-lab/issues', {
    method: "post",
    body: JSON.stringify({title: issueTitle, body: issueText}),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(console.log);
}

function showResults(json) {
  let resultsDiv = $('#results')
  for(el of json){
      const issueLi = document.createElement("li")
      issueLi.append(el['url'])
      resultsDiv.append(issueLi)
  }
}

function forkRepo() {
  // const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: "post",
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
