// @mui
import { Container, Grid } from "@mui/material";
// routes
import { paths } from "src/routes/paths";
// _mock
import { _caseStudies, _testimonials } from "src/_mock";
import { useEffect, useState } from 'react';
import axios from 'axios';
// components
import Image from "src/components/image";
import Markdown from "src/components/markdown";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";
//
import NewsletterMarketing from "../../newsletter/marketing";
import TestimonialMarketing from "../../testimonial/marketing";
import { MarketingLandingFreeSEO } from "../landing";
import { MarketingCaseStudyListSimilar } from "../case-study/list";
import {
  MarketingCaseStudyDetailsSummary,
  MarketingCaseStudyDetailsGallery,
} from "../case-study/details";

// ----------------------------------------------------------------------

const _mockCaseStudy = _caseStudies[0];

interface ProjectData {
  attributes: {
    Name: string;
    images: {
      data: {
        attributes: {
          images: {
            data: {
              attributes: {
                url: string;
              };
            }[];
          };
        };
      }[];
    };
  };
}

export default function MarketingCaseStudyView({ projectData }: { projectData: any }) {
  const [dataArray, setDataArray] = useState<any[]>([]);
  const [gallery, setGallery] = useState<string[]>([]);
  return (
    <>
      <Container
        sx={{
          overflow: "hidden",
          pt: 5,
          pb: { xs: 10, md: 15 },
        }}
      >
        {/* PortImage */}
        <Image
          alt="hero"
          src={projectData[0]?.attributes?.images?.data?.map(
            (image: any) => {
              return image?.attributes?.url;
            }
          )[0]}
          width={600}
          height={400}
          sx={{ borderRadius: 2 }}
        />

        <CustomBreadcrumbs
          sx={{ my: 5 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Projects", href: "/portfolio" },
            { name: projectData[0]?.attributes?.Name },
          ]}
        />
            
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          direction={{ md: "row-reverse" }}
        >
          <Grid item xs={12} md={4}>
            <MarketingCaseStudyDetailsSummary projectData={projectData[0]} />
          </Grid>

          <Grid item xs={12} md={8}>
            <Markdown data={projectData[0]} />
            <MarketingCaseStudyDetailsGallery
              images={projectData[0]?.attributes?.images?.data?.map(
                (image: any) => {
                  return image?.attributes?.url;
                }
              )}
            />
          </Grid>
        </Grid>
      </Container>

      {/* <TestimonialMarketing testimonials={_testimonials} */}

      {/* <MarketingCaseStudyListSimilar caseStudies={_caseStudies.slice(0, 3)} /> */}

      <MarketingLandingFreeSEO />

      <NewsletterMarketing />
    </>
  );
}
