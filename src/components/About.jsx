import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';

const INFO = [
    { icon: '📍', label: 'Location', value: 'India' },
    { icon: '🎓', label: 'Degree', value: 'B.Tech CSE · 2026' },
    { icon: '💼', label: 'Available', value: 'Internship / Full-time' },
    { icon: '🌐', label: 'Languages', value: 'English, Hindi, Gujarati' },
];

export default function About() {
    const [ref, inView] = useInView();
    const [leftRef, leftInView] = useInView();
    const [rightRef, rightInView] = useInView();

    return (
        <section id="about" className="py-24" style={{ background: '#F3F3F0' }}>
            <div className="max-w-[1200px] mx-auto px-6">
                <div ref={ref} className={`text-center mb-14 reveal ${inView ? 'visible' : ''}`}>
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#9B9B95] font-mono">The Person</span>
                    <h2
                        className="mt-2"
                        style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,2.8rem)', color: '#111110' }}
                    >
                        About <span className="italic text-[#5B4FE9]">Me</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* LEFT — Photo frame */}
                    <motion.div
                        ref={leftRef}
                        initial={{ opacity: 0, x: -30 }}
                        animate={leftInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.55 }}
                        className="relative w-full md:w-[320px] flex-shrink-0"
                    >
                        <div
                            className="rounded-3xl border border-[#C5C1FF] flex items-center justify-center overflow-hidden"
                            style={{ background: '#EEF0FF', aspectRatio: '4/5' }}
                        >
                            {/* Replace with <img src="..." class="object-cover w-full h-full" /> for real photo */}
                            <span style={{ fontSize: '6rem' }}>👩‍💻</span>
                        </div>
                        {/* Floating badge */}
                        <div
                            className="absolute -bottom-4 right-[-12px] bg-white border border-[#E4E4DF] rounded-xl px-4 py-2.5 shadow-card-hover flex items-center gap-2"
                        >
                            <span>🔥</span>
                            <span className="text-xs font-bold text-[#111110]">Open to Internship · 2025</span>
                        </div>
                    </motion.div>

                    {/* RIGHT — Text */}
                    <motion.div
                        ref={rightRef}
                        initial={{ opacity: 0, x: 30 }}
                        animate={rightInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.55 }}
                        className="flex-1 flex flex-col gap-5"
                    >
                        <p className="text-[#5C5C57] text-lg leading-relaxed">
                            Hey! I'm <strong className="text-[#111110]">Monika</strong> — a Frontend Developer and Open Source Contributor based in India.
                            I believe great software is both technically solid and delightfully usable, and I obsess over both sides.
                        </p>
                        <p className="text-[#5C5C57] leading-relaxed">
                            When I'm not building web apps, I'm contributing to open source, grinding competitive programming,
                            or exploring system design patterns.
                        </p>
                        <p className="text-[#5C5C57] leading-relaxed">
                            Hit me up if you want to talk web dev, open source, DSA, or just build something cool together!
                        </p>

                        {/* Info grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                            {INFO.map(item => (
                                <div key={item.label} className="flex items-start gap-3 bg-white border border-[#E4E4DF] rounded-xl px-4 py-3 shadow-card">
                                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-[#9B9B95] font-semibold">{item.label}</p>
                                        <p className="text-sm font-semibold text-[#111110] mt-0.5">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
