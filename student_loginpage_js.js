function  username()
{
  var ename=document.getElementById("t1").value;
  var pss=document.getElementById("t2").value;
  if(ename=="student" && pss=="student2468") {
    document.getElementById("t3").innerHTML = "Valid Username";
    window.location.assign("student_page.html");
  }
  else if((ename=="" )&&( pss==""))
    document.getElementById("t3").innerHTML="Enter Details";
  else if(ename=="")
    document.getElementById("t3").innerHTML="Enter Name";
  else if(pss=="")
    document.getElementById("t3").innerHTML="Enter Password";
  else
    document.getElementById("t3").innerHTML="Invalid Credential";
}
