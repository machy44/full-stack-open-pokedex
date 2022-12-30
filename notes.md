## deployment

It's important to remember this when we plan out our deployment system. Some of the things we'll need to consider could include:

- What if my PC crashes or hangs during deployment?
- I'm connected to the server and deploying over the internet, what happens if my internet connection dies?
- What happens if any specific instruction in my deployment script/system fails?
- What happens if, for whatever reason, my software doesn't work as expected on the server I'm deploying to? Can I roll back to a previous version?
- What happens if a user does an HTTP request to our software just before we do deployment (we didn't have time to send a response to the user)?

## what does a good deployment system do?

- deployment system should be able to fail gracefully at any step of the deployment
- deployment system should never leave our software in a broken state
- deployment system should let us know when a failure has happened. It's more important to notify about failure than about success
- deployment system should allow us to roll back to a previous deployment

  - preferably this rollback should be easier to do and less prone to failure than a full deployment
  - of course, the best option would be an automatic rollback in case of deployment failures

- Our deployment system should handle the situation where a user makes an HTTP request just before/during a deployment
- Our deployment system should make sure that the software we are deploying meets the requirements we have set for this (e.g. don't deploy if tests haven't been run).

Let's define some things we want in this hypothetical deployment system too:

- We would like it to be fast
- We'd like to have no downtime during the deployment (this is distinct from the requirement we have for handling user requests just before/during the deployment).
