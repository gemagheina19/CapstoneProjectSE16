
const rentalPeriodSelect = document.getElementById('rentalPeriod');
const totalPaymentSpan = document.getElementById('totalPayment');


rentalPeriodSelect.addEventListener('change', function() {
  
    const selectedPeriod = rentalPeriodSelect.value;

   
    let totalPayment = calculateTotalPayment(selectedPeriod);

    
    totalPaymentSpan.textContent = 'Rp' + totalPayment.toFixed(0);
});


function calculateTotalPayment(period) {

    switch (period) {
        case '1':
            return 800000;
        case '3':
            return 2400000;
        case '6':
            return 4800000;
        case '12':
            return 9600000;
        default:
            return 0;
    }
}