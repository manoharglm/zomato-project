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
module.exports = {
    getTrendingRestaurants
}