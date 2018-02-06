const apitoken = '';


function getIssues() {
  return fetch('https://api.github.com/repos/DMW9400/javascript-fetch-lab/issues', {
  method: "GET",
  headers: {
      Authorization: `token ${apitoken}`
  }
}).then (res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  let results_d = $("#results")
  for(element of json){
    const li = document.createElement('li')
    li.append(element.url)
    results_d.append(li)
  }
}

function createIssue() {

  let issueTitle = document.getElementById('title').value
  let issueBody = document.getElementById('body').value
  let postData = {
    "title": issueTitle,
    "body": issueBody
  };

  fetch("https://api.github.com/repos/DMW9400/javascript-fetch-lab/issues", {
  method: "post",
  body: JSON.stringify(postData),
  headers: {
    Authorization: `token ${apitoken}`
  }
  }).then(res => res.json())
    .then(res => console.log(res));
}

function showResults(json) {
  let results = $('#results')
  for(element of json){
    const li = document.createElement('li')
    li.append(element.url)
    results_d.append(li)
  }
}

function forkRepo() {

  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch("https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks", {
  method: "post",
  headers: {
    Authorization: `token ${apitoken}`
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
