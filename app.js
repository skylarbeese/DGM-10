
async function getData() {
    try{
    const response = await fetch('hotel.json')
    return await response.json()
    } catch (err){
      console.log(err)
    }
}
console.log(getData())
