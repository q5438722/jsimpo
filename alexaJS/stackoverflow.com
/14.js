
(function () {
    var billingPeriodSwitch = document.querySelectorAll('input[name="billing-period"]');

    billingPeriodSwitch.forEach(function(radio) {
        radio.addEventListener('change', function(e) {
            var cycle = e.target.checked ? 'annually' : 'monthly';
            var notCycle = e.target.checked ? 'monthly' : 'annually';

            document.querySelectorAll('.js-billed-' + cycle).forEach(function(price) {
                price.classList.remove('d-none');
            });
            document.querySelectorAll('.js-billed-' + notCycle).forEach(function(price) {
                price.classList.add('d-none');
            });
        });
    });
})();
