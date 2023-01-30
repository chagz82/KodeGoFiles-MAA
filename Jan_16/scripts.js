// console.log("Sending a request to the server");

// setTimeout(
//     () => {
//     console.log("Reveive a response from the server");
//     }
//     3000
// );

// console.log("This is the end of the file");

//call stack

// check if a triangle is a rigth triangle
// a2 + b2 = c2

// const multiply = (x, y) => {
//     return x * y;
// }

// const square = (x) => {
//     return multiply (x, x);
// }

// const isRightTriangle = (a, b, c) => {
//     return square(a) + square(b) === square(c)
// }

// console.log(isRightTriangle(3, 4, 5));

// //promise(s)
// //Resolved or rejected

// loadNewsFeed




// ACLuE-wgtNwigecA7CX_ylGQ-Rtn_yM41NXDY77iiuw
// https://api.unsplash.com/
// /search/photos
// Authorization: Client-ID YOUR_ACCESS_KEY

//https://api.unsplash.com/search/photos?query=food
// ?key=value&key2&key3=value3
// query string / query parameters

const baseURL = "https://api.unsplash.com/";
const search = "search/photos";
const query = "?query=cars";

const requestURL = baseURL + search + query;
// https://api.unsplash.com/search/photos?query=cars

const YOUR_ACCESS_KEY = "ACLuE-wgtNwigecA7CX_ylGQ-Rtn_yM41NXDY77iiuw";
const clientID = `Client-ID ${YOUR_ACCESS_KEY}`;


//create headers
const myHeaders = new Headers();

myHeaders.append("Authorization", clientID);

// request options / configuration
const requestOptions = {
    method: "GET",
    headers: myHeaders
}

const output = document.querySelector('#output');

const searchTerm = document.querySelector('#search');
const searchBtn = document.querySelector('searchBtn');
/*
When searchBtn is clicked:
get the value of searchTerm
assign search term to query (?query=searchTerm)
https://api.unsplash.com/search/photos?query=searchTerm
*/

const searchTerm.addEventListener(
    'click',
    () => {
        const term = searchTerm.Value;
        const querTerm = query + term;
    }



);










fetch( requestURL, requestOptions )
    .then(res => {
        return res.json();
    }) 
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err)
    })