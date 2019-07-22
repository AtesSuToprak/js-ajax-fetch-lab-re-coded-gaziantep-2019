function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = 'dc39f8ac3be84e0fc077eeb7f2265f347a22c120';
const postData = {
  body: 'Great stuff'
};
 
fetch(
  'https://api.github.com/repos/AtesSuToprak/:your_repo/commits/:sha/comments',
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
