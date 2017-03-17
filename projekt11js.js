$(document).ready(function(){
  var list = [];  
  $("#name").keyup(function() {                    //to upper case function applied to the name property
    this.value = this.value.toUpperCase();
  });
  $("#insertItem").click(function(){                    //user's input into variables
    var name = $("#name").val();
    var uom = $("#measure").val();
    var amount, price, duplicite_goods;
    var item1 = {"name": name, "uom": uom, "amount": null, "price": null};          //object declaration   
    if (name === "" && uom === ""){   //warning if both inputs are empty    
      var message = $(this).attr("data1");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });       
    }
    else if (name === ""){      //warning if name input is empty 
      var message = $(this).attr("data3");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if (uom === ""){       //warning if UOM input is empty
      var message = $(this).attr("data4");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else{
      for (var i = 0; i < list.length; i++){          //check if the item is in the list already
        if (list[i].name === item1.name){      
          var message = $(this).attr("data");
          $(message).fadeIn("fast"); 
          $(message).find(".closeBox, #closeOK").click(function(){
            $(message).fadeOut("fast");
          });
          duplicite_goods=false;                                     
          break;
        };         
      };
      if (duplicite_goods != false) {
      $("#name").val("");
      $("#measure").val("");
       list.push(item1);   //insertion into the list                            
       $("#tableReg").append("<tr>"+"<td>"+list[i].name+"</td>"+"<td>"+list[i].uom+"</td>"+"</tr>");  //adding the list data into the table      
       $("#selItems, #selItems2").append("<option>"+list[i].name+"</option>"); //adding the item name to the select element
      }      
    }      
  });      
  $("#inItem").click(function(){    
    var sel = $("#selItems").val();    //user's inputs values read into variables               
    var amountIn =$("#quantity").val();
    var price = $("#rate").val();
    var d = new Date();
    var ds = d.getDate() +"."+d.getMonth()+". "+d.getFullYear()+"  " 
        + d.getHours() + ":" + d.getMinutes();    
    if (sel === "" && amountIn === "" && price === ""){          // avoiding insertion of all 3 blank inputs in the list/table    
      var message = $(this).attr("data5");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      }); 
    } 
    else if (sel === "" && amountIn === ""){       //warning if sel and input is empty
      var message = $(this).attr("data6");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if (sel === "" && price === ""){       //warning if sel and price input is empty
      var message = $(this).attr("data7");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if (amountIn === "" && price === ""){       //warning if amount and price input is empty
      var message = $(this).attr("data8");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if (sel === ""){       //warning if goods type input is empty
      var message = $(this).attr("data9");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if (amountIn === ""){       //warning if amount input is empty
      var message = $(this).attr("data10");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if (price === ""){       //warning if price input is empty
      var message = $(this).attr("data11");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if(isNaN(amountIn) && isNaN(price) || isNaN(amountIn) || isNaN(price)){//if inputs amount and price are not numbers
      var message = $(this).attr("data12");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
      $(message).fadeOut("fast");
         });
    } 
    else{  
      for (var j=0; j<list.length; j++){ //searching the object to add the properties to
        if (sel === list[j].name){    
          list[j].amount += parseInt(amountIn);  // adding the properties to the object
          list[j].price = parseInt(price);    
          break;  
        };
      }
      $("#tableIn").append("<tr>"+"<td>"+list[j].name+"</td>"+"<td>"+list[j].uom+"</td>"+"<td>"+amountIn+"</td>"+"<td>"+list[j].price+"</td>"+"<td>"+ds +"</td>"+"</tr>");
      $("select[id=selItems]").val(""); //clearing inputs
      $("#quantity").val("");
      $("#rate").val(""); 
    }   
  });  
  $("#outItem").click(function(){  
    var sel = $("#selItems2").val();    //user's inputs values read into variables               
    var amountOut =$("#quantity2").val();
    var d = new Date();
    var ds = d.getDate() +"."+d.getMonth()+". "+d.getFullYear()+"  " 
        + d.getHours() + ":" + d.getMinutes(); 
    if (sel === "" && amountOut === ""){          // avoiding insertion of all  blank inputs in the list/table    
      var message = $(this).attr("data13");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      }); 
    } 
    else if (sel === ""){       //warning if sel input is empty
      var message = $(this).attr("data14");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if (amountOut === ""){       //warning if amountOut and price input is empty
      var message = $(this).attr("data15");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else{      
      for (var i=0; i<list.length; i++){ //searching the object to change the property
        if (sel === list[i].name){  
            if (amountOut>list[i].amount) { //availability check
                  var message = $(this).attr("data16");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast"); 
      });          
                 break;
            }
            
          list[i].amount -= parseInt(amountOut);  // change of property "amount"
           $("#tableOut").append("<tr>"+"<td>"+list[i].name+"</td>"+"<td>"+list[i].uom+"</td>"+"<td>"+"-"+amountOut+"</td>"+"<td>"+list[i].price+"</td>"+"<td>"+ds+"</td>"+"</tr>");
          break;  
        };
      };     
     // $("#tableOut").append("<tr>"+"<td>"+list[i].name+"</td>"+"<td>"+list[i].uom+"</td>"+"<td>"+"-"+amountOut+"</td>"+"<td>"+list[i].price+"</td>"+"<td>"+ds+"</td>"+"</tr>");
      $("#selItems2").val(""); //clearing inputs
      $("#quantity2").val("");
    }
  });    
  $("#btnOn").click(function(){
    $("#tbon").empty();      //clear and populate table for on stock status
      for (var i=0; i<list.length; i++){     
        
         $("#tbon").append("<tr>"+"<td>"+list[i].name+"</td>"+"<td>"+list[i].uom+"</td>"+"<td>"+list[i].amount+"</td>"+"<td>"+list[i].price+"</td>"+"</tr>");
         }
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