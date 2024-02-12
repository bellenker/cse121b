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
    const response = await fetch('https://github.com/bellenker/cse121b/blob/main/anime.json');
    if (response.ok){
        animeList=await response.json();
    };
    displayAnime(animeList);
};

const reset = () => {
    animeElement.innerHTML='';
};

const filterAnime = (anime) => {
    reset();
    let filter = document.getElementById('filtered').value;

    switch (filter) {
        case "action":
            let animeAction = anime.filter(anime => anime.genre.includes("action"));
            displayAnime(animeAction);

            break;
        
        case "adventure": 
            let animeAdventure = anime.filter(anime => anime.genre.includes("adventure"));
            displayAnime(animeAdventure);

            break;
        
        case "comedy":
            let animeComedy = anime.filter(anime => anime.genre.includes("comedy"));
            displayAnime(animeComedy);

            break;
        
        case "drama":    
            let animeDrama = anime.filter(anime => anime.genre.includes("drama"));
            displayAnime(animeDrama);
            
            break;
            
        case "fantasy":
            let animeFantasy = anime.filter(anime => anime.genre.includes("fantasy"));
            displayAnime(animeFantasy);

            break;

        case "horror":
            let animeHorror = anime.filter(anime => anime.genre.includes("horror"));
            displayAnime(animeHorror);

            break;
        
        case "magic":
            let animeMagic = anime.filter(anime => anime.genre.includes("magic"));
            displayAnime(animeMagic);

            break;
        
        case "mystery":    
            let animeMystery = anime.filter(anime => anime.genre.includes("mystery"));
            displayAnime(animeMystery);

            break;
        
        case "psychological":
            let animePsychological = anime.filter(anime => anime.genre.includes("psychological"));
            displayAnime(animePsychological);

            break;
           
        case "romance":   
            let animeRomance = anime.filter(anime => anime.genre.includes("romance"));
            displayAnime(animeRomance);

            break;
        
        case "science_fiction":
            let animeScience = anime.filter(anime => anime.genre.includes("science_fiction"));
            displayAnime(animeScience);

            break;
        
        case "slice_of_life":
            let animeSlice = anime.filter(anime => anime.genre.includes("slice_of_life"));
            displayAnime(animeSlice);

            break;
        
        case "supernatural":
            let animeSupernatural = anime.filter(anime => anime.genre.includes("supernatural"));
            displayAnime(animeSupernatural);

            break;
        
        case "thriller":
            let animeThriller = anime.filter(anime => anime.genre.includes("thriller"));
            displayAnime(animeThriller);

            break;
        
        case "tournament":
            let animeTournament = anime.filter(anime => anime.genre.includes("tournament"));
            displayAnime(animeTournament);

            break;

        case "all":
            displayAnime(anime);

            break;

        default:
            break;
    }
}

getAnime();

document.querySelector('#filtered').addEventListener('change', () => {filterAnime(animeList)});
