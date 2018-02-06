function getIssues() {
  // debugger
  fetch('https://api.github.com/repos/krandles/javascript-fetch-lab/issues', {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    } 
  }).then(res => res.json())
    .then(showIssues)
}

function showIssues(json) {
  let issues = document.getElementById('issues')
  json.forEach(issue => {
    // debugger
    let issueText = issue.title + " - " + issue.body
    let issueP = document.createElement('p')
    issueP.innerText = issueText
    issues.appendChild(issueP)
  })
}

function createIssue() {
  let issueTitle = document.getElementById('title').value
  let issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  // debugger
  fetch('https://api.github.com/repos/krandles/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }, body: JSON.stringify(postData)
  }).then(res => res.json())
  getIssues()
}

function showResults(json) {
  // debugger
  results = document.getElementById('results')
  link = document.createElement('a')
  link.href = json.html_url
  link.innerText = "Your Fork"
  results.append(link)
}

function forkRepo() {
  // const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then(showResults)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return ''
  return ''
}
