import { Product } from "../types/Product";

const initialProducts: Product[] = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling over-ear headphones with long battery life.",
      price: 150.00,
      creationDate: new Date("2024-01-10"),
      imageUrl: "https://picsum.photos/200/200?random=1", // Random image
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Latest model with high-resolution display and advanced camera.",
      price: 999.99,
      creationDate: new Date("2024-02-15"),
      imageUrl: "https://picsum.photos/200/200?random=2", // Random image
    },
    {
      id: 3,
      name: "Laptop",
      description: "High-performance laptop with 16GB RAM and 512GB SSD.",
      price: 1200.00,
      creationDate: new Date("2024-03-01"),
      imageUrl: "https://picsum.photos/200/200?random=3", // Random image
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      description: "Portable speaker with powerful sound and waterproof design.",
      price: 75.00,
      creationDate: new Date("2024-04-10"),
      imageUrl: "https://picsum.photos/200/200?random=4", // Random image
    },
    {
      id: 5,
      name: "Smartwatch",
      description: "Fitness-focused smartwatch with heart rate monitor and GPS.",
      price: 199.99,
      creationDate: new Date("2024-05-05"),
      imageUrl: "https://picsum.photos/200/200?random=5", // Random image
    },
    {
      id: 6,
      name: "4K Monitor",
      description: "Ultra HD monitor with vibrant colors and slim design.",
      price: 350.00,
      creationDate: new Date("2024-06-18"),
      imageUrl: "https://picsum.photos/200/200?random=6", // Random image
    },
    {
      id: 7,
      name: "Gaming Console",
      description: "Next-gen console with immersive gaming experience.",
      price: 499.99,
      creationDate: new Date("2024-07-12"),
      imageUrl: "https://picsum.photos/200/200?random=7", // Random image
    },
    {
      id: 8,
      name: "Mechanical Keyboard",
      description: "RGB backlit mechanical keyboard with customizable keys.",
      price: 120.00,
      creationDate: new Date("2024-08-22"),
      imageUrl: "https://picsum.photos/200/200?random=8", // Random image
    },
    {
      id: 9,
      name: "Action Camera",
      description: "Durable camera with 4K video and image stabilization.",
      price: 299.99,
      creationDate: new Date("2024-09-03"),
      imageUrl: "https://picsum.photos/200/200?random=9", // Random image
    },
    {
      id: 10,
      name: "Drone",
      description: "Quadcopter drone with HD camera and extended flight time.",
      price: 450.00,
      creationDate: new Date("2024-09-13"),
      imageUrl: "https://picsum.photos/200/200?random=10", // Random image
    },
  ];
  
  export default initialProducts;