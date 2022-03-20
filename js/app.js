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

    $("#details").hide()
    $("#bt-sub").click(function(e) {
        e.preventDefault();
        $("#zed").hide()

        //name
        s = $('#pizza-size').find(":selected").text();
        c = $('#pizza-crust').find(":selected").text();

        //values
        s1 = $('#pizza-size').val()
        c1 = $('#pizza-crust').val()
        topping = [];
        $("input[type='checkbox']").each(function() {
            if($(this).is(':checked')){
                topping.push($(this).val());
            }
          });
        // prompt("Enter delivery Address")
        // alert(s1 + c1 +top)

        console.log(topping)

        

        var pizza = new Pizza(s1,c1,topping)

        //piz size price
        var t1 = getSizePrice(pizza.size)
        console.log(t1)
        //piz crust price
        var t2 = getCrustPrice(pizza.crust)
        console.log(t2)
        //piz topping price
        var t3 = getToppingPrice(pizza.topping)
        //pizza price
        var ptt = t1 + t2 + t3
        console.log("Pizza price: KSH", ptt)

        var data = `<div><p>Pizza Size: ${s}, Crust: ${c},<br>Topping: ${topping.join()}, Quantity: 1<br>Total: ${ptt}</p> </div>`

        $("#details").show()
        $("#details").append(data)
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

function getToppingPrice(t){
    var total = 0
    t.array.forEach(element => {
        if(element == "pepperoni"){
            total += 120
        }
        if (element == "veges"){
            total += 70
        }
        if (element == "bacon"){
            total += 150
        }
    });

    return total;
}
