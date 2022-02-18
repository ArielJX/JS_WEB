//decleared product 
console.log(getProduct)//check what it is meaning
//url = window  如果只是等于网页，那个得到的就是一个网页的整体信息，会在console里面显示。

const prodId = parseInt(getUrlParam('prodId')) //to charify the product detail, from line 10 - line 20
const currentItem = getProduct()
randerData()

//get the url after search
function getUrlParam(paramName) {
  const url = window.location.search.substring(1)
  const urlParam = new URLSearchParams(url)
  return urlParam.get(paramName)
}

//get product detail by id
function getProduct() {
  let target = {}
  for (let item of rawdata) {
    if (item.prodId === prodId) {
      return item
    }
  }
  return target
}

//rander product data
function randerData() {
  const imgSrc = `https://storage.googleapis.com/luxe_media/wwwroot/${currentItem.productMedia[0].url}`
  const CurrentItemTemplate = `
    <div id="product-detail-template" class="row mx-auto">
      <div id="product-currentImg-wrap" class="col-12 col-sm-6 px-4 mb-5">
        <img src="${imgSrc}" class="img-fluid" >
      </div>
      <div class="col-12 col-sm-6 px-4>
        <h3 id="title">${currentItem.title}</h3>
        <p id="price" class="mb-4"><mark>$ ${currentItem.price}</mark></p>
        <p id="description"> 
          <span><strong>Description: </strong></span><br> 
          ${currentItem.description}
        </p>
      </div>
    </div>
  `

  document.getElementById('product-detail-wrap').innerHTML = CurrentItemTemplate
}


/*paramData(rawdata)
function paramData(data) {
  let paramForRander = ''
  if (urlParam == URLSearchParams) {
    const viewTemplate = `
            <div id="product-detail-template" class="col-4">
                <div id="product-detailImg-wrap">
                    <img src="${imgSrc}" class="img-fluid" style="width: 100% max-height: 300px">
                </div>
            </div>
            <div class="col-8">
                <p id="title" class="mb-3">${product.title}</p>
                <p id="price" class="mb-3">$ ${product.price}</p>
                <p id="description"> ${product.description}</p>
            </div>

           `
    paramForRander = viewTemplate

  }
  document.getElementById('product-detail-wrap').innerHTML = paramForRander*/

