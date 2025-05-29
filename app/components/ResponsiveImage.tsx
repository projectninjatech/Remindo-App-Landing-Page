"use client"; // Marked as client component due to onError

import Image from 'next/image';
import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, width, height, className, priority = false, objectFit = 'cover' }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      style={{ objectFit }}
      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        const placeholderText = alt.length > 50 ? alt.substring(0, 47) + '...' : alt;
        target.src = `https://placehold.co/${width}x${height}/e2e8f0/94a3b8?text=${encodeURIComponent(placeholderText)}`;
      }}
    />
  );
};

export default ResponsiveImage;