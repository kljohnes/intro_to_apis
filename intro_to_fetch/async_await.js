// let url = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"

// fetch(url) // The fetch method is available to us in the browser
//            // And we supply at least a URL and it will kick off 
//            // a "Get" request to that URL
//     .then(res => res.json())  // .then() can be chained on a fetch to allow us 
//                               // to take the response and do something with it.

//     .then(json => { // In this case I have used the json date to display in the console.
//         console.log(json)
//         console.log(json.title) // These logs are unique to the json that we got back
//         console.log(json.locations) // And only work this objects structure
//         console.log(json.director)
//     })

/*
BASIC fetch usage

fetch(<url>)
    .then(<cb to process the data>)
    .then(<cb to use the data>)
*/

const baseURL = "https://ghibliapi.herokuapp.com"
//"https://ghibliapi.herokuapp.com/films" is equivalent to the below

const getFilms = async() => {
    let res = await fetch(baseURL + "/films") // Reaches out to internet to get data
    let json = await res.json()
    console.log(json)

    let myArr = json.map(film => {
        return {
            title: film.title,
            rt_score: Number(film.rt_score)
        
    })
    myArr.sort(cur, prev) => prev.rt_score - cur.rt.score)
    displayResults(myArr)
}
getFilms()
      
//         // Try to use the json obj [] to create a new array /// of "film" obj that only have title and rt score
//     json.push({title: "Justin's movie", rt_score: "not a number haha"})
//     let myArr = json.map(film => { //Make a new array reducing the items
//         return {
//             title: film.title, 
//             rt_score: Number(film.rt_score)
//         }
//     })
//     //Sort by rating
//     let sortedArr = myArr.sort((cur, prev) => prev.rt_score - cur.rt_score)
//     //passes off the sorted array to be displayed
//     displayResults(myArr)
// })
// }

// getFilms()
    
// Display results
// function displayResults(films) {
//     //grabs the ul element from the index.html
//     console.log("Hello from display results!", films) // 
//     let filmList = document.getElementById("film-list")//Goes through the films that are passed into the function
    
//     films.map(film => {
//         //for each film i make a new li tag
//         let filmLi = document.createElement('li')  //Assignment of the rt film score to the inner text
//         filmLi.innerText = `${film.title} ${film.rt_score}`
//         //Adds the newly made li tag with text to the ul tag
//         filmList.appendChild(filmLi)
//     })
// }

// We will come back to this
/*
    get Locations = (locUrl) => {
    fetch(locUrl)
    .then(res => res.json())
    .then(json => {
        console.log(json[0])
    })
}
*/