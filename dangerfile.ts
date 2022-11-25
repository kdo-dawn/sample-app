import { danger, fail, markdown, warn } from "danger"

// Setup
const pr = danger.github.pr

// Always ensure we assign someone, so that our Slackbot can do its work correctly
if (pr.assignee === null) {
    fail("Please assign someone to merge this PR, and optionally include people who should review.")
 }

 if (pr.body.length == 0) {
    fail("Please make sure your PR has some description")
 }
  