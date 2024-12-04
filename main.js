const userLocation = document.querySelector('#location')
const URL = `https://geocode.maps.co/search?q=${userLocation.value}&api_key=${API_KEY}`
const satCode = document.querySelector('#norad')
const output = document.querySelector('#output')
document.querySelector('#search').addEventListener('click', ()=>{
    const URL = `https://geocode.maps.co/search?q=${userLocation.value}&api_key=${API_KEY}`
    fetch(URL)
    .then(function(rawResponse) {
        return rawResponse.json()
    })
    .then(function(data){
        console.log(data)
        const longitude = data[0].lon
        const latitude = data[0].lat
        const riseDirection = data[0].rise.az_octant.value
        const setDirection = data[0].set.az_octant.value
        const visibility = data[0].visible
        // const duration = data[0].utc_datetime - data[0].utc_datetime
        return fetch(`https://sat.terrestre.ar/passes/${satCode.value}?lat=${latitude}&lon=${longitude}&limit=1`)
    })
    .then(rawResponse => rawResponse.json())
    
    .then(data =>{
        console.log(data[0])
    })
    output.innerHTML = `
        Longitude: ${longitude},
        Latitude: ${latitude},
        Rise Direction: ${riseDirection},
        Set Direction: ${setDirection},
        Visibility: ${visibility}
        `;
    })