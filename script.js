// Code goes here

var mydata = [];
var session;
var find;

jQuery( document ).ready(function() {
  
  jQuery('#add').click(function(){
    
    jQuery("#detailtable").find("tr:gt(0)").remove();

       var fname=$('#firstname').val();
       var lname=$('#lastname').val();
       var eemail=$('#email').val();
       var llocation=$('#location').val();
       var pphone=$('#phone').val();
       var ccurrent_class=$('#current').val();
       var ccommunication=$('#comm').val();
       var ppermanent=$('#perm').val();
       var eenglish=$('#eng').val();
       var sscience=$('#sci').val();
       var ccomputer=$('#comp').val();
       var hhardware=$('#hard').val();
       
       var aaddress=[], mmarks=[];
       
       aaddress.push({
         communication : ccommunication,
         permanent : ppermanent,
       });
       
       mmarks.push({
         english : eenglish,
         science : sscience,
         computer : ccomputer,
         hardware : hhardware,
       });
      
       session.push({
         firstname: fname,
         lastname: lname,
         email : eemail,
         location : llocation,
         phone : pphone,
         current_class : ccurrent_class,
         address : aaddress,
         marks: mmarks,
       });
    
       localStorage.setItem('session', JSON.stringify('session'));
       
       //
            var table = document.getElementById("myTable");

                var i=100;
    
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);
                
                cell1.innerHTML = session[i].firstname;
                cell2.innerHTML = session[i].lastname;
                cell3.innerHTML = session[i].email;
                cell4.innerHTML = session[i].location;
                cell5.innerHTML = session[i].phone;
                cell6.innerHTML = session[i].current_class;
                cell7.innerHTML = session[i].address[0].permanent;
                
                i++;

                jQuery('#firstname').val("");
                jQuery('#lastname').val("");
                jQuery('#email').val("");
                jQuery('#location').val("");
                jQuery('#phone').val("");
                jQuery('#current').val("");
                jQuery('#comm').val("");
                jQuery('#perm').val("");
                jQuery('#eng').val("");
                jQuery('#sci').val("");
                jQuery('#comp').val("");
                jQuery('#hard').val("");
  });
  
  jQuery('#edit').click(function(){
    
    jQuery("#detailtable").find("tr:gt(0)").remove();
    
       var fname=$('#firstname').val();
       var lname=$('#lastname').val();
       var eemail=$('#email').val();
       var llocation=$('#location').val();
       var pphone=$('#phone').val();
       var ccurrent_class=$('#current').val();
       var ccommunication=$('#comm').val();
       var ppermanent=$('#perm').val();
       var eenglish=$('#eng').val();
       var sscience=$('#sci').val();
       var ccomputer=$('#comp').val();
       var hhardware=$('#hard').val();
       
       session[find].firstname = fname;
       session[find].lastname = lname;
       session[find].email = eemail;
       session[find].location = llocation;
       session[find].phone = pphone;
       session[find].current_class = ccurrent_class;
       session[find].address[0].communication = ccommunication;
       session[find].address[0].permanent = ppermanent;
       session[find].marks[0].english = eenglish;
       session[find].marks[0].science = sscience;
       session[find].marks[0].computer = ccomputer;
       session[find].marks[0].hardware = hhardware;
       
       localStorage.setItem('session', JSON.stringify('session'));
       
       jQuery("#myTable").find("tr:gt(0)").remove();
       
       var table = document.getElementById("myTable");
       
       var row = table.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);
       var cell6 = row.insertCell(5);
       var cell7 = row.insertCell(6);
                
       cell1.innerHTML = session[find].firstname;
       cell2.innerHTML = session[find].lastname;
       cell3.innerHTML = session[find].email;
       cell4.innerHTML = session[find].location;
       cell5.innerHTML = session[find].phone;
       cell6.innerHTML = session[find].current_class;
       cell7.innerHTML = session[find].address[0].permanent;
       
       jQuery('#firstname').val("");
       jQuery('#lastname').val("");
       jQuery('#email').val("");
       jQuery('#location').val("");
       jQuery('#phone').val("");
       jQuery('#current').val("");
       jQuery('#comm').val("");
       jQuery('#perm').val("");
       jQuery('#eng').val("");
       jQuery('#sci').val("");
       jQuery('#comp').val("");
       jQuery('#hard').val("");
  });

  jQuery('#search').click(function(){
    
       jQuery("#myTable").find("tr:gt(0)").remove();
       jQuery("#detailtable").find("tr:gt(0)").remove();
       jQuery("#nomore").hide();

       var fname=$('#firstname').val();
       var lname=$('#lastname').val();
       var eemail=$('#email').val();
       var llocation=$('#location').val();
       var pphone=$('#phone').val();
       var ccurrent_class=$('#current').val();
      
       //var filter = input.value.toUpperCase();
       
       var table = document.getElementById("myTable");
       
       
       for(var i=0; i<session.length; i++)
       {
         if(fname == session[i].firstname && lname == session[i].lastname && eemail == session[i].email && llocation == session[i].location && pphone == session[i].phone && ccurrent_class == session[i].current_class)
         {
           find = i;
         }
       }

                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);
                
                cell1.innerHTML = session[find].firstname;
                cell2.innerHTML = session[find].lastname;
                cell3.innerHTML = session[find].email;
                cell4.innerHTML = session[find].location;
                cell5.innerHTML = session[find].phone;
                cell6.innerHTML = session[find].current_class;
                cell7.innerHTML = session[find].address[0].permanent;
              
                jQuery('#firstname').val("");
                jQuery('#lastname').val("");
                jQuery('#email').val("");
                jQuery('#location').val("");
                jQuery('#phone').val("");
                jQuery('#current').val("");
                jQuery('#comm').val("");
                jQuery('#perm').val("");
                jQuery('#eng').val("");
                jQuery('#sci').val("");
                jQuery('#comp').val("");
                jQuery('#hard').val("");
  });
  
  jQuery('#delete').click(function(){
    
       jQuery("#myTable").find("tr:gt(0)").remove();
       jQuery("#detailtable").find("tr:gt(0)").remove();
       
       session.splice(find, 1);
       
       jQuery("#deletedemo").text("Student Deleted");
       
       localStorage.setItem('session', JSON.stringify('session'));
       
       var table = document.getElementById("myTable");
       for(var i=0;i<10;i++){
    
                var row = table.insertRow(i+1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);
                
     
                cell1.innerHTML = session[i].firstname;
                cell2.innerHTML = session[i].lastname;
                cell3.innerHTML = session[i].email;
                cell4.innerHTML = session[i].location;
                cell5.innerHTML = session[i].phone;
                cell6.innerHTML = session[i].current_class;
                cell7.innerHTML = session[i].address[0].permanent;
    
              }
                jQuery('#firstname').val("");
                jQuery('#lastname').val("");
                jQuery('#email').val("");
                jQuery('#location').val("");
                jQuery('#phone').val("");
                jQuery('#current').val("");
                jQuery('#comm').val("");
                jQuery('#perm').val("");
                jQuery('#eng').val("");
                jQuery('#sci').val("");
                jQuery('#comp').val("");
                jQuery('#hard').val("");
  });
  
   jQuery('#details').click(function(){
     
     var tabledetails = document.getElementById("detailtable");
     jQuery("#detailtable").show();
     
     var row0 = tabledetails.insertRow(0);
     var cell01 = row0.insertCell(0);
     var cell02 = row0.insertCell(1);
     var cell03 = row0.insertCell(2);
     var cell04 = row0.insertCell(3);
     var cell05 = row0.insertCell(4);
     var cell06 = row0.insertCell(5);
     
     cell01.innerHTML = "communication address";
     cell02.innerHTML = "communication address";
     cell03.innerHTML = "english marks";
     cell04.innerHTML = "science marks";
     cell05.innerHTML = "computer marks";
     cell06.innerHTML = "hardware marks";
     
     var row = tabledetails.insertRow(1);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);
     var cell6 = row.insertCell(5);
                
     cell1.innerHTML = session[find].address[0].communication;
     cell2.innerHTML = session[find].address[0].permanent;
     cell3.innerHTML = session[find].marks[0].english;
     cell4.innerHTML = session[find].marks[0].science;
     cell5.innerHTML = session[find].marks[0].computer;
     cell6.innerHTML = session[find].marks[0].hardware;
                
                jQuery('#firstname').val("");
                jQuery('#lastname').val("");
                jQuery('#email').val("");
                jQuery('#location').val("");
                jQuery('#phone').val("");
                jQuery('#current').val("");
                jQuery('#comm').val("");
                jQuery('#perm').val("");
                jQuery('#eng').val("");
                jQuery('#sci').val("");
                jQuery('#comp').val("");
                jQuery('#hard').val("");
  });
  
  jQuery('#go').click(function(){
     
       jQuery("#myTable").find("tr:gt(0)").remove();
       jQuery("#detailtable").hide();
       jQuery("#nomore").show();
   
       var page = document.getElementById("dropdown").value;
       var table = document.getElementById("myTable");
            
       for(var i=0;i<page;i++){
    
          var row = table.insertRow(i+1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          var cell6 = row.insertCell(5);
          var cell7 = row.insertCell(6);
                
          cell1.innerHTML = session[i].firstname;
          cell2.innerHTML = session[i].lastname;
          cell3.innerHTML = session[i].email;
          cell4.innerHTML = session[i].location;
          cell5.innerHTML = session[i].phone;
          cell6.innerHTML = session[i].current_class;
          cell7.innerHTML = session[i].address[0].permanent;
          }
          
          
        var pageoption = Number(page);
        
        var counter = pageoption

        window.onscroll = function(ev) {
          
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && counter+1 < session.length ) {
            
            for(var i=pageoption+1; i<session.length; i++){
              
              
            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
                
            cell1.innerHTML = session[i].firstname;
            cell2.innerHTML = session[i].lastname;
            cell3.innerHTML = session[i].email;
            cell4.innerHTML = session[i].location;
            cell5.innerHTML = session[i].phone;
            cell6.innerHTML = session[i].current_class;
            cell7.innerHTML = session[i].address[0].permanent;
            
            counter++;
          }
       }
       
    }
    jQuery("#nomore").text("No More Records");
  });
  
  jQuery("#detailtable").hide();
  
  jQuery.ajax({
    
    "type":"GET",
    "url":"data.json",
    
     success: function(data) {
       
       
       if(localStorage.getItem('locals') === null)
       {
         localStorage.setItem('locals', JSON.stringify(data));
       }
       
       var txt = localStorage.getItem("locals");
       
       session = JSON.parse(txt);
      
       var table = document.getElementById("myTable");
            
       for(var i=0;i<10;i++){
    
                var row = table.insertRow(i+1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);
                
     
                cell1.innerHTML = session[i].firstname;
                cell2.innerHTML = session[i].lastname;
                cell3.innerHTML = session[i].email;
                cell4.innerHTML = session[i].location;
                cell5.innerHTML = session[i].phone;
                cell6.innerHTML = session[i].current_class;
                cell7.innerHTML = session[i].address[0].permanent;
    
            }
        }
  });
  
  var counter = 10;
  var table = document.getElementById("myTable");
  
  jQuery("#nomore").show();
  
  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && counter < session.length ) {

        for(var i=10;i<session.length;i++){
    
                var row = table.insertRow(i+1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);
                
     
                cell1.innerHTML = session[i].firstname;
                cell2.innerHTML = session[i].lastname;
                cell3.innerHTML = session[i].email;
                cell4.innerHTML = session[i].location;
                cell5.innerHTML = session[i].phone;
                cell6.innerHTML = session[i].current_class;
                cell7.innerHTML = session[i].address[0].permanent;
                
                counter++;
            }
       }
       jQuery("#nomore").text("No More Records");
    }
});
