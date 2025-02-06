

 const featuredProductsSchema = {
  title: 'Featured Products',
  name: 'featuredProducts',
  type: 'object',
  fields: [
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [
        {
          type:'object',
          fields: [
        {title:'Feature Card Image',name:'featureCardImg',type:'image'},
        {title:'Feature Card Heading',name:'featureCardHeading',type:'string'},
        {title:'Price',name:'price',type:'number'},
        {title:'Discount Price',name:'discountprice',type:'number'},
        {title:'Discount button',name:'discountBtn',type:'boolean'},
        {title:'Shopping Cart',name:'shoppingCart',type:'boolean'},
        {title:'Heart Icon',name:'heartIcon',type:'boolean'},
        {title:'SearchX',name:'searchX',type:'boolean'},
        {title:'View2',name:'view2',type:'boolean'},
        {title:'View',name:'view',type:'string'},
        {title:'Code',name:'code',type:'string'},
          ]
        }
      ]
    }
  ]
    

}
export default featuredProductsSchema