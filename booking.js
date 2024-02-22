
var seatButtons = document.querySelectorAll('.seat');

var seatCountDisplay = document.getElementById('seat-count');
var totalPriceDisplay = document.getElementById('total-price');
var grandPriceDisplay = document.getElementById('grand-price');

const originalCoupon1 = "NEW15";
const originalCoupon2 = "Couple 20";

const selectedSeatsDetails = {};

var selectedSeats = [];
var totalPrice = 0;

function updateBookingSummary() {
    var seatCount = Object.keys(selectedSeatsDetails).length;
    seatCountDisplay.textContent = seatCount;

    totalPrice = seatCount * 550;

    totalPriceDisplay.textContent = totalPrice;

    updateGrandPrice();
  
    if (seatCount > 0) {
        const selectedSeatNumber = Object.keys(selectedSeatsDetails)[0]; 
        updateCurrentSeatDetails(selectedSeatsDetails[selectedSeatNumber]);
    } else {
        updateCurrentSeatDetails(null); 
    }
}

function updateCurrentSeatDetails(seat) {
    const currentSeatName = document.getElementById('current-seat-name');
    const currentSeatType = document.getElementById('current-seat-type');
    const currentSeatPrice = document.getElementById('current-seat-price');

    currentSeatName.textContent = seat ? seat.seatName : 'A1';
    currentSeatType.textContent = seat ? seat.seatType : 'Economy';
    currentSeatPrice.textContent = seat ? seat.seatPrice : '550';
}

function updateGrandPrice() {
    var couponInput = document.getElementById('coupon').value;
    var discountedPrice = totalPrice;

    if (couponInput === originalCoupon1) {
        discountedPrice = totalPrice * 0.85; 
    } else if (couponInput === originalCoupon2) {
        discountedPrice = totalPrice * 0.80; 
    }

    grandPriceDisplay.textContent = discountedPrice.toFixed(2);
}

seatButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var seatNumber = parseInt(button.dataset.seat);
        var seatName = button.dataset.seatName;
        var seatType = button.dataset.seatType;
        var seatPrice = parseFloat(button.dataset.seatPrice);

        if (selectedSeatsDetails[seatNumber]) {
            delete selectedSeatsDetails[seatNumber];
            updateCurrentSeatDetails(null); 
        } else {
            selectedSeatsDetails[seatNumber] = { seatName: seatName, seatType: seatType, seatPrice: seatPrice };
            updateCurrentSeatDetails(selectedSeatsDetails[seatNumber]); 
        }

        updateBookingSummary();
    });
});


document.getElementById('apply-coupon').addEventListener('click', function() {
    updateGrandPrice();
});


var nextButton = document.querySelector('.btn');

var popupSection = document.getElementById('popup-section');

nextButton.addEventListener('click', function() {
   
    popupSection.classList.remove('hidden');
});


