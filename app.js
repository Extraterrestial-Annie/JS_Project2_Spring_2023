function kino() {
    var kinoFetch = new XMLHttpRequest();
    kinoFetch.open("GET","https://www.finnkino.fi/xml/Events/?Event=304123",true
    );
    kinoFetch.send();
    kinoFetch.onreadystatechange=function() {
        if (kinoFetch.readyState==4 &&
            kinoFetch.status==200){
            document.getElementById("kino").innerHTML=
            kinoFetch.responseText;
            console.log(kinoFetch.responseText)
        }
        }
}