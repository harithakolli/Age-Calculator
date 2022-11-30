function calcAge()
{
    let d1 = document.getElementById("date").value;
    let m1= document.getElementById("month").value;
    let y1= document.getElementById("year").value;
if(d1 =='') {
     document.getElementById("age").innerHTML = "Please enter Valid Data for Date Field"; 
    return false;
}
if(m1 =='' && y1=='') {
    document.getElementById("age").innerHTML = "Please enter Valid Data for Month and Year Field"; 
   return false;
}
else{
    if(m1 !='' && y1=='') {
     document.getElementById("age").innerHTML = "Please enter Valid Data for Year Field"; 
       return false;
    }
}
console.log("year",isNaN(Number(y1)));

if(isNaN(Number(d1))){
    document.getElementById("age").innerHTML = "Please enter Valid Data for Date Field"; 
    return false;
}

if(isNaN(Number(m1))){
    document.getElementById("age").innerHTML = "Please enter Valid Data for Month Field"; 
    return false;
}

if(isNaN(Number(y1))){
    document.getElementById("age").innerHTML = "Please enter Valid Data for Year Field"; 
    return false;
}
    if(Number(d1) > 31){
        document.getElementById("age").innerHTML = "Please enter valid date"; 
        return false;
    }

    if(Number(m1) > 12){
        document.getElementById("age").innerHTML = "Please enter valid month"; 
        return false;
    }
   let date = new Date();
    let d2 = date.getDate();

    let m2 = 1 + date.getMonth();
   // console.log(m2);
    let y2 = date.getFullYear();
    //console.log(y2);

    let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(d1 > d2){
        d2 = d2 + monthDays[m2-1];
    //    console.log("Under dates" , d2);
        m2 = m2-1;
      //  console.log("Under dates" , m2);
    }
    if(m1>m2){
        m2=m2+12;
     //   console.log("Under months" , m2);
        y2=y2-1;
       // console.log("Under months" , y2);
    }
    
  let days = d2-d1;
 // console.log("Final Days" , days);
  let months = m2-m1;
 // console.log("Final Months" , months);
  let years = y2-y1;
 // console.log("Final Years" , years);

  document.getElementById("age").innerHTML = "Your age is " + years + " Years " + months + " Months " + days + " Days"; 




}