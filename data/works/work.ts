export interface Work {
  id: string;
  title: string;
  type: 'essay' | 'book' | 'article' | 'project' | 'poetry' | 'research' | 'presentation';
  description: string;
  date: string;
  url: string;
  tags: string[];
}

export const works: Work[] = [
//  {
//    id: 'esej-001',
//    title: 'Uvod u 3D printanje',
//    type: 'essay',
//    description: 'Uvod u 3D printanje, dio radionice u Gradskoj knjižnici Požega "3D printanje i 3D modeliranje"',
//    date: '2026-3-30',
//    url: 'https://docs.google.com/document/d/1/edit',
//    tags: ['tehnologija', 'radionica', 'uvodni rad', '3D printanje'],
//  },
//  {
//    id: 'esej-002',
//    title: 'Osnove 3D Printanja',
//    type: 'essay',
//    description: 'Osnove, 3D Printanja, o tehnologiji,mogućnostina, nedostaticima i sposobnostima.',
//    date: '2026-3-30',
//    url: 'https://docs.google.com/document/d/1/edit',
//    tags: ['tehnologija', 'radionica', 'esej', '3D Printanje']
//  },
    {
      id: 'presentation-001',
      title: '3D Printanje i 3D modeliranje',
      type: 'presentation',
      description: 'Prezentacija o 3D printanju i 3D modeliranju, dio radionice u Gradskoj knjižnici Požega "3D printanje i 3D modeliranje"',
      date: '2026-3-30',
      url: 'https://drive.google.com/file/d/1DzOV9YmwO13sN_DKrGb6GATiThIRJVXA/view?usp=sharing',
      tags: ['tehnologija', 'radionica', 'prezentacija', '3D printanje', '3D modeliranje']
    }
];