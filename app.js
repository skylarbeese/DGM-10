
async function getData() {
    try{
    const response = await fetch('hotel.json')
    return await response.json()
    } catch (err){
      console.log(err)
    }
}

let GetHotelData = {}
getData().then(data => GetHotelData = data)

document.querySelectorAll('#mer').addEventListener('click', info)

function info(e) {

  let Ch = GetHotelData.hotels.find(hotel => {
    return e.target.id === hotel.name
  })
  console.log(Ch)
  document.querySelector('#Mname').innerText = Ch.name
}