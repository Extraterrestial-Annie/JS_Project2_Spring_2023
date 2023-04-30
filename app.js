function kino() {
    var kinoFetch = new XMLHttpRequest();
    kinoFetch.open("GET","https://www.finnkino.fi/xml/Events/",true
    );
    kinoFetch.send();
}
kinoFetch.onreadystatechange=function() {
    if (kinoFetch.readyState==4 &&
        kinoFetch.status==200){
        document.getElementById("kino").innerHTML=
        kinoFetch.responseText;
    }
    }
    