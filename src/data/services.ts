export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Protocol Architecture",
    description:
      "End-to-end design of decentralized protocols with cryptographic verification, incentive alignment, and fault tolerance built in from day one.",
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
  },
  {
    title: "P2P Networking",
    description:
      "Peer-to-peer network design and optimization. We wrote the first libp2p circuit-relay and shipped nim-libp2p with the Nimbus beacon chain.",
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>',
  },
  {
    title: "Zero-Knowledge Systems",
    description:
      "Design and implementation of ZK proof systems for data verification, storage proofs, and privacy-preserving protocols.",
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1"/></svg>',
  },
  {
    title: "Data Availability",
    description:
      "Led critical DAS networking research with the Ethereum Foundation. We design data availability solutions for L2s and rollups.",
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 7h-9M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>',
  },
  {
    title: "Token Economics",
    description:
      "Incentive mechanism design for multi-stakeholder systems. Dual-token models, operator economics, and on-chain marketplace architecture.",
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>',
  },
  {
    title: "Technical Due Diligence",
    description:
      "Architecture audits, protocol reviews, and technical assessments for decentralized infrastructure projects and their investors.",
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><path d="M8 7h8M8 11h6"/></svg>',
  },
];
