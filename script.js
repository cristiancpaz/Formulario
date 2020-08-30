const ent = document.querySelectorAll(".inp");
/*
ent.forEach(element =>
    element.addEventListener("focus", function() {
        element.style.backgroundColor = '#00FF00';
    })
);
*/
 ent.forEach(element =>
    element.addEventListener("mouseover", function() {
        element.style.backgroundColor = '#00FF00';
     })
    
 );
 ent.forEach(element => 
    element.addEventListener('mouseout', function(){
        element.style.backgroundColor = '#252525';
        
    })
);
