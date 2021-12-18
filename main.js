function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

loadjson("data.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
    display(data.cards)
})



function display(mb){
    var deck=document.querySelector(".card-deck")
    deck.classList.add("text-center")
    console.log(deck)

for( var i in mb){
    // console.log(mb[i].name)
    var caddiv=document.createElement("div")
    caddiv.classList.add("card")
    var cadimg=document.createElement("img")
    cadimg.src=mb[i].img
    caddiv.appendChild(cadimg)
    deck.appendChild(caddiv)

//  Name Area 

var cname=document.createElement("h2")
    cname.textContent=mb[i].name;
    caddiv.appendChild(cname)

//  rate area
var rate=document.createElement("h3")
rate.textContent=mb[i].rate;
caddiv.appendChild(rate)

//  offer area

var ofer=document.createElement("h3")
ofer.textContent="Off/-"+mb[i].offer;
caddiv.appendChild(ofer)


//  button area 

var btn=document.createElement("button")
    btn.classList.add("btn-danger")
    btn.textContent=mb[i].button;
caddiv.appendChild(btn)



}

}