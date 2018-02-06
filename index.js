const repo = "javascript-fetch-lab";
const name = "akallbold";
const baseURL = "https://api.github.com";

function getToken() {
  return "";
}

function getIssues() {
  fetch(`${baseURL}/repos/${name}/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  json.forEach(issue => {
    $("#issues").append(`<li>${issue.body}</li>`);
  });
}

function createIssue() {
  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  };

  fetch(`https://api.github.com/repos/akallbold/javascript-fetch-lab/issues`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(res => getIssues());
}

function forkRepo() {
  fetch(`${baseURL}/repos/learn-co-curriculum/${repo}/forks`, {
    method: "POST",
    headers: {
      Authorization: "token " + getToken()
    }
  })
    .then(res => res.json())
    .then(data => showForkedRepo(data));
}

function showForkedRepo(data) {
  let resultsText = document.getElementById("results");
  resultsText.append(`<a href=${data.clone_url}>${data.name}</a>`);
}
