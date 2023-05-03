function theatres() {
    var theatresFetch = new XMLHttpRequest();
    theatresFetch.open("GET","https://www.finnkino.fi/xml/TheatreAreas/",true
    );
    theatresFetch.send();
    theatresFetch.onreadystatechange=function() {
        if (theatresFetch.readyState==4 &&
            theatresFetch.status==200){
            document.getElementById("theatres").innerHTML=
            theatresFetch.responseText;
            console.log(theatresFetch.responseText)
        }
        }
}

function poster() {
    var posterFetch = new XMLHttpRequest();
    posterFetch.open("GET","http://media.finnkino.fi/1012/Event_13659/portrait_medium/65_1080.jpg",true
    );
    posterFetch.send();
    posterFetch.onreadystatechange=function() {
        if (posterFetch.readyState==4 &&
            posterFetch.status==200){
            document.getElementById("poster").innerHTML=
            posterFetch.responseText;
            console.log(posterFetch.responseText)
        }
        }
}