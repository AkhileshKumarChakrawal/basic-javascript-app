
function init(){
    //storing values from sessionStorage
    var fname =sessionStorage.getItem("firstName");
    var lname =sessionStorage.getItem("lastName");
    var dob =sessionStorage.getItem("dob");
    var emails =sessionStorage.getItem("email");
    //  var pwd =sessionStorage.getItem("password");
    //var fname =sessionStorage.getItem("firstName");

    //adding sessionstorage data into table by using td's id
    document.getElementById('t1').innerText = fname;
    document.getElementById('t2').innerText = lname;
    document.getElementById('t3').innerText = dob;
    document.getElementById('t4').innerText = emails;
    //document.getElementById('t5').innerText = pwd;

}