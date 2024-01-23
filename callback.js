function submitform(buttonclick,callback){
      setTimeout(function(){
        
        console.log(buttonclick)
        callback()
      },100)
      
}

function database(){
  console.log("Form submitted successfully")
}


submitform("Form Submit button click",database)