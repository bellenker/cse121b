/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Elizabeth Wilhite",
    photo: ('images/personalimage.jpg'),
    favoriteFoods: ['alfredo', 'loaded baked potato', 'lasagna' , 'ice cream' , 'beef stew on rice'],
    hobbies: ['cooking', 'beading', 'reading', 'music', 'genealogy'],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
    place: 'Layton, UT', 
    length: '5 years'
    },
    {
    place: 'Ogden, UT', 
    length: '5 years'
    },
    {
    place: 'Fairview, UT', 
    length: '1 year'
    },
    {
    place: 'Gunnison, UT',
    length: '8 years'
    },
    {
    place: 'many other locations',
    length: '21 years'
    },
);


/* DOM Manipulation - Output */

/* Name */

    document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

var img = document.createElement("img");
img.src="images/personalimage.jpg";


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

for(let i=0; i<myProfile.placesLived.length;i++){
    var place = myProfile.placesLived[i].place;
    var dt = document.createElement("dt");
    dt.innerHTML=place;

    var length = myProfile.placesLived[i].length;
    var dd = document.createElement("dd");
    dd.innerHTML=length;

    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
}