// @mui
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/material';
//
import StyledMarkdown from './styles';

// ----------------------------------------------------------------------

// type Props = {
//   firstLetter?: boolean;
//   content: string;
//   sx?: SxProps<Theme>;
// };

export default function Markdown({ data, firstLetter = false, sx }:any) {

  return (
    <StyledMarkdown
      firstLetter={firstLetter}
      dangerouslySetInnerHTML={{ __html: data?.attributes?.body }}
      sx={sx}
    />
  );
}
