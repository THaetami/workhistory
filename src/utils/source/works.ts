// Define the interface for the data structure
export interface WorkData {
    id: number;
    title: string;
    company: string;
    started: string;
    ended: string | null;
    description?: string | null;
}

// Function to get data
const getData = (): WorkData[] => {
  return [
    {
        id: 1571875200000,
        title: 'Operator Produksi',
        company: 'PT Roda Prima Lancar',
        started: 'Aug 2019',
        ended: 'Oct 2019',
        description: 'Menyiapkan Material, Mengoperasikan Mesin, Menjaga Kualitas Produksi, Bekerja Sesuai Target, dan Memastikan kebersihan Lingkungan Kerja',
    },
    {
        id: 1595664000000,
        title: 'Staff',
        company: 'NOTARIS DAN PPAT BURHANUDIN, S.H., M.Kn.',
        started: 'Sep 2017',
        ended: 'Nov 2018',
        description: `<div>- Menyiapkan segala keperluan akad kredit yang berurusan baik dengan bank, developer maupun dengan lembaga keuangan bukan bank (mulai dari membuat akta-akta notaril, sampai dengan memasang hak tanggungan terhadap jaminan berupa tanah di kantor badan pertanahan nasional). </div><div>- Mengurus perijian berusaha suatu badan usaha, baik PT, CV, maupun PO. </div><div>- Mendaftarkan PT, YAYASAN, PERKUMPULAN, dan KOPERASI agar mendapatkan pengesahan dari KEMENKUMHAM maupun Kementrian Koperasi.</div>`
    },
  ];
};

export { getData };
