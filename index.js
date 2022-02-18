//decleared 

console.log(rawdata)//check if js works

//decleared product 
randerData(rawdata)
function randerData(data) {
    let productsForRander = ''
    for (let product of data) {
        if (product.productMedia[0] && product.productMedia[0].url) {
            const imgSrc = `https://storage.googleapis.com/luxe_media/wwwroot/${product.productMedia[0].url}`
            const urlParam = `./detail.html?prodId=${product.prodId}`
            const viewTemplate = `
            <div id="product-template" class="col-12 col-sm-6 col-lg-4 mb-3">
                <a href="${urlParam}">
                    <div id="product-img-wrap">
                        <img src="${imgSrc}"  class="img-fluid mb-2" style="width: 100%">
                    </div>
                    <p id="title" class="mb-1">${product.title}</p>
                    <p id="price">$ ${product.price}</p>
                </a>
            </div>`
            productsForRander += viewTemplate
        }
    }
    document.getElementById('product-wrap').innerHTML = productsForRander
}

