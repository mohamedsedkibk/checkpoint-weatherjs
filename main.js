
const awaitcall=async()=>{
    try {
        let input=document.querySelector("input")

        const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${input.value}&days=3`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd11fa38e45mshc83a9b5c8ae5a2ep1e2243jsn931ec7430087',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        
        
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
      
      let btn=document.getElementById("qaz")
      let cn=document.querySelector(".ssd").querySelector("h2")
      let h=document.querySelector(".qs")
      let parag=document.querySelector(".qc")
      h.innerHTML=`temp:${result.current.temp_c}°C`
      parag.innerHTML=`humidity:${result.current.humidity}% `
      console.log(parag)
      cn.innerHTML=`country:${result.location.name}`
      console.log(result.current.humidity)
    } 
    catch (error) {
        console.error(error);
    } 
}
const get=()=>{
    awaitcall()
}







