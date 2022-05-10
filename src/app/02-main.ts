import { ProductMemoryService } from "./services/product-memory.service"
const productMemoryService = new ProductMemoryService()

productMemoryService.create({
  title: "P1",
  price: 100,
  description: "Producto 1",
  categoryId: 5,
  images: [],
})

const products = productMemoryService.getAll()
const productId = products[0].id
productMemoryService.update(productId, { title: "Producto 01" })

console.log(productMemoryService.findOne(productId))
