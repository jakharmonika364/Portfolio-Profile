import { useInView, useCountUp } from '../hooks/useAnimations';
import Terminal from './Terminal';

const STATS = [
    { label: 'Repositories', value: 19, suffix: '' },
    { label: 'GitHub Stars', value: 3, suffix: '+' },
    { label: 'Open Source', value: 10, suffix: '+' },
    { label: 'Pull Requests', value: 26, suffix: '+' },
];

function StatCard({ label, value, suffix }) {
    const [ref, inView] = useInView();
    const count = useCountUp(value, 1800, inView);
    return (
        <div
            ref={ref}
            className="bg-white border border-[#E4E4DF] rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-card"
        >
            <span className="font-serif text-3xl font-bold text-[#5B4FE9]">{count}{suffix}</span>
            <span className="text-[10px] uppercase tracking-widest text-[#9B9B95] mt-1 font-semibold">{label}</span>
        </div>
    );
}

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-[62px] bg-[#FAFAFA]"
        >
            <div className="max-w-[1200px] mx-auto px-6 w-full py-20">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-14 max-w-[1100px] mx-auto">

                    {/* LEFT COLUMN */}
                    <div className="flex-1 w-full max-w-2xl flex flex-col gap-8">

                        {/* Badge */}
                        <div className="flex">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border select-none"
                                style={{ background: '#EEF0FF', borderColor: '#C5C1FF', color: '#5B4FE9' }}
                            >
                                <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
                                🚀 Open to Opportunities
                            </div>
                        </div>

                        {/* Heading */}
                        <div>
                            <h1
                                className="leading-tight"
                                style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                            >
                                <span className="text-[#111110]">Hi, I am</span>
                                <br />
                                <span className="italic text-[#5B4FE9]">Monika Jakhar</span>
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p className="text-[#5C5C57] text-lg max-w-xl leading-relaxed">
                            Frontend Developer &amp; Open Source Contributor — I craft performant web apps,
                            contribute to CNCF projects, and turn ideas into scalable solutions.
                        </p>

                        {/* Terminal */}
                        <Terminal />

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#projects"
                                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                                className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
                                style={{ background: '#5B4FE9', boxShadow: '0 4px 18px rgba(91,79,233,0.35)' }}
                            >
                                View Projects
                            </a>
                            <a
                                href="/cv.pdf"
                                download
                                className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-[#E4E4DF] text-[#5C5C57] bg-white hover:border-[#5B4FE9] hover:text-[#5B4FE9] transition-all hover:-translate-y-0.5"
                            >
                                📄 Download CV
                            </a>
                            <a
                                href="#contact"
                                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                                className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-[#E4E4DF] text-[#5C5C57] bg-white hover:border-[#5B4FE9] hover:text-[#5B4FE9] transition-all hover:-translate-y-0.5"
                            >
                                ✉ Contact
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN — Stats */}
                    <div className="w-full lg:w-[280px] flex-shrink-0">
                        <div className="grid grid-cols-2 gap-3">
                            {/* Top card spans full width */}
                            <div className="col-span-2">
                                <StatCard {...STATS[0]} />
                            </div>
                            {STATS.slice(1).map(s => (
                                <StatCard key={s.label} {...s} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
