
import { Stack, ToggleButton } from "@mui/material";


// ----------------------------------------------------------------------

const SERVICES = [
    "Healthcare Recruitment",
    "IT Recruitment Services",
    "Embedded Software Services",
    "Web Development Services",
    "Cloud Services",
    "Resourcing & Talent",
];


// ----------------------------------------------------------------------

export default function ContactForm() {


    return (

        <Stack spacing={2.5} alignItems="flex-start">
            {/* <Stack direction="row" flexWrap="wrap">
                {SERVICES.map((service) => (
                    <ToggleButton
                        value={service}
                        key={service}
                        color="standard"
                        sx={{
                            py: 0.5,
                            px: 2,
                            m: 0.5,
                            typography: "body2",
                            "&.Mui-selected": {
                                bgcolor: "text.primary",
                                borderColor: "transparent",
                                color: (theme) =>
                                    theme.palette.mode === "light"
                                        ? "common.white"
                                        : "grey.800",
                                "&:hover": {
                                    bgcolor: "text.primary",
                                },
                            },
                        }}
                    >
                        {service}
                    </ToggleButton>
                ))}
            </Stack> */}
            <Stack width={1}>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScVl8C7tz-G9t8uioy1qkrBfDV_wYsSGJ3XUrwtkPGIn0bJdA/viewform?usp=sf_link"
                    width="100%"
                    height="500px"
                    style={{ border: "none" }}
                    allowFullScreen
                />
            </Stack>
        </Stack>


    );
}
