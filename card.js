let priceElem = document.getElementById('price');
let subTotalElem = document.getElementById('subtotal');
let shippingElem = document.getElementById('shipping');
let discountElem = document.getElementById('discount');
let totalElem = document.getElementById('total');
let quantityElem = document.getElementById('quantity');
let textVoucherElem = document.getElementById('textVoucher');
let codeVoucherElem = document.getElementById('codeVoucher');


// //! document.getElementById('subTotal').innerHTML = 10000;

subTotalElem.innerHTML = priceElem.innerHTML;


function totalAll(subTotal, shipping = 0, discount = 0) {
    return Number(subTotal) + Number(shipping) - Number(discount);
}

totalElem.innerHTML = totalAll(subTotalElem.innerHTML, shippingElem.innerHTML, discountElem.innerHTML);

let tambah = (num) => {
    let number = parseFloat(quantityElem.value);
    number += num;
    quantityElem.value = number;

    let hasil = number * priceElem.innerHTML;
    subTotalElem.innerHTML = hasil;

    let total = totalAll(subTotalElem.innerHTML, shippingElem.innerHTML, discountElem.innerHTML);
    totalElem.innerHTML = total;
}

let kurang = (num) => {
    let number = parseFloat(quantityElem.value);
    number -= num;
    quantityElem.value = number;

    let hasil = number * priceElem.innerHTML;
    subTotalElem.innerHTML = hasil;

    let total = totalAll(subTotalElem.innerHTML, shippingElem.innerHTML, discountElem.innerHTML);
    totalElem.innerHTML = total;
}

function buttonVoucher() {
    let inputVoucher = codeVoucherElem.value;
    if (inputVoucher === "abu-dzar") {
        discountElem.innerHTML = 10000;
        } else if (inputVoucher === "badhoon") {
            discountElem.innerHTML = 5000;
            } else {
                discountElem.innerHTML = 0;
    }
}



