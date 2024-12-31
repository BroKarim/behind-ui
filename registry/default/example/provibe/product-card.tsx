"use client";

import { useState } from "react";

interface ProductCardProps {
  url: string;
  isFeatured?: boolean;
}

export function ProductCard({ url, isFeatured = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative block overflow-hidden rounded-lg bg-black
        ${isFeatured ? "md:col-span-2 md:row-span-2" : ""}
        aspect-square h-full w-full bg-center md:h-72`}
      >
        <img
          src={url}
          alt="Product image"
          className={`h-full w-full object-cover transition-transform duration-500 
          ${isHovered ? "scale-110" : "scale-100"}`}
        />
      </div>
    </>
  );
}

interface Product {
  id: number;
  url: string;
}
interface ProductGridProps {
  products: Product[];
}
const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {products.map((post, index) => {
        const isFeatured = index % 5 === 4;
        return (
          <ProductCard key={post.id} url={post.url} isFeatured={isFeatured} />
        );
      })}
    </div>
  );
};

export default ProductGrid;
