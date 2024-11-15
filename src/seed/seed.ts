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
  products: [
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/z88rnqwcxlryi47qdkcq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/ob8bmbuw1wn3iil5ks4j.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/wwlqenvrv7zzfffvrbte.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/yorlzofo6ship5uxmffb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/bg2fdnc2kfqidmesvpip.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/zibrvjehoqiqqnwwrs2y.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/jvmuyytre5u1hml8apdb.jpg',
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/jvmuyytre5u1hml8apdb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/w6pliipyuimv66jvrofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/xg3d8zzwz2mle7w1i3ea.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/rkjmg3hiql8lrxt2aswc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/e3zzu6h4scqcogw72fzq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/jr07hcdbkbodmrbuqcst.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/fewuisfacfgzdoqbtcna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/j0brvk9ydpvw6yyqikqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/ixs1xqi3n8qocy0qhxpk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/dapcfabmu4ahpkpctrx4.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/axjl9yurjfixqcaoh68c.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/feko4twxagvyfo9fwyq2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/t2b9gysezu0h99ixcd5m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/uw204r5cajezwx86eawr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/o1w4we8zd0wgltdj6qbv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dbiirfbiishc4ka7kofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/ttxrq2dyde2abmvmdbbe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/mgivfqumjsf3roa5znem.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/nycjo7xwrbwusw8ff2rv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/qrgup0rxfaiutholshi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ubqrqwqxqlsa53sjp0ur.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ssryw1adzinp9a6xwpne.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dogrqv5draw7ble1gzik.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/h4z3yvbcv6pf7o022hlp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/mvlhvjm98xitbzbmp7wv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/pz46scqqkmfizhzwiywb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/c93sjd3o3orzup0btsi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/uk4chq6kjuieqjcs7esq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/il2gxppyud8dg5kbkfuw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/s1gbycgztk9unehxfg8m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/yevyiyvw5nnos2z96pb0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/rrnaadwbektb1geyx1g6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/lvdpuvelyxuc3a9wvhei.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/e7ms5eyxqyhypfc5xii0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/qp6jp7hkv2mzzymdtak7.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jzf8gfgkaf3mvwmygnxx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/vzb1mzjaayvrg6gy5p7n.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fjiy0jm4yszryj2dhqvh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jvdj5zftaiogn4y99dwf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fqnkpf44ptln4n5bvbqt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/uogl6iasqnflanikjn3k.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/ylp7xjawqgmxo3d62erl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/phtxehfuimioxcinhpcd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/uciw3jt58pk0fl1yegay.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/jka2clfmvg1huunjjcks.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/vefamyjzm7nanxdj33cd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/zud7hbinw9hmanlfxtb2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/fsgqt0cninabkc1vnxdc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/gzt3xfbbdywvgbijndtk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/t1m7dwr7ja6qzrpnl4fv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/uctiu4fkmmlj6kvvbgdl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hmqndopcnfuj3vojaivt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/e0d6v7y4ticqzdbvhy46.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hgcllyviid48p3umv9dw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/lhgu9awkqzys69gotdpd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/yhiwbzuvs6hmtnxo0b08.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/cghqju3avposc6ottjcr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ouaxufxniy0ur9vvcvfo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/aictm36xvwur8yu6wr1g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/vvmrbolcrdm2hvl2jsa6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ioi4fhlm7lavwafajn2g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/wkoid96bcvofo8bzzgjm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/igdpy4gphhnb4ujqgbna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nxu5gcvmfpb9ajvulspn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/g83hv3gpelhwbmhtmfti.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/ppkea8xeuwplwb0lsaqe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/efzrp7uabal71eqaw0vm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nu9w6hjxrwnacl7f16we.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fbgmf87mzawsjqvwtrqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fysd8er0fnchznzeisoz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/knvrga9rqetqn0rjj05d.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/gm6yhunfboefkrhhk6nm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/aklb5wyzzrtzloier7ds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/ilbg9ouqrtvjwrm49heh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/e6vkjcmczjkkoyudo1bf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jznv2ov70my6hx4vpvyg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ccc7hyrgted3u1rhedds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/wzghctuvktgazn6d3hnd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ztbojqqzalxrllajwfjk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jce0znmxq5rpyxeihokf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/cpdqa0rr84cx8rliocfp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/l6xq18syor4cuvewhfd5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/dnmhz8jqjgzdubmhrgss.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/jzzac8eirszfhhnl3uws.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/awnzouwwv9dpy3bavrvz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/xzudac8csdyasj9rhrsm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/s9kyj4bqiwjxwc2g6ycn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/sfibldkpe9s6mg5godth.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/tzex3weqkgahtwheli6m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/m8jeaxdfvkhgxipbja3o.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },  
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/g9akzlkh7ogiliy81l1d.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/cxjhrto1q0vb1cashuur.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/ftzyracunnhcwzdx8fdv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/ai8mwa47pfmvbevxrxfp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/kycemxcawerxghbgafpb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/kplro3bmwpls9lz4xwe3.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/zmozzrrenv0minufz2k3.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/zr90hfau4uogye8iadch.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/hprszvduteqxgyzd6g7l.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/nb5dagn5sv0rybse5owo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/lqrel0tprlug9j4yqexj.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/vp0bkk2mcewv6qgoapgs.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/frt7oyrmfbiswxky1u2v.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/l3dppg5lkmmnwrx0io0m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619643/TennisDamian/sjmnr3dprqdbd5xhlej3.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619642/TennisDamian/mmgcdz8b3oiawidyubnr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619599/TennisDamian/zxfqtpxz2bnbw9pwkwex.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619586/TennisDamian/m8fwoca06krvsaa7pvzm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619571/TennisDamian/yzwgutf3uzgkmvgulhzv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619557/TennisDamian/tqmct2uvnu87u568kbvi.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/uw204r5cajezwx86eawr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/o1w4we8zd0wgltdj6qbv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dbiirfbiishc4ka7kofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/ttxrq2dyde2abmvmdbbe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/mgivfqumjsf3roa5znem.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/nycjo7xwrbwusw8ff2rv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/qrgup0rxfaiutholshi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ubqrqwqxqlsa53sjp0ur.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ssryw1adzinp9a6xwpne.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dogrqv5draw7ble1gzik.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/h4z3yvbcv6pf7o022hlp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/mvlhvjm98xitbzbmp7wv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/pz46scqqkmfizhzwiywb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/c93sjd3o3orzup0btsi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/uk4chq6kjuieqjcs7esq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/il2gxppyud8dg5kbkfuw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/s1gbycgztk9unehxfg8m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/yevyiyvw5nnos2z96pb0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/rrnaadwbektb1geyx1g6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/lvdpuvelyxuc3a9wvhei.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/e7ms5eyxqyhypfc5xii0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/qp6jp7hkv2mzzymdtak7.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jzf8gfgkaf3mvwmygnxx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/vzb1mzjaayvrg6gy5p7n.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fjiy0jm4yszryj2dhqvh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jvdj5zftaiogn4y99dwf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fqnkpf44ptln4n5bvbqt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/uogl6iasqnflanikjn3k.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/ylp7xjawqgmxo3d62erl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/phtxehfuimioxcinhpcd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/uciw3jt58pk0fl1yegay.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/jka2clfmvg1huunjjcks.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/vefamyjzm7nanxdj33cd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/zud7hbinw9hmanlfxtb2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/fsgqt0cninabkc1vnxdc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/gzt3xfbbdywvgbijndtk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/t1m7dwr7ja6qzrpnl4fv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/uctiu4fkmmlj6kvvbgdl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hmqndopcnfuj3vojaivt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/e0d6v7y4ticqzdbvhy46.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hgcllyviid48p3umv9dw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/lhgu9awkqzys69gotdpd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/yhiwbzuvs6hmtnxo0b08.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/cghqju3avposc6ottjcr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ouaxufxniy0ur9vvcvfo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/aictm36xvwur8yu6wr1g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/vvmrbolcrdm2hvl2jsa6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ioi4fhlm7lavwafajn2g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/wkoid96bcvofo8bzzgjm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/igdpy4gphhnb4ujqgbna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nxu5gcvmfpb9ajvulspn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/g83hv3gpelhwbmhtmfti.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/ppkea8xeuwplwb0lsaqe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/efzrp7uabal71eqaw0vm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nu9w6hjxrwnacl7f16we.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fbgmf87mzawsjqvwtrqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fysd8er0fnchznzeisoz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/knvrga9rqetqn0rjj05d.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/gm6yhunfboefkrhhk6nm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/aklb5wyzzrtzloier7ds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/ilbg9ouqrtvjwrm49heh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/e6vkjcmczjkkoyudo1bf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jznv2ov70my6hx4vpvyg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ccc7hyrgted3u1rhedds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/wzghctuvktgazn6d3hnd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ztbojqqzalxrllajwfjk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jce0znmxq5rpyxeihokf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/cpdqa0rr84cx8rliocfp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/l6xq18syor4cuvewhfd5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/dnmhz8jqjgzdubmhrgss.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/jzzac8eirszfhhnl3uws.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/awnzouwwv9dpy3bavrvz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/xzudac8csdyasj9rhrsm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/s9kyj4bqiwjxwc2g6ycn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/sfibldkpe9s6mg5godth.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/tzex3weqkgahtwheli6m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/m8jeaxdfvkhgxipbja3o.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },     {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/z88rnqwcxlryi47qdkcq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/ob8bmbuw1wn3iil5ks4j.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/wwlqenvrv7zzfffvrbte.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/yorlzofo6ship5uxmffb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/bg2fdnc2kfqidmesvpip.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/zibrvjehoqiqqnwwrs2y.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/jvmuyytre5u1hml8apdb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/w6pliipyuimv66jvrofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/xg3d8zzwz2mle7w1i3ea.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/rkjmg3hiql8lrxt2aswc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/e3zzu6h4scqcogw72fzq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/jr07hcdbkbodmrbuqcst.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/fewuisfacfgzdoqbtcna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/j0brvk9ydpvw6yyqikqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/ixs1xqi3n8qocy0qhxpk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/dapcfabmu4ahpkpctrx4.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/axjl9yurjfixqcaoh68c.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/feko4twxagvyfo9fwyq2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/t2b9gysezu0h99ixcd5m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/uw204r5cajezwx86eawr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/o1w4we8zd0wgltdj6qbv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dbiirfbiishc4ka7kofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/ttxrq2dyde2abmvmdbbe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/mgivfqumjsf3roa5znem.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/nycjo7xwrbwusw8ff2rv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/qrgup0rxfaiutholshi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ubqrqwqxqlsa53sjp0ur.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ssryw1adzinp9a6xwpne.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dogrqv5draw7ble1gzik.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/h4z3yvbcv6pf7o022hlp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/mvlhvjm98xitbzbmp7wv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/pz46scqqkmfizhzwiywb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/c93sjd3o3orzup0btsi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/uk4chq6kjuieqjcs7esq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/il2gxppyud8dg5kbkfuw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/s1gbycgztk9unehxfg8m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/yevyiyvw5nnos2z96pb0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/rrnaadwbektb1geyx1g6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/lvdpuvelyxuc3a9wvhei.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/e7ms5eyxqyhypfc5xii0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/qp6jp7hkv2mzzymdtak7.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jzf8gfgkaf3mvwmygnxx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/vzb1mzjaayvrg6gy5p7n.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fjiy0jm4yszryj2dhqvh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jvdj5zftaiogn4y99dwf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fqnkpf44ptln4n5bvbqt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/uogl6iasqnflanikjn3k.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/ylp7xjawqgmxo3d62erl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/phtxehfuimioxcinhpcd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/uciw3jt58pk0fl1yegay.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/jka2clfmvg1huunjjcks.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/vefamyjzm7nanxdj33cd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/zud7hbinw9hmanlfxtb2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/fsgqt0cninabkc1vnxdc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/gzt3xfbbdywvgbijndtk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/t1m7dwr7ja6qzrpnl4fv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/uctiu4fkmmlj6kvvbgdl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hmqndopcnfuj3vojaivt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/e0d6v7y4ticqzdbvhy46.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hgcllyviid48p3umv9dw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/lhgu9awkqzys69gotdpd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/yhiwbzuvs6hmtnxo0b08.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/cghqju3avposc6ottjcr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ouaxufxniy0ur9vvcvfo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/aictm36xvwur8yu6wr1g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/vvmrbolcrdm2hvl2jsa6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ioi4fhlm7lavwafajn2g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/wkoid96bcvofo8bzzgjm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/igdpy4gphhnb4ujqgbna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nxu5gcvmfpb9ajvulspn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/g83hv3gpelhwbmhtmfti.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/ppkea8xeuwplwb0lsaqe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/efzrp7uabal71eqaw0vm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nu9w6hjxrwnacl7f16we.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fbgmf87mzawsjqvwtrqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fysd8er0fnchznzeisoz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/knvrga9rqetqn0rjj05d.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/gm6yhunfboefkrhhk6nm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/aklb5wyzzrtzloier7ds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/ilbg9ouqrtvjwrm49heh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/e6vkjcmczjkkoyudo1bf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jznv2ov70my6hx4vpvyg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ccc7hyrgted3u1rhedds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/wzghctuvktgazn6d3hnd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ztbojqqzalxrllajwfjk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jce0znmxq5rpyxeihokf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/cpdqa0rr84cx8rliocfp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/l6xq18syor4cuvewhfd5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/dnmhz8jqjgzdubmhrgss.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/jzzac8eirszfhhnl3uws.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/awnzouwwv9dpy3bavrvz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/xzudac8csdyasj9rhrsm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/s9kyj4bqiwjxwc2g6ycn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/sfibldkpe9s6mg5godth.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/tzex3weqkgahtwheli6m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/m8jeaxdfvkhgxipbja3o.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },     {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/z88rnqwcxlryi47qdkcq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/ob8bmbuw1wn3iil5ks4j.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/wwlqenvrv7zzfffvrbte.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/yorlzofo6ship5uxmffb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/bg2fdnc2kfqidmesvpip.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/zibrvjehoqiqqnwwrs2y.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/jvmuyytre5u1hml8apdb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/w6pliipyuimv66jvrofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/xg3d8zzwz2mle7w1i3ea.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/rkjmg3hiql8lrxt2aswc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/e3zzu6h4scqcogw72fzq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/jr07hcdbkbodmrbuqcst.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/fewuisfacfgzdoqbtcna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/j0brvk9ydpvw6yyqikqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/ixs1xqi3n8qocy0qhxpk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/dapcfabmu4ahpkpctrx4.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/axjl9yurjfixqcaoh68c.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/feko4twxagvyfo9fwyq2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/t2b9gysezu0h99ixcd5m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/uw204r5cajezwx86eawr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/o1w4we8zd0wgltdj6qbv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dbiirfbiishc4ka7kofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/ttxrq2dyde2abmvmdbbe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/mgivfqumjsf3roa5znem.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/nycjo7xwrbwusw8ff2rv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/qrgup0rxfaiutholshi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ubqrqwqxqlsa53sjp0ur.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ssryw1adzinp9a6xwpne.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dogrqv5draw7ble1gzik.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/h4z3yvbcv6pf7o022hlp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/mvlhvjm98xitbzbmp7wv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/pz46scqqkmfizhzwiywb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/c93sjd3o3orzup0btsi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/uk4chq6kjuieqjcs7esq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/il2gxppyud8dg5kbkfuw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/s1gbycgztk9unehxfg8m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/yevyiyvw5nnos2z96pb0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/rrnaadwbektb1geyx1g6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/lvdpuvelyxuc3a9wvhei.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/e7ms5eyxqyhypfc5xii0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/qp6jp7hkv2mzzymdtak7.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jzf8gfgkaf3mvwmygnxx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/vzb1mzjaayvrg6gy5p7n.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fjiy0jm4yszryj2dhqvh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jvdj5zftaiogn4y99dwf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fqnkpf44ptln4n5bvbqt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/uogl6iasqnflanikjn3k.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/ylp7xjawqgmxo3d62erl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/phtxehfuimioxcinhpcd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/uciw3jt58pk0fl1yegay.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/jka2clfmvg1huunjjcks.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/vefamyjzm7nanxdj33cd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/zud7hbinw9hmanlfxtb2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/fsgqt0cninabkc1vnxdc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/gzt3xfbbdywvgbijndtk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/t1m7dwr7ja6qzrpnl4fv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/uctiu4fkmmlj6kvvbgdl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hmqndopcnfuj3vojaivt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/e0d6v7y4ticqzdbvhy46.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hgcllyviid48p3umv9dw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/lhgu9awkqzys69gotdpd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/yhiwbzuvs6hmtnxo0b08.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/cghqju3avposc6ottjcr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ouaxufxniy0ur9vvcvfo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/aictm36xvwur8yu6wr1g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/vvmrbolcrdm2hvl2jsa6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ioi4fhlm7lavwafajn2g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/wkoid96bcvofo8bzzgjm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/igdpy4gphhnb4ujqgbna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nxu5gcvmfpb9ajvulspn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/g83hv3gpelhwbmhtmfti.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/ppkea8xeuwplwb0lsaqe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/efzrp7uabal71eqaw0vm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nu9w6hjxrwnacl7f16we.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fbgmf87mzawsjqvwtrqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fysd8er0fnchznzeisoz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/knvrga9rqetqn0rjj05d.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/gm6yhunfboefkrhhk6nm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/aklb5wyzzrtzloier7ds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/ilbg9ouqrtvjwrm49heh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/e6vkjcmczjkkoyudo1bf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jznv2ov70my6hx4vpvyg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ccc7hyrgted3u1rhedds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/wzghctuvktgazn6d3hnd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ztbojqqzalxrllajwfjk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jce0znmxq5rpyxeihokf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/cpdqa0rr84cx8rliocfp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/l6xq18syor4cuvewhfd5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/dnmhz8jqjgzdubmhrgss.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/jzzac8eirszfhhnl3uws.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/awnzouwwv9dpy3bavrvz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/xzudac8csdyasj9rhrsm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/s9kyj4bqiwjxwc2g6ycn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/sfibldkpe9s6mg5godth.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/tzex3weqkgahtwheli6m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/m8jeaxdfvkhgxipbja3o.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },     {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/z88rnqwcxlryi47qdkcq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/ob8bmbuw1wn3iil5ks4j.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/wwlqenvrv7zzfffvrbte.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/yorlzofo6ship5uxmffb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/bg2fdnc2kfqidmesvpip.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/zibrvjehoqiqqnwwrs2y.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/jvmuyytre5u1hml8apdb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/w6pliipyuimv66jvrofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/xg3d8zzwz2mle7w1i3ea.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/rkjmg3hiql8lrxt2aswc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/e3zzu6h4scqcogw72fzq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/jr07hcdbkbodmrbuqcst.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/fewuisfacfgzdoqbtcna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/j0brvk9ydpvw6yyqikqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/ixs1xqi3n8qocy0qhxpk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/dapcfabmu4ahpkpctrx4.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/axjl9yurjfixqcaoh68c.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/feko4twxagvyfo9fwyq2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/t2b9gysezu0h99ixcd5m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/uw204r5cajezwx86eawr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/o1w4we8zd0wgltdj6qbv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dbiirfbiishc4ka7kofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/ttxrq2dyde2abmvmdbbe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/mgivfqumjsf3roa5znem.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/nycjo7xwrbwusw8ff2rv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/qrgup0rxfaiutholshi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ubqrqwqxqlsa53sjp0ur.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ssryw1adzinp9a6xwpne.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dogrqv5draw7ble1gzik.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/h4z3yvbcv6pf7o022hlp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/mvlhvjm98xitbzbmp7wv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/pz46scqqkmfizhzwiywb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/c93sjd3o3orzup0btsi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/uk4chq6kjuieqjcs7esq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/il2gxppyud8dg5kbkfuw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/s1gbycgztk9unehxfg8m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/yevyiyvw5nnos2z96pb0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/rrnaadwbektb1geyx1g6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/lvdpuvelyxuc3a9wvhei.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/e7ms5eyxqyhypfc5xii0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/qp6jp7hkv2mzzymdtak7.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jzf8gfgkaf3mvwmygnxx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/vzb1mzjaayvrg6gy5p7n.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fjiy0jm4yszryj2dhqvh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jvdj5zftaiogn4y99dwf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fqnkpf44ptln4n5bvbqt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/uogl6iasqnflanikjn3k.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/ylp7xjawqgmxo3d62erl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/phtxehfuimioxcinhpcd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/uciw3jt58pk0fl1yegay.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/jka2clfmvg1huunjjcks.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/vefamyjzm7nanxdj33cd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/zud7hbinw9hmanlfxtb2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/fsgqt0cninabkc1vnxdc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/gzt3xfbbdywvgbijndtk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/t1m7dwr7ja6qzrpnl4fv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/uctiu4fkmmlj6kvvbgdl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hmqndopcnfuj3vojaivt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/e0d6v7y4ticqzdbvhy46.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hgcllyviid48p3umv9dw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/lhgu9awkqzys69gotdpd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/yhiwbzuvs6hmtnxo0b08.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/cghqju3avposc6ottjcr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ouaxufxniy0ur9vvcvfo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/aictm36xvwur8yu6wr1g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/vvmrbolcrdm2hvl2jsa6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ioi4fhlm7lavwafajn2g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/wkoid96bcvofo8bzzgjm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/igdpy4gphhnb4ujqgbna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nxu5gcvmfpb9ajvulspn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/g83hv3gpelhwbmhtmfti.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/ppkea8xeuwplwb0lsaqe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/efzrp7uabal71eqaw0vm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nu9w6hjxrwnacl7f16we.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fbgmf87mzawsjqvwtrqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fysd8er0fnchznzeisoz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/knvrga9rqetqn0rjj05d.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/gm6yhunfboefkrhhk6nm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/aklb5wyzzrtzloier7ds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/ilbg9ouqrtvjwrm49heh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/e6vkjcmczjkkoyudo1bf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jznv2ov70my6hx4vpvyg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ccc7hyrgted3u1rhedds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/wzghctuvktgazn6d3hnd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ztbojqqzalxrllajwfjk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jce0znmxq5rpyxeihokf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/cpdqa0rr84cx8rliocfp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/l6xq18syor4cuvewhfd5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/dnmhz8jqjgzdubmhrgss.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/jzzac8eirszfhhnl3uws.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/awnzouwwv9dpy3bavrvz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/xzudac8csdyasj9rhrsm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/s9kyj4bqiwjxwc2g6ycn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/sfibldkpe9s6mg5godth.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/tzex3weqkgahtwheli6m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/m8jeaxdfvkhgxipbja3o.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },     {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/z88rnqwcxlryi47qdkcq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/ob8bmbuw1wn3iil5ks4j.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/wwlqenvrv7zzfffvrbte.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/yorlzofo6ship5uxmffb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/bg2fdnc2kfqidmesvpip.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/zibrvjehoqiqqnwwrs2y.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/jvmuyytre5u1hml8apdb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/w6pliipyuimv66jvrofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/xg3d8zzwz2mle7w1i3ea.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/rkjmg3hiql8lrxt2aswc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/e3zzu6h4scqcogw72fzq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/jr07hcdbkbodmrbuqcst.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/fewuisfacfgzdoqbtcna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/j0brvk9ydpvw6yyqikqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/ixs1xqi3n8qocy0qhxpk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/dapcfabmu4ahpkpctrx4.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/axjl9yurjfixqcaoh68c.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/feko4twxagvyfo9fwyq2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/t2b9gysezu0h99ixcd5m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/uw204r5cajezwx86eawr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/o1w4we8zd0wgltdj6qbv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dbiirfbiishc4ka7kofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/ttxrq2dyde2abmvmdbbe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/mgivfqumjsf3roa5znem.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/nycjo7xwrbwusw8ff2rv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/qrgup0rxfaiutholshi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ubqrqwqxqlsa53sjp0ur.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ssryw1adzinp9a6xwpne.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dogrqv5draw7ble1gzik.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/h4z3yvbcv6pf7o022hlp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/mvlhvjm98xitbzbmp7wv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/pz46scqqkmfizhzwiywb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/c93sjd3o3orzup0btsi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/uk4chq6kjuieqjcs7esq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/il2gxppyud8dg5kbkfuw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/s1gbycgztk9unehxfg8m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/yevyiyvw5nnos2z96pb0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/rrnaadwbektb1geyx1g6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/lvdpuvelyxuc3a9wvhei.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/e7ms5eyxqyhypfc5xii0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/qp6jp7hkv2mzzymdtak7.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jzf8gfgkaf3mvwmygnxx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/vzb1mzjaayvrg6gy5p7n.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fjiy0jm4yszryj2dhqvh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jvdj5zftaiogn4y99dwf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fqnkpf44ptln4n5bvbqt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/uogl6iasqnflanikjn3k.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/ylp7xjawqgmxo3d62erl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/phtxehfuimioxcinhpcd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/uciw3jt58pk0fl1yegay.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/jka2clfmvg1huunjjcks.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/vefamyjzm7nanxdj33cd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/zud7hbinw9hmanlfxtb2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/fsgqt0cninabkc1vnxdc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/gzt3xfbbdywvgbijndtk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/t1m7dwr7ja6qzrpnl4fv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/uctiu4fkmmlj6kvvbgdl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hmqndopcnfuj3vojaivt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/e0d6v7y4ticqzdbvhy46.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hgcllyviid48p3umv9dw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/lhgu9awkqzys69gotdpd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/yhiwbzuvs6hmtnxo0b08.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/cghqju3avposc6ottjcr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ouaxufxniy0ur9vvcvfo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/aictm36xvwur8yu6wr1g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/vvmrbolcrdm2hvl2jsa6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ioi4fhlm7lavwafajn2g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/wkoid96bcvofo8bzzgjm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/igdpy4gphhnb4ujqgbna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nxu5gcvmfpb9ajvulspn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/g83hv3gpelhwbmhtmfti.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/ppkea8xeuwplwb0lsaqe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/efzrp7uabal71eqaw0vm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nu9w6hjxrwnacl7f16we.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fbgmf87mzawsjqvwtrqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fysd8er0fnchznzeisoz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/knvrga9rqetqn0rjj05d.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/gm6yhunfboefkrhhk6nm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/aklb5wyzzrtzloier7ds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/ilbg9ouqrtvjwrm49heh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/e6vkjcmczjkkoyudo1bf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jznv2ov70my6hx4vpvyg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ccc7hyrgted3u1rhedds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/wzghctuvktgazn6d3hnd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ztbojqqzalxrllajwfjk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jce0znmxq5rpyxeihokf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/cpdqa0rr84cx8rliocfp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/l6xq18syor4cuvewhfd5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/dnmhz8jqjgzdubmhrgss.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/jzzac8eirszfhhnl3uws.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/awnzouwwv9dpy3bavrvz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/xzudac8csdyasj9rhrsm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/s9kyj4bqiwjxwc2g6ycn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/sfibldkpe9s6mg5godth.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/tzex3weqkgahtwheli6m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/m8jeaxdfvkhgxipbja3o.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },     {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/z88rnqwcxlryi47qdkcq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/ob8bmbuw1wn3iil5ks4j.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/wwlqenvrv7zzfffvrbte.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/yorlzofo6ship5uxmffb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/bg2fdnc2kfqidmesvpip.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/zibrvjehoqiqqnwwrs2y.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/jvmuyytre5u1hml8apdb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/w6pliipyuimv66jvrofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/xg3d8zzwz2mle7w1i3ea.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/rkjmg3hiql8lrxt2aswc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/e3zzu6h4scqcogw72fzq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/jr07hcdbkbodmrbuqcst.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/fewuisfacfgzdoqbtcna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/j0brvk9ydpvw6yyqikqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/ixs1xqi3n8qocy0qhxpk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/dapcfabmu4ahpkpctrx4.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/axjl9yurjfixqcaoh68c.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/feko4twxagvyfo9fwyq2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/t2b9gysezu0h99ixcd5m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/uw204r5cajezwx86eawr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/o1w4we8zd0wgltdj6qbv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dbiirfbiishc4ka7kofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/ttxrq2dyde2abmvmdbbe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/mgivfqumjsf3roa5znem.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/nycjo7xwrbwusw8ff2rv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/qrgup0rxfaiutholshi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ubqrqwqxqlsa53sjp0ur.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ssryw1adzinp9a6xwpne.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dogrqv5draw7ble1gzik.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/h4z3yvbcv6pf7o022hlp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/mvlhvjm98xitbzbmp7wv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/pz46scqqkmfizhzwiywb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/c93sjd3o3orzup0btsi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/uk4chq6kjuieqjcs7esq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/il2gxppyud8dg5kbkfuw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/s1gbycgztk9unehxfg8m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/yevyiyvw5nnos2z96pb0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/rrnaadwbektb1geyx1g6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/lvdpuvelyxuc3a9wvhei.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/e7ms5eyxqyhypfc5xii0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/qp6jp7hkv2mzzymdtak7.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jzf8gfgkaf3mvwmygnxx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/vzb1mzjaayvrg6gy5p7n.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fjiy0jm4yszryj2dhqvh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jvdj5zftaiogn4y99dwf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fqnkpf44ptln4n5bvbqt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/uogl6iasqnflanikjn3k.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/ylp7xjawqgmxo3d62erl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/phtxehfuimioxcinhpcd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/uciw3jt58pk0fl1yegay.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/jka2clfmvg1huunjjcks.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/vefamyjzm7nanxdj33cd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/zud7hbinw9hmanlfxtb2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/fsgqt0cninabkc1vnxdc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/gzt3xfbbdywvgbijndtk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/t1m7dwr7ja6qzrpnl4fv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/uctiu4fkmmlj6kvvbgdl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hmqndopcnfuj3vojaivt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/e0d6v7y4ticqzdbvhy46.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hgcllyviid48p3umv9dw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/lhgu9awkqzys69gotdpd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/yhiwbzuvs6hmtnxo0b08.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/cghqju3avposc6ottjcr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ouaxufxniy0ur9vvcvfo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/aictm36xvwur8yu6wr1g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/vvmrbolcrdm2hvl2jsa6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ioi4fhlm7lavwafajn2g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/wkoid96bcvofo8bzzgjm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/igdpy4gphhnb4ujqgbna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nxu5gcvmfpb9ajvulspn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/g83hv3gpelhwbmhtmfti.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/ppkea8xeuwplwb0lsaqe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/efzrp7uabal71eqaw0vm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nu9w6hjxrwnacl7f16we.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fbgmf87mzawsjqvwtrqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fysd8er0fnchznzeisoz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/knvrga9rqetqn0rjj05d.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/gm6yhunfboefkrhhk6nm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/aklb5wyzzrtzloier7ds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/ilbg9ouqrtvjwrm49heh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/e6vkjcmczjkkoyudo1bf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jznv2ov70my6hx4vpvyg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ccc7hyrgted3u1rhedds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/wzghctuvktgazn6d3hnd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ztbojqqzalxrllajwfjk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jce0znmxq5rpyxeihokf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/cpdqa0rr84cx8rliocfp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/l6xq18syor4cuvewhfd5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/dnmhz8jqjgzdubmhrgss.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/jzzac8eirszfhhnl3uws.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/awnzouwwv9dpy3bavrvz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/xzudac8csdyasj9rhrsm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/s9kyj4bqiwjxwc2g6ycn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/sfibldkpe9s6mg5godth.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/tzex3weqkgahtwheli6m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/m8jeaxdfvkhgxipbja3o.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },     {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/z88rnqwcxlryi47qdkcq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/ob8bmbuw1wn3iil5ks4j.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/wwlqenvrv7zzfffvrbte.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/yorlzofo6ship5uxmffb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/bg2fdnc2kfqidmesvpip.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/zibrvjehoqiqqnwwrs2y.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/jvmuyytre5u1hml8apdb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/w6pliipyuimv66jvrofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/xg3d8zzwz2mle7w1i3ea.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/rkjmg3hiql8lrxt2aswc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/e3zzu6h4scqcogw72fzq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/jr07hcdbkbodmrbuqcst.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/fewuisfacfgzdoqbtcna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/j0brvk9ydpvw6yyqikqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/ixs1xqi3n8qocy0qhxpk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/dapcfabmu4ahpkpctrx4.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/axjl9yurjfixqcaoh68c.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/feko4twxagvyfo9fwyq2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/t2b9gysezu0h99ixcd5m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/uw204r5cajezwx86eawr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/o1w4we8zd0wgltdj6qbv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dbiirfbiishc4ka7kofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/ttxrq2dyde2abmvmdbbe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/mgivfqumjsf3roa5znem.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/nycjo7xwrbwusw8ff2rv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/qrgup0rxfaiutholshi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ubqrqwqxqlsa53sjp0ur.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ssryw1adzinp9a6xwpne.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dogrqv5draw7ble1gzik.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/h4z3yvbcv6pf7o022hlp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/mvlhvjm98xitbzbmp7wv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/pz46scqqkmfizhzwiywb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/c93sjd3o3orzup0btsi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/uk4chq6kjuieqjcs7esq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/il2gxppyud8dg5kbkfuw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/s1gbycgztk9unehxfg8m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/yevyiyvw5nnos2z96pb0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/rrnaadwbektb1geyx1g6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/lvdpuvelyxuc3a9wvhei.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/e7ms5eyxqyhypfc5xii0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/qp6jp7hkv2mzzymdtak7.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jzf8gfgkaf3mvwmygnxx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/vzb1mzjaayvrg6gy5p7n.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fjiy0jm4yszryj2dhqvh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jvdj5zftaiogn4y99dwf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fqnkpf44ptln4n5bvbqt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/uogl6iasqnflanikjn3k.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/ylp7xjawqgmxo3d62erl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/phtxehfuimioxcinhpcd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/uciw3jt58pk0fl1yegay.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/jka2clfmvg1huunjjcks.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/vefamyjzm7nanxdj33cd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/zud7hbinw9hmanlfxtb2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/fsgqt0cninabkc1vnxdc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/gzt3xfbbdywvgbijndtk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/t1m7dwr7ja6qzrpnl4fv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/uctiu4fkmmlj6kvvbgdl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hmqndopcnfuj3vojaivt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/e0d6v7y4ticqzdbvhy46.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hgcllyviid48p3umv9dw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/lhgu9awkqzys69gotdpd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/yhiwbzuvs6hmtnxo0b08.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/cghqju3avposc6ottjcr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ouaxufxniy0ur9vvcvfo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/aictm36xvwur8yu6wr1g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/vvmrbolcrdm2hvl2jsa6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ioi4fhlm7lavwafajn2g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/wkoid96bcvofo8bzzgjm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/igdpy4gphhnb4ujqgbna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nxu5gcvmfpb9ajvulspn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/g83hv3gpelhwbmhtmfti.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/ppkea8xeuwplwb0lsaqe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/efzrp7uabal71eqaw0vm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nu9w6hjxrwnacl7f16we.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fbgmf87mzawsjqvwtrqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fysd8er0fnchznzeisoz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/knvrga9rqetqn0rjj05d.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/gm6yhunfboefkrhhk6nm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/aklb5wyzzrtzloier7ds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/ilbg9ouqrtvjwrm49heh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/e6vkjcmczjkkoyudo1bf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jznv2ov70my6hx4vpvyg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ccc7hyrgted3u1rhedds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/wzghctuvktgazn6d3hnd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ztbojqqzalxrllajwfjk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jce0znmxq5rpyxeihokf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/cpdqa0rr84cx8rliocfp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/l6xq18syor4cuvewhfd5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/dnmhz8jqjgzdubmhrgss.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/jzzac8eirszfhhnl3uws.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/awnzouwwv9dpy3bavrvz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/xzudac8csdyasj9rhrsm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/s9kyj4bqiwjxwc2g6ycn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/sfibldkpe9s6mg5godth.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/tzex3weqkgahtwheli6m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/m8jeaxdfvkhgxipbja3o.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },     {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/z88rnqwcxlryi47qdkcq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/ob8bmbuw1wn3iil5ks4j.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/wwlqenvrv7zzfffvrbte.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/yorlzofo6ship5uxmffb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/bg2fdnc2kfqidmesvpip.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/zibrvjehoqiqqnwwrs2y.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/jvmuyytre5u1hml8apdb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/w6pliipyuimv66jvrofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/xg3d8zzwz2mle7w1i3ea.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/rkjmg3hiql8lrxt2aswc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/e3zzu6h4scqcogw72fzq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/jr07hcdbkbodmrbuqcst.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/fewuisfacfgzdoqbtcna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/j0brvk9ydpvw6yyqikqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/ixs1xqi3n8qocy0qhxpk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/dapcfabmu4ahpkpctrx4.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/axjl9yurjfixqcaoh68c.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/feko4twxagvyfo9fwyq2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/t2b9gysezu0h99ixcd5m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/uw204r5cajezwx86eawr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/o1w4we8zd0wgltdj6qbv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dbiirfbiishc4ka7kofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/ttxrq2dyde2abmvmdbbe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/mgivfqumjsf3roa5znem.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/nycjo7xwrbwusw8ff2rv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/qrgup0rxfaiutholshi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ubqrqwqxqlsa53sjp0ur.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ssryw1adzinp9a6xwpne.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dogrqv5draw7ble1gzik.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/h4z3yvbcv6pf7o022hlp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/mvlhvjm98xitbzbmp7wv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/pz46scqqkmfizhzwiywb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/c93sjd3o3orzup0btsi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/uk4chq6kjuieqjcs7esq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/il2gxppyud8dg5kbkfuw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/s1gbycgztk9unehxfg8m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/yevyiyvw5nnos2z96pb0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/rrnaadwbektb1geyx1g6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/lvdpuvelyxuc3a9wvhei.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/e7ms5eyxqyhypfc5xii0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/qp6jp7hkv2mzzymdtak7.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jzf8gfgkaf3mvwmygnxx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/vzb1mzjaayvrg6gy5p7n.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fjiy0jm4yszryj2dhqvh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jvdj5zftaiogn4y99dwf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fqnkpf44ptln4n5bvbqt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/uogl6iasqnflanikjn3k.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/ylp7xjawqgmxo3d62erl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/phtxehfuimioxcinhpcd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/uciw3jt58pk0fl1yegay.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/jka2clfmvg1huunjjcks.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/vefamyjzm7nanxdj33cd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/zud7hbinw9hmanlfxtb2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/fsgqt0cninabkc1vnxdc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/gzt3xfbbdywvgbijndtk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/t1m7dwr7ja6qzrpnl4fv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/uctiu4fkmmlj6kvvbgdl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hmqndopcnfuj3vojaivt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/e0d6v7y4ticqzdbvhy46.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hgcllyviid48p3umv9dw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/lhgu9awkqzys69gotdpd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/yhiwbzuvs6hmtnxo0b08.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/cghqju3avposc6ottjcr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ouaxufxniy0ur9vvcvfo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/aictm36xvwur8yu6wr1g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/vvmrbolcrdm2hvl2jsa6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ioi4fhlm7lavwafajn2g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/wkoid96bcvofo8bzzgjm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/igdpy4gphhnb4ujqgbna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nxu5gcvmfpb9ajvulspn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/g83hv3gpelhwbmhtmfti.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/ppkea8xeuwplwb0lsaqe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/efzrp7uabal71eqaw0vm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nu9w6hjxrwnacl7f16we.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fbgmf87mzawsjqvwtrqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fysd8er0fnchznzeisoz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/knvrga9rqetqn0rjj05d.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/gm6yhunfboefkrhhk6nm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/aklb5wyzzrtzloier7ds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/ilbg9ouqrtvjwrm49heh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/e6vkjcmczjkkoyudo1bf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jznv2ov70my6hx4vpvyg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ccc7hyrgted3u1rhedds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/wzghctuvktgazn6d3hnd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ztbojqqzalxrllajwfjk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jce0znmxq5rpyxeihokf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/cpdqa0rr84cx8rliocfp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/l6xq18syor4cuvewhfd5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/dnmhz8jqjgzdubmhrgss.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/jzzac8eirszfhhnl3uws.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/awnzouwwv9dpy3bavrvz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/xzudac8csdyasj9rhrsm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/s9kyj4bqiwjxwc2g6ycn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/sfibldkpe9s6mg5godth.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/tzex3weqkgahtwheli6m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/m8jeaxdfvkhgxipbja3o.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },     {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/z88rnqwcxlryi47qdkcq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/ob8bmbuw1wn3iil5ks4j.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/wwlqenvrv7zzfffvrbte.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/yorlzofo6ship5uxmffb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/bg2fdnc2kfqidmesvpip.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/zibrvjehoqiqqnwwrs2y.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619727/TennisDamian/jvmuyytre5u1hml8apdb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/w6pliipyuimv66jvrofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/xg3d8zzwz2mle7w1i3ea.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/rkjmg3hiql8lrxt2aswc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/e3zzu6h4scqcogw72fzq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/jr07hcdbkbodmrbuqcst.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/fewuisfacfgzdoqbtcna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/j0brvk9ydpvw6yyqikqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619726/TennisDamian/ixs1xqi3n8qocy0qhxpk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/dapcfabmu4ahpkpctrx4.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/axjl9yurjfixqcaoh68c.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/feko4twxagvyfo9fwyq2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/t2b9gysezu0h99ixcd5m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/uw204r5cajezwx86eawr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/o1w4we8zd0wgltdj6qbv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dbiirfbiishc4ka7kofd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731618344/TennisDamian/q17zarghqoi68sfmbhhw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/ttxrq2dyde2abmvmdbbe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619725/TennisDamian/mgivfqumjsf3roa5znem.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/nycjo7xwrbwusw8ff2rv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/qrgup0rxfaiutholshi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ubqrqwqxqlsa53sjp0ur.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/ssryw1adzinp9a6xwpne.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/dogrqv5draw7ble1gzik.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619724/TennisDamian/h4z3yvbcv6pf7o022hlp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/mvlhvjm98xitbzbmp7wv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/pz46scqqkmfizhzwiywb.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/c93sjd3o3orzup0btsi8.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/uk4chq6kjuieqjcs7esq.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/il2gxppyud8dg5kbkfuw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/s1gbycgztk9unehxfg8m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/yevyiyvw5nnos2z96pb0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619723/TennisDamian/rrnaadwbektb1geyx1g6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/lvdpuvelyxuc3a9wvhei.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/e7ms5eyxqyhypfc5xii0.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/qp6jp7hkv2mzzymdtak7.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jzf8gfgkaf3mvwmygnxx.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/vzb1mzjaayvrg6gy5p7n.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fjiy0jm4yszryj2dhqvh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/jvdj5zftaiogn4y99dwf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/fqnkpf44ptln4n5bvbqt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/uogl6iasqnflanikjn3k.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/ylp7xjawqgmxo3d62erl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619722/TennisDamian/phtxehfuimioxcinhpcd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619721/TennisDamian/uciw3jt58pk0fl1yegay.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619709/TennisDamian/jka2clfmvg1huunjjcks.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619695/TennisDamian/vefamyjzm7nanxdj33cd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619681/TennisDamian/zud7hbinw9hmanlfxtb2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619667/TennisDamian/fsgqt0cninabkc1vnxdc.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619653/TennisDamian/gzt3xfbbdywvgbijndtk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/t1m7dwr7ja6qzrpnl4fv.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/uctiu4fkmmlj6kvvbgdl.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hmqndopcnfuj3vojaivt.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/e0d6v7y4ticqzdbvhy46.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619650/TennisDamian/hgcllyviid48p3umv9dw.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/lhgu9awkqzys69gotdpd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/yhiwbzuvs6hmtnxo0b08.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/cghqju3avposc6ottjcr.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ouaxufxniy0ur9vvcvfo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/aictm36xvwur8yu6wr1g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/vvmrbolcrdm2hvl2jsa6.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/ioi4fhlm7lavwafajn2g.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619649/TennisDamian/wkoid96bcvofo8bzzgjm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/igdpy4gphhnb4ujqgbna.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nxu5gcvmfpb9ajvulspn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/g83hv3gpelhwbmhtmfti.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/ppkea8xeuwplwb0lsaqe.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/efzrp7uabal71eqaw0vm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619648/TennisDamian/nu9w6hjxrwnacl7f16we.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fbgmf87mzawsjqvwtrqh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/fysd8er0fnchznzeisoz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/knvrga9rqetqn0rjj05d.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/gm6yhunfboefkrhhk6nm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/aklb5wyzzrtzloier7ds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619647/TennisDamian/ilbg9ouqrtvjwrm49heh.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/e6vkjcmczjkkoyudo1bf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jznv2ov70my6hx4vpvyg.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ccc7hyrgted3u1rhedds.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/wzghctuvktgazn6d3hnd.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/vkg8nhoef0rnlcd7s1yo.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/ztbojqqzalxrllajwfjk.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619646/TennisDamian/jce0znmxq5rpyxeihokf.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/cpdqa0rr84cx8rliocfp.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/l6xq18syor4cuvewhfd5.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/dnmhz8jqjgzdubmhrgss.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/jzzac8eirszfhhnl3uws.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/awnzouwwv9dpy3bavrvz.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619645/TennisDamian/xzudac8csdyasj9rhrsm.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/s9kyj4bqiwjxwc2g6ycn.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/sfibldkpe9s6mg5godth.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/tzex3weqkgahtwheli6m.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },{
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619644/TennisDamian/m8jeaxdfvkhgxipbja3o.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    }, 
]
};