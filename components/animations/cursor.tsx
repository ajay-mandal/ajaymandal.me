import Image from 'next/image';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const ImgReveal = ({ src, children }: { src: string, children: React.ReactNode }) => {
    const [hovered, setHovered] = useState(false);
    const [offset, setOffset] = useState(0);

    const leave = () => {
        setHovered(false);
        setOffset(0);
    }

    const moveImg = (e: any) => {
        setOffset(prevOffset => prevOffset + e.movementX);
    }

    return (
        <span
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={leave}
              onMouseMove={moveImg}>
            {hovered &&
                <Image src={src}
                     alt="special effect"
                     style={{transform: `translateX(${offset || 0}px)`}}
                     width={90}
                     height={50}
                     />}
            {children}
        </span>
    );
}

export default ImgReveal;
