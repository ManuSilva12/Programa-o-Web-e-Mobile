const HEAD = <circle key="h" cx="160" cy="60" r="20" stroke="#db2777" strokeWidth="3" fill="none" />;
const BODY = <line key="b" x1="160" y1="80" x2="160" y2="140" stroke="#475569" strokeWidth="3" />;
const LEFT_ARM = <line key="la" x1="160" y1="90" x2="130" y2="120" stroke="#475569" strokeWidth="3" />;
const RIGHT_ARM = <line key="ra" x1="160" y1="90" x2="190" y2="120" stroke="#475569" strokeWidth="3" />;
const LEFT_LEG = <line key="ll" x1="160" y1="140" x2="130" y2="180" stroke="#475569" strokeWidth="3" />;
const RIGHT_LEG = <line key="rl" x1="160" y1="140" x2="190" y2="180" stroke="#475569" strokeWidth="3" />;

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

export function DesenhoForca({ numberOfGuesses }) {
  return (
    <svg height="220" width="200" className="mx-auto mb-4">
      <line x1="20" y1="200" x2="100" y2="200" stroke="#94a3b8" strokeWidth="3" />
      <line x1="60" y1="200" x2="60" y2="20" stroke="#94a3b8" strokeWidth="3" />
      <line x1="60" y1="20" x2="160" y2="20" stroke="#94a3b8" strokeWidth="3" />
      <line x1="160" y1="20" x2="160" y2="40" stroke="#94a3b8" strokeWidth="3" />
      {BODY_PARTS.slice(0, numberOfGuesses)}
    </svg>
  );
}