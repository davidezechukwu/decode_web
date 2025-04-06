document.addEventListener('click', function(event) {
    var popOvers = document.querySelectorAll('.k-popup');
    for(let a = 0; a < popOvers.length-1; a++ ){        
        popOvers[a].querySelector('button').click()
    }
    setTimeout(()=>{
         var popOvers = document.querySelectorAll('.k-popup');         
         for(let a = 0; a < popOvers.length-1; a++ ){
            popOvers[a].style.display = 'none'              
        }   
     },300)
  });