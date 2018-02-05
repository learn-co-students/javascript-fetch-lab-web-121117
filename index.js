const TOKEN = "c5ba463fceda819b76c650c48bc1c1086d91ea30";

function getIssues() {
  fetch(
    `https://api.github.com/repos/josephdlawson21/javascript-fetch-lab/issues`,
    {
      headers: {
        Authorization: `token ${TOKEN}`
      }
    }
  )
    .then(resp => resp.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  json.forEach(function(thing) {
    let a = document.createElement("li");
    let b = document.createElement("a");
    b.innerText = `${thing.title}`;
    b.href = `${thing.html_url}`;
    b.target = "_blank";
    a.append(b);
    window.issues.append(a);
  });
}

function createIssue() {
  fetch(
    "https://api.github.com/repos/josephdlawson21/javascript-fetch-lab/issues",
    {
      method: "post",
      body: JSON.stringify({
        title: title.value,
        body: body.value
      }),
      headers: {
        Authorization: `token ${TOKEN}`
      }
    }
  ).then(res => console.log(res));
}

function showResults(json) {
  let a = document.createElement("a");
  a.innerText = json.full_name;
  a.href = json.html_url;
  window.results.append(a);
}

function forkRepo() {
  const repo = "learn-co-curriculum/javascript-fetch-lab";
  //use fetch to fork it!
  fetch(
    `https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks`,
    {
      method: "post",
      headers: {
        Authorization: `token ${TOKEN}`
      }
    }
  )
    .then(resp => resp.json())
    .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "";
}
