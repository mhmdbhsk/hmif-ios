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
        height: 'max-content',
      }}
    >
      <Image
        src={item.image}
        alt={item.title}
        height={600}
        styles={{
          imageWrapper: {
            height: 600,
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
        <Text opacity={0.5}>{item.description}</Text>
      </Flex>
    </Carousel.Slide>
  ));

  return (
    <div>
      <Carousel
        slideSize='100%'
        // breakpoints={[
        //   { maxWidth: 'sm', slideSize: '50%' },
        //   { maxWidth: 'md', slideSize: '50%' },
        //   { maxWidth: 'lg', slideSize: '50%' },
        //   { maxWidth: 'xl', slideSize: '50%' },
        // ]}
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
