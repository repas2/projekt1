$(document).ready(function(){
  var list = [];  
  $("#name").keyup(function() {                    //to upper case function applied to the name property
    this.value = this.value.toUpperCase();
  });
  $("#insertItem").click(function(){                    //user's input into variables
    var name = $("#name").val();
    var uom = $("#measure").val();
    var amount, price;    
    var item1 = {"name": name, "uom": uom, "amount": null, "price": null};          //object declaration    
    if (name === "" && uom === ""){              									//warning if both inputs are empty
      var message = $(this).attr("data1");      
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });       
    }
    else if (name === ""){   														//warning if name input is empty           
      var message = $(this).attr("data3");      
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });           
    }
    else if (uom === ""){   														//warning if uom input is empty           
      var message = $(this).attr("data4");      
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });           
    }
    else{
      for (var i = 0; i < list.length; i++){          								//check if the item is in the list already
        if (list[i].name === item1.name) {                  
          var message = $(this).attr("data");
          $(message).fadeIn("fast"); 
          $(message).find(".closeBox, #closeOK").click(function(){
            $(message).fadeOut("fast");
          });
          var duplicite_goods=1;                                     
          break;
        };         
      };
      if (duplicite_goods != 1) {
      	$("#name").val("");
        $("#measure").val("");
        list.push(item1);   //insertion into the list                            
        $("#tableReg").append("<tr>"+"<td>"+list[i].name+"</td>"+"<td>"+list[i].uom+"</td>"+"</tr>");  //adding the list data into the table      
        $("#selItems").append("<option>"+list[i].name+"</option>"); //adding the item name to the select element
      }      
    }      
  });      
  $("#inItem").click(function(){    
    var sel = $("#selItems").val();    //user's inputs values read into variables               
    var amount = $("#quantity").val();
    var price = $("#rate").val();
    var d = new Date();
    var dUTC= d.toUTCString();
    if (sel === "" && amount === "" && price === ""){         // avoiding insertion of blank inputs in the list/table            
      var message = $(this).attr("data5");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      }); 
    }
    else if (sel === "" && amount === "" ){   														//warning if sel input is empty           
      var message = $(this).attr("data6");      
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });           
    }
    else if (sel === "" && price === ""){   														//warning if amount input is empty           
      var message = $(this).attr("data7");      
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });           
    }
    else if (amount === "" && price === ""){   														//warning if price input is empty           
      var message = $(this).attr("data8");      
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });           
    } 
    else if (sel === ""){   														//warning if sel input is empty           
      var message = $(this).attr("data9");      
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });           
    }
    else if (amount === ""){   														//warning if amount input is empty           
      var message = $(this).attr("data10");      
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });           
    }
    else if (price === ""){   														//warning if price input is empty           
      var message = $(this).attr("data11");      
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });           
    } 
    else{  
      for (var j=0; j<list.length; j++){ //searching the object to add the properties to
        if (sel === list[j].name){    
          list[j].amount = amount;  // adding the properties to the object
          list[j].price = price;    
          break;  
        };
      }
      $("#tableIn").append("<tr>"+"<td>"+list[j].name+"</td>"+"<td>"+list[j].uom+"</td>"+"<td>"+list[j].amount+"</td>"+"<td>"+list[j].price+"</td>"+"<td>"+d.getDate() +"."+d.getMonth()+". "+d.getFullYear()+"</td>"+"</tr>");
        $("select[id=selItems]").val(""); //clearing inputs
        $("#quantity").val("");
        $("#rate").val("");
    };       
  });  
  $("#registration, #stockin, #stockout, #onstock, #movements").hide();   //button(div) toggling
  $("#buttons > button").click(function() {
    $("#welcome").hide();
    var x = $(this).index();   
    $("#registration").toggle(x===0);
    $("#stockin").toggle(x===1);
    $("#stockout").toggle(x===2);
    $("#onstock").toggle(x===3);
    $("#movements").toggle(x===4);
  });
});