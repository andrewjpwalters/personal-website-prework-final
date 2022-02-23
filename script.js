
const artifactButtonOne = document.querySelector('#artifact-button-1');
const artifactButtonTwo = document.querySelector('#artifact-button-2');
const artifactButtonThree = document.querySelector('#artifact-button-3');
const artifactBodyOne = document.querySelector('#artifact-article-1');
const artifactBodyTwo = document.querySelector('#artifact-article-2');
const artifactBodyThree = document.querySelector('#artifact-article-3');
const closeArtifact = document.querySelector('#close-artifact')
const profilePic = document.querySelector('#profile')
const hr = document.querySelector('hr')

artifactButtonOne.addEventListener('click', function () {
    if (artifactBodyOne.hidden === true) {
        artifactBodyOne.hidden = false;
        artifactBodyTwo.hidden = true;
        artifactBodyThree.hidden = true;
        profilePic.hidden = true;
        hr.hidden = false;
        closeArtifact.hidden = false;
    }
})
artifactButtonTwo.addEventListener('click', function () {
    if (artifactBodyTwo.hidden === true) {
        artifactBodyTwo.hidden = false;
        artifactBodyOne.hidden = true;
        artifactBodyThree.hidden = true;
        profilePic.hidden = true;
        hr.hidden = false;
        closeArtifact.hidden = false;
    }
})
artifactButtonThree.addEventListener('click', function () {
    if (artifactBodyThree.hidden === true) {
        artifactBodyThree.hidden = false;
        artifactBodyTwo.hidden = true;
        artifactBodyOne.hidden = true;
        profilePic.hidden = true;
        hr.hidden = false;
        closeArtifact.hidden = false;
    }
})

closeArtifact.addEventListener('click', function () {
    artifactBodyOne.hidden = true;
    artifactBodyTwo.hidden = true;
    artifactBodyThree.hidden = true;
    profilePic.hidden = false;
    hr.hidden = true;
    closeArtifact.hidden = true;
})