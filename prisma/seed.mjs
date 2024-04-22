import { PrismaClient } from '@prisma/client'
import products from '../app/cleanedData/filtered-products.json' assert {type: 'json'}

const prisma = new PrismaClient()

async function seed() {
    for (const product of products) {
        await prisma.product.create({
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
                sizes: { set: product.sizes },
                made: product.made,
                pictureIDs: { set: product.pictureIDs },
                categoryIDs: { set: product.categoryIDs },
                collectionIDs: { set: product.collectionIDs },
            }
        });
    }
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })