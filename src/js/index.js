/*
** Document Manipulation Functions 
*/

//create the type of element you pass in the parameters
//es5
function createNode (element){
    return document.createElement(element);
}
//es6
const createNodeEs6 = element => document.createElement(element);

//Append the second parameter (element) to the first one
function append(parent,el){
    return parent.appendChild(el)
}
//es6
const appendEs6 = (parent, el) => parent.appendChild(el);



const ul = document.getElementById('authors'); //Get the list where we will place our authors
const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users

fetch(url)
.then((response) => response.json()) //Transform the fetched data into json format
.then(function(data){
    let authors = data.results; //get the results
    return authors.map(function(author){
        //create the elenements we need
        let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
        img.src= author.picture.medium;// Add the source of the image to be the src of the img element
        span.innerHTML = `${author.name.first} ${author.name.last}`; // Make the HTML of our span to be the first and last name of our author
        // Append all our elements
        append(li, img); 
        append(li,span);
        append(ul,li);

    })
})
.catch(function(error){
    console.log
});


