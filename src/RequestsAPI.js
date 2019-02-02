let getTrendingRestaurants=()=>{
    return fetch(
        `http://localhost:5000/api/restaurants/trending`,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      ).then(res => res.json())
}
let getSearchResults=(searchText)=>{
  return fetch(
      `http://localhost:5000/api/restaurants/search/${searchText}`,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(res => res.json())
}
let getBookingData=(user)=>{
  return fetch(
      `http://localhost:5000/api/bookings`,
      {
        headers: {
          "Content-Type": "application/json",
          "referrer": user,
        },
      }
    ).then(res => res.json())
}
let bookTable = (people,date,time,restaurantData,user) =>{
    let bodyData = {
        'numberOfPeople': people,
        'date': date,
        'time': time,
        'restaurantData':restaurantData,
    };
    return fetch(
        `http://localhost:5000/api/bookings`,
    {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        'referrer': user
        },
        body: JSON.stringify(bodyData)
    }
    ).then(res => res)
}
let getUserData = (user) =>{
  return fetch(
    `http://localhost:5000/api/user`,
    {
      headers: {
        "Content-Type": "application/json",
        "referrer": user,
      },
    }
  ).then(res => res.json())
}

module.exports = {
    getTrendingRestaurants,
    getSearchResults,
    getBookingData,
    bookTable,
    getUserData
}