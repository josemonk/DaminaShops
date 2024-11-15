'use client';


import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';

interface Props {
  product: Product;
}


export const ProductGridItem = ( { product }: Props ) => {

  const [ displayImage] = useState( product.images[ 0 ] ) || 'https://res.cloudinary.com/dsttqpwbm/image/upload/v1731619571/TennisDamian/yzwgutf3uzgkmvgulhzv.jpg';


  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={ `${ product.slug }` }>
        <Image
          src={ displayImage }
          alt={ product.title }
          className="w-full object-cover rounded"
          width={ 500 }
          height={ 500 }
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link
          className="hover:text-blue-600"
          href={ `/product/${ product.slug }` }>
          { product.title }
        </Link>
      </div>

    </div>
  );
};