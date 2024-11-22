import bcryptjs from 'bcryptjs';

interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: 'men' | 'women' | 'kid' | 'unisex';
}

interface SeeUser{
  email:string;
  password:string;
  name:string;
  role:'admin'| 'user'
}

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'  ;
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

interface SeedData {
  users:SeeUser[];
  categories: string[];
  products: SeedProduct[];
}

export const initialData: SeedData = {
  users: [
    {
      email: "jamoncada173@gmail.com",
      password: bcryptjs.hashSync('123456'),
      name: "mono",
      role: "admin",
    },
    {
      email: "julianquiroz@gmail.com",
      password:bcryptjs.hashSync('cabenconcito123456'),
      name: "el cabe",
      role: "user",
    },
  ],

  categories: ["Shirts", "Pants", "Hoodies", "Shoes"],
  products: [
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/z88rnqwcxlryi47qdkcq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/ob8bmbuw1wn3iil5ks4j.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/wwlqenvrv7zzfffvrbte.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/yorlzofo6ship5uxmffb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/bg2fdnc2kfqidmesvpip.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/zibrvjehoqiqqnwwrs2y.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/jvmuyytre5u1hml8apdb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/w6pliipyuimv66jvrofd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/xg3d8zzwz2mle7w1i3ea.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/rkjmg3hiql8lrxt2aswc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/e3zzu6h4scqcogw72fzq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/jr07hcdbkbodmrbuqcst.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/fewuisfacfgzdoqbtcna.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/j0brvk9ydpvw6yyqikqh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/ixs1xqi3n8qocy0qhxpk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/dapcfabmu4ahpkpctrx4.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/axjl9yurjfixqcaoh68c.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/feko4twxagvyfo9fwyq2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/t2b9gysezu0h99ixcd5m.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/uw204r5cajezwx86eawr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/o1w4we8zd0wgltdj6qbv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dbiirfbiishc4ka7kofd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description: "",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618259/TennisDamian/lbwjwphvnujatsauokyz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618259/TennisDamian/c3emo8jd3kswibpenckd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618259/TennisDamian/nbcv7hqed6wqalqdptrb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618259/TennisDamian/c4grkkbyi5oqdfsrexro.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618259/TennisDamian/jradrwttitr3rcg7v1bb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/pighzsn4qevxihel10gy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/vcef5l5dbfcoiplbsla1",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/p9jj3d8nxc6xxeosp8vs",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/yc5k8de83xkr1emzmldh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/emcw6xg2s4tt5khsnhyh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/u9w4c6szh1dqxmzykgxr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/jg6lpqkuueus1sbbcepi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/k7s9javviiuiajema4as.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/je8d4rbtgofytrmnmaao.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/uiwcaxufkarxn43kjivf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/eig0qim8bwoffuuc9fhq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/cuwustdp09jjlfobuliy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/s8lqsajwo3pgzzxhvpnd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/p48nupufotg5sohml4zj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/urvmn0bflxmfsyayj5tn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/o9rkansptfyzwvxi1tcd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/mzqh5dftfm38zrukq4sk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/pr4p1uyjm23cgjtwxh3v.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/k1dxl2nyo0hztwyqgm2c.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/egkt3gfvcctowb0abw3b.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fa8qchzrllclytglpc6r.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/i4k1ewcovjkos15hlwuo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/eb37voizm3uromzty7ex.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/nwpgg0mnm2crtzbqwpm1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/pstod6kjiijwm9ppiirb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/lv3nhewv8d4em3zwngu8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/qfevhnnjwrdgpbvupzyb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/mkxom22oxgmee4bokauo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/pccjwxdhah6pcxeg3yzo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/lpk4aqcxvydk0tnobgrj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/wxlynnsntjdchjsgmh1x.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/shyvcpuqdqjlb1ixvm2a.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/b3shsdpywrbbxnatvibw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/rwawjvivvdwqiuquzadb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/emjbfwxu75cq9hvzfzpd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/aycxzqjgvghkqoec65iz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/fcejmdydcmlkhk4y9nm8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/e5jxqrfzmvasqg6mwzwx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/jpz7nv20lsko5cctyxhw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/awricah4nvqcp99funbc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/j7cykldy8qmyeobk1zzu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ohxccxmmbmts83p6v7r3.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/s0zjjkosjqmvg46mtvkv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/q1lx3fdvo6b8kyjy3g3k.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/twcnxuk72ajjghokjry2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/w4aolnt2qynguxa5osx2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/ct73ltuduysdpzldpmrk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/vawxoq7rfxxmgfggyyd4.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/c4wetw8km9szohnyli9h.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/wkprif2xl03tgfr9v9us.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/zhezccnl1vxzllo9ary9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/jkrz8lvnlbxaexyagt9h.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/t10cgd6vw6kpqg0shver.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/sxhbnc1wpdppc4nu9uur.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/nngck7zevcbfddnmmhwf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/bu9y32njvzuwc2y44fti.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/brqtltzz8subrjl7ubb4.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/exzjd5c7bgdjyn4wqohu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/tlpbojow8ouihb5xzjyb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/fkgxyfa4uqrlqevavwvd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ptwibk34mrjx30aj5k8y.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/fk1iqfqbfbohqxs5rc0x.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/y3eidwusymk5nsywmcjt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/grtc8jb5vuxkx2e2vuzz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/y3xx57saojzwjkhv8yia.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/cb1lqtzk8kgjqdvpeua1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/mz8aer2zf83fpocimqjk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/n4fharsgic3fpwhd7yec.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/riclgzcgemqs0nnkfwyl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/w2t22l09y0vsjccehigv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/bumeplw6or7pm33q5yor.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/qxb19hvyyw5gb0zed1xb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/odop1uf5fpd2ptgpekoz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/pggkoizsyaqre7ndkotp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/ia2arnvueotl1akdqow7.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/kskbzqxuyp1mczahj5d3.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/t0gunj2cfkzhhvdcjxeb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/ziwkodzqxamcaggqt3d3.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/qlvwu25bctjd6t9rvtha.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/vdcouazh9kezb7fhlxmp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/jmdausyjeuqgx1fmb7ej.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/osuyev1ycppngiqpdftf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/dkarwiymqx4ytqiyppma.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/fkgerp9ipb6dksvd88gp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/efqc08fau4kj9xeqg1f1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/zzk356iucrptoqdtpelw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/fiifxegusrdqonwyedub.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619642/TennisDamian/nmjhnztghyx7ywteq3yy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619599/TennisDamian/mp50ssin7e3rl4zvxhxi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619586/TennisDamian/gqtw45yuloc2xwcr1d93.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619571/TennisDamian/aziz2nhbxviapyiymmnz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619557/TennisDamian/d0rwibp86zeho4ju21au.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/yqr4mzv5ehgfs8ezfz98.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/sgzxcnvkufabxvq8qhwv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/kvepn7lapqdrhbfrtdp2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618259/TennisDamian/cd2ykfj3r8pssubmid7s.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618259/TennisDamian/dkbwy5mpeyqhma1c9h2a.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/miclungsrgmifrhq9c2b.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/d9kpbmigy50nihh4zvkr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/b3zi1fzgne4co6o5fgwt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/k4eca9xxktwvy86ztdco.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/gj2swcjia8shrh4z9j6z.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/qoyjyr4odf8e9e530esk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/k0dsfoqqrxd9zzk72aay.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/fjmfzloh4xma38wiqcvd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/xk7kv0eupgmfhdkv2akx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/njdleuffmgyz26p6rhle.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/daswvip4fkmltkexywp8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/rjd0xtwtcoaoolzp8mag.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/ehmvq4822yi1ysmov9gl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/dzbfgothopt1uffdd6vo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/xdc0numrswjniva7sjex.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/dqiyld26uugdspxcask5.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/hjdoa4kkdnzhdtd6fw5o.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        " the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/ptrfjnc7ocf0xphaehz9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/q7rnrbqjhdawavdexyjz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/tutuuz4vlt6otqq1nopi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/djohinvjsytgzdddxkcv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/igkcum83rrgb7am2zn5k.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/shdzzj2mzcejqat2hprn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/o9assyxvxcjjoc7fha1u.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/dk0jktixq9bkx7hmeogi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/nqogyfmrarg0sm19ye6g.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/qwekvitr7pzmdqcjpq5s.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/bwwyalbttrq93v5abaui.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/gpsbiivutpdznz2llg5g.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/lckljipwuyw1djrgd4xn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/p89mqhn8tkmjdgvsyrzh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/sgepquccqcnvtindhh4i.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/xde4zyr4cao3s5ysgwd2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/itgkstj8idafwo2477ow.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/wcqgi1tbutkglvklz59j.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/ej5zbe3rqhixzk2nlqcq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/gh7edtk0dtlotbrajjx5.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/h1dmyvumfb1tzxks18nn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/rjhhgvjrr6iykahjglhj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/qatvfic8r7cukxrmymbd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/h4aoe8jw0qk4bmvqn8wd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/mpdz8iozbwfzirfrcgqw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/fl6xduzmusmemzshp2st.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/uwgdcnmj9rfcjf1mgxnx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/lzqjb5muz3kditabmvz3.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/yeh7vpcpsmz7zclcrjtg.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/kewpuz4ufo60oa0zts9a.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/erpmrkavjn6z3ebdam6u.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/g6qoz7pgujqeyizc8ynj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/q5cxr3ahlveqylpnjlel.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/wqr7cfpcfmmmdc1ifh3c.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/gn1bqsnuts0pjwy89pdu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/evddwa40bm7rpm8wbvzl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/jcmeeltliiog7enet87v.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/b7owx86ijqym0plcy0v1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/gbx5jlisnzkmrz38me4b.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fbcnfqt7fydko4ossrya.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/tsljgw5urcigh1obsiuq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/xg9mfledks9wlfaswjiw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/cazowqx9yyazettx1yi0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/okevhsvhavpjdmq4e4qp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/slugbmaizvmtig0srn3p.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/chcfjhasaretoex1fwmi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ib1mifdjwwlludqx2ska.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/cituwwrxmfcb52vqegp0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/ujdystbiahlglqrzbhib.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/btzcz6fnxgeigbjqnzan.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/eoy31ufgjhdvdkpndfma.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/smahzxfgyrfxqjfxquvi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/crdvcg463l51l0vhubf0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/vnubkyab7sawbc7lhrg2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/ucrp5wa1o7fwyog8mr5n.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/owczq77soq53v7eaul4b.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/qytnclrpjx1qnc1h7ztl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/dxl5rxm0i34uio9hvzqw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/pvqchiaprbepl6mjfotl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/mvn8kvhgqzm0rjeemz40.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/bm07uw4b5xmu0a31x7fc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/wbdfqsdoz2cblnhyfcr3.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/t5kxte2i7imlo4ewfran.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/oba9bcmwssbfhtloqchh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/uvtpcbhxs4o9kcp4d6qo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/asta85bfoj6rv6ysknsb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/yevg9zjdcgq0zav0njxw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/agnkhst3j6wwu80ffqta.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/vaybm6g4sc4b0tr4gbjx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/gxa7ppkapj9pshjtqile.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/zsnj01yycuhmu14rhmhu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/cwlhizwfp9y9xvudey8b.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/vsxdp1w2q37gg5mvmf6t.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/g9f721ellc1cjawh2ykt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/w42zjmfnmsokmaom9yzd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/dilmxpvmqigvdljz54tu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/qri3s2nbdsnjl0ei3vou.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/eqgopkm2ffsaxmuh3pob.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/gp5lgwtlnigfxqgbyh2d.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/ok0rsjqmchrqwf0bjtnm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/opblg2dyili9dp4qqsxh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/s9cram0oeqnkekvfc6a7.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/ukrgwsh1fxfpujvwxd0m.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/o6aydvcewemfgifu0hxv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/hdlwkb8aohlxqwul2pej.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/vvg3kbswuodkwycumpnr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ojcdxm7aqxl7ciej4j1q.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/s2uo8gmbs25nyyy2vx8r.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/oonix2cyfq6hmwmm5e12.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/nbd8g7rwspebgtho6rro.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/cnulmzjctirilwzx2yg2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/w9xj3yusizhn1zrwqcgq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/plm40rg09eldq4zgsxko.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/iewiscpmuhkptxssfmp8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/jzxokazdc8mrwwgpnskd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/txrk1fncys36u8ud2vhd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/kz46vccenbwhh9kfextz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/jqmv6pkggrf5smol0gne.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/ou0xslnwar6dnrers8kl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/d04xagiz6clvd5flbvcz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/uafbfi94sebenowhkmod.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/hw2mdi0nm9lgpyz4srna.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/oe9n5cds9xynf4ylcrji.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/xvcn5qzjruv6erqwtarp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/sdvwumbut5sltlvu0xat.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/sfinxkrmmchn3br2omnh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/udccnhz641fadrbqsvth.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/wpde6gbgtnb5bwx0dbtl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/thbxp3mid3bqs5nm2ge0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/sfkz4e8bsbw1sgdchydi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/oqaonvlgt6ajx2zkzouw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/bdulit7cb95gdakhxamm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/uihj4lfujoym7whsndcb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/sxelgdwyeuxxtsinpsvt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/pse2ybrpe2zoialktwpn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/vghkondwrdmfbznzq7b0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/qk9lwhkpqmdttjqetkrv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/q2v3edd2bc6rfm2ehcus.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/r8cvdbxh635sfzotnaqv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/pmuknb42yc98uhd5kkbp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/enekpxu5xsyzv9t7rir6.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ldz9yvy53inp0msdqgff.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/udjhwdwrqzcbogdcyibs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/l1fagriuqnxhtexpznai.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/e5yw2z0y3eje9qg4o8ov.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/uucaa39gaogtrwpgdoee.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/mibeajnnf6btmjvykiop.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/qrxul0mmtvcbpjuwpnwu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/hrfqryzo2ruxxqlqwam0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/xtr3dcjjnu9xs70znadz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/raxicza39mod0mq7yqpf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/kex8iuj38bc98vwi7cgx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/dl0jkf2p8yhphmrdi9vx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/zyyl55jx7voxsnmng9qj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/i9uihzsffkzyshom3yp5.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/qju8caswbrfy6pkrgf02.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/h7kcogal0elbycrhbung.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/lxbszepblfnnym2rbiz9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/hwwd5xkkq8q5ewpjpnqz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/h8lxsk7rvfsxlbnl6mvp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/symdmakbkabqgifjflnu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/j3iw7wzmdibtzeax4tkg.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/a2gjrc5mp3pusclllu2j.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/p14y9xlz9mf5vk5hschv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/iimtrkjx2cvez9ssebvv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/qaoxdvaza5g3n0pcyxnx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/fnqitlkpcssg735odzdw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/thiksxz3sjyo4n6lvazn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/vzipgt3orl8a6ufqlptl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/wbqugeibeqgdrojq8jme.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/lld9wckopjqc4g5bndpy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/ffy2pag5idpoxm9j42gr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/ewzzjmousbz8doovbur4.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/gwtzohs0padstzmi9rvy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/vdv6oe7e4vz3lmev6nkn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/a3ocwpajcfyadnrv18ds.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/pmw8jvqcjznbdglzbroc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/bp9d5o5aqlzpnayyu6mq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/v1h6h4xbzdtdkuoki5mr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/dfyp1wt8gdnogpv4k9w9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/oudffoh8epwosdubmjd7.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/xzumjweychzkbbkcqndv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/l7kshdmqgmdo7smze5qe.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/s6n1gzhmj8sjivm339qt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/bivq033o06w8trrba9yd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/uculyrzqa8fisre02rjs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/kghaq3dyrv7ssuxatibx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/wwuf9cu2ybh98rlwtxqw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/if2tqug2cwzds2nzvpbw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/fawbugiobegaxtwdc4ek.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/v9vi0gyq8u4ud5pynr41.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/dqqwb9phegd7u9pojsdb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/vt74uxn3nwnyfqbd7ehs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/ge5qqmeoiug7w5dkq7ir.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/eucvikuqokz5leydrvf3.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/gzjyncj61qxbohgwqrfy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/bm5izkkaynfqbecbelec.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/h8neyqatz9mortvm9zqm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/f62lowq65osgcgxecrqj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/dwdoswmjls6v6eti0wxp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/a4wzdppsfqc45hxwio7n.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/eeay26uhdxffwmovpi5m.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/ngyrskvl5xnpuhbsgp50.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/oi8rlldsjuqpiaokuent.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/sd93wgzpriypxynynf8p.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/y3gr15xmubtuglvxz5ff.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/lsywxzg8nrz0o1yba0j3.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/rimqsnxdnqq8vgdag8fd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/haov2wkb57rsfdxv4mow.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/bmffp5irjp0wvokhah3b.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/wgg0msobkybxf08th9sp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/kjrc3zodbuklf2qsxize.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/pn2kyxjvnbqpt40guigs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/kzbhfsbtilhaxxtcwvk3.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/mo6aykaxfljefn0hbxjh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/eeahwrlsiy4xna7ii4ya.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/y2qrjw9st5hpdeh73whm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/j8uid9sjepxk0sfiuuit.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/q1mgyyhpi52hec1mka9l.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/kjgtrwf4tvbjwhu42upw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/pdhpgd4q5vtd3vmfplud.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/cb8mz8vngeta43pizcxv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/qkjhzdrpa7al95dfydch.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/vwtozsigijn1o6pirgqe.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/moqkm5k67o3av8fwmimg.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/lsofa4yqrxldzmb6le1h.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/bjdp32eercemmoyaibl0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/ywxc4qm5ypshm7auqkdt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/cxixiqpg6t4cjyijkixb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/ikcqplouexlimppmeefs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/m5ekxkl97hdce8njxeys.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/mkm8foro5hvvwxm5nfh8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/zqukvftqddzqwvkrf6k1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/ufsr6bewyyhmsdyf75l1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/njtf0rpforrnztmy4ygc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/txss9petswdacgnsnyf5.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/mmaoyfwmqifpwr3wvjsk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/oj2hbjaznhy40bxpbxas.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/yx75ztuuphxlmqe4wbao.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/bdjkgtfgcvuwrehzvxly.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ofjpfvuru5itc2tcvxms.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/nwflkfnkfqplfkeirll9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/fxmnaoeielsjbxotpyxy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/bikxqndbovk0pz9bheh8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/tmtwuxbvk0zxfoboltqv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/yyjtsgw57ye0fop474hs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/jacd0u19ctmuqovttmah.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/yf34oqeymqfkls0ognzt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/wyutyxrzjnri1z94nyod.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/hr1fckdcsi9d2s5zc8xf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/a9nggtvjnfbhr8xyhi9f.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/sixkdesvityxgzxk5cst.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/duuwwexceadznskpte7m.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/f7ci5dcmbaxgrx2zy5yi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/dwc24jbe8yfvhtl0vwwl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/lorrqxgoda5aic3uwtng.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/wvqq3o1uo2xogild4acn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/jw4rlpnlq48qjosg8f8d.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/iu46wueuatxu2xfmei3z.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/hi2w3sm2jhjzpu8kqxlk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/chrvdrjur82e2mp5kiv6.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ntlbou3wsti9ctm4mt9s.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/c1dpmmdzcvuxfpsakzhq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/bgav1spqbpmz4ajtopgx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/omdbgou0wmemz6egich6.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/szy09fqzrjjdjv9xjgca.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/lc2kmynmi1kb6xj8hy01.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/yvawfqk0oyhwhfsj3hw0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/tadhrrespnfwsigqnk7p.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/woamzk8fdmstsnwfxvth.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/yy3hwvgrbeir5n3kiuu9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/e4dhd0me46s2uszsgar9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/j8jgmshtsvqkthpxfb8b.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/a8ixsusqh7xjyhxzhrzn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/emt1mpkrthpyzalfvnp0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/b9xbhcicoae9xudv3j4a.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/ogockbk5o2vu42rbgrjo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/rylmpefwcukb017epw64.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/ifqxddaz5pah1sm7brvb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/sfpykp79c8pn9kndplck.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/iutqdwylnqplqkoswio2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/d6uy1x4x354gqvippnzy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/c0bjsxxeyy8ti7zdddrf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/levc5eztyfvw69xmb2tx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/meqx58vpanjsbbqfgxv8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/gcosa58yzmwgomnuieoa.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/nqwtc8dpxrd6t57znzwp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/cecoop2pjoiqegtyrdyr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/rf6wrdlx75us6fkpbnpl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/wfz2kqea373tbjzqexpd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/qvgzhek4gt336i7w6hom.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/gyyts8yuerdt78ulpvi7.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/kijdmjlsnebfdr1lfkri.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/b10am0ocbotudk2i9gxm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/qfywkjher9fxebt4ck6o.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/g3yrsna6re7iosgnxju8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/idy27uolfgjrhkdpg1ir.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/orhjg2ntr82dkz797sok.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/s4wevo2xque3kexidnik.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/e0y718ypwdznnelyu8hw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ttdnua2zuppzo6k3ll4t.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/fwpfjoc9ugc6orohv8sz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/p4rxmbdvtpdhny7mwhyx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/cqjpvnxj2drguafjbjt9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dytsb1e1bjm5lkvtouch.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/txtu2fnlhbxopg6pcd2s.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/qy6wx4h4vypn5jxjhs0z.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/z8ijthhndpykslidr6dz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/zfh3ewuyjeapgegfsycd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/bhzrkhttedldtp7ro834.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/xgdyy6fykf4sx0v2azjl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/qbnib6e7p3upzqlygxgg.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/ndgeobmlirgvmvw0hruz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/fdoxwqr6d7aruoobmnym.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/pj1iuktodjvwyn5dgrpq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/wzoj2aw0w2yyvn5qu0gj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/jk1l4cwmdmdxms0ej6li.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/hsekqkn4qx0cs0llf91v.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fehnuc5h0pfw2kt6thda.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/ne7p7bvkmccomglhzxke.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/parvfuphidzzzfx4aatp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/piusjueugm5zmvfbyebv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/ndrgqgjzusppz2zm97ph.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/i0dlnorw6tveiuvzftyr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/yw7gepv5vt7m5dkcm91f.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/sxlcksqtlqdf1hllobl8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/d2sbqfzboegdy82a1dzc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/kykmtuv08cmjnucrzh0u.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/zul1yqflgwrxz69bag6x.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/xpokpc2iqyjsdj86espx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/dns3w5enlhnsk1qbl67n.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/fpmxpzpbrxxoju6eptav.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/icczpdl8zoiz2ef57wf9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/mpqicvhhx7araazzijxq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/phzmp5vaku3ljuxvk76a.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/j1lxbjkvja6nujuzepvl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/k134b4yqnvwk1kycddvi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/whqwbd8l8lywypxgkkxk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/zwhjagcodb1mvljdzeru.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/wj8vrydbuavuizmifkzj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/kiiabngpppm6m1yi4yk8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/patxjtrm4nuqut7v7dwx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/mokw1ujd0nigsiypikww.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/bhgfd54bfdrm6ughrd1o.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/u2sxovyk0njo9g8ulrft.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/soumowqxlzcsdtnhp2zw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/a8q5vvuheh4ehglejoch.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/nhd3l02gmbqgvdc5eabd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/wqumtaja3mxkeikbb3zl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/jxdssvhymhfkfvlxoxzj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/moizzqn2ahmdit9h1kew.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/vl1chcqqgg1tbre8l4sz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/uyo1kdzqtadowkladj6e.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/dg6in7jho5oenzrwerqz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/k6xopuymjx068jdtrpls.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/mbrtmkdkawyziyab8rch.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/pie13xczq9rk4qzv464w.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/avhpnwl1pdolhqswvyzb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/sjd1jjhqdzwveqolf0ui.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/ceodspqewhn1fwqmehlv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/dlgcwejhqeeyzoxwbw3u.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/hdqmjtdftj0zpfza4snt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/c2spplrkagoqiwqg27ji.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/lu9iolxglqkjp37atal5.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/tw5smxkvadirjysuqkun.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/avc47zjftmnjbj5lkkym.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/fursyuqrjik9dochtnr1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/o9aq1ovqmthujdfpd4fb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/borwqgx3sjkyp6vahe4l.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/iymfo6snkkkwk80eylrc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/ctswfapkvmbcu4onphvd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/lijha6m1vbgrzdelonvk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/ieelp3iq2onerfvorf06.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/dtpimdqd3jymzlzb7sb2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/w481ikn54lau4pbokg6y.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/romz25uv7ekmkyjkk1z4.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/peld5isjwmxdzamkgglu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/y4uzj2hun8x28zevxguv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/ir7ilnrwpeptsk9k3fvk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "quede en esta  the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/sa2fds1pllsftvueuqyn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/it6yy9iahgibs2yqoorj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/o8tugseagf4cof2g0lkt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/cnmkguxfwprcrfctg1ne.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/ainvfo2ebdw1s4japfgx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/nimigvoit7puc3cghiac.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/maf0kzhyrkbdyeg27vef.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/eyntjy4anaydrm0pip8x.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/gpxtmc9rd9k1rl6xb671.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/dugth5seny698rgxutow.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/dmq4kwitqd2kmfzxiyyw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/uap04xighiu544nje2mn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/lkccdsj20zgg6vgsag9u.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/ogjvxjdetzxfjuwyj8s6.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/hr8tkgmqug92mi3mxaog.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/rkuojze7qy0pmqxg4irb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/wtjxgtie8lnhubkezl62.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/xgvyerbxkjmxyqfzg8gs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/yo9opkvgdz6izymzvodv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/huxhxeducsceqnwmkswj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/s40blhcfyexrbzaaicq2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/ttxrq2dyde2abmvmdbbe.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/mgivfqumjsf3roa5znem.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/nycjo7xwrbwusw8ff2rv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/qrgup0rxfaiutholshi8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ubqrqwqxqlsa53sjp0ur.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ssryw1adzinp9a6xwpne.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dogrqv5draw7ble1gzik.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/h4z3yvbcv6pf7o022hlp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/mvlhvjm98xitbzbmp7wv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/pz46scqqkmfizhzwiywb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/c93sjd3o3orzup0btsi8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/uk4chq6kjuieqjcs7esq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/il2gxppyud8dg5kbkfuw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/s1gbycgztk9unehxfg8m.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/yevyiyvw5nnos2z96pb0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/rrnaadwbektb1geyx1g6.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/lvdpuvelyxuc3a9wvhei.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/e7ms5eyxqyhypfc5xii0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/qp6jp7hkv2mzzymdtak7.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jzf8gfgkaf3mvwmygnxx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/vzb1mzjaayvrg6gy5p7n.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fjiy0jm4yszryj2dhqvh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jvdj5zftaiogn4y99dwf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fqnkpf44ptln4n5bvbqt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/uogl6iasqnflanikjn3k.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/ylp7xjawqgmxo3d62erl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/phtxehfuimioxcinhpcd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/uciw3jt58pk0fl1yegay.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/jka2clfmvg1huunjjcks.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/vefamyjzm7nanxdj33cd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/zud7hbinw9hmanlfxtb2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/fsgqt0cninabkc1vnxdc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/gzt3xfbbdywvgbijndtk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/t1m7dwr7ja6qzrpnl4fv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/uctiu4fkmmlj6kvvbgdl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hmqndopcnfuj3vojaivt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/e0d6v7y4ticqzdbvhy46.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hgcllyviid48p3umv9dw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/lhgu9awkqzys69gotdpd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/yhiwbzuvs6hmtnxo0b08.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/cghqju3avposc6ottjcr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ouaxufxniy0ur9vvcvfo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/aictm36xvwur8yu6wr1g.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/vvmrbolcrdm2hvl2jsa6.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ioi4fhlm7lavwafajn2g.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/wkoid96bcvofo8bzzgjm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/igdpy4gphhnb4ujqgbna.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nxu5gcvmfpb9ajvulspn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/g83hv3gpelhwbmhtmfti.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/ppkea8xeuwplwb0lsaqe.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/efzrp7uabal71eqaw0vm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nu9w6hjxrwnacl7f16we.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fbgmf87mzawsjqvwtrqh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fysd8er0fnchznzeisoz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/knvrga9rqetqn0rjj05d.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/gm6yhunfboefkrhhk6nm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/aklb5wyzzrtzloier7ds.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/ilbg9ouqrtvjwrm49heh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/e6vkjcmczjkkoyudo1bf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jznv2ov70my6hx4vpvyg.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ccc7hyrgted3u1rhedds.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/wzghctuvktgazn6d3hnd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ztbojqqzalxrllajwfjk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jce0znmxq5rpyxeihokf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/cpdqa0rr84cx8rliocfp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/l6xq18syor4cuvewhfd5.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/dnmhz8jqjgzdubmhrgss.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/jzzac8eirszfhhnl3uws.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/awnzouwwv9dpy3bavrvz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/xzudac8csdyasj9rhrsm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/s9kyj4bqiwjxwc2g6ycn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/sfibldkpe9s6mg5godth.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/tzex3weqkgahtwheli6m.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/m8jeaxdfvkhgxipbja3o.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    // aqui empieza lo de mujeres  , aqui lo de nenas
    //https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ufurxaiirge14rcpqi8v.jpg
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ufurxaiirge14rcpqi8v.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qucahvb5pohpxb2e1kt2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/y1exxgkihyn0nvejhjlc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zpge4bwajpnlu3sjewve.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/k7jrtbmpjd4ltetait4o.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/oymt77yeq9y0caremfd4.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057294/TennisMujerDamian/sdjnacsw8lqfdstkxakv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057294/TennisMujerDamian/i0wm1ma1aihgxnllp5xe.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057294/TennisMujerDamian/p1nf5a2c2266vsivlwix.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057294/TennisMujerDamian/cxr8r6h7pbtvutfstd2k.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057294/TennisMujerDamian/lepexb4en37o0kbbp2hv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057295/TennisMujerDamian/nuq5lw8npxn5b74q6eyo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/mhdbvdhjcfd5iq1lkfjg.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/oyefm5graztvy3ruxsju.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/phyjcppmtqouqqzbtals.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/oskd3vhqkxyvaxkmblt2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tg4wlhjluoh1v8h1e23u.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/rne78fasnm6eizl91bii.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/heumjlrkzqjqtukh6df9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/g4mgpeplnihf1p3pirh6.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/dt4rirscftbkmers3ec9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hqzxkpuupuvabbnqaiux.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jr3pkqoqdw1yfovlq8ew.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description: "Aqui empezo las 200",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/nj4ce97a2yuqdaoosjlu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/trc1v8qflzu4zunccvle.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/n7crdvmgal5njni6kyzt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xoytj7ethjxjb1qxht94.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/nirki9imyxffidetjocl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/uyojtf0ehgmw1zbl67lp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/gufwxirs1tfex3tetgmb",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tf4eham7ichtptzorrou",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zm5uqr9e7xp87ehrlxto.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lbayaqfxb15itbahvyux.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/pxoyswkjhpx7h0m9tyd9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/fvjn3fjydybsbhgu0tus.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zsdv32avvjwhqnnqq8zw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/m7ksdv27fn8aoz1plaul.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lrsiaohb0bpmk7ajkfim.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/nvzwoiblma6ercukwh0p.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ngemusvxa4tn50kp9bhc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/fpmzmvodtwoxtufgsg7t.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/uweagzmqi3dg81btavly.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wdj47qkwxs2xheaox0hy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/v1wwies6wynpl1bcbh6e.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tbsp4xgbs4jngakagj7t.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/yk4qujvdjl0jiqemilj3.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xxydt88si5svwmodot9w.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wsbmnd3w3lgs0nhmaxvk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/yq9clj4shxjaax7hvcde.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ecjwmzn2mhmzbvhp6lte.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wfjmlvjjsky5zpcanjt8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jjkuy4zj1zwpayzmmtrl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/g3fx4jdsecdfz2j5myug.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/a61ppihojptqn5kv4oyc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/esc74aju1yqsaxee37gs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lg9tgha1nnktr4n2gdj0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/mjrv1xyc5kwfyc0dhfgk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/id5tm1d4zfhwi2mndnjt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/v433nizidck8oujje94r.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tscmovxvieeiynwxmnmw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/drcgqab6zlw82f8kbltt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wminlc3nvsngvytqtzvi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wuxvhu5eslxdoihetdt0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jmlntpbttihishozbcka.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/efytyrpsirazyrmtt3kx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/y0nwpgku4mtmt2axhvdw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/mmych5m1hedkgcgyyea3.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/becwsvrto6essiq8iguo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/n54bbbkercj7wslae1hc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hijvg9b0yzfpoawloed9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zrnawue0tzwh81cjxwkd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/mdpuv8nkhb8kgl5jzvej.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hm6r6rcl057xlzntgf25.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ijlrmvybtggbpadwk5qq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qa99ocibbsguwel29wzm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zvtn9dottubbm61yvqsp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/csaxmdyn3wzci0bstlpm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ewpvgunuzxrunys9b6vi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/gzzo7y6znnmwzgh32rlw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sxfqht3xqgz5g62uodcv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/dszbj9hozxq4ue4cup8d.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hnolhhpmpkupda84qsjb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/mqtkwyjaywdnbfz4g2k2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ogcy4ywtmiribyi87nm7.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/rrok07bmhglilsbeuse4.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xaymtbayvekmv0omosuw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wa5um9ixvwlelvckkudu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/cchz6hpvauwdfrvinbjh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/dqvbtlouvzf3iwjnysdf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/petrzgrf5mdxqpbrbrbx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tgemirecf2y6o4h21mfa.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/pbwnf4osjww3cfbyqoof.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lyu7ahomawxb4tmshgtg.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xwtmokxwiw8gtchzbuii.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/q60yypzrqcsvn9xoxr5y.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/mvxsgiukuvwwxv36nihz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/z1rjfkuuyybfpv9kmgny.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/n3ockp7kbidzpzlmvx3c.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zfaqhlshpp7sb817myc5.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/smsvgtiw1mksxore7lc1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ytw0xunu3kyzgbblcpzi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/w26yv7kijlqyhrrdpacm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/l4ki9stuyolvftprmvkk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/t9tiidcsxopr4bhe7hac.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ha8z9bloseahiwilgzmq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/rdtjpcyiwwpovf9meplz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/a9ap0ojcxcpzmqlv83aa.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/l7u7wkbz47j3v2rej69j.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/egi4bvodzaxrtxfxwajc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jpqf6zp8krbyhsvum3rm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xzdlp2zqfwsdogdj8e7h.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/teetacjhwfxqjdolbxrw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/titvjdst5yl79afp6wo8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/a9zxcqczo7ufkg7obiwn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/eo6mdy40er56c2bfhdes.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ochquozgoc4245ib29oe.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/cmpxdw9mvtswm1m0d4qx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamiann/rcuitntc5u9feqhg4pdq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ugpkd5hmxucryampr3a8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/oy31b57dqefarlyto5mh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/cx63ffchonrvpwtbijbt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jvwbdttlzhojanwvumzf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/g91jres3sroa8likjabr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zl3f7h2xqjpvl2odd9pw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/uunp6iznggtfultqexgm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/fes8mwanuk0kytbpl9yj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/x3pnn0xwygcwhqrt3gjl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/stn9xbayldgonqgbvqno.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sd8xgm1nyidjb1fh4bnf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qeimo2torpcacm9vydlg.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zk3onkfznzumlpexpefe.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wnvrdfdik7qfjm0ermov.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/cqdsqey5cemdjlo2e4ks.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/prykat4hdzwx7k8b6ca3.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/solpeuubgzczr1ikei49.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/nsjsyuxpirdkcl0bsow9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/k3qbkw7l7p9fuzjz9ont.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zqwnzq4u2lxup7bbsefa.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/d6zbd0nxonyikawszpb2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ee2lolcpaotzeqk6ysla.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zxy1dguiogsj53aefmmy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/mqxtmjf3oy6eobsg3hck.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        " the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xlic2d5m81vdzysxzzpz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/r4fj761re0kj4nrregiq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xwipmkl5kaggn5wgy8zy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/flujbmuacxzyc9pe29qu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/k85pwwnyokuahvmcypl5.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/oemiry236oppkd6dyqhq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/e0q59d0exovhxlvjizcw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/j6eegc5sqekrm4k0ij6n.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wls3poy5vx14felhrxjs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/yozmdytstt1ifqtj4zgn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xsnimp26qfwf0vmwrcx3.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/egnxpdrhvwp3fc69nsfl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xvdmrbnloekbbfzvgfht.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/af67ureaaedomagzmbb0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/yyb3eqxrwsc1vhaerqtp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wmqpaixiyd08xj989dn8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tlhdbnoqsdywxisjo64u.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wxasyuzoaf3f7cdtqt79.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jedws5m3ytlkejslmjup.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/a490dh2zntzevk3sq4jj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/fazbfsfxlldwxubizibq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xe4kwjdyoecv0ng2mbv1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/osmxsk9md2ckkukw7ugz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/r5qznaqv2hwwah6f8tg7.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/s7tklaaibe1jqrblhvbs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/by9hrumjh40udia6lyoy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ueogepwbhivbhx65ovic.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/s7edonplsmcisnppz9qo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/yq158qfcbri7fufuyvqe.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ijdf8lgj7p0vtv6sme3c.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qoj70knk4dfuvdfiypag.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/o75mkla8hgpqjmgoaj5b.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/bajvdvyaqlh1dvklhuvm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/iqqc8z6menrd4hrdkpi2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/prw8yznl0zpdltieiwls.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/m6vcyxzpnz1guwurq3qi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/rdhgmm9xvciqbuwotjvz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/drsplwipm9ymhfhnxzoj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/duuknovbus1fbb9hs3wr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sekfd7d77ysm85z1ytuh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jggkt3c9q0bdc4alwpxr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kxanznhjyljifikkzhyr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ytctm7a6reuwrm1qkwc2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/bwaaluwquvls49i38emt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/p1d6hoajkljjcudih7lg.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tltmvvo5jdxd0pcozpg4.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/u79iwfm2hsxtehpjehdw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/upurj6ztq22s5lghbi1e.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wphjkb4sh6nzq7qof7pd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/gpzex4lrjkl7e8hwdoz3.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/c3mgn2gdh3pts2u05o0s.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/iirdbjipcj1zrw8we66e.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/rrtngomm4rlhpnpopeci.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jrl7uy6homgpogw6naix.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/dstyqeww8semnt4rkcjd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/mqd8txvv6z0qx2qftj8m.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qqmy1mugkny93dncrr0m.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/pgrpvhdzp7pjli3gji9z.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/frjd8rraf8ym38zhz49v.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wrmn6ok23x4rrgmlncrv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/cblmkslyelrpbsoylfhq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/nemgk8dzibhher5wuxus.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/siwnc8mh2597llu0woth.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sz5i2frjwhqrgj3ontzr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/p53lzkuuope4wgygmuu5.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tggctbqxjsd72dmzp85x.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lavkkvjdcwtitaf1fl4i.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/onsi0apmxpbcfygr3pgm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/evlwvs5bd42sxvwj4ody.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tbg9jra4ubbvlpptgz7l.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qnlv6zvgzbngniwbfidc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/j63kpmoc2qxhqeqfgsuc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tg4rypriw4mozqlkuwua.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/pyq5zlgdc6ute6ogus09.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wlczwb1eejd132bshwgi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vtqa4ss0yzaysqumrvh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/yrddgbxvxw59bk5hjvxf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/p4jtxnkaiz9kxuejeqpf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/l8iesugzdfqjoddsdcoo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/j5vgyng8yn1vdnwqnnpx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ovfymb5htnh93youdsk6.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/emiylm6wogvwni8xxacj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sqdmjwfnlsjvnsnwghns.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/yytcgezcgpfp6kdf34lb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/fun0m0mmyo8blqvnq2ko.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/youq0bckslhcfyt5nxrs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/bbxko0hnj88ziv7cezne.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/u0amo5gkq7memgojmk4j.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/bc1cayplylz9a7kyjgs4.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lph6zun4bhjjigfaa344.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/t9rpgt7ggityphuj0nmh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vsvk6nl7g0sei0tycdpf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lmuhw5ivvykodfumph2w.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/pliedexuyuwlhhib3tiv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/aokv11jfccobllrsiujw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/dtmzuqszw4jva4clpfvp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qvn0juq5cimzttqhaqpo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qoixigomoalbwqflwrwo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/mrs0dx3auwwzzkfqahvr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zaef3cfu17kankmrqixg.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ps81nrbrptttoydyfomv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ehqpimjvpjwz44hqa57d.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kinddhrmxin9sdcd59xy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ehhp0eh8g7bqhbogzgic.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jkegvqjvdp4kuz3jmfy0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/cbbgxoka8r5qwc8i09jc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/rxw3rx610woxefsj1hja.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/irrv5ajdzxbwxfkdesur.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kpj8zriorigfg2c1zuj2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/fewrz9vdruuqeznwimxy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/pixkbhrmk6s6woinli7f.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qcpqr5iejix8vmqbalas.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/flks5slgw3uuecg2qxga.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/z2wai3gcfxd10z1b3ipb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/dksawzeby3jzygsd6hef.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hodmeqlgtfai0lspq7c2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/aoxjmayvklxz69wr3ig4.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/nunx0jr0ydzvaajtc0y7.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/cntwbmbczgwac1r8zq67.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ctvgzpluwsannatusfqu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/cnuh4r2szwqkrsavhxsk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/nafc3clzdt3zmsnh3nqr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/trpvlwhztwypjsiiz15j.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/susx9zinbwocrx1nvkte.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/btldaphr06qtpoh5qibo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/dlcdpksaodkrwhkxggim.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hcmf2ff7ng9pz8fmspfk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ij0mqu4topdy3ysp17ye.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sbkcci3iwajgz1wmhkjd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/fhlna9kehcgtxd6hu6t9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/orkvemiq0jfpmfwfmrbz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/y2kkv5qxwonxb7dwpfv7.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hzzysjpcd0svz6zr4ehh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tcemtsr5yxaelhdg0wcx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/robpu38hzz8z8xttjpu8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ax5odabiwg6iv1mbyzop.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/n71el7uuenzax738j2rp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kjcsanhta0jbtdgu1nyq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/k3g4o5qhju7vbhemo4vj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/fyudypcyzew7rn8pafda.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/aknmcfdesafrbptmibub.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ahyf1xndjvwrw3jftzm8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qbzzkdfj5zqjg0u4rbuk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/djscrkklwuqmgbyu8oxw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/liv8a2y0bvc2uuyzheuu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/omrzz1o3yirdhyyzvu2g.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/w9dtwnjln0qbv3cprfos.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/am6jfh7hxaqybznzaotc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xr6mms6evsonadzdys4z.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/dk6tqc6wkp4kwxycafrs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/m4zdutovealm6c2ayxuu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lapvvxnqc1dpjvyur0np.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hsee7vjznm6ih0ou1jem.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/masdkwpiickiw22zm0hs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wrsiaze3ik0nziabtvui.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/uob6vszhkpzmtsbbmfw0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ck4iwq9jpvtsgr0dv67q.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kgtlwvec78p6rogqujw1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/nwtxf2yzuz5ya1bubcwk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/u75livqzceezinf4ko2i.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hv6musv7hjm8pw4am1re.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jjbfvg6icwsowvcveara.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qzmpfllkfprohzrtceit.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lnixjyhqrdgkogcfdhry.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/igdntm2t9n0woipkvk7p.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hneghih1s3fuh88oho8f.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/oksv2s3godwnrun56g5o.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ohnzb7rtos28jg4rqxzz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/secngqcmis5xmupeynn9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tocl7jnlcllhxjp7ysgt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/fpzo4tkmpqoortn05drj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/eiubyiv9dxrv3lmtjrnk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ifr1ubpjyiicxrrilkgu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/cdwnu2ew1pqxpuywpuw2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sm0sm0gvjcz5su9ff15z.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kfun1pwei8yginkn9xwe.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hugochluxgbb4fl7dlvf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/iw8wpeqxxlftqlkcmslb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ul2dchuw7wtxtjo7qiiv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jel3hdvytmtdf1hvv2f6.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sdxkoatnz0vouplaptsf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xxghi2qzkxsnfgoajyv8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kkzbm5zpiyjaldmkzjy5.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vid973gtswhsynyisx9r.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/b77oebrqhpdveger1s8r.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/cpy2494y2mwyyuutnhu9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ejackiuv9pbqccourwem.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/dzts4vy7e7cgtpyqokz5.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/natqjqrjxp22w29ujri9.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xdsdrqbifkqbaxdacjf6.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/j96hc1ivf4fkbzoe3cca.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/h8grfs42igxcmpksyiju.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xk7ncronwyftsl8qhqsx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/cvbsizllvy64wt2tzyfp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/g1xyiogrwzeyeaxwaks2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ld35osn4wrlzyfi8evvm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/evq1rgzzkkf1az530kqt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/gtgq6gb6p8rfi4e5jm7m.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zfcrkt6rmoiyj9jx1bt8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ab9stkq7zmv43x0icxd6.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/m6d1oxpan8s8bnvioal0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/s3tu32lblmn9ohre0a8w.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ak8dbfcexxzz6s9z4ixj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/bfdovrsebs9d4rkfjy32.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/v8nz18mez7zc83weiyno.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/b7kr98z0gwavsfjhuh5t.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hhuvnbwvdgtypxwkpcks.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/osdmfe0s5mned7yvvict.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/acqmeig0og5vrseqhtvh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hiv8fq9irtdugl40jy22.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/rhtuvgxbj23fpxs3wrtu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/uoqa5f0hjfrrperdn002.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/h9i1nazywm4cwtawopy0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/rcjyoi2szxjwm6kmvegs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/pidmapi4tzpxxkcge1xh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qnclhyi2nrlgtgmbaplv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jjtbzbnkxymd2qstylsc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/mhgljnalbop4sbrei68w.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ydr8bjh1xgbrjdfncxnw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/pnuickmbonrpuzjtjoto.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qdi0xzp3t9llae5nxoxa.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/pceulyyw5wiklvjusr8u.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hjgf1ydv2snvks5x5b0j.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/swivuoef3ozcbkhnmgue.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sp8p7ynnk3mlntqudnod.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/y2coswpkzvaa9wytwtlf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/u8pcinxrs3ckbzf7u4do.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kvvvtx0g9yes9p5uo2jm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/usvpa7df0wlv2zmzjnzj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/j5paokgucyrogr9w8eiy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vz0ite1lmqx8lqvocdve.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/oi7biesnipoxwfwp197e.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lvoskumdwqvmzcwyrpns.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/obtfprhkrxtoqbzykxnq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/n4p1dqg87jvp3q1g2z4h.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ybffckqebgyuvsptazvt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ham3qnomro5milvybxr5.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/olfx771jvz6sqrts7zs1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/y4qdomw9blpqjubjqenl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/cuitflv3knbz6znj7zxm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vfogh2dz1tghye6ncbqc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lhqbfpt0wtppms7rcamc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ctxudex7mo1hagjtmslv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tsto94auy4h1hw5wrdoo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/bv4q92bql30lkpqto8ag.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jpypo6qkr28ahs2amnle.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/aqlqbmaohrq9bml2n3nw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/rzxtid0dvvodjb0lnrnj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/o4wdo2j7by3qenaybona.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/d2v3iqqbuzoi6gihuq7t.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ht0vjg2kqn8msrudqu60.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/umlotguagp5wqodaqmrb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jdxmonczsxlif0ainp4y.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tmrkxgvmethhkjg4e5mv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sbelwioop7djevjjiy8i.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/p53b53gtl4yuvl6ktcjd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/f2jnoqrswuhoy2ec0jiv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kws22sqmp5oqo3hvcr5x.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ju9c57tu4wygovadydtn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/n6stuihbqv7z589t2hdp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/prkeaxwc87zygfscnbku.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/bbm6phgz9miseqso0wgu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lu0tllds1bntohfvgvfb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/yd58c2dvm0o8g82qst74.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/pllm6zmrra3dvscy71hr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/rlr3rofohdkv8awpxgv2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wojqqhsegtjnqmw2ccml.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/torip9x0sa7wno4xrj4d.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/bavcqftpgfz0yhelgfzu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ssmzyqev6xxthcolvmof.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/izb1swetpg5pxlsdhqcs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xr6ujluurqcpafdijg45.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/aibf6r761ufa67piawi8.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/q5zlomvt6pfajdrk7fkq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xuzhef2lef0esooxjglu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/i1uscbeyiu874wz9dtyx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/szqk9pkonr5eacvo2szr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/dpbuzfjuofrxcsemllyg.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jqosbtbnuu67paghz7nb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/q2kk6lafx8aaf8ct7vzm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/owbfygkrdfrl4z8vamfd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kt0ic0verngsktyjm78t.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lw8cljb2gujd25sf0amf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zicf0zid5fdm2zk66fbw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/e2vjta79uyfaybq4kq5c.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/m3kz9zxf521vzogvjpzu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/flyk6lsnjvez5bl4yhsv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ill5r3ok4hydfcx8jywb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vvxeliubtbizjz53moeh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/p467b05oc1mor1o8ulrm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ikskqgru8vi577jodpnk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xjwrhw4bacwoujipcvar.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/dqrpxwsexoncduofzfpx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ipgntrbh6ahia0iaecqk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ljagfvwxqldmqjuqcqod.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/rjhgznjl5jttpg5gcvkr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/yu7nbnqwih0gagwijkbx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/veufsyb2ebb7jmdekw9w.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lni6tli8y5gukpykuibk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/h1o8oujquclj5jllydm1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/emysacttbfjajdxiz3uy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/e2vo0omjkljsc5l5lvkx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/knswj3i35swbmdtsvr18.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/be6nres6na0upwha3cay.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/gflgszfqi2ciao68poou.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xfwfl96sdn4kisr5rkcy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xtj3mtecnmjm6bdxsmms.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sgvklcf662wx31xpa6mh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vhxfpxvugfxyvjmzjrpa.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/otrfmxqoqf9z4nyvzchg.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/gej0sbbvejdp9pkhcpar.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/rnkp2kmpwd2gj2esbzad.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vuld0vdgnrvw5m2ruayv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vtznzsv48qeuspuy3pyi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ucukepb8caehqrhrzmtg.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jufx9fmpdx3wujn7efxs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/pz4zdu8bxo0kd59hkn1t.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lyrf2exsnhj7zidepixc.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/efiqxthcrvyzt3bsnonu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/nbbiwgw9eqzrlbgl5o2p.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/x6sdrlfx0im8aknu3z7t.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/gyfpaxvny48mx0wlxnn0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qmca2cq9u5q8y7p6hsf2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/si277j6sk5xrhvam0zpk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/twd1yfpplmaklt7jjrm5.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tyjyns78j6bmu1ixsmx0.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/brdyefx1infm0u6zlwyu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/cym3ydhzazp8imjzpvc1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jdiibp64v7luxxg7azvx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sdh93y87imkxbyjzatqx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/q1ywwicjbx7daqxtwid7.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vzbnhrlciedzfcwueiwy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/l0nbrr13pwskcqaliva4.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zdlstsgshwlt0nangknu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/z9xcrqitd0lyxdxst4fm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sknkyjmhlk7v8ouzkiqy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/mpqthkx9jn9g6ukztqwr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vu8k1max9kgrkkwpwiht.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/e9lsjwdhfxapv6zedono.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/mvqraigguvtbxcct4nu4.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/gmeu0jh3fejz5phecjw1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qsdemsz4nnb9eztme0sf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qlshghsqbc36j0kfgxqu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/r6k2wsbsja6yztbxfxjt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vcswwclaffwtbvak7swf.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hd0fgcmhtpfvdshyuraw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ax14hykl3rdzcjugfzfi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/l5cjvvk2ilm3va8pgk0s.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ymvnzxpffofhjbfm7w89.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vzrxhuy4sgk6eyqi0mh4.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/cbcs3epa89ofarq7spxe.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hmvalzsm4cyp9cofzeok.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ubvoqxedwigcibgr9mdq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/shmlnbgvcpn7lpyjnciq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/racnscai6ahwl8msofzb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/w9axhu8nyctm9dsgxwyv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ybsafhbwizdcvnzqwaxt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/mbyakrsohb1vupibteyg.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/e8yhag0fk1lq8pxdry2x.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "quede en esta  the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ylvp00qyyx2dkzhxhas3.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/b2ddpqdz5gvblvwachku.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/po3wmugfi9e7kf8swa3n.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vgkbw12pigvhpcpujlwl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hi6ltp6xs2zh8aouxkr1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/dimq7qahyfngcrzcpg6b.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/gqlr9dgy5w8nau2juwrl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/irrcbbfuxmyqq3kxlzrd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hh26thorzbnhpaurptxs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hogwsqbgbfpxmhj0pqbw.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/o1xwndjollanh3qdmo5p.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sacrzk0ncrbewtjiykdu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/bluciv6oewaphxvd2sqs.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tnppgkyytqcvurmhfryh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tmhuhyhf1pou1tzyyg5s.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kpn0oybdq3nxzczakvld.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vmyum8tlonlqpzaf7tnr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jdqynekxelujofpwsnav.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/i7115oofdjmpecp42vdb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vkjiiywg6uncpyxrtxce.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/yxqgoafw0fvivsmozxpe.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/rcnkevyzdqooz3vhz75j.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/yqcam97v9shyx6pvkyrn.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/thlfa6cdbyyokjnw1u3x.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zmg3grl2jytq7lkjktbv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/fzfcvqxba4ebiz8fbvpe.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/bvh8vakngle68unlrgom.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vsqmrwua4b2svyzzwggm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ncodwhsqw1jf8mzu1amq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/x0nk4k0jghm81nisctxu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/dfbnl4ews1xmhommtiwb.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/g4c4e3meqc5wtmbn6tjp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/qgzzew9mdo5wwp9jrpny.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ri5keg8wtpxziumdfqpr.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/o3icchwap42dz4thnwzt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/gb34cgsy2qdjd7izkcuq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/necejyq46sqg2oxkpbkj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/o8aeydo36fryn2tucd3n.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ggfasygkuiswn1l59uqh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lotl4monjzifvvmqjkdg.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/mj183lymkt9ecseduchq.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tlsqoc1mbzqbarexkgua.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ewcbmxq2tfvn5yuda5th.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/oausblpzfgvzxsaehnwy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/aasvbrntxu8x6hi9a6g4.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kysdp6ezzzziudqfhxwd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tymyxt4seo9vh4rnsdol.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/t0po43jzwljkttwsxk6q.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/x9ctwjr1ddehk4nkyga1.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/yvtu5aae2ruiwzmey3jp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xphuf8wlnpzfbp0jdc7p.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sdu291x8b1jmsjzxpnql.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kdcv8vg1pa0ewjzq508v.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kqovhgh1kmfozcrzeuti.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lqptbqzyrdvf0ydnrrbl.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jux8crn95yv9nlrl0zzi.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/h7xetrfv6fsjdsp6ephh.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/uxopum5wmfbxvzfg8db2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wyjblitobrpqnfeppjdj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/fwufyblzbvrg1jipjl4d.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/fwufyblzbvrg1jipjl4d.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tskaa0w3acpkxthv9z6m.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/x9tuwvhba9m41jdkylyu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lieegrccw4lu3grhfjwo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wotcsuq8n1wawjfxqyhk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tqhvpmcw6ymvxpeofncy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/bppyswevzfav8j5ktj08.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tmcyzoywld6za8r4bo7e.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/afxsq0ehrsytkwsl9j3e.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/euidtlcnxhjkfgcguy6t.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/cb6qgou4enqhks0rzvmk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/uxg35jxhdh1efpe0jmnd.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kfgskn3mxozoas4ldlru.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lrbs1vthopdnxueia0gk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/vhryf2vmzmzqjluj4b48.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/uzxxczpadfjotzt7i1wt.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/iusuw7fgpqab54xjzopy.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/ougnb8gdjgxzqtnloxmu.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/fvfqfddafwxfuxpwgyxp.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/xksulrmhuuhhfmol1amz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zofwre9nf71oq92y4wt2.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/zvshxiergehntgogo9p7.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/uyisk8bqwmfd3cb0ehri.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sftnp104vt4t1xwlyaav.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/tepkzrqqrpznhagbn52g.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/nyvpebsgrkv7pgkg1cid.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/esh781qboeggnw0l4tqj.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/l3tzfhw43vtyszeux6bo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/hpdpjl6c9f6dwsflffvm.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/lo2tph3kmi58ccg8vo0q.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/wprefzt8ibhoqp9ptjcx.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/mn3165khbgwn6rlrjc6b.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/kfy7veolu4jauupl6mwv.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/czexfthi7frl9hofwkxk.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/sqf3gka5tdj2suksxsjo.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057316/TennisMujerDamian/jvobemzmo4iwmqrfuqwz.jpg",
      ],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "women",
    },

    // aqui nenas tennis 2
  ],
};