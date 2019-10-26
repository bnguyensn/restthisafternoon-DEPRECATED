import { createUseStyles, useTheme } from 'react-jss';

export default function createUseStylesWithTheme(styles) {
  return props => {
    const theme = useTheme();
    const useStyles = createUseStyles(styles);
    return useStyles({ theme, ...props });
  };
}
