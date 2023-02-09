import { Flex, Image, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

type ImageProps = {
  image: string;
  title: string;
  description: string;
}[];

type CarouselProps = {
  data: ImageProps;
};

function CardsCarousel({ data }: CarouselProps) {
  const slides = data.map((item) => (
    <Carousel.Slide
      key={item.title}
      sx={{
        height: 564,
      }}
    >
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

      <Flex direction='column' gap={16} sx={{ margin: '32px 16px' }}>
        <Text size={24} weight='bold'>
          {item.title}
        </Text>
        <Text>{item.description}</Text>
      </Flex>
    </Carousel.Slide>
  ));

  return (
    <div>
      <Carousel
        slideSize='75%'
        breakpoints={[{ maxWidth: 'sm', slideSize: '75%' }]}
        slideGap='xl'
        align='start'
        slidesToScroll={1}
      >
        {slides}
      </Carousel>
    </div>
  );
}

export default CardsCarousel;
