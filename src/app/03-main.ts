import { ProductHttpService } from "./services/product-http.service"
;(async () => {
  const productHttpService = new ProductHttpService()

  console.log("---".repeat(10))
  const products = await productHttpService.getAll()
  console.log("Cantidad de Productos", products.length)

  console.log("---".repeat(10))
  console.log("update")
  const productId = products[0].id
  const updatedProduct = await productHttpService.update(productId, {
    description: "Baila morena",
  })
  console.log("---".repeat(10))
  console.log("findOne")
  const foundProduct = await productHttpService.findOne(productId)
  console.log(foundProduct)
})()
