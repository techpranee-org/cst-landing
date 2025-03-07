// @mui
import { ToggleButton, Typography } from '@mui/material';
//
import Iconify from '../../../iconify';
import { useSettingsContext } from '../../SettingsContext';

// ----------------------------------------------------------------------

export default function ModeOptions() {
  const { themeMode, onToggleMode } = useSettingsContext();

  const isDark = themeMode === 'dark';

  return (
    <ToggleButton
      fullWidth
      color={isDark ? 'primary' : 'standard'}
      value={themeMode}
      selected={isDark}
      onChange={onToggleMode}
      sx={{
        p: 3,
        border: 0,
        borderRadius: 0,
        justifyContent: 'space-between',
        '&.Mui-selected': {
          boxShadow: 'none',
          bgcolor: 'transparent',
          ...(isDark && {
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }),
        },
      }}
    >
      <Typography variant="subtitle2"></Typography>
      <Iconify width={28} icon={isDark ? 'carbon:asleep-filled' : 'carbon:asleep'}  />
    </ToggleButton>
  );
}
