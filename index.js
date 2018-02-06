const token = getToken()
const BASE_URL = 'https://api.github.com/'
const issueContainer = document.getElementById('issues')

function getIssues() {
  const token = getToken();
  console.log("token:", token)
  fetch(BASE_URL + `repos/olegchursin/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

function showIssues(json) {
  for(key of json){
    for(k in key){
      // debugger;
      const par = document.createElement('p')
      par.innerText = key[k]
      issueContainer.append(par)
    }
  }
}

function createIssue() {
  let issueTitle = document.getElementById('title').value
  let issueText = document.getElementById('body').value
  const ownerName = 'olegchursin'
  const repoName = 'javascript-fetch-lab-web-121117'
  fetch(BASE_URL + `repos/olegchursin/javascript-fetch-lab/issues`,{
    method:"post",
    headers:{
      Authorization: `token ${token}`
    },
    body:JSON.stringify({
      title: issueTitle,
      body: issueText,
    })
  })
  .then( res => res.json())
  .then( json => console.log(json))
}

function showResults(json) {
  const container = document.getElementById('results')
  for(val in json){
    let par = document.createElement('p')
    par.innerText = json[val]
    container.append(par)
  }
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(BASE_URL + `repos/${repo}/forks`,{
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
