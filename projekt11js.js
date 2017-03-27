$(document).ready(function(){
  var list = [];  
  $("#name").keyup(function() {                    //to upper case function applied to the name property
    this.value = this.value.toUpperCase();
  });
  $("#insertItem").click(function(){                    //user's input into variables
    var name = $("#name").val();
    var uom = $("#measure").val();
    var amount, price, duplicite_goods, valid, re; 
    re=/^(\D)/;
    valid=re.test(name);
       var item1 = {"name": name, "uom": uom, "amount": null, "price": null};          //object declaration   
   if (name === "" && uom === ""){   //warning if both inputs are empty    
      $("#modalWarning").text("Inputs Goods Name and UOM cannot be blank");
      var message=$(this).attr("data");  
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });       
    }
    else if (name === ""){      //warning if name input is empty 
     $("#modalWarning").text("Input Goods Name cannot be blank");
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if (uom === ""){       //warning if UOM input is empty
      $("#modalWarning").text("Input UOM cannot be blank");
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    
   
    
      else if (valid==false){      //warning if name input is empty 
     $("#modalWarning").text("Letters are required!");
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else{
      for (var i = 0; i < list.length; i++){          //check if the item is in the list already
        if (list[i].name === item1.name){ 
         $("#modalWarning").text("This Item is already in the system");     
          var message = $(this).attr("data");
          $(message).fadeIn("fast"); 
          $(message).find(".closeBox, #closeOK").click(function(){
            $(message).fadeOut("fast");
          });
          duplicite_goods=true;                                     
          break;
        };         
      };
      if (duplicite_goods != true) {
      $("#name").val("");
      $("#measure").val("");
       list.push(item1);   //insertion into the list                            
       $("#tbreg").append("<tr>"+"<td>"+list[i].name+"</td>"+"<td>"+list[i].uom+"</td>"+"</tr>");  //adding the list data into the table      
       $("#selItems, #selItems2").append("<option>"+list[i].name+"</option>"); //adding the item name to the select element
      }      
    }      
  });      
  $("#inItem").click(function(){    
    var sel = $("#selItems").val();    //user's inputs values read into variables               
    var amountIn =$("#quantity").val();
    var price = $("#rate").val();
    var d = new Date();
    var ds = d.getDate() +"."+(d.getMonth()+1)+". "+d.getFullYear()+"  " 
        + d.getHours() + ":" + d.getMinutes();
        re=/^(\d)/;
    valid=re.test(amountIn); 
    re1=/^(\d)/;
    valid1=re1.test(price);    
    if (sel === "" && amountIn === "" && price === ""){          // avoiding insertion of all 3 blank inputs in the list/table    
       $("#modalWarning").text("Inputs Goods Type, Amount and Price cannot be blank");
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      }); 
    } 
    else if (sel === "" && amountIn === ""){       //warning if sel and input is empty
       $("#modalWarning").text("Inputs Goods Type and Amount cannot be blank");
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if (sel === "" && price === ""){       //warning if sel and price input is empty
       $("#modalWarning").text("Inputs Goods Type and Price cannot be blank");
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if (amountIn === "" && price === ""){       //warning if amount and price input is empty
       $("#modalWarning").text("Inputs Amount and Price cannot be blank");
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if (sel === ""){       //warning if goods type input is empty
      $("#modalWarning").text("Input Goods Type cannot be blank");
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if (amountIn === ""){       //warning if amount input is empty
       $("#modalWarning").text("Input Amount cannot be blank");
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if (price === ""){       //warning if price input is empty
      $("#modalWarning").text("Input Price cannot be blank");
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    //if inputs amount and price are not numbers or are 0 or negative numbers
    else if(valid == false && valid1==false || valid== false || valid1 ==false || price <=0 && amountIn <=0 || price<=0 || amountIn <=0){
      $("#modalWarning").text("Inputs Amount and Price must be positive numbers");
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
      $(message).fadeOut("fast");
         });
    } 
    else{  
      for (var j=0; j<list.length; j++){ //searching the object to add the properties to
        if (sel === list[j].name){    
          list[j].amount += parseFloat(amountIn);  // adding the properties to the object
          list[j].price = parseFloat(price);    
          break;  
        };
      }
      $("#tbin").append("<tr>"+"<td>"+list[j].name+"</td>"+"<td>"+list[j].uom+"</td>"+"<td>"+amountIn+"</td>"+"<td>"+list[j].price+"</td>"+"<td>"+ds +"</td>"+"</tr>");
      $("select[id=selItems]").val(""); //clearing inputs
      $("#quantity").val("");
      $("#rate").val(""); 
      $("#tbh").append("<tr>"+"<td>"+list[j].name+"</td>"+"<td>"+list[j].uom+"</td>"+"<td>"+amountIn+"</td>"+"<td>"+list[j].price+"</td>"+"<td>"+ds+"</td>"+"</tr>");
    }   
  });  
  $("#outItem").click(function(){  
    var sel = $("#selItems2").val();    //user's inputs values read into variables               
    var amountOut =$("#quantity2").val();
    var d = new Date();
    var month = d.getMonth()+1;
    var hours = d.getHours(); 
    var minutes = d.getMinutes();
    if (minutes < 10){
      minutes = "0" + minutes
    }; 
    var ds = d.getDate() +"."+ month +". "+d.getFullYear()+"  " 
        + hours+ ":" + minutes ; 
    if (sel === "" && amountOut === ""){          // avoiding insertion of all  blank inputs in the list/table    
      $("#modalWarning").text("Inputs Goods Type and Amount cannot be blank");
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      }); 
    } 
    else if (sel === ""){       //warning if sel input is empty
      $("#modalWarning").text("Input Goods Type cannot be blank"); 
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if (amountOut === ""){       //warning if amountOut and price input is empty
      $("#modalWarning").text("Input Amount cannot be blank");
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }
    else if(isNaN(amountOut) || amountOut <=0){
      $("#modalWarning").text("Requested amount is not available amount");
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast"); 
      });    
    }
    else{      
      for (var i=0; i<list.length; i++){ //searching the object to change the property
        if (sel === list[i].name){  
          if (amountOut>list[i].amount) {            //positive numbers check
            $("#modalWarning").text("Requested amount is not available amount");
            var message = $(this).attr("data");
            $(message).fadeIn("fast"); 
            $(message).find(".closeBox, #closeOK").click(function(){
              $(message).fadeOut("fast"); 
            });          
            break;
          }            
          list[i].amount -= parseInt(amountOut);  // change of property "amount"
          $("#tbout").append("<tr>"+"<td>"+list[i].name+"</td>"+"<td>"+list[i].uom+"</td>"+"<td>"+"-"+amountOut+"</td>"+"<td>"+list[i].price+"</td>"+"<td>"+ds+"</td>"+"</tr>");
          $("#tbh").append("<tr>"+"<td>"+list[i].name+"</td>"+"<td>"+list[i].uom+"</td>"+"<td>"+"-"+amountOut+"</td>"+"<td>"+list[i].price+"</td>"+"<td>"+ds+"</td>"+"</tr>");
          break;  
        };
      };     
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
  $("#buttonBar > button").click(function() {
    $("#welcome").hide();
    var x = $(this).index();   
    $("#registration").toggle(x===0);
    $("#stockin").toggle(x===1);
    $("#stockout").toggle(x===2);
    $("#onstock").toggle(x===3);
    $("#movements").toggle(x===4);
  });
});