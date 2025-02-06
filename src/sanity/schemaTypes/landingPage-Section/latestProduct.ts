const latestProductSchema={
  title: "Latest Product",
  name: "latestProduct",
  type: "object",
  fields: [
     {title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [
         { 
          title: ' Latest ProductCard',
          name: 'latestProductCard',
          type: 'object',
          fields: [

          {title: 'Latest Product Image', name: 'latestProductImage', type: 'image'},
          {title: 'Latest Product Name', name: 'latestProductName', type: 'string'},
          {title: 'Latest Product Price', name: 'latestProductPrice', type: 'number'},
          {title: 'Latest Product Original Price', name: 'latestProductOriginalPrice', type: 'number'},
          {title: 'Latest Product tag', name: 'latestProductTag', type: 'boolean', description: 'Sale'},
          ],
      },
      ],
   },
  ],

}
export default latestProductSchema