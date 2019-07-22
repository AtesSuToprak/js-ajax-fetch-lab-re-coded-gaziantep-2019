function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = '';
const postData = {
  body: 'Great stuff'
};
 
fetch(
  'https://api.github.com/repos/:your_ghname/:your_repo/commits/:sha/comments',
  {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }
).then(res => console.log(res));
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
