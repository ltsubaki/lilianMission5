$(document).ready(function () {
    $('#calculateButton').click(function () {
        // Retrieve user input
        var hours = parseFloat($('#hoursInput').val());
        var hourlyRate = parseFloat($('#hourlyRate').val());

        // Validate input
        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a positive number of hours.');
            return;
        }

        // Calculate total
        var total = hours * hourlyRate;

        // Display total
        $('#totalOutput').text('Total cost: $' + total.toFixed(2));
    });
});