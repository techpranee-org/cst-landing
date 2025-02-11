import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// @mui
import { Pagination, Tabs, Tab, Box } from "@mui/material";
// types
// import { ICaseStudyProps } from 'src/types/case-study';
//
import MarketingCaseStudyItem from "../item";
import Masonry from "@mui/lab/Masonry";

// ----------------------------------------------------------------------

// type Props = {
//   caseStudies: ICaseStudyProps[];
// };

export default function MarketingCaseStudyList({ caseStudies }: any) {
  // const [tab, setTab] = useState("All");
  const [tab, setTab] = useState<string>("all");
  const [filtered, setFiltered] = useState([]);
  const router = useRouter();
  const currentUrl = router.asPath;
  const queryParam = currentUrl.split("?")[1];

  // console.log(router, "router")
  // console.log(queryParam, "queryParam")
  // Map categories from caseStudies (use consistent letter case)
  const getCategories = caseStudies.map(
    (project: any) => project.attributes.Category
  );
  //  console.log(getCategories)

  // Use Array.from(new Set()) to get unique categories (case-sensitive)
  const categories = ["all", ...Array.from(new Set(getCategories))];
  // console.log(categories)

  // console.log(filtered)

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    router.replace(`/portfolio?${newValue.toLowerCase()}`);
    // const slug = newValue;

    // Use push instead of replace to add the category to the history stack
    // router.replace({ query: { category: slug } });
    // window.history.pushState({},"",slug)
    setTab(newValue);
  };

  useEffect(() => {
    if (queryParam) {
      const decodedQueryParam = decodeURIComponent(queryParam);
      setTab(decodedQueryParam)
    } else {
      setTab("all");
    }
  }, []);

  useEffect(() => {
    // console.log(tab);
    const filtered = applyFilter(caseStudies, tab);

    setFiltered(filtered);
  }, [tab]);

  return (
    <>
      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
        sx={{ marginBottom: "15px" }}
      >
        {categories.map((category: any) => (
          <Tab
            key={category.id}
            value={category.toLowerCase()}
            label={category}
          />
        ))}
      </Tabs>

      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        {filtered &&
          filtered.length > 0 &&
          filtered.map((project: any) => {
            return (
              <MarketingCaseStudyItem key={project.id} eachPro={project} />
            );
          })}
      </Masonry>
  
      {/* <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          pb: 10,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      /> */}
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter(arr: any, category: any) {
  if (category !== "all") {
    // console.log(arr);
    return arr.filter(
      (project: any) =>
        project.attributes.Category.toLowerCase() === category.toLowerCase()
    );
  }
  return arr;
}

function convertToSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 -]/g, "")
    .replace(/\s+/g, "-");
}
