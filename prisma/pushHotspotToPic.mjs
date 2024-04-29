import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function seed() {
    // iterate over every prisma.hotspot objects
    // if the pictureId matches the pictureId of the prisma.picture object
    // then push the hotspot object to the prisma.picture object
    const hotspots = await prisma.hotspot.findMany()

    for (const hotspot of hotspots) {
        const picture = await prisma.picture.findUnique({
            where: {
                id: hotspot.pictureId
            }
        })

        if (!picture) {
            throw new Error(`Picture with id ${hotspot.pictureId} not found`)
        }

        await prisma.picture.update({
            where: { id: picture.id },
            data: { hotspotIDs: { push: hotspot.id } },
        })
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

