showCriteria = function(evn) {
    if (evn.value == '00') {
        document.getElementById('search-cr-placehonder').innerHTML = "";
    }
    if (evn.value == '01') {
        document.getElementById('search-cr-placehonder').innerHTML = document.getElementById("search-by-id").innerHTML;
    }
    if (evn.value == '02') {
        document.getElementById('search-cr-placehonder').innerHTML = document.getElementById("search-by-entry-date").innerHTML;
    }
    if (evn.value == '03') {
        document.getElementById('search-cr-placehonder').innerHTML = document.getElementById("search-by-data-date").innerHTML;
    }
    if (evn.value == '04') {
        document.getElementById('search-cr-placehonder').innerHTML = document.getElementById("search-by-data-date").innerHTML;
    }
}