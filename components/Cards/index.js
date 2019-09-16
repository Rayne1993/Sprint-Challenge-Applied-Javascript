// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
//article component
function articleCreator(articleInfo) {
    //create elements
    const card = document.createElement("div");
        const hl = document.createElement("div");
        const author = document.createElement("div");
            const imgContainer = document.createElement("div");
                const img = document.createElement("img");
            const name = document.createElement("span");

    //append children
    card.appendChild(hl);
    card.appendChild(author);
        author.appendChild(imgContainer);
        author.appendChild(name);
            imgContainer.appendChild(img);

    //add content
    hl.textContent = articleInfo.headline;
    img.src = articleInfo.authorPhoto;
    name.textContent = "By " + articleInfo.authorName;

    //add classes
    card.classList.add("card");
    hl.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    return card;
}

const cardContainer = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then( response => {
        //console.log(response);
        const javascript = response.data.articles.javascript;
        const bootstrap = response.data.articles.bootstrap;
        const technology = response.data.articles.technology;
        const jquery = response.data.articles.jquery;
        const node = response.data.articles.node;

        javascript.forEach( item => {
            const newCard = articleCreator(item)
            cardContainer.appendChild(newCard);
        });
        bootstrap.forEach( item => {
            const newCard = articleCreator(item)
            cardContainer.appendChild(newCard);
        });
        technology.forEach( item => {
            const newCard = articleCreator(item)
            cardContainer.appendChild(newCard);
        });
        jquery.forEach( item => {
            const newCard = articleCreator(item)
            cardContainer.appendChild(newCard);
        });
        node.forEach( item => {
            const newCard = articleCreator(item)
            cardContainer.appendChild(newCard);
        });
    })
    .catch(function(err) {
        console.log("error")
    })

