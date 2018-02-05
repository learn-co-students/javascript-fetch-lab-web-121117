//repos
// fetch("https://api.github.com/user/repos", {
//   headers: {
//     Authorization: `token ${token}`
//   }
// })
//   .then(res => res.json())
//   .then(json => console.log(json));

function getIssues() {
  fetch("https://api.github.com/repos/johneckert/javascript-fetch-lab/issues", {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  console.log(json);
  json.forEach(issue => {
    let issueLink = document.createElement("a");
    issueLink.setAttribute("href", issue.html_url);
    issueLink.innerHTML = issue.title;
    let issueLi = document.createElement("li");
    issueLi.appendChild(issueLink);
    let issuesDiv = document.querySelector("#issues");
    issuesDiv.appendChild(issueLi);
  });
}

function createIssue() {
  // POST /repos/:owner/:repo/issues
  let issueTitle = document.querySelector("#title").value;
  let issueBody = document.querySelector("#body").value;
  let postData = {
    title: issueTitle,
    body: issueBody
  };
  fetch("https://api.github.com/repos/johneckert/javascript-fetch-lab/issues", {
    method: "post",
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
  getIssues();
}

function showResults(json) {
  console.log(json);
  let repoLink = document.createElement("a");
  repoLink.setAttribute("href", json.html_url);
  repoLink.innerHTML = json.name;
  let forkDiv = document.querySelector("#results");
  forkDiv.appendChild(repoLink);
}

function forkRepo() {
  //use fetch to fork it!

  fetch(
    "https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks",
    {
      method: "post",
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
    .then(res => res.json())
    .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "";
}
