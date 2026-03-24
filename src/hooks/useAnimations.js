import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.12, ...options }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return [ref, inView];
}

export function useCountUp(target, duration = 1800, inView = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration, inView]);

    return count;
}
