// @mui
import { Typography, Container, Box, List, ListItem, ListItemText } from '@mui/material';
import { Stack } from '@mui/system';
// components

// ----------------------------------------------------------------------

const ulSections = [
  {
    title: "Introduction",
    head: "",
    content: [
      "These Terms & Conditions (“Terms”) govern your use of California SoftTech Inc's IT consultancy services and website. By using our services, you agree to these Terms.",
    ],
  },
  {
    title: "Services Provided",
    head: "",
    content: [
      "California SoftTech Inc provides IT consulting, software development, cloud solutions, and related services. Service details will be outlined in project contracts or agreements.",
    ],
  },
  {
    title: "User Responsibilities",
    head: "By using our services, you agree to:",
    content: [
      "Provide accurate information",
      "Comply with all applicable laws and regulations",
      "Not misuse our services (e.g., hacking, unauthorized access)",
    ],
  },
  {
    title: "Intellectual Property",
    head: "",
    content: [
      "We retain ownership of any proprietary software, code, or documentation unless otherwise agreed.",
      "Clients may receive a license to use deliverables under specific terms.",
    ],
  },

  {
    title: "Confidentiality",
    head: "",
    content: [
      "Both parties agree to keep confidential information private and not disclose it to third parties without consent.",
    ],
  },

  {
    title: "Limitation of Liability",
    head: "We are not liable for:",
    content: [
      "Indirect or consequential damages",
      "Data loss, cyberattacks, or service interruptions",
      "Any third-party actions affecting our services",
    ],
  },

  {
    title: "Termination",
    head: "",
    content: [
      "We may terminate services if you breach these Terms, fail to make payments, or misuse our services.",
    ],
  },

  {
    title: "Dispute Resolution",
    head: "",
    content: [
      "Any disputes shall be resolved through negotiation, and if unresolved, through arbitration in Michigan State, USA.",
    ],
  },

  {
    title: "Changes to Terms",
    head: "",
    content: [
      "We may update these Terms at any time. The latest version will always be available on our website.",
    ],
  },
];

// ----------------------------------------------------------------------

export default function TermsAndConditionsContent() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >

      {ulSections.map((section, index) => (
        <Stack
          key={index}
          justifyContent={'flex-start'}
          alignItems={'start'}
          px={{ xs: 5, md: 10 }}
          my={3}
        >
          {/* Title */}
          <Typography
            color={'text.primary'}
            textAlign={'start'}
            fontSize={35}
            fontWeight={500}
            mb={1}
          >
            {section.title}
          </Typography>

          {/* Head (Only if it exists) */}
          {section.head && (
            <Typography
              color={'text.secondary'}
              textAlign={'start'}
              fontSize={20}
              fontWeight={600}
            >
              {section.head}
            </Typography>
          )}

          {/* Content - Render as <ul> if multiple items, otherwise as normal text */}
          {section.content.length > 1 ? (
            <List sx={{ paddingLeft: 2 }}> {/* Adds some left padding for better alignment */}
              {section.content.map((item, i) => (
                <ListItem key={i} sx={{ display: "flex", alignItems: "flex-start", padding: "4px 0" }}>
                  <Typography sx={{ fontSize: 20, mr: 1, lineHeight: "1.5", color: 'text.secondary' }}>•</Typography>
                  <ListItemText primary={item} sx={{ margin: 0, color: 'text.secondary' }} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography color={'text.secondary'} textAlign={'start'} fontSize={20}>
              {section.content[0]}
            </Typography>
          )}
        </Stack>
      ))}

      <Stack
        justifyContent={'flex-start'}
        alignItems={'start'}
        px={{ xs: 5, md: 10 }}
        my={3}
      >
        <Typography
          color={'text.primary'}
          textAlign={'start'}
          fontSize={35}
          fontWeight={500}
          mb={1}
        >
          Contact Us
        </Typography>

        <Typography
          color={'text.secondary'}
          textAlign={'start'}
          fontSize={20}
          fontWeight={400}
        >
          For questions regarding this Privacy Policy, contact us at:
          <List>
            <ListItem sx={{ display: "flex", alignItems: "flex-start", padding: "4px 0" }}>
              <ListItemText primary={'California SoftTech Inc'} sx={{ margin: 0, color: 'text.secondary' }} />
            </ListItem>
            <ListItem sx={{ display: "flex", alignItems: "flex-start", padding: "4px 0" }}>
              <ListItemText primary={'5600 West Maple Rd, Suite C307, West Bloomfield, MI 48322'} sx={{ margin: 0, color: 'text.secondary' }} />
            </ListItem>
            <ListItem sx={{ display: "flex", alignItems: "flex-start", padding: "4px 0" }}>
              <ListItemText primary={'info@calisofttech.com'} sx={{ margin: 0, color: 'text.secondary' }} />
            </ListItem>
            <ListItem sx={{ display: "flex", alignItems: "flex-start", padding: "4px 0" }}>
              <ListItemText primary={'+1 248 416 0457'} sx={{ margin: 0, color: 'text.secondary' }} />
            </ListItem>
          </List>
          For more details, please review our Terms & Conditions page.
        </Typography>
      </Stack>

    </Container>
  );
}
