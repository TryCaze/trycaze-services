export const categories = {
    'poslovno': 'Poslovno',
    'it': 'IT',
    'popravci': 'Popravci',
    'postavljanje': 'Postavljanje',
    'serveri': 'Serveri',
    'web-razvoj': 'Web Razvoj',
    'vijesti': 'Vijesti',
    'tutorial': 'Tutorial',
    'recikliranje': 'Recikliranje',
    '3d-printanje': '3D Printanje',
} as const;

export type Category = keyof typeof categories;