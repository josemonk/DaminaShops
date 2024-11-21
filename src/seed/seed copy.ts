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
  gender: 'women' | 'women' | 'kid' | 'unisex';
}

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'  ;
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

interface SeedData {
  categories: string[];
  products: SeedProduct[];
}





export const initialData: SeedData = {

  categories: [
    'Shirts', 'Pants', 'Hoodies', 'Shoes'
  ],
  //https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ufurxaiirge14rcpqi8v.jpg
  products: [
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ufurxaiirge14rcpqi8v.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qucahvb5pohpxb2e1kt2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/y1exxgkihyn0nvejhjlc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zpge4bwajpnlu3sjewve.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/k7jrtbmpjd4ltetait4o.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/oymt77yeq9y0caremfd4.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/sdjnacsw8lqfdstkxakv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/i0wm1ma1aihgxnllp5xe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/p1nf5a2c2266vsivlwix.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cxr8r6h7pbtvutfstd2k.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lepexb4en37o0kbbp2hv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/nuq5lw8npxn5b74q6eyo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mhdbvdhjcfd5iq1lkfjg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/oyefm5graztvy3ruxsju.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/phyjcppmtqouqqzbtals.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/oskd3vhqkxyvaxkmblt2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/tg4wlhjluoh1v8h1e23u.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/rne78fasnm6eizl91bii.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/heumjlrkzqjqtukh6df9.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/g4mgpeplnihf1p3pirh6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dt4rirscftbkmers3ec9.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hqzxkpuupuvabbnqaiux.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jr3pkqoqdw1yfovlq8ew.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Aqui empezo las 200",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/nj4ce97a2yuqdaoosjlu.jpg'
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/trc1v8qflzu4zunccvle.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/n7crdvmgal5njni6kyzt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/xoytj7ethjxjb1qxht94.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/nirki9imyxffidetjocl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/uyojtf0ehgmw1zbl67lp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/gufwxirs1tfex3tetgmb',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/tf4eham7ichtptzorrou',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zm5uqr9e7xp87ehrlxto.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lbayaqfxb15itbahvyux.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/pxoyswkjhpx7h0m9tyd9.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fvjn3fjydybsbhgu0tus.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zsdv32avvjwhqnnqq8zw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/m7ksdv27fn8aoz1plaul.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lrsiaohb0bpmk7ajkfim.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/nvzwoiblma6ercukwh0p.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ngemusvxa4tn50kp9bhc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fpmzmvodtwoxtufgsg7t.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/uweagzmqi3dg81btavly.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wdj47qkwxs2xheaox0hy.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/v1wwies6wynpl1bcbh6e.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/tbsp4xgbs4jngakagj7t.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/yk4qujvdjl0jiqemilj3.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/xxydt88si5svwmodot9w.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wsbmnd3w3lgs0nhmaxvk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/yq9clj4shxjaax7hvcde.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ecjwmzn2mhmzbvhp6lte.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wfjmlvjjsky5zpcanjt8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jjkuy4zj1zwpayzmmtrl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/g3fx4jdsecdfz2j5myug.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/a61ppihojptqn5kv4oyc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/esc74aju1yqsaxee37gs.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lg9tgha1nnktr4n2gdj0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mjrv1xyc5kwfyc0dhfgk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/id5tm1d4zfhwi2mndnjt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/v433nizidck8oujje94r.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/tscmovxvieeiynwxmnmw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/drcgqab6zlw82f8kbltt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wminlc3nvsngvytqtzvi.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wuxvhu5eslxdoihetdt0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jmlntpbttihishozbcka.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/efytyrpsirazyrmtt3kx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/y0nwpgku4mtmt2axhvdw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mmych5m1hedkgcgyyea3.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/becwsvrto6essiq8iguo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/n54bbbkercj7wslae1hc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hijvg9b0yzfpoawloed9.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zrnawue0tzwh81cjxwkd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mdpuv8nkhb8kgl5jzvej.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hm6r6rcl057xlzntgf25.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ijlrmvybtggbpadwk5qq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qa99ocibbsguwel29wzm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zvtn9dottubbm61yvqsp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/csaxmdyn3wzci0bstlpm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ewpvgunuzxrunys9b6vi.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/gzzo7y6znnmwzgh32rlw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/sxfqht3xqgz5g62uodcv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dszbj9hozxq4ue4cup8d.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hnolhhpmpkupda84qsjb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mqtkwyjaywdnbfz4g2k2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ogcy4ywtmiribyi87nm7.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/rrok07bmhglilsbeuse4.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/xaymtbayvekmv0omosuw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wa5um9ixvwlelvckkudu.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cchz6hpvauwdfrvinbjh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dqvbtlouvzf3iwjnysdf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/petrzgrf5mdxqpbrbrbx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/tgemirecf2y6o4h21mfa.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/pbwnf4osjww3cfbyqoof.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lyu7ahomawxb4tmshgtg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/xwtmokxwiw8gtchzbuii.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/q60yypzrqcsvn9xoxr5y.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mvxsgiukuvwwxv36nihz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/z1rjfkuuyybfpv9kmgny.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/n3ockp7kbidzpzlmvx3c.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zfaqhlshpp7sb817myc5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/smsvgtiw1mksxore7lc1.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },  
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ytw0xunu3kyzgbblcpzi.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/w26yv7kijlqyhrrdpacm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/l4ki9stuyolvftprmvkk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/t9tiidcsxopr4bhe7hac.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ha8z9bloseahiwilgzmq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/rdtjpcyiwwpovf9meplz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/a9ap0ojcxcpzmqlv83aa.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/l7u7wkbz47j3v2rej69j.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/egi4bvodzaxrtxfxwajc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jpqf6zp8krbyhsvum3rm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/xzdlp2zqfwsdogdj8e7h.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/teetacjhwfxqjdolbxrw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/titvjdst5yl79afp6wo8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/a9zxcqczo7ufkg7obiwn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/eo6mdy40er56c2bfhdes.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ochquozgoc4245ib29oe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cmpxdw9mvtswm1m0d4qx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamiann/rcuitntc5u9feqhg4pdq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ugpkd5hmxucryampr3a8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/oy31b57dqefarlyto5mh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cx63ffchonrvpwtbijbt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jvwbdttlzhojanwvumzf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/g91jres3sroa8likjabr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zl3f7h2xqjpvl2odd9pw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/uunp6iznggtfultqexgm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fes8mwanuk0kytbpl9yj.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/x3pnn0xwygcwhqrt3gjl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/stn9xbayldgonqgbvqno.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/sd8xgm1nyidjb1fh4bnf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qeimo2torpcacm9vydlg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zk3onkfznzumlpexpefe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wnvrdfdik7qfjm0ermov.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cqdsqey5cemdjlo2e4ks.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/prykat4hdzwx7k8b6ca3.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/solpeuubgzczr1ikei49.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/nsjsyuxpirdkcl0bsow9.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/k3qbkw7l7p9fuzjz9ont.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zqwnzq4u2lxup7bbsefa.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/d6zbd0nxonyikawszpb2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/xdc0numrswjniva7sjex.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dqiyld26uugdspxcask5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hjdoa4kkdnzhdtd6fw5o.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: " the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ptrfjnc7ocf0xphaehz9.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/q7rnrbqjhdawavdexyjz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/tutuuz4vlt6otqq1nopi.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/djohinvjsytgzdddxkcv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/igkcum83rrgb7am2zn5k.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/shdzzj2mzcejqat2hprn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/o9assyxvxcjjoc7fha1u.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dk0jktixq9bkx7hmeogi.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/nqogyfmrarg0sm19ye6g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qwekvitr7pzmdqcjpq5s.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/bwwyalbttrq93v5abaui.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/gpsbiivutpdznz2llg5g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lckljipwuyw1djrgd4xn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/p89mqhn8tkmjdgvsyrzh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/sgepquccqcnvtindhh4i.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/xde4zyr4cao3s5ysgwd2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/itgkstj8idafwo2477ow.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wcqgi1tbutkglvklz59j.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ej5zbe3rqhixzk2nlqcq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/gh7edtk0dtlotbrajjx5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/h1dmyvumfb1tzxks18nn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/rjhhgvjrr6iykahjglhj.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qatvfic8r7cukxrmymbd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/h4aoe8jw0qk4bmvqn8wd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mpdz8iozbwfzirfrcgqw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fl6xduzmusmemzshp2st.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/uwgdcnmj9rfcjf1mgxnx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lzqjb5muz3kditabmvz3.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/yeh7vpcpsmz7zclcrjtg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/kewpuz4ufo60oa0zts9a.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/erpmrkavjn6z3ebdam6u.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/g6qoz7pgujqeyizc8ynj.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/q5cxr3ahlveqylpnjlel.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wqr7cfpcfmmmdc1ifh3c.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/gn1bqsnuts0pjwy89pdu.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/evddwa40bm7rpm8wbvzl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jcmeeltliiog7enet87v.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/b7owx86ijqym0plcy0v1.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/gbx5jlisnzkmrz38me4b.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fbcnfqt7fydko4ossrya.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/tsljgw5urcigh1obsiuq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/xg9mfledks9wlfaswjiw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cazowqx9yyazettx1yi0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/okevhsvhavpjdmq4e4qp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/slugbmaizvmtig0srn3p.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/chcfjhasaretoex1fwmi.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ib1mifdjwwlludqx2ska.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cituwwrxmfcb52vqegp0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ujdystbiahlglqrzbhib.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/btzcz6fnxgeigbjqnzan.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/eoy31ufgjhdvdkpndfma.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/smahzxfgyrfxqjfxquvi.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/crdvcg463l51l0vhubf0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/vnubkyab7sawbc7lhrg2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ucrp5wa1o7fwyog8mr5n.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/owczq77soq53v7eaul4b.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qytnclrpjx1qnc1h7ztl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dxl5rxm0i34uio9hvzqw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },     {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/pvqchiaprbepl6mjfotl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mvn8kvhgqzm0rjeemz40.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/bm07uw4b5xmu0a31x7fc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wbdfqsdoz2cblnhyfcr3.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/t5kxte2i7imlo4ewfran.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/oba9bcmwssbfhtloqchh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/uvtpcbhxs4o9kcp4d6qo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/asta85bfoj6rv6ysknsb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/yevg9zjdcgq0zav0njxw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/agnkhst3j6wwu80ffqta.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/vaybm6g4sc4b0tr4gbjx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/gxa7ppkapj9pshjtqile.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zsnj01yycuhmu14rhmhu.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cwlhizwfp9y9xvudey8b.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/vsxdp1w2q37gg5mvmf6t.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/g9f721ellc1cjawh2ykt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/w42zjmfnmsokmaom9yzd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dilmxpvmqigvdljz54tu.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qri3s2nbdsnjl0ei3vou.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/eqgopkm2ffsaxmuh3pob.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/gp5lgwtlnigfxqgbyh2d.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ok0rsjqmchrqwf0bjtnm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/opblg2dyili9dp4qqsxh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/s9cram0oeqnkekvfc6a7.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ukrgwsh1fxfpujvwxd0m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/o6aydvcewemfgifu0hxv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hdlwkb8aohlxqwul2pej.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/vvg3kbswuodkwycumpnr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ojcdxm7aqxl7ciej4j1q.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/s2uo8gmbs25nyyy2vx8r.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/oonix2cyfq6hmwmm5e12.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/nbd8g7rwspebgtho6rro.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cnulmzjctirilwzx2yg2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/w9xj3yusizhn1zrwqcgq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/plm40rg09eldq4zgsxko.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/iewiscpmuhkptxssfmp8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jzxokazdc8mrwwgpnskd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/txrk1fncys36u8ud2vhd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/kz46vccenbwhh9kfextz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jqmv6pkggrf5smol0gne.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ou0xslnwar6dnrers8kl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/d04xagiz6clvd5flbvcz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/uafbfi94sebenowhkmod.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hw2mdi0nm9lgpyz4srna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/oe9n5cds9xynf4ylcrji.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/xvcn5qzjruv6erqwtarp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/sdvwumbut5sltlvu0xat.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/sfinxkrmmchn3br2omnh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/udccnhz641fadrbqsvth.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wpde6gbgtnb5bwx0dbtl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/thbxp3mid3bqs5nm2ge0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/sfkz4e8bsbw1sgdchydi.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/oqaonvlgt6ajx2zkzouw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/bdulit7cb95gdakhxamm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/uihj4lfujoym7whsndcb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/sxelgdwyeuxxtsinpsvt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/pse2ybrpe2zoialktwpn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/vghkondwrdmfbznzq7b0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qk9lwhkpqmdttjqetkrv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/q2v3edd2bc6rfm2ehcus.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/r8cvdbxh635sfzotnaqv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/pmuknb42yc98uhd5kkbp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/enekpxu5xsyzv9t7rir6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ldz9yvy53inp0msdqgff.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/udjhwdwrqzcbogdcyibs.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/l1fagriuqnxhtexpznai.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/e5yw2z0y3eje9qg4o8ov.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/uucaa39gaogtrwpgdoee.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mibeajnnf6btmjvykiop.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qrxul0mmtvcbpjuwpnwu.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hrfqryzo2ruxxqlqwam0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/xtr3dcjjnu9xs70znadz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/raxicza39mod0mq7yqpf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/kex8iuj38bc98vwi7cgx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dl0jkf2p8yhphmrdi9vx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zyyl55jx7voxsnmng9qj.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/i9uihzsffkzyshom3yp5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qju8caswbrfy6pkrgf02.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/h7kcogal0elbycrhbung.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lxbszepblfnnym2rbiz9.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hwwd5xkkq8q5ewpjpnqz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/h8lxsk7rvfsxlbnl6mvp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/symdmakbkabqgifjflnu.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/j3iw7wzmdibtzeax4tkg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/a2gjrc5mp3pusclllu2j.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/p14y9xlz9mf5vk5hschv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/iimtrkjx2cvez9ssebvv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qaoxdvaza5g3n0pcyxnx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fnqitlkpcssg735odzdw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/thiksxz3sjyo4n6lvazn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/vzipgt3orl8a6ufqlptl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wbqugeibeqgdrojq8jme.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lld9wckopjqc4g5bndpy.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ffy2pag5idpoxm9j42gr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ewzzjmousbz8doovbur4.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/gwtzohs0padstzmi9rvy.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/vdv6oe7e4vz3lmev6nkn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/a3ocwpajcfyadnrv18ds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/pmw8jvqcjznbdglzbroc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/bp9d5o5aqlzpnayyu6mq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },     {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/v1h6h4xbzdtdkuoki5mr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dfyp1wt8gdnogpv4k9w9.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/oudffoh8epwosdubmjd7.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/xzumjweychzkbbkcqndv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/l7kshdmqgmdo7smze5qe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/s6n1gzhmj8sjivm339qt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/bivq033o06w8trrba9yd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/uculyrzqa8fisre02rjs.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/kghaq3dyrv7ssuxatibx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wwuf9cu2ybh98rlwtxqw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/if2tqug2cwzds2nzvpbw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fawbugiobegaxtwdc4ek.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/v9vi0gyq8u4ud5pynr41.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dqqwb9phegd7u9pojsdb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/vt74uxn3nwnyfqbd7ehs.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ge5qqmeoiug7w5dkq7ir.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/eucvikuqokz5leydrvf3.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/gzjyncj61qxbohgwqrfy.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/bm5izkkaynfqbecbelec.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/h8neyqatz9mortvm9zqm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/f62lowq65osgcgxecrqj.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dwdoswmjls6v6eti0wxp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/a4wzdppsfqc45hxwio7n.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/eeay26uhdxffwmovpi5m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ngyrskvl5xnpuhbsgp50.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/oi8rlldsjuqpiaokuent.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/sd93wgzpriypxynynf8p.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/y3gr15xmubtuglvxz5ff.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lsywxzg8nrz0o1yba0j3.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/rimqsnxdnqq8vgdag8fd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/haov2wkb57rsfdxv4mow.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/bmffp5irjp0wvokhah3b.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wgg0msobkybxf08th9sp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/kjrc3zodbuklf2qsxize.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/pn2kyxjvnbqpt40guigs.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/kzbhfsbtilhaxxtcwvk3.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mo6aykaxfljefn0hbxjh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/eeahwrlsiy4xna7ii4ya.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/y2qrjw9st5hpdeh73whm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/j8uid9sjepxk0sfiuuit.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/q1mgyyhpi52hec1mka9l.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/kjgtrwf4tvbjwhu42upw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/pdhpgd4q5vtd3vmfplud.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cb8mz8vngeta43pizcxv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qkjhzdrpa7al95dfydch.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/vwtozsigijn1o6pirgqe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/moqkm5k67o3av8fwmimg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lsofa4yqrxldzmb6le1h.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/bjdp32eercemmoyaibl0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ywxc4qm5ypshm7auqkdt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cxixiqpg6t4cjyijkixb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ikcqplouexlimppmeefs.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/m5ekxkl97hdce8njxeys.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mkm8foro5hvvwxm5nfh8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zqukvftqddzqwvkrf6k1.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ufsr6bewyyhmsdyf75l1.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/njtf0rpforrnztmy4ygc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/txss9petswdacgnsnyf5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mmaoyfwmqifpwr3wvjsk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/oj2hbjaznhy40bxpbxas.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/yx75ztuuphxlmqe4wbao.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/bdjkgtfgcvuwrehzvxly.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ofjpfvuru5itc2tcvxms.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/nwflkfnkfqplfkeirll9.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fxmnaoeielsjbxotpyxy.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/bikxqndbovk0pz9bheh8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/tmtwuxbvk0zxfoboltqv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/yyjtsgw57ye0fop474hs.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jacd0u19ctmuqovttmah.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/yf34oqeymqfkls0ognzt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wyutyxrzjnri1z94nyod.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hr1fckdcsi9d2s5zc8xf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/a9nggtvjnfbhr8xyhi9f.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/sixkdesvityxgzxk5cst.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/duuwwexceadznskpte7m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/f7ci5dcmbaxgrx2zy5yi.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dwc24jbe8yfvhtl0vwwl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lorrqxgoda5aic3uwtng.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wvqq3o1uo2xogild4acn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jw4rlpnlq48qjosg8f8d.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/iu46wueuatxu2xfmei3z.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hi2w3sm2jhjzpu8kqxlk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/chrvdrjur82e2mp5kiv6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ntlbou3wsti9ctm4mt9s.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/c1dpmmdzcvuxfpsakzhq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/bgav1spqbpmz4ajtopgx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/omdbgou0wmemz6egich6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/szy09fqzrjjdjv9xjgca.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lc2kmynmi1kb6xj8hy01.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/yvawfqk0oyhwhfsj3hw0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/tadhrrespnfwsigqnk7p.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/woamzk8fdmstsnwfxvth.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/yy3hwvgrbeir5n3kiuu9.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/e4dhd0me46s2uszsgar9.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/j8jgmshtsvqkthpxfb8b.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/a8ixsusqh7xjyhxzhrzn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/emt1mpkrthpyzalfvnp0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/b9xbhcicoae9xudv3j4a.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ogockbk5o2vu42rbgrjo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/rylmpefwcukb017epw64.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },     {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ifqxddaz5pah1sm7brvb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/sfpykp79c8pn9kndplck.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/iutqdwylnqplqkoswio2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/d6uy1x4x354gqvippnzy.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/c0bjsxxeyy8ti7zdddrf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/levc5eztyfvw69xmb2tx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/meqx58vpanjsbbqfgxv8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/gcosa58yzmwgomnuieoa.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/nqwtc8dpxrd6t57znzwp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cecoop2pjoiqegtyrdyr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/rf6wrdlx75us6fkpbnpl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wfz2kqea373tbjzqexpd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qvgzhek4gt336i7w6hom.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/gyyts8yuerdt78ulpvi7.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/kijdmjlsnebfdr1lfkri.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/b10am0ocbotudk2i9gxm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qfywkjher9fxebt4ck6o.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/g3yrsna6re7iosgnxju8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/idy27uolfgjrhkdpg1ir.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/orhjg2ntr82dkz797sok.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/s4wevo2xque3kexidnik.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/e0y718ypwdznnelyu8hw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ttdnua2zuppzo6k3ll4t.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fwpfjoc9ugc6orohv8sz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/p4rxmbdvtpdhny7mwhyx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cqjpvnxj2drguafjbjt9.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dytsb1e1bjm5lkvtouch.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/txtu2fnlhbxopg6pcd2s.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qy6wx4h4vypn5jxjhs0z.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/z8ijthhndpykslidr6dz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zfh3ewuyjeapgegfsycd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/bhzrkhttedldtp7ro834.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/xgdyy6fykf4sx0v2azjl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qbnib6e7p3upzqlygxgg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ndgeobmlirgvmvw0hruz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fdoxwqr6d7aruoobmnym.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/pj1iuktodjvwyn5dgrpq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wzoj2aw0w2yyvn5qu0gj.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jk1l4cwmdmdxms0ej6li.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hsekqkn4qx0cs0llf91v.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fehnuc5h0pfw2kt6thda.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ne7p7bvkmccomglhzxke.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/parvfuphidzzzfx4aatp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/piusjueugm5zmvfbyebv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ndrgqgjzusppz2zm97ph.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/i0dlnorw6tveiuvzftyr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/yw7gepv5vt7m5dkcm91f.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/sxlcksqtlqdf1hllobl8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/d2sbqfzboegdy82a1dzc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/kykmtuv08cmjnucrzh0u.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zul1yqflgwrxz69bag6x.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/xpokpc2iqyjsdj86espx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dns3w5enlhnsk1qbl67n.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fpmxpzpbrxxoju6eptav.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/icczpdl8zoiz2ef57wf9.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mpqicvhhx7araazzijxq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/phzmp5vaku3ljuxvk76a.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/j1lxbjkvja6nujuzepvl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/k134b4yqnvwk1kycddvi.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/whqwbd8l8lywypxgkkxk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zwhjagcodb1mvljdzeru.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wj8vrydbuavuizmifkzj.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/kiiabngpppm6m1yi4yk8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/patxjtrm4nuqut7v7dwx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mokw1ujd0nigsiypikww.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/bhgfd54bfdrm6ughrd1o.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/u2sxovyk0njo9g8ulrft.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/soumowqxlzcsdtnhp2zw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/a8q5vvuheh4ehglejoch.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/nhd3l02gmbqgvdc5eabd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wqumtaja3mxkeikbb3zl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jxdssvhymhfkfvlxoxzj.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/moizzqn2ahmdit9h1kew.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/vl1chcqqgg1tbre8l4sz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/uyo1kdzqtadowkladj6e.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dg6in7jho5oenzrwerqz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/k6xopuymjx068jdtrpls.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mbrtmkdkawyziyab8rch.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/pie13xczq9rk4qzv464w.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/avhpnwl1pdolhqswvyzb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/sjd1jjhqdzwveqolf0ui.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ceodspqewhn1fwqmehlv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dlgcwejhqeeyzoxwbw3u.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hdqmjtdftj0zpfza4snt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/c2spplrkagoqiwqg27ji.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lu9iolxglqkjp37atal5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/tw5smxkvadirjysuqkun.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/avc47zjftmnjbj5lkkym.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fursyuqrjik9dochtnr1.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/o9aq1ovqmthujdfpd4fb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/borwqgx3sjkyp6vahe4l.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/iymfo6snkkkwk80eylrc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ctswfapkvmbcu4onphvd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lijha6m1vbgrzdelonvk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ieelp3iq2onerfvorf06.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dtpimdqd3jymzlzb7sb2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/w481ikn54lau4pbokg6y.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/romz25uv7ekmkyjkk1z4.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/peld5isjwmxdzamkgglu.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/y4uzj2hun8x28zevxguv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },     {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ir7ilnrwpeptsk9k3fvk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },
    {
      description: "quede en esta  the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/sa2fds1pllsftvueuqyn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/it6yy9iahgibs2yqoorj.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/o8tugseagf4cof2g0lkt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cnmkguxfwprcrfctg1ne.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ainvfo2ebdw1s4japfgx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/nimigvoit7puc3cghiac.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/maf0kzhyrkbdyeg27vef.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/eyntjy4anaydrm0pip8x.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/gpxtmc9rd9k1rl6xb671.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dugth5seny698rgxutow.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dmq4kwitqd2kmfzxiyyw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/uap04xighiu544nje2mn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lkccdsj20zgg6vgsag9u.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ogjvxjdetzxfjuwyj8s6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hr8tkgmqug92mi3mxaog.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/rkuojze7qy0pmqxg4irb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wtjxgtie8lnhubkezl62.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/xgvyerbxkjmxyqfzg8gs.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/yo9opkvgdz6izymzvodv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/huxhxeducsceqnwmkswj.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/s40blhcfyexrbzaaicq2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ttxrq2dyde2abmvmdbbe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mgivfqumjsf3roa5znem.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/nycjo7xwrbwusw8ff2rv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qrgup0rxfaiutholshi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ubqrqwqxqlsa53sjp0ur.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ssryw1adzinp9a6xwpne.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dogrqv5draw7ble1gzik.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/h4z3yvbcv6pf7o022hlp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/mvlhvjm98xitbzbmp7wv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/pz46scqqkmfizhzwiywb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/c93sjd3o3orzup0btsi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/uk4chq6kjuieqjcs7esq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/il2gxppyud8dg5kbkfuw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/s1gbycgztk9unehxfg8m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/yevyiyvw5nnos2z96pb0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/rrnaadwbektb1geyx1g6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lvdpuvelyxuc3a9wvhei.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/e7ms5eyxqyhypfc5xii0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/qp6jp7hkv2mzzymdtak7.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jzf8gfgkaf3mvwmygnxx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/vzb1mzjaayvrg6gy5p7n.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fjiy0jm4yszryj2dhqvh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jvdj5zftaiogn4y99dwf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fqnkpf44ptln4n5bvbqt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/uogl6iasqnflanikjn3k.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ylp7xjawqgmxo3d62erl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/phtxehfuimioxcinhpcd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/uciw3jt58pk0fl1yegay.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jka2clfmvg1huunjjcks.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/vefamyjzm7nanxdj33cd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/zud7hbinw9hmanlfxtb2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fsgqt0cninabkc1vnxdc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/gzt3xfbbdywvgbijndtk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/t1m7dwr7ja6qzrpnl4fv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/uctiu4fkmmlj6kvvbgdl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hmqndopcnfuj3vojaivt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/e0d6v7y4ticqzdbvhy46.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/hgcllyviid48p3umv9dw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/lhgu9awkqzys69gotdpd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/yhiwbzuvs6hmtnxo0b08.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cghqju3avposc6ottjcr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ouaxufxniy0ur9vvcvfo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/aictm36xvwur8yu6wr1g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/vvmrbolcrdm2hvl2jsa6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ioi4fhlm7lavwafajn2g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wkoid96bcvofo8bzzgjm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/igdpy4gphhnb4ujqgbna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/nxu5gcvmfpb9ajvulspn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/g83hv3gpelhwbmhtmfti.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ppkea8xeuwplwb0lsaqe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/efzrp7uabal71eqaw0vm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/nu9w6hjxrwnacl7f16we.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fbgmf87mzawsjqvwtrqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/fysd8er0fnchznzeisoz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/knvrga9rqetqn0rjj05d.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/gm6yhunfboefkrhhk6nm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/aklb5wyzzrtzloier7ds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ilbg9ouqrtvjwrm49heh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/e6vkjcmczjkkoyudo1bf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jznv2ov70my6hx4vpvyg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ccc7hyrgted3u1rhedds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/wzghctuvktgazn6d3hnd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },  {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/ztbojqqzalxrllajwfjk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jce0znmxq5rpyxeihokf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/cpdqa0rr84cx8rliocfp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/l6xq18syor4cuvewhfd5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/dnmhz8jqjgzdubmhrgss.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/jzzac8eirszfhhnl3uws.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/awnzouwwv9dpy3bavrvz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/xzudac8csdyasj9rhrsm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/s9kyj4bqiwjxwc2g6ycn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/sfibldkpe9s6mg5godth.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/tzex3weqkgahtwheli6m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1732057293/TennisMujerDamian/m8jeaxdfvkhgxipbja3o.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'women'
    }, 
    // aqui empieza lo de mujeres  , aqui lo de nenas
]
};