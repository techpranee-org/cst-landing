//pages/sitemap.xml.js
const BASE_URL = "https://techpranee.com";
const BLOG_DATA_URL =
  "https://content.techpranee.com/api/tp-blogs?populate=%2A";
const PORTFOLIO_DATA_URL =
  "https://content.techpranee.com/api/tp-projects?pagination%5BpageSize%5D=100&populate=%2A";
function escapeXml(unsafe: any) {
  return unsafe.replace(/[<>&'"]/g, function (c: any) {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
    }
  });
}
import { navConfig } from "src/layouts/main/nav";

const extractNames = (arr: any) => {
  const namesSet = new Set<string>();

  for (let obj of arr) {
    if (obj.path) {
      if (obj.path !== "/pages") {
        namesSet.add(obj.path);
      }
    }
    if (obj.children && Array.isArray(obj.children)) {
      for (let child of obj.children) {
        if (child.path) {
          namesSet.add(child.path);
        }
        if (child.items && Array.isArray(child.items)) {
          const childNames = extractNames(child.items);
          childNames.forEach((item) => namesSet.add(item));
        }
      }
    }
  }

  // Convert the set to an array for consistency and return
  return Array.from(namesSet);
};

const STATIC_URLS = extractNames(navConfig);

function generateSiteMap(blogs: any, portfolios: any) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
          <loc>${`${BASE_URL}`}</loc>
      </url>
      <url>
          <loc>https://techpranee.com/privacy</loc>
      </url>
     ${STATIC_URLS.map((url) => {
       return `
      <url>
          <loc>${`${BASE_URL}${url}`}</loc>
      </url>
    `;
     }).join("")}
     ${blogs
       .map((post: any) => {
         return `
       <url>
           <loc>${`${BASE_URL}/blog/${escapeXml(
             post?.attributes?.title
           )}`}</loc>
       </url>
     `;
       })
       .join("")}
     ${portfolios
       .map((project: any) => {
         return `
     <url>
         <loc>${`${BASE_URL}/portfolio/${project?.id}`}</loc>
     </url>
   `;
       })
       .join("")}
    </urlset>
   `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  try {
    const [blogResponse, portfolioResponse] = await Promise.all([
      fetch(BLOG_DATA_URL),
      fetch(PORTFOLIO_DATA_URL),
    ]);

    const [blogData, portfolioData] = await Promise.all([
      blogResponse.json(),
      portfolioResponse.json(),
    ]);

    const sitemap = generateSiteMap(blogData.data, portfolioData.data);

    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error as needed
    res.status(500).end();
    return {
      props: {},
    };
  }
}

export default SiteMap;
