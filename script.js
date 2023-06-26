const product = [
    {
        id: 0,
        image: 'a.jpeg',
        title: '10-Inch-Resin',
        price: 2000,
    },
    {
        id: 1,
        image: 'b.jpeg',
        title: '8-Inch-Resin',
        price: 1500,
    },
    {
        id: 2,
        image: 'c.jpeg',
        title: '10-Inch-Resin',
        price: 2000,
    },
    {
        id: 3,
        image: 'd.jpeg',
        title: '8-Inch-Resin',
        price: 1500,
    },
    {
        id: 4,
        image: 'e.jpeg',
        title: '10-Inch-Resin',
        price: 2000,
    },
    {
        id: 5,
        image: 'f.jpeg',
        title: '10-Inch-Resin',
        price: 2000,
    },
    {
        id: 6,
        image: 'g.jpeg',
        title: '8-Inch-Resin',
        price: 1500,
    },
    {
        id: 7,
        image: 'h.jpeg',
        title: '8-Inch-Resin',
        price: 1500,
    },
    {
        id: 8,
        image: 'i.jpeg',
        title: '8-Inch-Resin',
        price: 1500,
    },
    {
        id: 9,
        image: 'a.jpeg',
        title: '10-Inch-Resin',
        price: 2000,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₹ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items,tax=18)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "₹ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>₹ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );

        }).join('');
    } 

//         (function clickevent(total,tax=18){
    
// taxAmount=total * (tax/100);

// document.write(`Total Price is:₹ ${total}

// GST of tax (${tax}%)is: ₹ ${taxAmount}

// Total Price is:₹ ${total + taxAmount}`);
// }(total));

}


