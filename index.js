const core = require('@actions/core');
const github = require('@actions/github');

const issueNumber = core.getInput('issue_number');
const token = core.getInput('token');
const octokit = github.getOctokit(token);
const context = github.context;
try {
  // Close the issue. Cannot delete it.
  octokit.rest.issues.update({ ...context.repo, issue_number: issueNumber, state: 'closed' })
} catch (error) {
  core.setFailed(error.message);
}
