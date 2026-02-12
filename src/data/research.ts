export interface ResearchPaper {
  title: string;
  date: string;
  tags: string[];
  authors: string;
  summary: string;
  url: string;
}

export const research: ResearchPaper[] = [
  {
    title: "PeerDAS: A Simpler DAS Approach Using Battle-Tested P2P Components",
    date: "Sep 2023",
    tags: ["DAS", "P2P", "Ethereum"],
    authors: "Dmitriy Ryajov, Csaba Kiraly",
    summary:
      "Proposes a simplified data availability sampling design leveraging existing peer-to-peer networking primitives, reducing complexity while maintaining security guarantees.",
    url: "https://ethresear.ch/t/peerdas-a-simpler-das-approach-using-battle-tested-p2p-components/16541",
  },
  {
    title: "Big Block Diffusion and Organic Big Blocks on Ethereum",
    date: "Nov 2023",
    tags: ["Scaling", "Blocks", "Ethereum"],
    authors: "Csaba Kiraly, Dmitriy Ryajov",
    summary:
      "Analyzes how larger blocks can propagate efficiently through Ethereum's network using diffusion-based approaches, enabling organic block size increases.",
    url: "https://ethresear.ch/t/big-block-diffusion-and-organic-big-blocks-on-ethereum/17346",
  },
  {
    title: "LossyDAS: Lossy Incremental and Diagonal Sampling for Data Availability",
    date: "Mar 2024",
    tags: ["DAS", "Sampling", "Ethereum"],
    authors: "Csaba Kiraly, Dmitriy Ryajov",
    summary:
      "Introduces a lossy sampling technique that incrementally builds confidence in data availability while reducing bandwidth requirements for light nodes.",
    url: "https://ethresear.ch/t/lossydas-lossy-incremental-and-diagonal-sampling-for-data-availability/18963",
  },
  {
    title: "FullDAS: Towards Massive Scalability with 32MB Blocks and Beyond",
    date: "May 2024",
    tags: ["DAS", "Scaling", "Ethereum"],
    authors: "Csaba Kiraly, Dmitriy Ryajov",
    summary:
      "Presents a full data availability sampling design targeting 32MB+ blocks, pushing Ethereum's data throughput to new limits while preserving decentralization.",
    url: "https://ethresear.ch/t/fulldas-towards-massive-scalability-with-32mb-blocks-and-beyond/19529",
  },
  {
    title: "Full DAS Sampling Analysis",
    date: "Nov 2024",
    tags: ["DAS", "Analysis", "Ethereum"],
    authors: "Csaba Kiraly, Dmitriy Ryajov",
    summary:
      "A comprehensive analysis of full DAS sampling parameters, trade-offs, and performance characteristics under various network conditions.",
    url: "https://ethresear.ch/t/full-das-sampling-analysis/20912",
  },
  {
    title: "Improving DAS Performance with GossipSub Batch Publishing",
    date: "Feb 2025",
    tags: ["DAS", "GossipSub", "Performance"],
    authors: "Csaba Kiraly, Dmitriy Ryajov",
    summary:
      "Proposes batch publishing optimizations for GossipSub to significantly improve DAS message propagation latency and throughput.",
    url: "https://ethresear.ch/t/improving-das-performance-with-gossipsub-batch-publishing/21713",
  },
  {
    title: "A New Design for DAS and Sharded Blob Mempools",
    date: "Jun 2025",
    tags: ["DAS", "Mempool", "Sharding"],
    authors: "Csaba Kiraly, Dmitriy Ryajov",
    summary:
      "Introduces a novel DAS architecture with sharded blob mempools, decoupling data availability from consensus for improved scalability.",
    url: "https://ethresear.ch/t/a-new-design-for-das-and-sharded-blob-mempools/22537",
  },
  {
    title: "On the Future of the Blob Mempool",
    date: "Jun 2025",
    tags: ["Mempool", "Blobs", "Ethereum"],
    authors: "Csaba Kiraly, Dmitriy Ryajov",
    summary:
      "Explores the evolution of Ethereum's blob mempool design, addressing scalability challenges and proposing forward-looking architectural improvements.",
    url: "https://ethresear.ch/t/on-the-future-of-the-blob-mempool/22613/6",
  },
];
