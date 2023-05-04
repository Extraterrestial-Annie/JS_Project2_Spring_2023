const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let dateNow = '${day}.${month}.${year}';

function toArray(arraylike) {
    var array= new Array(arraylike.length);
    for (var i= 0, n= arraylike.length; i<n; i++)
        array[i]= arraylike[i];
    return array;
}

function theatres() {
    var theatresFetch = new XMLHttpRequest();
    theatresFetch.open("GET","https://www.finnkino.fi/xml/TheatreAreas/",true
    );
    theatresFetch.send();
    theatresFetch.onreadystatechange=function() {
        //console.log(typeof theatresFetch.responseXML)
        if (theatresFetch.readyState==4 &&
            theatresFetch.status==200){
                var theatreIds = toArray(theatresFetch.responseXML.getElementsByTagName("ID"))
                var theatreNames = toArray(theatresFetch.responseXML.getElementsByTagName("Name"))
                var theatres = '<ul class="pure-menu-list">'+
                '<li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">'+
                    '<a href="#" id="menuLink1" class="pure-menu-link">Theatres</a>'+
                    '<ul class="pure-menu-children">';
                console.log(typeof theatreIds)
                console.log(typeof theatreNames)
                for (let i = 0; i < theatreIds.length; i++) {
                    theatres += 
                    '<li class="pure-menu-item">'+
                        '<a href="#" id="' + theatreIds[i] + '" class="pure-menu-link">' + theatreNames[i] + '</a>'+
                    '</li>';
                  }   
                  

                theatres +=    
                    '</ul>'+
                '</li>'+
            '</ul>'
                document.getElementById("theatres").innerHTML = theatres;
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