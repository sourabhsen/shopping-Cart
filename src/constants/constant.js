import Item1 from "../images/item1.jpg";
import Item2 from "../images/item2.jpg";
import Item3 from "../images/item3.jpg";
import Item4 from "../images/item4.jpg";
import Item5 from "../images/item5.jpg";
import Item12 from "../images/item7.jpeg";
const Item8 =
  "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg";
const Item9 =
  "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg";

export const ACCESS_TOKEN_NAME = "login_access_token";

export const initState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      type: "shoes",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
      images: [
        {
          url: Item1,
        },
        {
          url: Item2,
        },
        {
          url: Item3,
        },
        {
          url: Item4,
        },
      ],
    },
    {
      id: 2,
      title: "Adidas",
      type: "shoes",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
      images: [
        {
          url: Item2,
        },
        {
          url: Item1,
        },
        {
          url: Item3,
        },
        {
          url: Item4,
        },
      ],
    },
    {
      id: 3,
      title: "Vans",
      type: "shoes",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3,
      images: [
        {
          url: Item3,
        },
        {
          url: Item2,
        },
        {
          url: Item1,
        },
        {
          url: Item4,
        },
      ],
    },
    {
      id: 4,
      title: "White",
      type: "shoes",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4,
      images: [
        {
          url: Item4,
        },
        {
          url: Item2,
        },
        {
          url: Item3,
        },
        {
          url: Item1,
        },
      ],
    },
    {
      id: 5,
      title: "Cropped-sho",
      type: "shoes",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5,
      images: [
        {
          url: Item5,
        },
        {
          url: Item2,
        },
        {
          url: Item3,
        },
        {
          url: Item4,
        },
      ],
    },
    {
      id: 6,
      title: "Jeans",
      type: "clothes",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item8,
      images: [
        {
          url: Item8,
        },
        {
          url: Item8,
        },
        {
          url: Item8,
        },
        {
          url: Item8,
        },
      ],
    },
    {
      id: 7,
      title: "Shirt",
      type: "clothes",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item8,
      images: [
        {
          url: Item8,
        },
        {
          url: Item8,
        },
        {
          url: Item8,
        },
        {
          url: Item8,
        },
      ],
    },
    {
      id: 8,
      title: "Tshirt",
      type: "clothes",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item8,
      images: [
        {
          url: Item8,
        },
        {
          url: Item8,
        },
        {
          url: Item8,
        },
        {
          url: Item8,
        },
      ],
    },
    {
      id: 9,
      title: "Sweaters",
      type: "clothes",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item9,
      images: [
        {
          url: Item8,
        },
        {
          url: Item8,
        },
        {
          url: Item8,
        },
        {
          url: Item8,
        },
      ],
    },
    {
      id: 10,
      title: "phone",
      type: "electronics",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item12,
      images: [
        {
          url: Item12,
        },
        {
          url: Item12,
        },
        {
          url: Item12,
        },
        {
          url: Item12,
        },
      ],
    },
    {
      id: 11,
      title: "phone",
      type: "electronics",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item12,
      images: [
        {
          url: Item12,
        },
        {
          url: Item12,
        },
        {
          url: Item12,
        },
        {
          url: Item12,
        },
      ],
    },
    {
      id: 12,
      title: "iphone",
      type: "electronics",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item12,
      images: [
        {
          url: Item12,
        },
        {
          url: Item12,
        },
        {
          url: Item12,
        },
        {
          url: Item12,
        },
      ],
    },
    {
      id: 13,
      title: "camera",
      type: "electronics",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item12,
      images: [
        {
          url: Item12,
        },
        {
          url: Item12,
        },
        {
          url: Item12,
        },
        {
          url: Item12,
        },
      ],
    },
    {
      id: 14,
      title: "tablet",
      type: "electronics",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item12,
      images: [
        {
          url: Item12,
        },
        {
          url: Item12,
        },
        {
          url: Item12,
        },
        {
          url: Item12,
        },
      ],
    },
    {
      id: 15,
      title: "tablet",
      type: "electronics",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item12,
      images: [
        {
          url: Item12,
        },
        {
          url: Item12,
        },
        {
          url: Item12,
        },
        {
          url: Item12,
        },
      ],
    },
  ],
  addedItems: [],
  cartItemCount: 0,
  total: 0,
};
