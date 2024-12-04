const product = [
    {
        "id": 1,
        "name": " LD01 LOUNGE CHAIR",
        "price": 200,
        "image": "image/1.png"
    },
    {
        "id": 2,
        "name": " LD02 LOUNGE CHAIR",
        "price": 250,
        "image": "image/2.png"
    },
    {
        "id": 3,
        "name": " LD03 LOUNGE CHAIR",
        "price": 290,
        "image": "image/3.png"
    },
    {
        "id": 4,
        "name": " LD04 LOUNGE CHAIR",
        "price": 200,
        "image": "image/4.png"
    },
    {
        "id": 5,
        "name": " LD05 LOUNGE CHAIR",
        "price": 300,
        "image": "image/5.png"
    },
    {
        "id": 6,
        "name": " LD06 LOUNGE CHAIR",
        "price": 200,
        "image": "image/6.png"
    },
    {
        "id": 7,
        "name": " LD07 LOUNGE CHAIR",
        "price": 200,
        "image": "image/7.png"
    },
    {
        "id": 8,
        "name": " LD08 LOUNGE CHAIR",
        "price": 200,
        "image": "image/8.png"
    }

]

const categories = [...new Set(product.map((item) => {
    return item
}))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class="box">
      <div class="img-box">
        <img class='image' src="${image}"/>
      </div>
      <div class="bottom">
       <p>${title}</p>
       <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
    </div>`
    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displayCart();
}



function displayCart(a) {
    let j = 0;
    if (cart.length == 0) {
        document.getElementById("cartItem").innerHTML = "Your cart is empty";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item) => {
            var { image, title, price } = item;
            return (
                `<div class="cart-item">
          <div class="row-img">
            <img class='rowimg' src="${image}"/>
          </div>
           <p>${title}</p>
           <h2>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick+'delElement(" + (j++) + ")'></i></div>"
            )
        }).join('')
    }
}