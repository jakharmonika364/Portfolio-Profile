import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import { experiences } from '../data/experience';

const TYPE_STYLE = {
    Internship: { bg: '#F0EEFF', text: '#5B4FE9' },
    Education: { bg: '#F0FFF4', text: '#10B981' },
    'Open Source': { bg: '#FFFBE6', text: '#D97706' },
};

function ExperienceCard({ exp, index }) {
    const [ref, inView] = useInView();
    const style = TYPE_STYLE[exp.type] || TYPE_STYLE['Internship'];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative bg-white border border-[#E4E4DF] rounded-2xl p-6 shadow-card card-top-border overflow-hidden
        hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
        >
            {/* Badge */}
            <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                style={{ background: style.bg, color: style.text }}
            >
                {exp.type}
            </span>

            {/* Company */}
            <p className="text-xs text-[#9B9B95] font-medium mb-1">{exp.company}</p>

            {/* Role */}
            <h3
                className="text-[#111110] mb-1"
                style={{ fontFamily: '"DM Serif Display", serif', fontSize: '1.1rem' }}
            >
                {exp.role}
            </h3>

            {/* Period */}
            <p className="font-mono text-xs text-[#9B9B95] mb-4">{exp.period}</p>

            {/* Bullets */}
            <ul className="flex flex-col gap-2">
                {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm text-[#5C5C57] leading-relaxed">
                        <span className="text-[#5B4FE9] font-bold flex-shrink-0 mt-0.5">→</span>
                        {b}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default function Experience() {
    const [ref, inView] = useInView();
    return (
        <section id="experience" className="py-24 bg-[#FAFAFA]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div ref={ref} className={`text-center mb-14 reveal ${inView ? 'visible' : ''}`}>
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#9B9B95] font-mono">Where I've Been</span>
                    <h2
                        className="mt-2"
                        style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,2.8rem)', color: '#111110' }}
                    >
                        Work <span className="italic text-[#5B4FE9]">Experience</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiences.map((exp, i) => (
                        <ExperienceCard key={i} exp={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
