export interface FlashCard{
  discountBtn: boolean;
discountPrice:number;
ShoppingCart: boolean;
heartIcon: boolean;
SearchX:boolean;
src:string;
Heading:string;
price:number;
oldPrice?:number;
code?:string;
star?:number;
reviews?:number
}



export const Flash_Card = [
  {
    discountBtn: false,
    discountPrice:40,
    ShoppingCart: false,
    heartIcon: false,
    SearchX:false,
    src:"/c-1.png",
    Heading:"Cantilever chair",
    code: "- Y523201",
    price:"42.00",
  },


  {
    discountBtn: false,
    discountPrice:40,
    ShoppingCart: true,
    heartIcon: true,
    SearchX:true,
    src:"/c-2.png",
    view2:true,
    view:"View Details",
    Heading:"Cantilever chair",
    code: "- Y523201",
    price:"42.00",

  },

  {
    discountBtn: false,
    discountPrice:40,
    ShoppingCart: false,
    heartIcon: false,
    SearchX:false,
    src:"/c-3.png",
    Heading:"Cantilever chair",
    code: "- Y523201",
    price:"42.00",

    

  },

  {
    discountBtn: false,
    discountPrice:40,
    ShoppingCart: false,
    heartIcon: false,
    SearchX:false,
    src:"/c-4.png",
    Heading:"Cantilever chair",
    code: "- Y523201",
    price:"42.00",
    
  },

]