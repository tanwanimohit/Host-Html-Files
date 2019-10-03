# HTML-Hoster
HTML Page Uploader

Host your HTML Files for Free, just enter your content which creates a unique URL with your live web page!

# Quick Start
1. Clone the git repo — `git clone https://github.com/tanwanimohit/Host-Html-Files.git`
2. Install [node](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/) or [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
    - If using node, in the project folder using terminal, run `npm install`
    - If using yarn, in the project folder using terminal, run `yarn install`
3. To run code, in the project folder using terminal, run:
    - If using node, in the project folder using terminal, run `npm run start`
    - If using yarn, in the project folder using terminal, run `yarn start`

# Git Workflow
### SIMPLE PUSH
1. `git status`
2. `git add .`
3. `git commit -m '<insert commit message>'`
4. `git fetch`
5. `git rebase origin/master`
6. `git push origin HEAD`
### IF CURRENT BRANCH IS BEHIND
#### Option 1
1. `git rebase origin/<current branch>`
2. Fix any available merge conflicts then `git add .` then `git rebase --continue`. Continue doing this until there are no more conflicts
3. `git push origin HEAD`
### AFTER MERGING
1. `git checkout master`
2. `git fetch`
3. `git rebase origin/master`
4. `git checkout -b <new branch>` to start working on a new branch