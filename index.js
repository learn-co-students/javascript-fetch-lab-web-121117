function getIssues() {}

function showIssues(json) {}

function createIssue() {}

function showResults(json) {
  return json;
}

function forkRepo() {
  const repo = "learn-co-curriculum/javascript-fetch-lab";
  const token = "be32af11ce6f68ecb1f5393927f50457bde70591";

  fetch(`https://api.github.com/repos/${repo}`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function getToken() {
  return "";
}
