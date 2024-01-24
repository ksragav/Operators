function hacker(alert,callback){
  setTimeout(function(){
    console.log(alert)
    callback()
  },1000)
}

function teddybarehack(){
  console.log("GO to hell")
}

hacker("Your device is hacked",teddybarehack)