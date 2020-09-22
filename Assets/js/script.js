// On load, page gets current hour
var now = moment().hour();


$( document ).ready(function() {
var textAreas = $("textarea");

// Set textareas with index equal to key to the corresponding text value
for (var i = 0; i < localStorage.length; i++){
   
    for (var e = 0; e < textAreas.length; e++){
      
        if (localStorage.key(i) == textAreas.eq(e).attr("data-value")){
            textAreas.eq(e).val(localStorage.getItem(textAreas.eq(e).attr("data-value")));
            console.log("matched at: "+localStorage.key(i));
        }
        
    }
}


// Setting colors
for (var i = 0; i < textAreas.length; i++) {
    // If current hour is greater, slot gets class past
    if (textAreas[i].getAttribute('data-value') < now) {
        textAreas.eq(i).addClass("past");
        
    }
    // If equal, slot gets class present
    if (textAreas[i].getAttribute('data-value') == now) {
        textAreas.eq(i).addClass("present");
        
    }
    // If current hour is less than, slot gets class future
    if (textAreas[i].getAttribute('data-value') > now) {
        textAreas.eq(i).addClass("future");
        
    }
    
}

// Save Button function
$(".saveBtn").on("click", function(){
    // Loop through textareas and check data-value
    console.log($(this).attr("data-value"));
    for (var i = 0; i < textAreas.length; i++){
        // If data-value of textarea equals data-value of this, save that textarea's value to local storage with key equal to i
        if ($(this).attr("data-value") === textAreas.eq(i).attr("data-value")) {
            
            localStorage.setItem(textAreas.eq(i).attr("data-value"), textAreas.eq(i).val());
        } else {
            
        }
    }
    
})





});

