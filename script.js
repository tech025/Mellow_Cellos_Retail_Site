

let button = document.querySelector(".btn.btn-primary");

let checkout_order_1 = document.getElementById("checkout-order-1");

let quarter_size_cello_1 = document.getElementById("quarter-size-cello-1");

let quarter_size_cello_2 = document.getElementById("quarter-size-cello-2");

let quarter_size_cello_3 = document.getElementById("quarter-size-cello-3");

let quarter_size_cello_4 = document.getElementById("quarter-size-cello-4");

let quarter_size_cello_1_product_name = document.getElementById("quarter-size-cello-1-name").textContent;

let quarter_size_cello_1_product_price = document.getElementById("quarter-size-cello-1-price").textContent;

let quarter_size_cello_2_product_name = document.getElementById("quarter-size-cello-2-name").textContent;

let quarter_size_cello_2_product_price = document.getElementById("quarter-size-cello-2-price").textContent;

let quarter_size_cello_3_product_name = document.getElementById("quarter-size-cello-3-name").textContent;

let quarter_size_cello_3_product_price = document.getElementById("quarter-size-cello-3-price").textContent;

let quarter_size_cello_4_product_name = document.getElementById("quarter-size-cello-4-name").textContent;

let quarter_size_cello_4_product_price = document.getElementById("quarter-size-cello-4-price").textContent;

let half_size_cello_1 = document.getElementById("half-size-cello-1");

let half_size_cello_2 = document.getElementById("half-size-cello-2");

let half_size_cello_3 = document.getElementById("half-size-cello-3");

let half_size_cello_4 = document.getElementById("half-size-cello-4");

let half_size_cello_1_product_name = document.getElementById("half-size-cello-1-name").textContent;

let half_size_cello_1_product_price = document.getElementById("half-size-cello-1-price").textContent;

let half_size_cello_2_product_name = document.getElementById("half-size-cello-2-name").textContent;

let half_size_cello_2_product_price = document.getElementById("half-size-cello-2-price").textContent;

let half_size_cello_3_product_name = document.getElementById("half-size-cello-3-name").textContent;

let half_size_cello_3_product_price = document.getElementById("half-size-cello-3-price").textContent;

let half_size_cello_4_product_name = document.getElementById("half-size-cello-4-name").textContent;

let half_size_cello_4_product_price = document.getElementById("half-size-cello-4-price").textContent;


let three_quarter_size_cello_1 = document.getElementById("three-quarter-size-cello-1");

let three_quarter_size_cello_2 = document.getElementById("three-quarter-size-cello-2");

let three_quarter_size_cello_3 = document.getElementById("three-quarter-size-cello-3");

let three_quarter_size_cello_4 = document.getElementById("three-quarter-size-cello-4");

let three_quarter_size_cello_1_product_name = document.getElementById("three-quarter-size-cello-1-name").textContent;

let three_quarter_size_cello_1_product_price = document.getElementById("three-quarter-size-cello-1-price").textContent;

let three_quarter_size_cello_2_product_name = document.getElementById("three-quarter-size-cello-2-name").textContent;

let three_quarter_size_cello_2_product_price = document.getElementById("three-quarter-size-cello-2-price").textContent;

let three_quarter_size_cello_3_product_name = document.getElementById("three-quarter-size-cello-3-name").textContent;

let three_quarter_size_cello_3_product_price = document.getElementById("three-quarter-size-cello-3-price").textContent;

let three_quarter_size_cello_4_product_name = document.getElementById("three-quarter-size-cello-4-name").textContent;

let three_quarter_size_cello_4_product_price = document.getElementById("three-quarter-size-cello-4-price").textContent;

let full_size_cello_1 = document.getElementById("full-size-cello-1");

let full_size_cello_2 = document.getElementById("full-size-cello-2");

let full_size_cello_3 = document.getElementById("full-size-cello-3");

let full_size_cello_4 = document.getElementById("full-size-cello-4");

let full_size_cello_1_product_name = document.getElementById("full-size-cello-1-name").textContent;

let full_size_cello_1_product_price = document.getElementById("full-size-cello-1-price").textContent;

let full_size_cello_2_product_name = document.getElementById("full-size-cello-2-name").textContent;

let full_size_cello_2_product_price = document.getElementById("full-size-cello-2-price").textContent;

let full_size_cello_3_product_name = document.getElementById("full-size-cello-3-name").textContent;

let full_size_cello_3_product_price = document.getElementById("full-size-cello-3-price").textContent;

let full_size_cello_4_product_name = document.getElementById("full-size-cello-4-name").textContent;

let full_size_cello_4_product_price = document.getElementById("full-size-cello-4-price").textContent;

function add_product_to_checkout() {
 
    if(full_size_cello_1) {
    full_size_cello_1_product_name.append(checkout_order_1);
    full_size_cello_1_product_price.append(checkout_order_1);
    }
  
    else if(full_size_cello_2) {
    full_size_cello_2_product_name.append(checkout_order_1);
    full_size_cello_2_product_price.append(checkout_order_1);
    }

    else if(full_size_cello_3) {
    full_size_cello_3_product_name.append(checkout_order_1);
    full_size_cello_3_product_price.append(checkout_order_1);
    }
    else if(full_size_cello_4) {
    full_size_cello_4_product_name.append(checkout_order_1);
    full_size_cello_4_product_price.append(checkout_order_1);
    }
}


button.addEventListener('click', add_product_to_checkout());