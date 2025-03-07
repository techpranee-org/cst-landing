import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Link } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
//
import { NavItemProps } from '../types';
import { StyledNavItem } from './styles';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// ----------------------------------------------------------------------

export const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  ({ item, open, active, subItem, isExternalLink, ...other }, ref) => {
    const { title, path, children } = item;

    const renderContent = (
      <StyledNavItem
        ref={ref}
        disableRipple
        subItem={subItem}
        active={active}
        open={open}
        {...other}
      >
         <ChevronRightIcon
          className="chevron-icon"
          sx={{
            position: 'absolute',
            left: -30,
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 22,
            color: 'text.secondary',
            opacity: 0,
          }}
        />
        {title}

        {!!children && <Iconify width={16} icon="carbon:chevron-down" sx={{ ml: 1 }} />}

      </StyledNavItem>
    );

    // ExternalLink
    if (isExternalLink) {
      return (
        <Link href={path} target="_blank" rel="noopener" color="inherit" underline="none">
          {renderContent}
        </Link>
      );
    }

    // Has child
    if (children) {
      return renderContent;
    }

    // Default
    return (
      <Link component={NextLink} href={path} color="inherit" underline="none">
        {renderContent}
      </Link>
    );
  }
);
