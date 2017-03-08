$(document).ready(function(){
  var list = [];  
  //var list2 = [];
  $("#msgBox, #infoBox1, #infoBox2").hide();
  $("#name").keyup(function() {                    //to upper case function applied to the name property
    this.value = this.value.toUpperCase();
  });
  $("#insertItem").click(function(){                    //user's input into variables
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
    if (name === "" || uom === ""){                  // avoiding insertion of blank inputs in the list/table
      $("#infoBox1").slideDown()        
        $("#btnInfoBox1").click(function(){
          $("#infoBox1").slideUp()
        }); 
    }
    else{
      for (var i = 0; i < list.length; i++){          //check if the item is in the list already
        if (list[i].name === retval) {      
          $("#msgBox").slideDown()        
          $("#btnBox").click(function(){
            $("#msgBox").slideUp()
          });        
          list.reduce(list[i].name);  //if item in the list already - remove it                                     
          break;
        };         
      };
      list.push(item1);   //insertion into the list                            
      $("#tableReg").append("<tr>"+"<td>"+list[i].name+"</td>"+"<td>"+list[i].uom+"</td>"+"</tr>");  //adding the list data into the table      
      $("#selItems").append("<option>"+list[i].name+"</option>"); //adding the item name to the select element
    }      
  });      
  $("#inItem").click(function(){    
    var sel = $("select[id=selItems]").val();    //user's inputs values read into variables               
    var amount = $("#quantity").val();
    var price = $("#rate").val(); 
    if (amount === "" || price === ""){          // avoiding insertion of blank inputs in the list/table
      $("#infoBox2").slideDown()        
        $("#btnInfoBox2").click(function(){
          $("#infoBox2").slideUp()
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
      $("#tableIn").append("<tr>"+"<td>"+list[j].name+"</td>"+"<td>"+list[j].uom+"</td>"+"<td>"+list[j].amount+"</td>"+"<td>"+list[j].price+"</td>"+"<td></td>"+"</tr>");
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