
var seatButtons = document.querySelectorAll('.seat');


seatButtons.forEach(function(button) {
    button.addEventListener('click', function() {
       
        if (button.classList.contains('chill')) {
           
            button.classList.remove('chill');
        } else {
           
            button.classList.add('chill');
        }
    });
});