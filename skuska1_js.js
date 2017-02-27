$(document).ready(function(){
    var list = []; 
    $("#name").keyup(function() {                    //to upper case function applied to the name property
      this.value = this.value.toUpperCase();
    });
    $("#btn11").click(function(){                    //user's input into variables
      var name = $("#name").val();
      var uom = $("#measure").val();
      $("#name").val("");
      $("#measure").val("");
      function item(name,uom){                       //constructor
        this.name = name;
        this.uom = uom;       
      } 
    var item_1 = new item(name,uom);                 //object declaration
    function GetPropertyValue(item){         //get property value from the object
      return item_1.name;
    };
    var retval = GetPropertyValue(item_1.name);
    //alert(retval); 
     
    for (var i = 0; i < list.length; i++) {          //check if the item is in the list already
      if (list[i].name === retval) { 
        alert("Item "+retval+" is already in the system!"); 
        list.remove(list[i].name);   
        break;
      };   
    };    
    list.push(item_1);                              //insertion into the list
    $("#myList").append("<tr>"+"<td>"+"</td>"+"<td>"+item_1.name+"</td>"+"<td>"+item_1.uom+"</td>"+"</tr>");  //adding the data into the table     
    
    $("#sel1").append("<option>"+item_1.name+"</option>");
    });
    $("#div3, #div4, #div5, #div6, #div7").hide();       //button(div) toggling
    $("#div2 > button").click(function() {
    $("#welcome").hide();
    var x = $(this).index();   
    $("#div3").toggle( x === 0 );
    $("#div4").toggle( x === 1 );
    $("#div5").toggle( x === 2 );
    $("#div6").toggle( x === 3 );
    $("#div7").toggle( x === 4 );
   });

});