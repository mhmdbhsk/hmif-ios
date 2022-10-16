import { Variants, m } from 'framer-motion';
import { useRouter } from 'next/router';

type PageTransitionProps = {
  children: React.ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const router = useRouter();

  const v: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 0,
    },
  };

  return (
    <m.div
      key={router.route}
      variants={v}
      initial='hidden'
      animate='visible'
      exit='exit'
      transition={{
        duration: 0.25,
        type: 'tween',
      }}
    >
      {children}
    </m.div>
  );
};

export default PageTransition;
