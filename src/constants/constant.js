import Item1 from "../images/item1.jpg";
import Item2 from "../images/item2.jpg";
import Item3 from "../images/item3.jpg";
import Item4 from "../images/item4.jpg";
import Item5 from "../images/item5.jpg";
import Item6 from "../images/item6.jpg";
import Item7 from "../images/item6.jpg";
import Item8 from "../images/item6.jpg";
import Item9 from "../images/item4.jpg";
import Item10 from "../images/item6.jpg";
import Item11 from "../images/item6.jpg";
import Item12 from "../images/item1.jpg";

export const ACCESS_TOKEN_NAME = 'login_access_token';

export const initState = {
    items: [
      {
        id: 1,
        title: "Winter body",
        type: "shoes",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 110,
        img: Item1,
        images:[
            {
                url: Item1
            },
            {
                url:Item2
            }, 
            {
                url:Item3
            },
            {
                url:Item4
            }
        ]
      },
      {
        id: 2,
        title: "Adidas",
        type: "shoes",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 80,
        img: Item2,
        images:[
          {
              url: Item2
          },
          {
              url:Item1
          }, 
          {
              url:Item3
          },
          {
              url:Item4
          }
      ]
      },
      {
        id: 3,
        title: "Vans",
        type: "shoes",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 120,
        img: Item3,
        images:[
          {
              url: Item3
          },
          {
              url:Item2
          }, 
          {
              url:Item1
          },
          {
              url:Item4
          }
      ]
      },
      {
        id: 4,
        title: "White",
        type: "shoes",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 260,
        img: Item4,
        images:[
          {
              url: Item4
          },
          {
              url:Item2
          }, 
          {
              url:Item3
          },
          {
              url:Item1
          }
      ]
      },
      {
        id: 5,
        title: "Cropped-sho",
        type: "shoes",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 160,
        img: Item5,
        images:[
          {
              url: Item5
          },
          {
              url:Item2
          }, 
          {
              url:Item3
          },
          {
              url:Item4
          }
          
      ]
      },
      {
        id: 6,
        title: "Jeans",
        type: "clothes",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 90,
        img: Item6,
        images:[],
      },
      {
        id: 7,
        title: "Shirt",
        type: "clothes",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 90,
        img: Item7,
        images:[],
      },
      {
        id: 8,
        title: "Tshirt",
        type: "clothes",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 90,
        img: Item8,
        images:[],
      },
      {
        id: 9,
        title: "Sweaters",
        type: "clothes",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 90,
        img: Item9,
        images:[],
      },
      {
        id: 10,
        title: "phone",
        type: "electronics",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 90,
        img: Item10,
        images:[],
      },
      {
        id: 11,
        title: "headphone",
        type: "electronics",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 90,
        img: Item11,
        images:[],
      },
      {
        id: 12,
        title: "iphone",
        type: "electronics",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 90,
        img: Item12,
        images:[],
      },
      {
        id: 13,
        title: "camera",
        type: "electronics",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 90,
        img: Item10,
        images:[],
      },
      {
        id: 14,
        title: "charger",
        type: "electronics",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 90,
        img: Item11,
        images:[],
      },
      {
        id: 15,
        title: "tablet",
        type: "electronics",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 90,
        img: Item12,
        images:[],
      },
    ],
    addedItems: [],
    cartItemCount: 0,
    total: 0,
  };