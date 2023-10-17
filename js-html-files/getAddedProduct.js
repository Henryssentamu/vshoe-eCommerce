document.querySelectorAll(".add-to-chart-button")
    .forEach((button)=>{
        button.addEventListener("click",() =>{
            let pid = button.dataset.productId

            let currentOrders = document.querySelector(".number-orders").innerHTML
            document.querySelector(".number-orders").innerHTML = Number(currentOrders) + 1
            let currentQantity = document.querySelector(`.js-qantity-selection-${pid}`).value
            
            maleshoeData.forEach((product)=>{
                if (product.id === pid){

                    addedShoe.push({
                        image:product.image,
                        name: product.name,
                        price:product.price,
                        qantity:currentQantity

                    })
                    

                }
                
            })






        })
    })


