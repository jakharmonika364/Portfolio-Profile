import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import { skillTabs } from '../data/skills';

const TYPE_COLORS = {
    Languages: '#5B4FE9',
    Frontend: '#0EA5E9',
    Backend: '#10B981',
    Database: '#F59E0B',
    Tools: '#EF4444',
};

export default function Skills() {
    const [activeTab, setActiveTab] = useState(0);
    const [ref, inView] = useInView();

    return (
        <section id="skills" className="py-24" style={{ background: '#F3F3F0' }}>
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Heading */}
                <div
                    ref={ref}
                    className={`text-center mb-12 reveal ${inView ? 'visible' : ''}`}
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#9B9B95] font-mono">What I Work With</span>
                    <h2
                        className="mt-2"
                        style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,2.8rem)', color: '#111110' }}
                    >
                        Technical <span className="italic text-[#5B4FE9]">Skills</span>
                    </h2>
                </div>

                {/* Tab bar */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {skillTabs.map((tab, i) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(i)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200
                ${activeTab === i
                                    ? 'text-white border-transparent'
                                    : 'bg-white text-[#5C5C57] border-[#E4E4DF] hover:border-[#5B4FE9] hover:text-[#5B4FE9]'
                                }`}
                            style={activeTab === i ? { background: '#5B4FE9' } : {}}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Skills grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {skillTabs[activeTab].skills.map((skill, idx) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05, duration: 0.3 }}
                                className="group bg-white border border-[#E4E4DF] rounded-xl px-5 py-3 flex items-center gap-3 shadow-card cursor-default
                  hover:-translate-y-1 hover:border-[#5B4FE9] hover:shadow-card-hover transition-all duration-200"
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    width={22}
                                    height={22}
                                    className="object-contain"
                                    onError={e => { e.target.style.display = 'none'; }}
                                />
                                <span className="text-sm font-semibold text-[#5C5C57] group-hover:text-[#5B4FE9] transition-colors">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
