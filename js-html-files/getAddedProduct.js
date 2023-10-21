/** it update the addedShoe array with details of the added product per click ie for every add button click */

document.querySelectorAll(".add-to-chart-button")
    .forEach((button)=>{
        button.addEventListener("click",() =>{
            let pid = button.dataset.productId
            document.querySelector(`.js-added-chart-${pid}`).innerHTML = "Added to chart"

            let currentOrders = document.querySelector(".number-orders").innerHTML
            document.querySelector(".number-orders").innerHTML = Number(currentOrders) + 1
            let currentQantity = document.querySelector(`.js-qantity-selection-${pid}`).value
            let delivery_location = document.querySelector(".select-flame").value
            
            
            maleshoeData.forEach((product)=>{
                if (product.id === pid){
                   

                    addedShoe.push({
                        image:product.image,
                        name: product.name,
                        price:product.price,
                        qantity:currentQantity,
                        location:delivery_location

                    })
                    localStorage.setItem("addedshoe",JSON.stringify(addedShoe))
                    

                }
                
                
            })

            






        })
    })





