// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

//Main Variables

let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");


getButton.onclick = function () {
    getRepos();
};

//Get Repos Function
function getRepos() {
    if (theInput.value == "") { // if Value Is Empty
        reposData.innerHTML = "<span>Please Write Github Username.</span>";
    } else {
        // console.log(theInput.value);
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
            .then(response => response.json())
            .then((repositories) => {
                //Empty The Container
                reposData.innerHTML = '';

                //Loop On Repositories
                repositories.forEach(repo => {

                    //Create The Main Div Element
                    let mainDiv = document.createElement("div");

                    //create Repo Name Text
                    let repoName = document.createTextNode(repo.name);

                    //Append The Text To Main Div
                    mainDiv.appendChild(repoName);

                    //Create Repo URL Anchor
                    let theUrl = document.createElement('a');


                    //Create Repo Url Text
                    let theUrlText = document.createTextNode("Visit");

                    //Append The Repo Url Text To Anchor Tag
                    theUrl.appendChild(theUrlText);

                    //Add The HyperText Reference "href"
                    theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

                    //Set Attribute blank
                    theUrl.setAttribute('target', '_blank');

                    //Append Url Anchor To Main Div
                    mainDiv.appendChild(theUrl);

                    //create Stars Count Span
                    let starsSpan = document.createElement("span");

                    //Create The Stars Count Text
                    let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`)

                    //Add stars Count Text To Stars Span
                    starsSpan.appendChild(starsText);

                    //Append Stars Count Span To Main Div
                    mainDiv.appendChild(starsSpan);

                    //add Class On Main Div
                    mainDiv.className = 'repo-box'










                    //Append The Main Div To Container
                    reposData.appendChild(mainDiv);

                });


            });


    }
}