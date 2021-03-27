
async function getData() {
    try{
    const response = await fetch('hotel.json')
    return await response.json()
    } catch (err){
      console.log(err)
    }
}
console.log(getData())
let GetHotelData = {}
getData().then(data => {
  return GetHotelData = data
})

document.querySelector("#mer").addEventListener('click', info)

function info(e) {
  console.log(e)
  let Choise = GetHotelData.hotels.find(hotel => {
    return e.target.id === hotel.name
  })
  document.querySelector('#Mname').innerText = Choise.name
}