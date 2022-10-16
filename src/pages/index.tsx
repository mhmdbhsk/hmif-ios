import { Jumbotron } from '@/components';
import { NextPageWithSeo } from '@/types/next-page-with-seo';

const Home: NextPageWithSeo = () => {
  return (
    <>
      <Jumbotron
        title={
          <span>
            Meet <br /> Diponegoro’s <br /> Informatics!
          </span>
        }
        description='Pada chapter ini kamu akan menyimak berbagai hal seputar Informatika,
          Universitas Diponegoro. Dimulai dari apa itu Departemen Informatika,
          fasilitas laboratorium, hingga fun fact dari Informatika.'
      />
    </>
  );
};

Home.title = 'Home';
Home.pageTitle = 'Home';

export default Home;
