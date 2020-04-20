const request = require('request')

const currencyconverter = (to, from, callback)=>
{
    const apiUrl = 'https://free.currconv.com/api/v7/convert?q='+to+'_'+from+'&compact=ultra&apiKey=6b5b83d954db6c7827ec'
  request({url: apiUrl, json:true}, (error, resp)=>{
      if(error)
      {
          callback('Network us not available', undefined)
      }
      else if(JSON.stringify(resp.body)==='{}')
      { callback('Currency not found', undefined)}
      else
      {
          callback(undefined, resp.body)
      }
  }
)}
const tocurrrency = process.argv[2]
const fromcurrency = process.argv[3]
currencyconverter(tocurrrency,fromcurrency, (error, data) =>
{
    console.log('Error', error)
    console.log('Data', data)
})
