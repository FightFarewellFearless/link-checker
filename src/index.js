
// Write your package code here.


function load_funcs(client){

//SAY COMMAND
client.functionManager.createCustomFunction({
name : '$say', //FUNCTION NAME 
params : ['text','author'],//THE TYPE OF PARAMS
type : 'aoi.js', //TYPE METHOD
code : ` 
{author} says: **{text}**
` //THE ACTUAL CODE IT WILL BE RETURN
})



// MEME COMMAND
client.functionManager.createCustomFunction({
name : '$meme', //FUNCTION NAME 
params : [],//THE TYPE OF PARAMS
type : 'aoi.js', //TYPE METHOD
code : `
$setVar[memetitle;$getObjectProperty[title]]
$setVar[memeurl;$getObjectProperty[url]]
$createObject[$httpRequest[https://meme-api.herokuapp.com/gimme]]
 `

 //THE ACTUAL CODE IT WILL BE RETURN
})
client.variables({
  memetitle:"",
  memeurl:"",

})
}
function load_handler(client, callbackfile){
  
  let call = require(callback);
  let h = JSON.parse(call);
  for(var item in h.callbackfile) {
  eval("client."+h.callbacks[item]);
  }
  
}


module.exports ={
  load_funcs,
  load_handler
}
