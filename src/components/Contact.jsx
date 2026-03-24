import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import { FiMail, FiGithub, FiTwitter, FiLinkedin, FiDownload } from 'react-icons/fi';

const CONTACTS = [
    { icon: <FiMail size={20} />, label: 'Email', value: 'monika@email.com', href: 'mailto:monika@email.com' },
    { icon: <FiLinkedin size={20} />, label: 'LinkedIn', value: 'monika-jakhar-186a04361', href: 'https://www.linkedin.com/in/monika-jakhar-186a04361' },
    { icon: <FiGithub size={20} />, label: 'GitHub', value: 'jakharmonika364', href: 'https://github.com/jakharmonika364' },
    { icon: <FiDownload size={20} />, label: 'Download CV', value: 'monika-jakhar-cv.pdf', href: '/cv.pdf', download: true },
];

export default function Contact() {
    const [ref, inView] = useInView();
    return (
        <section
            id="contact"
            className="py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1A1745 0%, #2D27A0 60%, #1A1745 100%)' }}
        >
            {/* Radial glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(91,79,233,0.35) 0%, transparent 70%)' }}
            />

            <div className="max-w-[900px] mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55 }}
                    className="text-center mb-12"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase font-mono" style={{ color: '#C5C1FF' }}>
                        Get In Touch
                    </span>
                    <h2
                        className="mt-3 text-white"
                        style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,5vw,3rem)' }}
                    >
                        Let's build something{' '}
                        <span className="italic" style={{ color: '#C5C1FF' }}>great</span>
                    </h2>
                    <p className="mt-4 text-base" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        Open to internships, full-time roles, and interesting collaborations.
                        My inbox is always open.
                    </p>
                </motion.div>

                {/* Contact cards */}
                <div className="flex flex-wrap justify-center gap-4">
                    {CONTACTS.map((c, i) => (
                        <motion.a
                            key={c.label}
                            href={c.href}
                            target={c.download ? '_self' : '_blank'}
                            rel="noreferrer"
                            download={c.download ? true : undefined}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="flex flex-col items-center gap-2 px-6 py-5 rounded-xl border border-white/20 text-white transition-all duration-200
                hover:bg-white/20 hover:-translate-y-0.5"
                            style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
                        >
                            <span className="opacity-80">{c.icon}</span>
                            <span className="font-semibold text-sm">{c.label}</span>
                            <span className="text-xs opacity-60">{c.value}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
