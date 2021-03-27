
async function getData() {
    try{
    const response = await fetch('./hotel.json')
    return await response.json()
    } catch (err){
      console.log(err)
    }
}

let GetHotelData = {}
getData().then(data => GetHotelData = data)
document.querySelector('#mer').addEventListener('click', info)
document.querySelector('#sher').addEventListener('click', info)
document.querySelector('#hil').addEventListener('click', info)

function info(e) {
 e.preventDefault()
  let Ch = GetHotelData.hotels.find(hotel => {
    return e.target.id === hotel.name
  })
  console.log(Ch)
  document.querySelector('#address').innerText = Ch.address
  document.querySelector('#rooms').innerText = Ch.rooms
  document.querySelector('#rooms').innerText = Ch.rooms
  document.querySelector('#gym').innerText = Ch.gym
  document.querySelector('#room-type').innerText = Ch.roomType
  
}