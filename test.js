///This code will print a number from 1-50
function printNum(num) {

    for (let i = 1; i <= num; i++) {
        console.log(i)
    }

}
printNum(50)

//the main ones that you will use
// git add .
// git commit 'Your commit message here'
// git push origin main
// if you want to create another branch
// git checkout -branch brandon
// or
// git checkout -b brandon
// To see where you are etc
// git status

// Once you have that branch ready to be merged with the main branch, you would have the following workflow.
// git add .
// git commit -m "my awesome commit notes here"
// git push origin brandon
// // assuming brandon is the branch that you are on
// git checkout main
// git merge brandon
// git push origin main
// git checkout brandon // to start working on the branch again. 