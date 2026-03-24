import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import { flagshipProjects, utilityProjects } from '../data/projects';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

function StackTag({ tag }) {
    return (
        <span className="px-2 py-0.5 text-[10px] font-semibold rounded uppercase tracking-wider bg-[#EEF0FF] text-[#5B4FE9]">
            {tag}
        </span>
    );
}

function FlagshipCard({ project, index }) {
    const [ref, inView] = useInView();
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex flex-col bg-[#F7F5FF] border border-[#C5C1FF] rounded-2xl p-6 shadow-card card-top-border overflow-hidden
        hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
        >
            <div className="w-12 h-12 rounded-xl bg-[#EEF0FF] flex items-center justify-center text-2xl mb-4 flex-shrink-0">
                {project.emoji}
            </div>
            <h3 className="font-bold text-[#111110] text-base">{project.name}</h3>
            <p className="text-xs text-[#9B9B95] mb-2 font-medium">{project.subtitle}</p>
            <p className="text-sm text-[#5C5C57] leading-relaxed flex-1 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.map(s => <StackTag key={s} tag={s} />)}
            </div>
            <div className="flex gap-3 mt-auto">
                {project.live && project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-[#5B4FE9] hover:underline">
                        <FiExternalLink size={13} /> Live
                    </a>
                )}
                {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-[#5C5C57] hover:text-[#5B4FE9] hover:underline">
                        <FiGithub size={13} /> GitHub
                    </a>
                )}
            </div>
        </motion.div>
    );
}

function UtilityCard({ project, index }) {
    const [ref, inView] = useInView();
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex flex-col bg-white border border-[#E4E4DF] rounded-2xl p-5 shadow-card card-top-border overflow-hidden
        hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
        >
            <div className="w-10 h-10 rounded-lg bg-[#F3F3F0] flex items-center justify-center text-xl mb-3">
                {project.emoji}
            </div>
            <h3 className="font-bold text-[#111110] text-sm">{project.name}</h3>
            <p className="text-xs text-[#9B9B95] mb-1.5 font-medium">{project.subtitle}</p>
            <p className="text-xs text-[#5C5C57] leading-relaxed flex-1 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1 mb-3">
                {project.stack.map(s => <StackTag key={s} tag={s} />)}
            </div>
            <div className="flex gap-3">
                {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1 text-xs font-semibold text-[#5C5C57] hover:text-[#5B4FE9]">
                        <FiGithub size={12} /> GitHub
                    </a>
                )}
                {project.npm && (
                    <a href={project.npm} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1 text-xs font-semibold text-[#5C5C57] hover:text-[#5B4FE9]">
                        <FiExternalLink size={12} /> npm
                    </a>
                )}
                {project.live && project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1 text-xs font-semibold text-[#5C5C57] hover:text-[#5B4FE9]">
                        <FiExternalLink size={12} /> Live
                    </a>
                )}
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [ref, inView] = useInView();
    return (
        <section id="projects" className="py-24" style={{ background: '#F3F3F0' }}>
            <div className="max-w-[1200px] mx-auto px-6">
                <div ref={ref} className={`text-center mb-14 reveal ${inView ? 'visible' : ''}`}>
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#9B9B95] font-mono">What I've Built</span>
                    <h2
                        className="mt-2"
                        style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,2.8rem)', color: '#111110' }}
                    >
                        Featured <span className="italic text-[#5B4FE9]">Projects</span>
                    </h2>
                </div>

                {/* Flagship */}
                <p className="text-xs font-bold uppercase tracking-widest text-[#9B9B95] mb-5 font-mono flex items-center gap-2">
                    🚀 Flagship Projects
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                    {flagshipProjects.map((p, i) => <FlagshipCard key={p.name} project={p} index={i} />)}
                </div>

                {/* Utility */}
                <p className="text-xs font-bold uppercase tracking-widest text-[#9B9B95] mb-5 font-mono flex items-center gap-2">
                    ⚙️ Utility &amp; Tools
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {utilityProjects.map((p, i) => <UtilityCard key={p.name} project={p} index={i} />)}
                </div>
            </div>
        </section>
    );
}
