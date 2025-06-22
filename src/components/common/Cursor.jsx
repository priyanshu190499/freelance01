import { useEffect, useState, useRef } from 'react';

const SparkleCursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isMoving, setIsMoving] = useState(false);

  const followerRef = useRef(follower);
  const lastCursorRef = useRef(cursor);

  useEffect(() => {
    let moveTimeout;

    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMoving(false), 60);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = '';
    };
  }, []);

  // Animate follower towards cursor
  useEffect(() => {
    let animationFrame;
    const speed = 0.07;

    const animate = () => {
      const newX = followerRef.current.x + (cursor.x - followerRef.current.x) * speed;
      const newY = followerRef.current.y + (cursor.y - followerRef.current.y) * speed;

      followerRef.current = { x: newX, y: newY };
      setFollower({ x: newX, y: newY });

      // Add sparkle only if moving
      if (isMoving) {
        const newSparkle = {
          id: Date.now(),
          x: followerRef.current.x + (Math.random() * 6 - 3),
          y: followerRef.current.y + (Math.random() * 6 - 3),
          size: Math.random() * 2 + 2,
          color: '#7d4b25',
        };
        setTrail(prev => [...prev, newSparkle].slice(-30));
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [cursor, isMoving]);

  return (
    <>
      {/* Ring (tracks cursor directly, centered) */}
      <div
        className="fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
        style={{ left: `${cursor.x}px`, top: `${cursor.y}px` }}
      >
        <div className="w-12 h-12 rounded-full" style={{boxShadow: "0 0 25px 5px rgba(220, 95, 0, 0.7)"}} />
      </div>

      {/* Follower (offset to top-left, uses previous position) */}
      <div
        className="fixed pointer-events-none z-40 opacity-10"
        style={{
          left: `${follower.x}px`,
          top: `${follower.y}px`,
        }}
      >
        <div className="w-6 h-6 rounded-full bg-[#dc5f00]" />
      </div>

      {/* Sparkles */}
      {trail.map(sparkle => (
        <div
          key={sparkle.id}
          className="fixed rounded-full pointer-events-none z-30 opacity-5"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.color,
            animation: 'fadeOut 1s forwards',
          }}
        />
      ))}

      
    </>
  );
};

export default SparkleCursor;
