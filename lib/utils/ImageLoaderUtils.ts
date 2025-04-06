'use client'
 
export default function ImageLoader({ src, width, quality }:{src: string, width: number, quality: any }) {
    return `https://decodelocal.com:3000${src}`
  //return `https://decodelocal.com:3000/images/${src}?w=${width}&q=${quality || 75}`
}