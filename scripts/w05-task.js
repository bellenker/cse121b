/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement=document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) =>{
    temples.forEach (temple =>{
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.setAttribute('src',temple.imageUrl);
        img.setAttribute('alt', temple.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async() =>{
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if (response.ok){
        templeList=await response.json();
    };
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML='';
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    let filter = document.getElementById('filtered').value;
    switch (filter) {
        case "utah":
            temples.filter(temple => temple.location.includes("Utah"));
            return temple.utah;
        case "notutah":
            temples.filter(temple => {return temple.location.indexOf("Utah") === -1});
            break;
        case "older":
            temples.filter(temple => {return temple.dedicated > new Date(1950, 0, 1)});
            break;
        default:
            return temples;
    }
};


/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => {filterTemples(filter)});

getTemples();