import { useEffect, useState } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
}

const CountUp = ({ end, duration = 2 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000,
  });

  useEffect(() => {
    motionValue.set(end);
  }, [motionValue, end]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      setCount(Math.floor(latest));
    });
  }, [springValue]);

  return <span>{count.toLocaleString()}</span>;
};

export default CountUp;
