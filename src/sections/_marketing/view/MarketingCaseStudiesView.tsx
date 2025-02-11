// @mui
import { Container, Typography, Stack } from "@mui/material";
import { MarketingCaseStudyList } from "../case-study/list";
import NewsletterMarketing from "../../newsletter/marketing";
import { MarketingLandingFreeSEO } from "../landing";
// import { _caseStudies } from 'src/_mock';
// import type { InferGetStaticPropsType, GetStaticProps } from 'next'

// // ----------------------------------------------------------------------

export default function MarketingCaseStudiesView({ caseStudies }: any) {
  return (
    <>
      <Container>
        <Stack
          spacing={3}
          sx={{
            py: 5,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h1">Our Case Studies</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Browse our portfolio to see how we've transformed brands into
            digital success stories
          </Typography>
        </Stack>

        <MarketingCaseStudyList caseStudies={caseStudies} />
      </Container>

      <MarketingLandingFreeSEO />
      <NewsletterMarketing />
    </>
  );
}
