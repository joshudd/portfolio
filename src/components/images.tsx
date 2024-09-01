import React from 'react';
import Image from 'next/image';

import waveformsSVG from '/public/waveforms.svg';

const WaveformsImage = () => {
    return (
        <Image 
            src={waveformsSVG} 
            alt="Waveforms" 
            fill
            style={{
                objectFit: 'none',
                objectPosition: 'bottom left',
            }}
            className="z-[100] ear-cursor"
        />
    );
}

export { WaveformsImage };
