function submitform(buttonclick,db){
      setTimeout(function(){
        
        console.log(buttonclick)
        db()
      },2000)
      
}

function database(){
  console.log("Form submitted successfully")
}


submitform("Form Submit button click",database)