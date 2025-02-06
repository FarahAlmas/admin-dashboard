// import { createClient } from '@sanity/client'
// import axios from 'axios'
// import dotenv from 'dotenv'
// import { fileURLToPath } from 'url'
// import path from 'path'

// // Load environment variables from .env.local
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// dotenv.config({ path: path.resolve(__dirname, '../.env.local') })
// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
//   apiVersion: '2021-08-31'
// })
// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`)
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
//     const buffer = Buffer.from(response.data)
//     const asset = await client.assets.upload('image', buffer, {
//       filename: imageUrl.split('/').pop()
//     })
//     console.log(`Image uploaded successfully: ${asset._id}`)
//     return asset._id
//   } catch (error) {
//     console.error('Failed to upload image:', imageUrl, error)
//     return null
//   }
// }

// async function importData() {
//   try {
//     console.log('Fetching products from API...');
//     const response = await axios.get('https://next-ecommerce-template-4.vercel.app/api/product');
//     const productsData = response.data;

//     // Check if the response contains the "products" array
//     if (!productsData.products || !Array.isArray(productsData.products)) {
//       throw new Error('Invalid data format: "products" array is missing.');
//     }

//     const products = productsData.products;
//     console.log(`Fetched ${products.length} products`);

//     for (const product of products) {
//       console.log(`Processing product: ${product.name}`);
      
//       // Upload the image to Sanity and get the reference ID
//       let imageRef = null;
//       if (product.imagePath) {
//         imageRef = await uploadImageToSanity(product.imagePath);
//       }

//       // Create a product object for Sanity
//       const sanityProduct = {
//         _type: 'item',
//         id: product.id,
//         name: product.name,
//         description: product.description,
//         price: parseFloat(product.price), // Convert price to a number
//         discountPercentage: product.discountPercentage || 0, // Default to 0 if missing
//         isFeaturedProduct: product.isFeaturedProduct || false, // Default to false if missing
//         stockLevel: product.stockLevel || 0, // Default to 0 if missing
//         category: product.category || 'Uncategorized', // Default category
//         image: imageRef ? {
//           _type: 'image',
//           asset: {
//             _type: 'reference',
//             _ref: imageRef,
//           },
//         } : undefined,
//       };

//       console.log('Uploading product to Sanity:', sanityProduct.name);
//       const result = await client.create(sanityProduct);
//       console.log(`Product uploaded successfully: ${result._id}`);
//     }

//     console.log('Data import completed successfully!');
//   } catch (error) {
//     console.error('Error importing data:', error.message);
//   }
// }

// importData()