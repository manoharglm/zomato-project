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
let bookTable = (people,date,time,restaurantData,email) =>{
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
        'referrer': email
        },
        body: JSON.stringify(bodyData)
    }
    ).then(res => res)
}
let getUserData = (userEmail) =>{
  return fetch(
    `http://localhost:5000/api/user`,
    {
      headers: {
        "Content-Type": "application/json",
        "referrer": userEmail,
      },
    }
  ).then(res => res.json())
}
let createUser = (userData) =>{
  let bodyData = {
    'name':userData.displayName,
    'email': userData.email,
    'date':Date(),
    'phone':userData.phoneNumber,
    'photoURL':userData.photoURL,
  }
return fetch(`http://localhost:5000/api/user`,{
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData)
}).then(res => res)
}
let editUserDetails = (name,phone,userEmail)=>{
  let bodyData = {
    'name':name,
    'phone':phone,
  }
  console.log(bodyData)
return fetch(`http://localhost:5000/api/user`,{
    method: "PUT",
    headers: {
    "Content-Type": "application/json",
    "referrer": userEmail,
    },
    body: JSON.stringify(bodyData)
}).then(res => res)
}
module.exports = {
    getTrendingRestaurants,
    getSearchResults,
    getBookingData,
    bookTable,
    getUserData,
    createUser,
    editUserDetails
}