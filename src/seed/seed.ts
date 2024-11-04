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
        'TenniAbzor.jpeg',
        'TenniAbzor.jpeg',
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
      description: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: [
        'TenniAdidas.jpeg',
        'TenniAdidas.jpeg',
      ],
      inStock: 5,
      price: 200,
      sizes: [ 'XS', 'S', 'M', 'XL', 'XXL' ],
      slug: "women_quilted_shirt_jacket",
      type: 'shirts',
      tags: [ 'jacket' ],
      title: "Women's Quilted Shirt Jacket",
      gender: 'women'
    },

    {
      description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: [
        'TenniAdidas.jpeg',
        'TenniAdidas.jpeg',
      ],
      inStock: 10,
      price: 130,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "men_raven_lightweight_zip_up_bomber_jacket",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Raven Lightweight Zip Up Bomber Jacket",
      gender: 'men'
    },

    {
      description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      images: [
        'TenniFlower.jpeg',
        'TenniFlower.jpeg',
      ],
      inStock: 50,
      price: 45,
      sizes: [ 'XS', 'S', 'M', 'L' ],
      slug: "men_turbine_long_sleeve_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Turbine Long Sleeve Tee",
      gender: 'women'
    },
    {
      description: "Diesel Azul",
      images: [
        'TenniDiesel.jpeg',
        'TenniDiesel.jpeg',
      ],
      inStock: 50,
      price: 40,
      sizes: [ 'M', 'L', 'XL', 'XXL' ],
      slug: "men_turbine_short_sleeve_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Turbine Short Sleeve Tee",
      gender: 'men'
    },
    {
      description: "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
      images: [
        'TenniDiesel.jpeg',
        'TenniDiesel.jpeg',
      ],
      inStock: 0,
      price: 35,
      sizes: [ 'M', 'L', 'XL', 'XXL' ],
      slug: "men_cybertruck_owl_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Cybertruck Owl Tee",
      gender: 'men'
    },
    {
      description: "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      images: [
        'TenniLacoste.jpeg',
        'TenniLacoste.jpeg',
      ],
      inStock: 15,
      price: 35,
      sizes: [ 'S', 'M', 'L', 'XL' ],
      slug: "men_solar_roof_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Solar Roof Tee",
      gender: 'men'
    },
    {
      description: "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      images: [
        'TennisNikeAir.jpeg',
        'TennisNikeAir.jpeg',
      ],
      inStock: 17,
      price: 35,
      sizes: [ 'XS', 'S', 'XL', 'XXL' ],
      slug: "men_let_the_sun_shine_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Let the Sun Shine Tee",
      gender: 'men'
    },
    {
      description: "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
      images: [
        'TenniLacoste.jpeg',
        'TenniLacoste.jpeg'
      ],
      inStock: 12,
      price: 35,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "men_3d_large_wordmark_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's 3D Large Wordmark Tee",
      gender: 'men'
    },
    {
      description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
      images: [
        'TenniNewBalance.jpeg',
        'TenniNewBalance.jpeg',
      ],
      inStock: 5,
      price: 35,
      sizes: [ 'XS', 'S' ],
      slug: "men_3d_t_logo_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's 3D T Logo Tee",
      gender: 'men'
    },
    {
      description: "Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.",
      images: [
        'TenniNewBalance.jpeg',
        'TenniNewBalance.jpeg',
      ],
      inStock: 2,
      price: 35,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "women_3d_small_wordmark_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women’s 3D Small Wordmark Tee",
      gender: 'women'
    },
    {
      description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
      images: [
        'TenniNewBalanceBlack.jpeg',
        'TenniNewBalanceBlack.jpeg',
      ],
      inStock: 82,
      price: 35,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "women_plaid_mode_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's Plaid Mode Tee",
      gender: 'women'
    },
    {
      description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.",
      images: [
        'TenniNike.jpeg',
        'TenniNike.jpeg',
      ],
      inStock: 24,
      price: 35,
      sizes: [ 'XL', 'XXL' ],
      slug: "men_powerwall_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's Powerwall Tee",
      gender: 'women'
    },
    {
      description: "Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.",
      images: [
        'TenniNikeBlanco.jpeg',
        'TenniNikeBlanco.jpeg',
      ],
      inStock: 5,
      price: 30,
      sizes: [ 'XS', 'S', 'XXL' ],
      slug: "women_battery_day_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's Battery Day Tee",
      gender: 'women'
    },
    {
      description: "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
      images: [
        'TenniNikeCafe.jpeg',
        'TenniNikeCafe.jpeg',
      ],
      inStock: 150,
      price: 30,
      sizes: [ 'M', 'L' ],
      slug: "women_cybertruck_bulletproof_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "women’s Cybertruck Bulletproof Tee",
      gender: 'women'
    },
    {
      description: "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
      images: [
        'TenniNikeJordan.jpeg',
        'TenniNikeJordan.jpeg',
      ],
      inStock: 10,
      price: 35,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "women_haha_yes_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's Haha Yes Tee",
      gender: 'women'
    },
    {
      description: "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
      images: [
        'TenniNikeWhite.jpeg',
        'TenniNikeWhite.jpeg',
      ],
      inStock: 34,
      price: 35,
      sizes: [ 'XS', 'S', 'M', 'L' ],
      slug: "men_s3xy_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's S3XY Tee",
      gender: 'men'
    },
    {
      description: "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
      images: [
        'TenniObsidian.jpeg',
        'TenniObsidian.jpeg',
      ],
      inStock: 15,
      price: 40,
      sizes: [ 'XL', 'XXL' ],
      slug: "men_3d_wordmark_long_sleeve_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's 3D Wordmark Long Sleeve Tee",
      gender: 'men'
    },
    {
      description: "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
      images: [
        'TenniPuma.jpeg',
        'TenniPuma.jpeg',
      ],
      inStock: 12,
      price: 40,
      sizes: [ 'XS', 'XXL' ],
      slug: "women_3d_t_logo_long_sleeve_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "women's 3D T Logo Long Sleeve Tee",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
      images: [
        'TenniQueens.jpeg',
        'TenniQueens.jpeg',
      ],
      inStock: 10,
      price: 115,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "women_raven_lightweight_hoodie",
      type: 'hoodies',
      tags: [ 'hoodie' ],
      title: "Women's Raven Lightweight Hoodie",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'TennisNikeAir.jpeg',
        'TennisNikeAir.jpeg',

      ],
      inStock: 10,
      price: 130,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "chill_pullover_hoodie",
      type: 'hoodies',
      tags: [ 'hoodie' ],
      title: "Chill Pullover Hoodie",
      gender: 'unisex'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'TennisPumma.jpeg',
        'TennisPumma.jpeg',
      ],
      inStock: 100,
      price: 85,
      sizes: [ 'XS', 'L', 'XL', 'XXL' ],
      slug: "men_chill_full_zip_hoodie",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Chill Full Zip Hoodie",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'TennisVerde.jpeg',
        'TennisVerde.jpeg',
      ],
      inStock: 7,
      price: 85,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "men_chill_quarter_zip_pullover_-_gray",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Chill Quarter Zip Pullover - Gray",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
      images: [
        'TenniVectiv.jpeg',
        'TenniVectiv.jpeg',
      ],
      inStock: 15,
      price: 85,
      sizes: [ 'XS', 'S', 'M', 'L' ],
      slug: "women_chill_quarter_zip_pullover_-_white",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's Chill Quarter Zip Pullover - White",
      gender: 'women'
    },
  ]
};