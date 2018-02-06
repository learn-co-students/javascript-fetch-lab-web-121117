const token = "be32af11ce6f68ecb1f5393927f50457bde70591";
const name = "k1k1272";
const lab = "javascript-fetch-lab";
function getIssues() {
  fetch(`https://api.github.com/repos/${name}/${lab}/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  json.forEach(
    issue =>
      (document.getElementById("issues").innerHTML += `<li>${issue.body}</li>`)
  );
}

function createIssue() {
  const info = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  };
  fetch(`https://api.github.com/repos/${name}/${lab}/issues`, {
    method: "post",
    body: JSON.stringify(info),
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues());
}

function showResults(json) {
  $("#results").append(`<a href='${json.html_url}'>${json.full_name}</a>`);
}

function forkRepo() {
  fetch(`https://api.github.com/repos/learn-co-curriculum/${lab}`, {
    method: "post",
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function getToken() {
  return "";
}
