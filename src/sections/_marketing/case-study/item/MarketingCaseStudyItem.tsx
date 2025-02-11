// next
import NextLink from "next/link";
// @mui
import { Stack, Typography, Link } from "@mui/material";
// routes
import { paths } from "src/routes/paths";
// types
import { ICaseStudyProps } from "src/types/case-study";
// components
import Image from "src/components/image";
import TextMaxLine from "src/components/text-max-line";

// ----------------------------------------------------------------------

// type Props = {
//   project: ICaseStudyProps;
// };

export default function MarketingCaseStudyItem({ eachPro }: any) {
  const { attributes } = eachPro;
  const mainImageUrl = eachPro?.attributes?.images?.data?.[0]?.attributes?.url;
  // console.log("eachPro",eachPro)
  return (
    <div>
      {attributes.Category === "logo" ? (
        <div>
          <Image
            src={mainImageUrl}
            alt={attributes.Name}
            sx={{ borderRadius: 2 }}
          />

          <Stack spacing={1} sx={{ pb: 3, px: 2.5 }}>
            <Typography variant="overline" sx={{ color: "text.disabled" }}>
              {attributes.Category}
            </Typography>

            <TextMaxLine variant="h5" line={1}>
              {attributes.Name}
            </TextMaxLine>
          </Stack>
        </div>
      ) : (
        <div>
          <Link
            component={NextLink}
            href={`/portfolio/${eachPro?.attributes?.slug}`}
            color="inherit"
          >
            <Image
              src={mainImageUrl}
              alt={attributes.Name}
              sx={{ borderRadius: 2 }}
            />
          </Link>
          <Stack spacing={1} sx={{ pb: 3, px: 2.5 }}>
            <Typography variant="overline" sx={{ color: "text.disabled" }}>
              {attributes.Category}
            </Typography>

            <Link
              component={NextLink}
              href={`/portfolio/${eachPro?.attributes?.slug}`}
              color="inherit"
            >
              <TextMaxLine variant="h5" line={1}>
                {attributes.Name}
              </TextMaxLine>
            </Link>
          </Stack>
        </div>
      )}
    </div>
  );
}
