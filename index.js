const token = '00756c02b29c01737098f3988bff4ddc9929be5b'
const BASE_URL = 'https://api.github.com/'
const issueContainer = document.getElementById('issues')

function getIssues() {
  fetch(BASE_URL + `repos/DrDrakula/javascript-fetch-lab/issues`,{
    headers:{
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showIssues(json))
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
  const ownerName = 'DrDrakula'
  const repoName = 'javascript-fetch-lab-web-121117'
  fetch(BASE_URL + `repos/DrDrakula/javascript-fetch-lab/issues`,{
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

function forkRepo(ownerName, repoName) {
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

// function getUser(username){
//   fetch(`https://api.github.com/users/${username}`, {
//     method: "GET"
//   })
//   .then((res) => res.json())
//   .then((json) => {
//     console.log(json)
//   })
// }

// getUser("maxcell")

// forkRepo('learn-co-curriculum','javascript-fetch-lab')
