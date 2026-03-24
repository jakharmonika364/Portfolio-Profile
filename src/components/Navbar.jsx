import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const NAV_LINKS = [
    { label: 'Skills', to: 'skills' },
    { label: 'Experience', to: 'experience' },
    { label: 'Projects', to: 'projects' },
    { label: 'Achievements', to: 'achievements' },
    { label: 'Profiles', to: 'profiles' },
    { label: 'GitHub', to: 'github' },
    { label: 'About', to: 'about' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const sections = ['home', ...NAV_LINKS.map(l => l.to)];
        const observers = sections.map(id => {
            const el = document.getElementById(id);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { threshold: 0.35 }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach(o => o && o.disconnect());
    }, []);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                height: 62,
                background: 'rgba(250,250,250,0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderBottom: '1px solid #E4E4DF',
                boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none',
            }}
        >
            <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-6">
                {/* Logo */}
                <a href="#home" className="font-mono text-xl font-semibold text-[#111110] flex items-center gap-0 select-none">
                    monika
                    <span className="cursor-blink text-[#5B4FE9] ml-0.5">|</span>
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            duration={600}
                            offset={-62}
                            className={`
                px-3 py-1.5 rounded-lg text-[11px] font-semibold tracking-widest uppercase cursor-pointer transition-all duration-200
                ${activeSection === link.to
                                    ? 'bg-[#EEF0FF] text-[#5B4FE9]'
                                    : 'text-[#5C5C57] hover:text-[#5B4FE9]'
                                }
              `}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Hire Me */}
                <a
                    href="#contact"
                    onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                    style={{ background: '#5B4FE9', boxShadow: '0 2px 12px rgba(91,79,233,0.3)' }}
                >
                    Hire Me
                </a>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-[5px] p-2"
                    onClick={() => setMenuOpen(p => !p)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-0.5 bg-[#111110] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-[#111110] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-[#111110] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#E4E4DF] shadow-lg py-4 px-6 flex flex-col gap-2">
                    {NAV_LINKS.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={600}
                            offset={-62}
                            onClick={() => setMenuOpen(false)}
                            className={`px-3 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all ${activeSection === link.to ? 'bg-[#EEF0FF] text-[#5B4FE9]' : 'text-[#5C5C57]'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => { setMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="mt-2 text-center px-4 py-2 rounded-lg text-sm font-semibold text-white"
                        style={{ background: '#5B4FE9' }}
                    >
                        Hire Me
                    </a>
                </div>
            )}
        </nav>
    );
}
