// Define the interface for the data structure
export interface WorkData {
    id: number;
    title: string;
    company: string;
    started: string;
    ended: string | null;
    description?: string | null;
    location?: string | null;
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
      location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.477351306029!2d106.5918377!3d-6.2005821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fef1c349a261%3A0xad75459bc948672d!2sPT.%20Roda%20Prima%20Lancar!5e0!3m2!1sen!2sid!4v1699357825117!5m2!1sen!2sid'
    },
    {
        id: 1595664000000,
        title: 'Staff',
        company: 'NOTARIS DAN PPAT BURHANUDIN, S.H., M.Kn.',
        started: 'Sep 2017',
        ended: 'Nov 2018',
        description: `<div>- Menyiapkan segala keperluan akad kredit yang berurusan baik dengan bank, developer maupun dengan lembaga keuangan bukan bank (mulai dari membuat akta-akta notaril, sampai dengan memasang hak tanggungan terhadap jaminan berupa tanah di kantor badan pertanahan nasional). </div><div>- Mengurus perijian berusaha suatu badan usaha, baik PT, CV, maupun PO. </div><div>- Mendaftarkan PT, YAYASAN, PERKUMPULAN, dan KOPERASI agar mendapatkan pengesahan dari KEMENKUMHAM maupun Kementrian Koperasi.</div>`,
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.242299291316!2d106.24821829999999!3d-6.3626793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4216d3e023b01f%3A0xecd5ad57bd0e3cb1!2sBurhanudin%2C%20SH.%2C%20M.Kn!5e0!3m2!1sen!2sid!4v1699357696389!5m2!1sen!2sid'
    },
  ];
};

export { getData };
