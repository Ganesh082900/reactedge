// components/atoms/FeatureVisual.tsx

export default function FeatureVisual({ type }: { type: string }) {
    // Fleet Compliance - Radial shield/compliance icon
    if (type === "radial") {
        return (
            <svg viewBox="0 0 200 200" className="w-40 h-40 md:w-48 md:h-48">
                <defs>
                    <linearGradient id="radialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#006db7" />
                        <stop offset="100%" stopColor="#004a7c" />
                    </linearGradient>
                </defs>
                {/* Outer ring */}
                <circle cx="100" cy="100" r="90" fill="none" stroke="#006db7" strokeWidth="1" opacity="0.3" />
                <circle cx="100" cy="100" r="75" fill="none" stroke="#006db7" strokeWidth="1" opacity="0.5" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="#006db7" strokeWidth="2" opacity="0.7" />
                
                {/* Shield shape */}
                <path 
                    d="M100 30 L150 55 L150 100 C150 140 100 170 100 170 C100 170 50 140 50 100 L50 55 Z" 
                    fill="url(#radialGrad)" 
                    opacity="0.9"
                />
                
                {/* Checkmark */}
                <path 
                    d="M75 100 L92 117 L125 80" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="6" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                
                {/* Orbiting dots */}
                <circle cx="100" cy="10" r="4" fill="#f58220">
                    <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="190" cy="100" r="3" fill="#006db7" opacity="0.7">
                    <animateTransform attributeName="transform" type="rotate" from="120 100 100" to="480 100 100" dur="12s" repeatCount="indefinite"/>
                </circle>
            </svg>
        );
    }

    // Research - Sphere/globe with network nodes
    if (type === "sphere") {
        return (
            <svg viewBox="0 0 200 200" className="w-40 h-40 md:w-48 md:h-48">
                <defs>
                    <radialGradient id="sphereGrad" cx="30%" cy="30%">
                        <stop offset="0%" stopColor="#0088dd" />
                        <stop offset="100%" stopColor="#004a7c" />
                    </radialGradient>
                </defs>
                
                {/* Main sphere */}
                <circle cx="100" cy="100" r="70" fill="url(#sphereGrad)" opacity="0.9" />
                
                {/* Grid lines on sphere */}
                <ellipse cx="100" cy="100" rx="70" ry="25" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" />
                <ellipse cx="100" cy="100" rx="70" ry="50" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                <ellipse cx="100" cy="100" rx="25" ry="70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" />
                <ellipse cx="100" cy="100" rx="50" ry="70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                <line x1="30" y1="100" x2="170" y2="100" stroke="white" strokeWidth="0.5" opacity="0.3" />
                <line x1="100" y1="30" x2="100" y2="170" stroke="white" strokeWidth="0.5" opacity="0.3" />
                
                {/* Network nodes */}
                <circle cx="65" cy="75" r="6" fill="white" opacity="0.9" />
                <circle cx="130" cy="85" r="5" fill="#f58220" />
                <circle cx="90" cy="125" r="4" fill="white" opacity="0.8" />
                <circle cx="140" cy="120" r="5" fill="white" opacity="0.7" />
                
                {/* Connection lines */}
                <line x1="65" y1="75" x2="130" y2="85" stroke="white" strokeWidth="1" opacity="0.5" />
                <line x1="130" y1="85" x2="140" y2="120" stroke="white" strokeWidth="1" opacity="0.5" />
                <line x1="90" y1="125" x2="140" y2="120" stroke="white" strokeWidth="1" opacity="0.5" />
                <line x1="65" y1="75" x2="90" y2="125" stroke="white" strokeWidth="1" opacity="0.5" />
                
                {/* Highlight */}
                <circle cx="75" cy="75" r="15" fill="white" opacity="0.15" />
                
                {/* Magnifying glass accent */}
                <circle cx="155" cy="155" r="20" fill="none" stroke="#f58220" strokeWidth="3" />
                <line x1="170" y1="170" x2="185" y2="185" stroke="#f58220" strokeWidth="4" strokeLinecap="round" />
            </svg>
        );
    }

    // Cyber/EW - Dots/radar/signal pattern
    if (type === "dots") {
        return (
            <svg viewBox="0 0 200 200" className="w-40 h-40 md:w-48 md:h-48">
                <defs>
                    <linearGradient id="dotsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#006db7" />
                        <stop offset="100%" stopColor="#004a7c" />
                    </linearGradient>
                </defs>
                
                {/* Radar rings */}
                <circle cx="100" cy="100" r="85" fill="none" stroke="#006db7" strokeWidth="1" opacity="0.2" />
                <circle cx="100" cy="100" r="65" fill="none" stroke="#006db7" strokeWidth="1" opacity="0.3" />
                <circle cx="100" cy="100" r="45" fill="none" stroke="#006db7" strokeWidth="1.5" opacity="0.5" />
                <circle cx="100" cy="100" r="25" fill="none" stroke="#006db7" strokeWidth="2" opacity="0.7" />
                
                {/* Center hub */}
                <circle cx="100" cy="100" r="10" fill="url(#dotsGrad)" />
                <circle cx="100" cy="100" r="5" fill="white" opacity="0.8" />
                
                {/* Radar sweep */}
                <path d="M100 100 L100 15 A85 85 0 0 1 175 70 Z" fill="#006db7" opacity="0.15">
                    <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="4s" repeatCount="indefinite"/>
                </path>
                
                {/* Signal dots */}
                <circle cx="100" cy="45" r="4" fill="#f58220">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="145" cy="75" r="3" fill="#006db7">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="60" cy="80" r="3.5" fill="#f58220">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="130" cy="130" r="3" fill="#006db7">
                    <animate attributeName="opacity" values="1;0.4;1" dur="2.2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="70" cy="140" r="4" fill="#f58220">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="155" cy="100" r="3" fill="#006db7">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
                </circle>
                
                {/* Cross lines */}
                <line x1="100" y1="15" x2="100" y2="185" stroke="#006db7" strokeWidth="0.5" opacity="0.3" />
                <line x1="15" y1="100" x2="185" y2="100" stroke="#006db7" strokeWidth="0.5" opacity="0.3" />
                <line x1="30" y1="30" x2="170" y2="170" stroke="#006db7" strokeWidth="0.5" opacity="0.2" />
                <line x1="170" y1="30" x2="30" y2="170" stroke="#006db7" strokeWidth="0.5" opacity="0.2" />
                
                {/* Signal waves */}
                <path d="M160 60 Q175 50 180 65" fill="none" stroke="#f58220" strokeWidth="2" opacity="0.7" />
                <path d="M168 55 Q185 42 192 60" fill="none" stroke="#f58220" strokeWidth="1.5" opacity="0.5" />
            </svg>
        );
    }

    return null;
}