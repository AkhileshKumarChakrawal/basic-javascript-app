
var urldata = window.location.href;
var splitdata = urldata.split('?');
//console.log(splitdata[1]);
var splitagain = splitdata[1].split('&');
//  console.log(splitagain);
var id = 1;
for (var i = 0; i < splitagain.length - 3; i++) {
    var data = splitagain[i].split('=');
    console.log(data[1]);
    var datavalue = data[1];
    if(datavalue.includes('%40')){
        datavalue =  datavalue.replace('%40','@');
    }
    document.getElementById(id).innerText = datavalue;
    id++;

}