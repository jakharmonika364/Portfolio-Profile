import { motion } from 'framer-motion';
import { useInView, useCountUp } from '../hooks/useAnimations';

const GITHUB_STATS = [
    { label: 'Repositories', value: 19, suffix: '' },
    { label: 'Stars', value: 3, suffix: '+' },
    { label: 'Pull Requests', value: 26, suffix: '+' },
    { label: 'Contributions', value: 87, suffix: '+' },
];

const GITHUB_USERNAME = 'jakharmonika364'; // Real username

function StatCard({ stat, index, inView }) {
    const count = useCountUp(stat.value, 1800, inView);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center bg-[#F3F3F0] border border-[#E4E4DF] rounded-2xl py-7 px-6 text-center"
        >
            <span
                style={{ fontFamily: '"DM Serif Display", serif', fontSize: '2.4rem', color: '#5B4FE9', lineHeight: 1 }}
            >
                {count}{stat.suffix}
            </span>
            <span className="text-xs text-[#9B9B95] mt-2 font-semibold uppercase tracking-widest">{stat.label}</span>
        </motion.div>
    );
}

export default function GitHub() {
    const [ref, inView] = useInView();
    const [graphRef, graphInView] = useInView();

    return (
        <section id="github" className="py-24 bg-[#FAFAFA]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className={`text-center mb-14 reveal ${inView ? 'visible' : ''}`}>
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#9B9B95] font-mono">Open Source</span>
                    <h2
                        className="mt-2"
                        style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,2.8rem)', color: '#111110' }}
                    >
                        GitHub <span className="italic text-[#5B4FE9]">Activity</span>
                    </h2>
                </div>

                {/* Stats */}
                <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
                    {GITHUB_STATS.map((s, i) => (
                        <StatCard key={s.label} stat={s} index={i} inView={inView} />
                    ))}
                </div>

                {/* Contribution graph */}
                <motion.div
                    ref={graphRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={graphInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl border border-[#E4E4DF] overflow-hidden bg-[#F3F3F0] p-2"
                >
                    <img
                        src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&bg_color=f3f3f0&color=5B4FE9&line=5B4FE9&point=5B4FE9&area=true&hide_border=true&area_color=EEF0FF`}
                        alt="GitHub contribution graph"
                        className="w-full rounded-xl"
                        onError={e => {
                            e.target.parentElement.innerHTML = '<p class="text-center text-[#9B9B95] py-8 text-sm font-mono">Contribution graph will display after setting GitHub username</p>';
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
