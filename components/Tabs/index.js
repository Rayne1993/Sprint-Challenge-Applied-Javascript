// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//tab component
function tabCreator(tabs) {
    let newTab = document.createElement("div");
    newTab.textContent = tabs;
    newTab.classList.add("tab");

    return newTab;
}

//getting element to append child to
const tabContainer = document.querySelector(".topics");

//get request to axios
axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then( response => {
        //console.log(response);
        response.data.topics.forEach( item => {
            let tab = tabCreator(item);
            tabContainer.appendChild(tab);
        });
    })
    .catch( err => {
        console.log("Error", err);
    });