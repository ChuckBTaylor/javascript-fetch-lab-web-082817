const myRepo = `ChuckBTaylor/hello-world`;
const BASE_URL = "https://api.github.com";

function getIssues() {
  fetch(`${BASE_URL}/repos/ChuckBTaylor/javascript-fetch-lab/issues`, {
    headers: { Authorization: `token ${getToken()}` }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  $("#issues").text("");
  json.forEach(issue => {
    `<ul>${$("#issues").append(
      "<li> Title: " + issue.title + "<br>\nBody: " + issue.body + "</li>"
    )}</ul>`;
  });
}

function createIssue() {
  const issue = { title: $("#title")[0].value, body: $("#body")[0].value };
  fetch(`${BASE_URL}/repos/ChuckBTaylor/javascript-fetch-lab/issues`, {
    method: "post",
    body: JSON.stringify(issue),
    headers: { Authorization: `token ${getToken()}` }
  })
    .then(res => res.json())
    .then(json => getIssues());
}

function showResults(json) {
  console.log(json);
  $("#results").append(`<a href="${json.html_url}">Link to the repo</a>`);
}

function forkRepo() {
  const repo = "learn-co-curriculum/javascript-fetch-lab";
  const test = fetch(`${BASE_URL}/repos/${repo}/forks`, {
    method: "post",
    headers: { Authorization: `token ${getToken()}` }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "";
}

$(document).ready(() => {
  getIssues();
});
