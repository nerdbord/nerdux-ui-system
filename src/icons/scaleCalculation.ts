type scaleCalculation = (x: number, scale?: number) => number;

const scaleCalculation: scaleCalculation = (x, scale = 100) => {
  return (x / 100) * scale;
};

export default scaleCalculation;
