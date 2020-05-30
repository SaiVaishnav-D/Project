function  username()
{
    var ename=document.getElementById("t1").value;
    var pss=document.getElementById("t2").value;
    if(ename=="admin" && pss=="admin2468") {
        window.location.assign("admin_page.html");
    }
    else if((ename=="" )&&( pss==""))
        document.getElementById("t3").innerHTML="<center>***Enter Details</center>";
    else if(ename=="")
        document.getElementById("t3").innerHTML="<center>***Enter Name</center>";
    else if(pss=="")
        document.getElementById("t3").innerHTML="<center>***Enter Password</center>";
    else
        document.getElementById("t3").innerHTML="<center>***Invalid Credential</center>";
}
