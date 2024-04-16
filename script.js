const URL = 'https://api.github.com/users/';
const main = document.querySelector('#main');
const form = document.querySelector('#form');
async function getData(username){
    const response = await fetch(URL+username);
    const data = await response.json();
    console.log(data);
    main.innerHTML = `
    <div id="firstDiv">

    <div id="firstSubdiv">
        <img src="${data.avatar_url}" alt="">

    <div id="secondSubDiv">
        <h3>${data.name}</h3>
        <a href="https://github.com/kunal-kushwaha">${data.login}</a>
    </div>

    </div>
    

    <div>${data.created_at}</div>
</div>

<p>${data.bio}</p>

<div id="secondDiv">
    <div class="smallDivs">
        <p>Repos</p>
        <h4>${data.public_repos}</h4>
    </div>
    <div class="smallDivs">
        <p>Followers</p>
        <h4>${data.followers}</h4>
    </div>
    <div class="smallDivs">
        <p>Following</p>
        <h4>${data.following}</h4>
    </div>
</div>

<div class="fourth">
    <div class="fourthSubdiv">
        <img src="./pin.png" alt="" class="icons">
        <p>${data.location}</p>
    </div>
    <div class="fourthSubdiv">
        <img src="./twitter.png" alt="" class="icons">
        <p>${data.twitter_username}</p>
    </div>
</div>

<div class="fourth">
    <div class="fourthSubdiv">
        <img src="./link.png" alt="" class="icons">
        <a href="${data.blog}">${data.blog}</a>
       
    </div>
    <div class="fourthSubdiv">
        <img src="./office.png" alt="" class="icons">
        <p>${data.company}</p>
    </div>
</div>

    `
}

function formSubmit(event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    console.log("Form submitted!"); // Check if formSubmit function is triggered
    const search = document.getElementById('search');
    const username = search.value.trim(); // Get the trimmed value of the search input
    if (username !== '') {
        getData(username); // Pass the username to the getData function
        search.value = '';
    }
    return false;
}