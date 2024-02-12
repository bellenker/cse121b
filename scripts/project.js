const animeElement=document.getElementById('anime');
let animeList = [];

const displayAnime = (anime) =>{
    anime.forEach (anime =>{
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = anime.animeName;
        let img = document.createElement('img');
        img.setAttribute('src',anime.imageUrl);
        img.setAttribute('alt', anime.name);
        let p = document.createElement('p');
        p.textContent = anime.summary;
        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(p)
        animeElement.appendChild(article);
    });
};

const getAnime = async() =>{
    const response = await fetch('');
    if (response.ok){
        animeList=await response.json();
    };
    displayAnime(animeList);
};