export const fadeIn = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};