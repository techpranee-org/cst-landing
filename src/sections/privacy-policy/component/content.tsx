// @mui
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';
import { Stack } from '@mui/system';
// components

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const ulSections = [
  {
    title: "Introduction",
    head: "",
    content: [
      "California SoftTech Inc respects your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and share information when you use our website, services, or interact with us.",
    ],
  },
  {
    title: "Information We Collect",
    head: "We may collect the following types of personal information:",
    content: [
      "Name, email address, phone number, and business details",
      "Billing and payment information",
      "Technical data (IP address, browser type, operating system)",
      "Any other information you provide voluntarily",
    ],
  },
  {
    title: "How We Use Your Information",
    head: "We use your information to:",
    content: [
      "Provide, manage, and improve our IT consultancy services",
      "Communicate with you about your projects and inquiries",
      "Process payments and invoices",
      "Ensure security and compliance with legal requirements",
      "Send marketing communications (with opt-out options)"
    ],
  },
  {
    title: "How We Share Your Information",
    head: "We do not sell your personal data. However, we may share information with:",
    content: [
      "Third-party service providers (e.g., cloud hosting, payment processors)",
      "Legal authorities when required by law",
      "Business partners with your consent",
    ],
  },

  {
    title: "SMS Consent and Messaging Compliance",
    head: "",
    content: [
      "SMS Consent: We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. We may share your Personal Data, including your SMS opt-in or consent status, with third parties that help us provide our messaging services, including but not limited to platform providers, phone companies, and any other vendors who assist us in the delivery of text messages.",
      "All of the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.",
    ],
  },

  {
    title: "Data Security",
    head: "",
    content: [
      "We implement industry-standard security measures to protect your personal data from unauthorized access, use, or disclosure.",
    ],
  },

  {
    title: "Your Rights",
    head: "Depending on your location, you may have the right to:",
    content: [
      "Access, update, or delete your data",
      "Opt out of marketing communications",
      "Restrict or object to data processing",
      "Request data portability",
    ],
  },

  {
    title: "Cookies & Tracking Technologies",
    head: "",
    content: [
      "We use cookies to enhance user experience, analyze site traffic, and improve services. You can manage cookie preferences in your browser settings.",
    ],
  },

  {
    title: "Third-Party Links",
    head: "",
    content: [
      "Our website may contain links to third-party sites. We are not responsible for their privacy policies.",
    ],
  },

  {
    title: "Changes to This Policy",
    head: "",
    content: [
      "We may update this Privacy Policy from time to time. The latest version will always be available on our website.",
    ],
  },
];



export default function PrivacyPolicyContent() {
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

        </Typography>
      </Stack>


    </Container>
  );
}
