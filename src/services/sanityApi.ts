// src\services\sanityApi.ts
"use server"

import { client } from "../sanity/lib/client"


export interface ICard {
  image: string;
 name: string;
 discountPercentage: number;
  _id: string;
  category: string;
  isFeaturedProduct: boolean;
  description: string;
  stockLevel: number;
  price: number;
}

//-----------------------------------------------product Fetch Sanity
export async function sanityFetch(query: string) {
  const res: ICard[] =  await client.fetch(`${query}{
         
    'image': image.asset->url,
          name,
          _id,
          category,
          isFeaturedProduct,
          description,
          stockLevel,
          price,
          discountPercentage
        }`)

  return res;
}

//-----------------------------------------------product-Image-Asset-Id

async function uploadImageToSanity(imageUrl: string) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
    const blob = await response.blob();

    const asset = await client.assets.upload("image", blob);
 
    return asset;
  } catch (error) {
    console.error("Image upload failed:", error);
    throw error;
  }
}



export interface IReturnSanityProduct {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  category: string;
  description: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: 'reference'
    }
  },
stockLevel: number;
  price: number;
 name: string;
 discountPercentage:number 
}


//-----------------------------------------------product Update Sanity
export async function productPostSanity(updatedProduct: ICard) {
  
  const imageAsset = await uploadImageToSanity(updatedProduct.image)
  
  const res = await client
  .patch(updatedProduct._id)
  .set({
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageAsset._id,
      },
    },
    productName: updatedProduct.name,
    price: updatedProduct.price,
    category: updatedProduct.category,
    stockLevel: updatedProduct.stockLevel,
    description: updatedProduct.description,
    discountPercentage: updatedProduct.discountPercentage
  })
  .commit();

  return res
  
}



//-----------------------------------------------product Delete Sanity
export async function productDeleteSanity(updatedProduct: ICard) {
    
  const res = await client.delete(updatedProduct._id);

  return res
  
}



//-----------------------------------------------product Create Sanity
export async function productCreateSanity(updatedProduct: ICard) {
  try {
    const res = await client.create({
      _type: "product",
      productName: updatedProduct.name,
      price: updatedProduct.price,
      category: updatedProduct.category,
      stockLevel: updatedProduct.stockLevel,
      description: updatedProduct.description,
      discountPercentage: updatedProduct.discountPercentage,
      
    });

    console.log("✅ Product created successfully:", res._id);
    return res;
  } catch (error) {
    console.error("😡 Product creation failed:", error);
    throw error;
  }
}





