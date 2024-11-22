import { initialData } from './seed';
import prisma from '../lib/prisma';

//genera string aleatorio para el slug
function generateRandomString(length = 6) {
  return Math.random().toString(36).substring(2, 2 + length);
}

// Función para dividir el array de productos en lotes de tamaño 'batchSize'
function chunkArray<T>(array: T[], batchSize: number): T[][] {
  const chunks = [];
  for (let i = 0; i < array.length; i += batchSize) {
    chunks.push(array.slice(i, i + batchSize));
  }
  return chunks;
}

async function main() {

  // 1. Borrar registros previos
  // await Promise.all( [
  await prisma.user.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  // ]);
  
  const { categories, products, users } = initialData;


  //  Categorias
  // {
  //   name: 'Shirt'
  // }


  await prisma.user.createMany({
    data: users
  })
  const categoriesData = categories.map( (name) => ({ name }));
  
  await prisma.category.createMany({
    data: categoriesData
  });

  
  const categoriesDB = await prisma.category.findMany();
  
  const categoriesMap = categoriesDB.reduce( (map, category) => {
    map[ category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); //<string=shirt, string=categoryID>
  
    

  
  // Productos
const productsChunks = chunkArray(products, 100);
for (const chunk of productsChunks){
  const productPromises = chunk.map(async (product)=>{
    const { type, images,slug, ...rest } = product;
    const uniqueSlug = `${slug}_${generateRandomString()}`;
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
        slug:uniqueSlug
      }
    });
    const imagesData = images.map( image => ({
      url: image,
      productId: dbProduct.id
    }));
  
    await prisma.productImage.createMany({
      data: imagesData
    });
  })

  await Promise.all(productPromises);

  await new Promise((resolve)=> setTimeout(resolve,1000));
} 

  // products.forEach( async(product) => {
  //   const { type, images,slug, ...rest } = product;
  //   const uniqueSlug = `${slug}_${generateRandomString()}`;
  //   const dbProduct = await prisma.product.create({
  //     data: {
  //       ...rest,
  //       categoryId: categoriesMap[type],
  //       slug:uniqueSlug
  //     }
  //   })
  //   // Images
  //   const imagesData = images.map( image => ({
  //     url: image,
  //     productId: dbProduct.id
  //   }));

  //   await prisma.productImage.createMany({
  //     data: imagesData
  //   });

  // });

  console.log( 'Seed ejecutado correctamente' );
}









( () => {

  if ( process.env.NODE_ENV === 'production' ) return;


  main();
} )();