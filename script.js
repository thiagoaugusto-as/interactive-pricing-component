var slider = document.getElementById("myRange");
var view = document.getElementById("view");
var value = document.getElementById("value_month");
var checkbox = document.querySelector('input[type="checkbox"]');

view.innerHTML = "100K PAGEVIEWS";
value.innerHTML = (16).toFixed(2);

document.addEventListener('DOMContentLoaded', function() {
    console.log("entrei")

    checkbox.addEventListener('change', function() {
        if(checkbox.checked) {
            var number = parseInt(value.innerHTML, 10)
            value.innerHTML = (number-(number*0.25)).toFixed(2);
        } else if(!checkbox.checked) {
            var number = parseInt(value.innerHTML, 10)
            value.innerHTML = (number*(100/75)).toFixed(2);
        } else {
            console.log("nada")
        }
    })
})

slider.onclick = function() {
    if(this.value == 1) {
        view.innerHTML = "10K PAGEVIEWS";
        value.innerHTML = "8.00";
    } else if(this.value == 2) {
        view.innerHTML = "50K PAGEVIEWS";
        value.innerHTML = "12.00";
    } else if(this.value == 3) {
        view.innerHTML = "100K PAGEVIEWS";
        value.innerHTML = "16.00";
    } else if(this.value == 4) {
        view.innerHTML = "500K PAGEVIEWS";
        value.innerHTML = "24.00";
    } else {
        view.innerHTML = "1M PAGEVIEWS";
        value.innerHTML = "36.00";
    }
}


// 10K pageviews / $8 per month
// 50K pageviews / $12 per month
// 100K pageviews / $16 per month
// 500k pageviews / $24 per month
// 1M pageviews / $36 per month