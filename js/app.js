//pizza object
class Pizza {
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

        //name
        s = $('#pizza-size').find(":selected").text();
        c = $('#pizza-crust').find(":selected").text();

        //values
        s1 = $('#pizza-size').val()
        c1 = $('#pizza-crust').val()
        top = [];
        $("input[type='checkbox']").each(function() {
            if($(this).is(':checked')){
                top.push($(this).val());
            }
          });
        // prompt("Enter delivery Address")
        // alert(s1 + c1 +top)

        var pizza = new Pizza(s1,c1,top)

        //piz size price
        var t1 = getSizePrice(pizza.size)
        console.log(t1)
        //piz crust price
        var t2 = getCrustPrice(pizza.crust)
        console.log(t2)
        //piz topping price

        //pizza price
        var ptt = t1 + t2
        console.log("Pizza price: KSH", ptt)
    });
});


function getSizePrice(size){
    if(size == "s"){
        return 500
    } else if (size == "m"){
        return 750
    } else{
        return 1200
    }
}

function getCrustPrice(size){
    if(size == "crispy"){
        return 250
    } else if (size == "stuffed"){
        return 150
    } else{
        return 0
    }
}

function getToppingPrice(){}
