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
    url: 'https://usthing.xyz/',
    startDate: '2021-09-22',
    endDate: '2022-06-15',
    summary: 'USThing is an all-in-one app solution that offers comprehensive IT services at HKUST. As a member of the development team, our mission is to maintain, innovate, and surpass existing solutions while addressing the specific needs of students to enhance their overall experiences.',
    highlights: [
      'Conducted user research and surveys to gain insights into potential needs and identify flaws in the app.',
      'Redesigned the framework and user interface for the new version, focusing on improving usability and user experience.',
      'Facilitated discussions and brainstorming sessions to generate innovative ideas for new student-focused functions.',
    ],
  },
];

export default work;
