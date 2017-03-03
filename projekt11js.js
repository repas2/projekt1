$(document).ready(function(){
  var list = []; 
  $("#msgBox").hide();
  $("#name").keyup(function() {                    //to upper case function applied to the name property
    this.value = this.value.toUpperCase();
  });
  $("#insertItem").click(function(){                    //user's input into variables
    var name = $("#name").val();
    var uom = $("#measure").val();
    $("#name").val("");
    $("#measure").val("");
    var item1 = {"name": name, "uom": uom, "amount": null, "price": null};          //object declaration
    function GetPropertyValue(item){                 //get property value from the property "name" from the object
      return item1.name;
    };
    var retval = GetPropertyValue(name);        
    for (var i = 0; i < list.length; i++) {          //check if the item is in the list already
      if (list[i].name === retval) {      
        $("#msgBox").slideDown()        
        $("#btnBox").click(function(){
          $("#msgBox").slideUp()
        });        
        list.reduce(list[i].name);                   //if item in the list already - remove it            
        break;
      };   
    };    
    list.push(item1);                               //insertion into the list
    $("#tableReg").append("<tr>"+"<td>"+item1.name+"</td>"+"<td>"+item1.uom+"</td>"+"</tr>");  //adding the data into the table      
    $("#selItems").append("<option>"+item1.name+"</option>");
  }); 
  
  /*
  var option = $("#selItems").prop('selectedIndex');
$("#btn12").click(function(){
    var a = $("#quantity").val();
    var b = $("#rate").val();
    $("#quantity").val("");
    $("#rate").val("");
 for (var i = 0; i<list.length; i++){
  if (option.value === list[i].name){
    list[i].amount.push(a);
    list[i].price.push(b);
  };
  
};

 $("#myList1").append("<tr>"+"<td>"+item1.name+"</td>"+"<td>"+item1.uom+"</td>"+"<td>"+item1.amount+"</td>"+"<td>"+item1.price+"</td>"+"<td></td>"+"</tr>");  //adding the data into the table 

  });

*/

  $("#registration, #stockin, #stockout, #onstock, #movements").hide();   //button(div) toggling
  $("#buttons > button").click(function() {
    $("#welcome").hide();
    var x = $(this).index();   
    $("#registration").toggle( x === 0 );
    $("#stockin").toggle( x === 1 );
    $("#stockout").toggle( x === 2 );
    $("#onstock").toggle( x === 3 );
    $("#movements").toggle( x === 4 );
  });


});