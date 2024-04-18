import { PrismaClient } from '@prisma/client'
import objects from '../app/data/pictures.json' assert {type: 'json'}

const prisma = new PrismaClient()

async function seed() {
    for (const object of objects) {
        const { productName, url } = object;
        await prisma.picture.create({
            data: {
              url: url,
              productName: productName
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