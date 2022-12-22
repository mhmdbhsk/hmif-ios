import {
  DiklatLogo,
  EkokeuLogo,
  KominfoLogo,
  LitbangLogo,
  PengurusHarianLogo,
  PSDMLogo,
  SenioraLogo,
  SosialLogo,
} from '@/assets/DivisionLogo';

const DivisionLinks = [
  {
    title: 'Pengurus Harian',
    description:
      'PH adalah kepala. Kepala yang selalu bekerja, menyusun rencana dan memikir segalanya.',
    icon: <PengurusHarianLogo />,
    path: '/organization/division/pengurus-harian',
    color: '#DFDFFA',
    isBigger: true,
  },
  {
    title: 'Litbang',
    description:
      'Mata yang tajam untuk melihat aktivitas dan Telinga yang peka untuk mendengar segala keluh kesah',
    icon: <LitbangLogo />,
    path: '/organization/division/litbang',
    color: '#DFDFFA',
  },
  {
    title: 'Kominfo',
    description:
      'Kominfo merupakan mulut. Mulut yang senantiasa bertutur kata, dalam mengemas informasi yang berkualitas',
    icon: <KominfoLogo />,
    path: '/organization/division/kominfo',
    color: '#DFDFFA',
  },
  {
    title: 'PSDM',
    description:
      'PSDM adalah Jantung. Jantung yang memberikan kehidupan, kehidupan dengan tatanan dan harapan',
    icon: <PSDMLogo />,
    path: '/organization/division/pengembangan-sumber-daya-manusia',
    color: '#DFDFFA',
  },
  {
    title: 'Seniora',
    description:
      'Seniora adalah badan. Badan yang tegak lurus berjalan,  menapak arah dan tujuan',
    icon: <SenioraLogo />,
    path: '/organization/division/seniora',
    color: '#DFDFFA',
  },
  {
    title: 'Sosial',
    description:
      'Sosial adalah hati. Hati yang peka untuk merasa. Merasakan apa yang dialami dengan asa.',
    icon: <SosialLogo />,
    path: '/organization/division/sosial',
    color: '#DFDFFA',
  },
  {
    title: 'Diklat',
    description:
      'Diklat adalah tangan, tangan yang ringan dalam bertindak. Siap sedia dalam mendidik. Gigih dalam melatih',
    icon: <DiklatLogo />,
    path: '/organization/division/diklat',
    color: '#DFDFFA',
  },
  {
    title: 'Ekokeu',
    description:
      'Ekokeu adalah paru-paru, paru-paru yang rutin bernafas, bernafas demi keberjalanan kehidupan beraktifitas',
    icon: <EkokeuLogo />,
    path: '/organization/division/ekonomi-dan-keuangan',
    color: '#DFDFFA',
  },
];

export default DivisionLinks;
