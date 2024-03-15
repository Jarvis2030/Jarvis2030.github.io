/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Sengital Limited',
    position: 'AI research & Development intern',
    url: 'https://smileidentity.com',
    startDate: '2023-07-10',
    summary: `Sengital Limited is a Hong Kong based Technology company providing innovative business solutions. 
            The team I was in is AI & IT team, which focusing on machine learning model building and optimal solutions for client.`,
    highlights: [
      'Formulated a comprehensive machine learning strategy for a project.',
      'Conducted an in-depth analysis of client performance data, identifying crucial features for revenue prediction.',
      'Conducted rigorous testing and evaluation of candidate object detection models, including YOLOv8, PatchCore, and ResNet',
    ],
  },
  {
    name: 'HKUST Undergraduate Research Program (UROP)',
    position: 'Research Assistant',
    url: 'http://skepticalinvestments.biz',
    startDate: '2021-06-01',
    endDate: '2021-08-31',
    summary: '',
    highlights: [
      'Conducted comprehensive literature reviews to gather insights into sustainable consumption trends and challenges.',
      'Supported data collection and analysis for the experiment.',
      'Collaborated with the research team to assist in the recruitment of subjects for laboratory studies.',
    ],
  },
  {
    name: 'USThing Mobile App maintainence team',
    position: 'UX/UI designer',
    url: 'https://arthena.com',
    startDate: '2021-09-22',
    endDate: '2022-06-15',
    summary: `Arthena is a Series A Company funded by <a href="https://www.anthemis.com/">Athemis</a>,
    <a href="https://foundationcapital.com">Foundation Capital</a>, and <a href="https://ycombinator.com/">YC</a>.
    We develop quantitative strategies to predict the value of fine art and build investment products.
    I ran a 20-person product and engineering org for 8 years. We were acquired by
    <a href="https://www.masterworks.com/">Masterworks</a> in 2023.`,
    highlights: [
      'Built production, online, end-to-end optimized machine learning pipelines for time-series prediction.',
      'Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.',
      "Set and communicated team priorities that supported the broader organization's goals. Aligned strategy, processes, and decision-making across teams.",
      "Set clear expectations with individuals based on their level and role and aligned them to the broader organization's goals. Met regularly with individuals to discuss performance and development, and provided feedback and coaching.",
      'Developed the long-term technical vision and roadmap within, and often beyond, the scope of my teams. Evolved the roadmap to meet anticipated future requirements and infrastructure needs.',
    ],
  },
];

export default work;
