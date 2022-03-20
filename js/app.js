//pizza object
class pizza {
    constructor(size, crust, topping) {
        this.size = size
        this.crust = crust
        this.topping = topping
    }
}

//size object
var size = {
    s: 600,
    m: 800,
    l: 1200 
}

//crust object
var crust = {
    crispy: 300,
    stuffed: 200,
    gluten: 100
}

//cart object
var cart = []



//handle form submission

// $("document").ready(function() {

//     // alert("Hey Velma")

//     s = $('#pizza-size').find(":selected").text();
//     c = $('#pizza-crust').find(":selected").text();
//     t = []

//     $("bt-sub").click(submitPizza());

//     function submitPizza(){
//         alert(s,c)
//     }
// });

$(document).ready(function(){ 
    $("#bt-sub").click(function(e) {
        e.preventDefault();
        s = $('#pizza-size').find(":selected").text();
        c = $('#pizza-crust').find(":selected").text();
        t = [];
        $("input[type='checkbox']").each(function() {
            if($(this).is(':checked')){
                t.push($(this).val());
            }
          });

        alert(s+c+t)
    });
});
