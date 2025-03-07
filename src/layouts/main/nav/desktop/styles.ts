// @mui
import { styled } from '@mui/material/styles';
import { Paper, ListSubheader, ListItemButton } from '@mui/material';
//
import { NavItemProps } from '../types';

// ----------------------------------------------------------------------

type StyledNavItemProps = Omit<NavItemProps, 'item'>;


export const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open' && prop !== 'subItem',
})<StyledNavItemProps>(({ active, open, subItem, theme }) => {


  return {
    ...theme.typography.body2,
    padding: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    transition: theme.transitions.create(['left', 'color', 'opacity'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),



    // Sub-item styles
    ...(subItem && {
      color: theme.palette.text.secondary,
      // Hover styles
      '&:hover': {
        opacity: 0.8,
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        fontWeight: 'bold',
        left: 25,
        '& .chevron-icon': {
          opacity: 1,
        },

      },

    }),


    // Active item styles
    ...(active && {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightSemiBold,
    }),

    // Active sub-item styles
    ...(active &&
      subItem && {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightSemiBold,

    }),

    // Open styles
    ...(open && {
      opacity: 0.48,
    }),

    // Main menu item (no pseudo-element)
    ...(!subItem && {
      '&::before': {
        content: 'none',
      },
    }),
  };
});




// ----------------------------------------------------------------------

export const StyledMenu = styled(Paper)(({ theme }) => ({
  top: 72,
  width: '100%',
  borderRadius: 0,
  position: 'fixed',
  zIndex: theme.zIndex.modal,
  boxShadow: theme.customShadows.dialog,
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export const StyledSubheader = styled(ListSubheader)(({ theme }) => ({
  ...theme.typography.h6,
  padding: 0,
  color: theme.palette.text.secondary,
  backgroundColor: 'transparent',
}));
