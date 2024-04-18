const { PrismaClient } = require('@prisma/client');

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    sizes: string[];
    made: string;
    pictures: string[];
    categories: { name: string }[];
    collections: { name: string }[];
}

interface Category {
    _id: string;
    name: string;
}

interface Collection {
    _id: string;
    name: string;
}

interface Picture {
    _id: string;
    productName: string[];
    url: string;
}

const products: Product[] = require('../app/data/products.json');
const categories: Category[] = require('../app/data/categories.json');
const collections: Collection[] = require('../app/data/collections.json');
const pictures: Picture[] = require('../app/data/pictures.json');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

module.exports = {
  prisma,
};

async function main() {
  const filteredProducts = products.map(product => {
    const productCategories = product.categories.map(category => {
      const foundCategory = categories.find(cat => cat.name === category.name);
      return foundCategory ? foundCategory._id : category.name;
    });

    const productCollections = product.collections.map(collection => {
        const foundCollection = collections.find(col => col.name === collection.name);
        return foundCollection ? foundCollection._id : collection.name;
    });

    const productPictures = pictures.filter(picture => picture.productName.includes(product.name)).map(picture => picture._id);

    return {
      ...product,
      categoryIDs: productCategories,
      collectionIDs: productCollections,
      pictureIDs: productPictures,
    };
  });

  fs.writeFileSync(
    path.join(__dirname, '../app/cleanedData/filtered-products.json'),
    JSON.stringify(filteredProducts, null, 2)
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

