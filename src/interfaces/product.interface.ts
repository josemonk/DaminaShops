export interface Product {
  id: string;
  images: string[];
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  //todo: type: Type;
  gender: Category;
}

type Category = 'men'|'women'|'kid'|'unisex';
export type Size = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type Type = 'shirts'|'pants'|'hoodies'|'hats';

export interface ProductImage {
  id: number;
  url: string;
  productId?: string;
}