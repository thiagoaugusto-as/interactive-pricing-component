var slider = document.getElementById("myRange");
var view = document.getElementById("view");
var value = document.getElementById("value_month");
var dicount = document.getElementById("toggle-discount");
var check = document.getElementById("check-toggle")

view.innerHTML = "100K PAGEVIEWS";
value.innerHTML = "$16.00";


check.onclick = () => {
    if(dicount.value == 'on') {
        alert(dicount.value)
    }
}


slider.onclick = function() {
    if(this.value == 1) {
        view.innerHTML = "10K PAGEVIEWS";
        value.innerHTML = "$8.00";
    } else if(this.value == 2) {
        view.innerHTML = "50K PAGEVIEWS";
        value.innerHTML = "$12.00";
    } else if(this.value == 3) {
        view.innerHTML = "100K PAGEVIEWS";
        value.innerHTML = "$16.00";
    } else if(this.value == 4) {
        view.innerHTML = "500K PAGEVIEWS";
        value.innerHTML = "$24.00";
    } else {
        view.innerHTML = "1M PAGEVIEWS";
        value.innerHTML = "$36.00";
    }
}


// 10K pageviews / $8 per month
// 50K pageviews / $12 per month
// 100K pageviews / $16 per month
// 500k pageviews / $24 per month
// 1M pageviews / $36 per month