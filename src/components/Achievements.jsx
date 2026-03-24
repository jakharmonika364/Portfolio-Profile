import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import { achievements } from '../data/achievements';

function AchievementCard({ a, index }) {
    const [ref, inView] = useInView();
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="bg-white border border-[#E4E4DF] rounded-2xl p-5 flex flex-col gap-3 shadow-card
        hover:-translate-y-1 hover:border-[#5B4FE9] hover:shadow-card-hover transition-all duration-300 cursor-default"
        >
            <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: a.bg }}
            >
                {a.emoji}
            </div>
            <div>
                <h3 className="text-sm font-bold text-[#111110] leading-snug">{a.title}</h3>
                <p className="text-xs text-[#9B9B95] mt-0.5">{a.subtitle}</p>
            </div>
            <span className="font-mono text-xs font-semibold text-[#5B4FE9]">{a.year}</span>
        </motion.div>
    );
}

export default function Achievements() {
    const [ref, inView] = useInView();
    return (
        <section id="achievements" className="py-24 bg-[#FAFAFA]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div ref={ref} className={`text-center mb-14 reveal ${inView ? 'visible' : ''}`}>
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#9B9B95] font-mono">Recognition</span>
                    <h2
                        className="mt-2"
                        style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,2.8rem)', color: '#111110' }}
                    >
                        Awards &amp; <span className="italic text-[#5B4FE9]">Achievements</span>
                    </h2>
                </div>

                <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
                    {achievements.map((a, i) => (
                        <AchievementCard key={a.title} a={a} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
