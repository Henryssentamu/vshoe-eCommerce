/* generating html for the added products  */

let generatedOrdedHtml = ""
let results = JSON.parse(localStorage.getItem("addedshoe"))



results.forEach((product) =>{
    generatedOrdedHtml += `
        <section class="order-outlay">

            <div class="product-image-section">
                <img class="product-img" src="${product.image}">            
            </div>


            <div class="actual-detail">
                <div class="name">
                    ${product.name}
                </div>

                <section class="other-details">

                    <div class="unit-price">
                        Unit price: $ ${(product.price/100).toFixed("2")}
                    </div>

                    <div class="qantity">
                        Qantity: ${product.qantity}
                    </div>
                
                </section>                

                <div class="price">
                        Total price: $ ${(product.price*product.qantity/100).toFixed("2") }
                </div>
                

                
            </div>
        
        </section>
        

    `

})

document.querySelector(".products-details")
    .innerHTML = generatedOrdedHtml