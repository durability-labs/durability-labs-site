export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  github?: string;
  twitter?: string;
}

export const team: TeamMember[] = [
  {
    name: "Dmitriy Ryajov",
    role: "CEO & Founder",
    bio: "Early IPFS & libp2p core contributor. Wrote the first libp2p circuit-relay. Built nim-libp2p for the Nimbus beacon chain. Led DAS networking research with the Ethereum Foundation.",
    avatar: "https://github.com/dryajov.png",
    github: "https://github.com/dryajov",
    twitter: "https://x.com/dryajov",
  },
  {
    name: "Jessie Santiago",
    role: "COO & Co-Founder",
    bio: "MSc Electrical Engineering. NASA-funded robotics researcher. Crypto native since 2017. Co-host of TheBitcoinPodcast and HashingItOut. Leads community and growth.",
    avatar: "https://github.com/jessiebroke.png",
    github: "https://github.com/jessiebroke",
    twitter: "https://x.com/jessiebroke",
  },
  {
    name: "Mark Spanbroek",
    role: "CTO & Co-Founder",
    bio: "MSc Computer Science. 15+ years shipping production software. Led engineering at Philips (Hue, Sonicare). Implemented early MPC algorithms. Architects the Archivist marketplace.",
    avatar: "https://github.com/markspanbroek.png",
    github: "https://github.com/markspanbroek",
  },
  {
    name: "Slava Doina",
    role: "Systems Engineer",
    bio: "Systems engineer specializing in low-level infrastructure, distributed systems optimization, and resilient network design for decentralized protocols.",
    avatar: "https://github.com/veaceslavdoina.png",
    github: "https://github.com/veaceslavdoina",
  },
  {
    name: "Ben Bierens",
    role: "Systems Engineer",
    bio: "Systems engineer focused on erasure coding, storage verification, and building the core infrastructure that powers Archivist's decentralized storage network.",
    avatar: "https://github.com/benbierens.png",
    github: "https://github.com/benbierens",
  },
];
