import React, { useEffect, useState, useRef } from 'react';

interface RandomLightningProps {
    sourceX: number;
    sourceY: number;
    width: number;
    height: number;
    duration: number;
    segments: number;
    bolts: number;
  }
  
  const RandomLightning: React.FC<RandomLightningProps> = ({
    sourceX,
    sourceY,
    width,
    height,
    duration,
    segments,
    bolts,
  }) => {
    const [destinations, setDestinations] = useState<Array<{ x: number; y: number }>>([]);

    useEffect(() => {
      const generateOffScreenDestination = (): { x: number; y: number } => {
        const side = Math.floor(Math.random() * 4);
        let x = 0, y = 0;

        switch (side) {
          case 0: // Top
            x = Math.random() * width;
            y = -height * 0.1;
            break;
          case 1: // Right
            x = width * 1.1;
            y = Math.random() * height;
            break;
          case 2: // Bottom
            x = Math.random() * width;
            y = height * 1.1;
            break;
          case 3: // Left
            x = -width * 0.1;
            y = Math.random() * height;
            break;
        }

        return { x, y };
      };

      const newDestinations = Array.from({ length: bolts }, generateOffScreenDestination);
      setDestinations(newDestinations);
    }, [width, height, bolts]);

    return (
      <>
        {destinations.map((dest, index) => (
          <LightningAnimation
            key={index}
            startX={sourceX}
            startY={sourceY}
            endX={dest.x}
            endY={dest.y}
            duration={duration}
            segments={segments}
          />
        ))}
      </>
    );
};

interface LightningAnimationProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  segments: number;
}

const LightningAnimation: React.FC<LightningAnimationProps> = ({
  startX,
  startY,
  endX,
  endY,
  duration,
  segments,
}) => {
  const [path, setPath] = useState('');
  const prevPathRef = useRef('');
  const animationRef = useRef(0);

  useEffect(() => {
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = ((timestamp - startTime) % duration) / duration;

      const newPath = generateRandomPath(startX, startY, endX, endY, segments);
      const currentPath = interpolatePaths(prevPathRef.current || newPath, newPath, progress);
      setPath(currentPath);
      prevPathRef.current = newPath;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [startX, startY, endX, endY, duration, segments]);

  const generateRandomPath = (x1: number, y1: number, x2: number, y2: number, segments: number) => {
    const points = [`M ${x1},${y1}`];
    const dx = (x2 - x1) / segments;
    const dy = (y2 - y1) / segments;

    for (let i = 1; i < segments; i++) {
      const x = x1 + dx * i + (Math.random() - 0.5) * dx;
      const y = y1 + dy * i + (Math.random() - 0.5) * dy;
      points.push(`L ${x},${y}`);
    }

    points.push(`L ${x2},${y2}`);
    return points.join(' ');
  };

  const interpolatePaths = (pathA: string, pathB: string, progress: number) => {
    const pointsA = pathA.split(' ');
    const pointsB = pathB.split(' ');
    const maxLength = Math.max(pointsA.length, pointsB.length);

    const interpolatedPoints = Array.from({ length: maxLength }, (_, index) => {
      if (index === 0 || index === maxLength - 1) {
        return pointsA[index] || pointsB[index]; // Keep start and end points fixed
      }

      const cmdA = pointsA[index] || pointsB[index];
      const cmdB = pointsB[index] || pointsA[index];

      const [x1, y1] = (cmdA.split(',').map(Number) || [0, 0]);
      const [x2, y2] = (cmdB.split(',').map(Number) || [0, 0]);

      const x = x1 + (x2 - x1) * progress;
      const y = y1 + (y2 - y1) * progress;

      return `L ${x},${y}`;
    });

    return interpolatedPoints.join(' ');
  };

  return (
    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
      <path d={path} fill="currentColor" strokeWidth="2" />
    </svg>
  );
};

export default RandomLightning;
