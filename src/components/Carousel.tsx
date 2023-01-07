import { Image, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';

type ImageProps = {
  image: string;
  title: string;
}[];

type CarouselProps = {
  data: ImageProps;
};

function CardsCarousel({ data }: CarouselProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title} sx={{ height: 400 }}>
      <Image
        src={item.image}
        alt={item.title}
        height={400}
        styles={{
          imageWrapper: {
            height: 400,
          },
          image: {
            borderRadius: 32,
          },
        }}
      />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize='50%'
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap='xl'
      align='start'
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}

export default CardsCarousel;
