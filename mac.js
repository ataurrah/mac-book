
//---------- geting extra item cost----------//  

function getExtraPrice(item) {
    const productPrice = document.getElementById(item + '-cost');
    const productCostAmount = parseInt(productPrice.innerText);
    return productCostAmount;
}

//--------  adding extra cost using function -------------//

function addExtraCost(item, cost) {
    const extraCost = document.getElementById(item + '-cost');
    extraCost.innerText = cost;
}

//-------updating total price using function------///
function getTotalPrice() {
    const bestPcPrice = getExtraPrice('best');
    const memoryPrice = getExtraPrice('memory');
    const storagePrice = getExtraPrice('storage');
    const deliveryPrice = getExtraPrice('delivery')
    const totalPrice = bestPcPrice + memoryPrice + storagePrice + deliveryPrice;
    return totalPrice;

}

//-----  update total using function---//
function updateTotalPrice() {
    const totalPrice = getTotalPrice();
    document.getElementById('sub-total').innerText = totalPrice;

    // ------update total --------//
    const total = document.getElementById('totalPrice');
    total.innerText = totalPrice;
}



// function  memory cost and updating------//

function memory(space) {
    document.getElementById('memory-' + space).addEventListener('click', function () {
        if (space == '16gb') {
            addExtraCost('memory', 180);
            updateTotalPrice();

        }
        else {
            addExtraCost('memory', 0);
            updateTotalPrice();
}
})

}
// function for storage cost and updating
function storage(space) {


    document.getElementById('ssd-' + space).addEventListener('click', function () {

        //-----------condition--------------//

        if (space == '256gb') {
            addExtraCost('storage', 0);
            updateTotalPrice();
        }
        else if (space == '512gb') {
            addExtraCost('storage', 100);
            updateTotalPrice();
      }
        else {
            addExtraCost('storage', 180);
            updateTotalPrice();
        }
    })
}

//function for delivery cost and updating----//

function delivery(option) {
    document.getElementById(option + '-cost').addEventListener("click", function () {
                
        //-----------condition--------------//

        if (option == "free") {
            addExtraCost('delivery', 0);
            updateTotalPrice();
        }
        else {
            addExtraCost('delivery', 20);
            updateTotalPrice();
        }
    })
}
//   promo code for bonus part

document.getElementById('apply').addEventListener('click', function () {
    const totalPrice = getTotalPrice()
    document.getElementById('sub-total').innerText = totalPrice;
    const total = document.getElementById('totalPrice');
    const promoCode = document.getElementById('promo-code');
    const cupon = promoCode.value;

    //------check pomo code------//

    if (cupon.toLowerCase() == 'stevekaku') {
        const discount = totalPrice * 20 / 100;
        const priceWithDiscount = totalPrice - discount;
        total.innerText = priceWithDiscount;
    }
    //-------without pomo code---------//
    else {
        total.innerText = totalPrice;
    }
    promoCode.value = '';
})
memory('16gb');
memory('8gb');
storage('256gb');
storage('512gb');
storage('1tb');
delivery("free")
delivery("extra")
