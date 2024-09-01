import React, { useState, useEffect } from 'react';
import { wave1Icon, wave2Icon, lightningIcon } from '@/components/icons';
import useDebounce from '@/hooks/debounce';

interface AnimatedBackgroundProps {
    parentPosition: { x: number; y: number };
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ parentPosition }) => {
    const [isClient, setIsClient] = useState(false);
    const [resetKey, setResetKey] = useState(0);
    const iconCount = 80;

    const debouncedPosition = useDebounce(parentPosition, 100);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        console.log("DEBOUNCED POSITION", debouncedPosition);
        setResetKey(prev => prev + 1);
    }, [debouncedPosition]);

    const getRandomIcon = () => {
        const icons = [lightningIcon, wave1Icon, wave2Icon];
        const randomIndex = Math.floor(Math.random() * icons.length);
        return icons[randomIndex];
    };

    const getRandomPosition = (existingPositions: Array<{ x: number, y: number }>) => {
        // Convert 30 and 100 degrees to radians
        const minAngle = 44 * Math.PI / 180;
        const maxAngle = 88 * Math.PI / 180;
        
        // Generate a random angle between 30 and 100 degrees (in radians)
        const angle = minAngle + Math.random() * (maxAngle - minAngle);

        const maxDistance = Math.min(window.innerWidth, window.innerHeight) * 0.6;
        
        // Custom probability distribution for distance
        const getCustomDistance = () => {
            const r = Math.random();

            if (r < 0.3) {
                return (0.00 + Math.random() * 0.1) * maxDistance;
            } else if (r < 0.8) {
                return (0.2 + Math.random() * 0.000001) * maxDistance;
            } else {
                return (0.7 + Math.random() * 0.3) * maxDistance;
            }
        };

        // 30% chance to cluster near an existing icon
        if (existingPositions.length > 0 && Math.random() < 0.5) {
            const basePosition = existingPositions[Math.floor(Math.random() * existingPositions.length)];
            const clusterRadius = maxDistance * 0.3; // 10% of maxDistance
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * clusterRadius;
            
            return {
                x: basePosition.x + Math.cos(angle) * distance,
                y: basePosition.y + Math.sin(angle) * distance
            };
        }

        const distance = getCustomDistance() *3

        const x = Math.cos(angle) * distance + distance * Math.random() + 30;
        const y = Math.sin(angle) * distance + distance * Math.random() + 30;
        
        // Adjust y to create a triangular pattern
        const triangleHeight = 3000;
        const triangleWidth = 4000;
        const triangleY = -y * (triangleWidth - Math.abs(x)) / triangleHeight;
        
        return { x, y: triangleY };
    };

    if (!isClient) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(iconCount)].map((_, index) => {
            const Icon = getRandomIcon();
            const position = getRandomPosition([]);
            const distance = Math.sqrt(position.x * position.x + position.y * position.y);
            const baseOpacity = Math.max(0.1, 1 - distance / 1000); // Higher opacity for closer icons
            const animationDuration = 1.7 + Math.random() * distance / 2000; // Random duration between 
            
            return (
                <div
                    key={`${resetKey}-${index}`}
                    style={{
                        position: 'absolute',
                        left: debouncedPosition.x + position.x,
                        top: debouncedPosition.y + position.y,
                        opacity: baseOpacity,
                        animation: `pulse ${animationDuration}s infinite`,
                    } as React.CSSProperties}
                    className="pulsing-icon"
                >
                    <Icon />
                </div>
            )})}
        </div>
    );
};

export default AnimatedBackground;