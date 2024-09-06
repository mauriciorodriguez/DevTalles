import ImageColors from 'react-native-image-colors';

export const getColorFromImage = async (image: string) => {
  const fallbackCollor = 'grey';

  const colors = await ImageColors.getColors(image, {
    fallback: fallbackCollor,
  });

  switch (colors.platform) {
    case 'android':
      return colors.dominant ?? fallbackCollor;
    case 'ios':
      return colors.background ?? fallbackCollor;
    default:
      return fallbackCollor;
  }
};
