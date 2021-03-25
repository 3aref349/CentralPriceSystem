





const variable =()=>{

    let movie1 =  fetch("http://localhost:7260/api/geteventid")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      movie1=(json.id);
      alert(movie1)
    });
      return movie1;
    
}
   


// let movie1 = await fetchJSONAsync('https://facebook.github.io/react-native/movies.json').then((apiData) => {
//   movie1 = apiData.movies[0].title;
//   console.log(movie1); //Logs the correct data since it waits before running
//   return movie1;
// })
  


module.exports = {
    variable: variable,

 


}