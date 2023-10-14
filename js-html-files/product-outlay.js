let generatedHtml = ""

maleshoeData.forEach((product) =>{
    generatedHtml += `
        <div class="product-container">
            <div class="product-image-section">
                <button class="image-button">
                    <img class="product-image" src="${product.image}">
                </button>
            
            </div>
            <div class="product-details">

                <div class="product-name">
                    Name: ${product.name}
                </div>
                <div class="select-qantity">

                    <div class="unity-price">
                        Price: $ ${(product.price/100).toFixed(2)}
                    </div>

                    <div class="qantity-section">

                        <select class="qantity-selection">
                            <label for="qantity"></label>
                            <option value="1" class="qantity">1</option>
                            <option value="2" class="qantity">2</option>
                            <option value="3" class="qantity">3</option>
                            <option value="4" class="qantity">4</option>
                            <option value="5" class="qantity">5</option>
                            <option value="6" class="qantity">6</option>
                            <option value="7" class="qantity">7</option>
                            <option value="8" class="qantity">8</option>
                            <option value="9" class="qantity">9</option>
                            <option value="10" class="qantity">10</option>
                        
                        </select>

                    </div>
                   
                </div>

            </div>
            <div class="add-order-to-list">
                <button class="add-to-chart-button">
                    Add
                </button>
            </div>
        
        </div>
    `
})

document.querySelector(".main-container")
    .innerHTML = generatedHtml

