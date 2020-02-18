import { theme } from './theme';
import { useTheme as useEmotionTheme } from 'emotion-theming';

export type Theme = typeof theme;
export const useTheme = () => useEmotionTheme<Theme>();
