import { useEffect, useState } from 'react';

const LINES = [
    { text: 'monika@dev ~ $ cat intro.json', type: 'command', delay: 400 },
    { text: '{', type: 'bracket', delay: 900 },
    { text: '  "name": "Monika Jakhar",', type: 'line', key: 'name', delay: 1100 },
    { text: '  "role": "Frontend Developer",', type: 'line', key: 'role', delay: 1350 },
    { text: '  "status": "available_for_opportunities"', type: 'line', key: 'status', delay: 1850 },
    { text: '}', type: 'bracket', delay: 2100 },
    { text: 'monika@dev ~ $ ', type: 'prompt', delay: 2400 },
];

function highlight(text, type) {
    if (type === 'command') return <span className="text-[#89DCEB]">{text}</span>;
    if (type === 'bracket') return <span className="text-[#CDD6F4]">{text}</span>;
    if (type === 'prompt') return (
        <span>
            <span className="text-[#89DCEB]">{text}</span>
            <span className="cursor-blink text-[#CDD6F4]">█</span>
        </span>
    );
    // line: key in cyan, string value in green, other values in red
    const keyVal = text.match(/^(\s*"([^"]+)":\s*)("([^"]*)"|([\w_]+)),?(.*)$/);
    if (!keyVal) return <span className="text-[#CDD6F4]">{text}</span>;
    const [, prefix, , , strVal, rawVal, trailing] = keyVal;
    const isComma = text.trim().endsWith(',');
    return (
        <span>
            <span className="text-[#89DCEB]">{text.match(/^\s*/)[0] + '"' + keyVal[2] + '"'}</span>
            <span className="text-[#CDD6F4]">{': '}</span>
            {strVal !== undefined ? (
                <span className="text-[#A6E3A1]">&quot;{strVal}&quot;</span>
            ) : (
                <span className="text-[#F38BA8]">{rawVal}</span>
            )}
            {isComma && <span className="text-[#CDD6F4]">,</span>}
        </span>
    );
}

export default function Terminal() {
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const timers = LINES.map(line =>
            setTimeout(() => setVisible(v => [...v, line.text]), line.delay)
        );
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div
            className="rounded-xl overflow-hidden shadow-xl w-full"
            style={{ maxWidth: 600, fontFamily: '"JetBrains Mono", monospace' }}
        >
            {/* Header bar */}
            <div
                className="flex items-center px-4 py-3 gap-2"
                style={{ background: '#2A2A3E' }}
            >
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="flex-1 text-center text-xs text-[#6E6C8A]">monika@portfolio ~ bash</span>
            </div>
            {/* Body */}
            <div
                className="px-5 py-4 min-h-[180px] text-sm leading-relaxed"
                style={{ background: '#1E1E2E' }}
            >
                {LINES.map((line) => (
                    <div
                        key={line.text}
                        className="transition-all duration-300"
                        style={{ opacity: visible.includes(line.text) ? 1 : 0, minHeight: '1.6em' }}
                    >
                        {visible.includes(line.text) && highlight(line.text, line.type)}
                    </div>
                ))}
            </div>
        </div>
    );
}
