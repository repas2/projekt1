$(document).ready(function(){
  var list = [];  
  $("#name").keyup(function() {                    //to upper case function applied to the name property
    this.value = this.value.toUpperCase();
  });
  $("#insertItem").click(function(e){                    //user's input into variables
    var name = $("#name").val();
    var uom = $("#measure").val();
    var amount, price;
    $("#name").val("");
    $("#measure").val("");
    var item1 = {"name": name, "uom": uom, "amount": null, "price": null};          //object declaration
    function GetPropertyValue(item){                 //get property value from the property "name" from the object
      return item1.name;
    };
    var retval = GetPropertyValue(name); 
    if (name === "" || uom === ""){ 
      e.preventDefault();       
      var message = $(this).attr("data-infoBoxes1");
      $(message).fadeIn("fast"); 
      $(message).find(".closeBox, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });       
    }
    else{
      for (var i = 0; i < list.length; i++){          //check if the item is in the list already
        if (list[i].name === retval) { 
          e.preventDefault();       
          var messageDuplicity = $(this).attr("data-infoBoxes");
          $(messageDuplicity).fadeIn("fast"); 
          $(messageDuplicity).find(".closeBox, #closeOK").click(function(){
            $(messageDuplicity).fadeOut("fast");
          });
          var duplicite_goods=1;                                     
          break;
        };         
      };
      if (duplicite_goods != 1) {
       list.push(item1);   //insertion into the list                            
       $("#tableReg").append("<tr>"+"<td>"+list[i].name+"</td>"+"<td>"+list[i].uom+"</td>"+"</tr>");  //adding the list data into the table      
       $("#selItems").append("<option>"+list[i].name+"</option>"); //adding the item name to the select element
      }      
    }      
  });      
  $("#inItem").click(function(e){    
    var sel = $("#selItems").val();    //user's inputs values read into variables               
    var amount = $("#quantity").val();
    var price = $("#rate").val();
    var d = new Date();
    var dUTC= d.toUTCString();

    if (amount === "" || price === ""){          // avoiding insertion of blank inputs in the list/table
      e.preventDefault();       
      var message = $(this).attr("data-infoBoxes2");
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
    };
    $("select[id=selItems]").val(""); //clearing inputs
    $("#quantity").val("");
    $("#rate").val("");    
  });
  //console.log(list);
  
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