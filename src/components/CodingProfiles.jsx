import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import { profiles } from '../data/profiles';

function ProfileCard({ p, index }) {
    const [ref, inView] = useInView();
    return (
        <motion.a
            ref={ref}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex flex-col items-center gap-3 bg-white border border-[#E4E4DF] rounded-2xl py-6 px-4 shadow-card text-center
        hover:-translate-y-1 hover:border-[#5B4FE9] hover:shadow-card-hover transition-all duration-300 cursor-pointer"
        >
            <img
                src={p.icon}
                alt={p.name}
                width={38}
                height={38}
                className="object-contain"
                onError={e => { e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'; }}
            />
            <div>
                <p className="font-bold text-sm text-[#111110]">{p.name}</p>
                <p className="text-xs text-[#9B9B95] mt-0.5">{p.stat}</p>
            </div>
        </motion.a>
    );
}

export default function CodingProfiles() {
    const [ref, inView] = useInView();
    return (
        <section id="profiles" className="py-24" style={{ background: '#F3F3F0' }}>
            <div className="max-w-[1200px] mx-auto px-6">
                <div ref={ref} className={`text-center mb-14 reveal ${inView ? 'visible' : ''}`}>
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#9B9B95] font-mono">Where I Code</span>
                    <h2
                        className="mt-2"
                        style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,2.8rem)', color: '#111110' }}
                    >
                        Coding <span className="italic text-[#5B4FE9]">Profiles</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {profiles.map((p, i) => (
                        <div key={p.name} className="w-[160px] flex-shrink-0">
                            <ProfileCard p={p} index={i} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
