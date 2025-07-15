import {
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    Box,
    Chip,
    Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DownloadIcon from "@mui/icons-material/Download";
import { jobs } from "../jobs/job-data";
import { useState } from "react";

export default function CareerOpenings() {

    const [expanded, setExpanded] = useState(jobs.length > 0 ? jobs[0].id : false);

    const handleChange = (jobId: number) => (
        event: React.SyntheticEvent,
        isExpanded: boolean
    ) => {
        setExpanded(isExpanded ? jobId : false);
    };

    return (
        <Container
            sx={{
                pt: { xs: 3, md: 5 },
                pb: 10,
            }}
        >
            <Typography variant="h4" fontWeight={600} mb={4}>
                Job Openings
            </Typography>

            <Grid container spacing={3}>
                {jobs.map((job) => (
                    <Grid key={job.id} item xs={12}>
                        <Accordion
                            expanded={expanded === job.id}
                            onChange={handleChange(job.id)}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} md={2}>
                                        <Typography variant="h6">Job Id: {job.id}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Typography variant="h6">{job.title}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box display="flex" flexWrap="wrap" gap={2}>
                                            <Chip
                                                icon={<LocationOnIcon />}
                                                label={job.location}
                                                variant="outlined"
                                            />
                                            <Chip
                                                icon={<WorkOutlineIcon />}
                                                label={job.type}
                                                variant="outlined"
                                            />
                                            <Chip
                                                icon={<AccessTimeIcon />}
                                                label={job.experience}
                                                variant="outlined"
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="subtitle1" gutterBottom>
                                    Description:
                                </Typography>
                                <Typography variant="body2" color={"text.secondary"}>{job.description}</Typography>
                                <Typography variant="subtitle1" gutterBottom mt={2}>
                                    Job Duties / Responsibilities:
                                </Typography>
                                <ul >
                                    {job.responsibilities.map((duty, index) => (
                                        <li key={index}>
                                            <Typography variant="body2" color={"text.secondary"}>{duty}</Typography>
                                        </li>
                                    ))}
                                </ul>

                                <Typography variant="subtitle1" gutterBottom mt={2}>
                                    Requirements:
                                </Typography>
                                <ul>
                                    {job.requirements.map((req, index) => (
                                        <li key={index}>
                                            <Typography variant="body2" color={"text.secondary"}>{req}</Typography>
                                        </li>
                                    ))}
                                </ul>

                                <Typography variant="body2" mt={2}>
                                    <strong>Positions Available:</strong>
                                    <Box component="span" sx={{ color: 'text.secondary', ml: 2 }}>
                                        {job.positionsAvailable}
                                    </Box>
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Salary Range:</strong>
                                    <Box component="span" sx={{ color: 'text.secondary', ml: 2 }}>
                                        {job.salaryRange}
                                    </Box>
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Company:</strong>
                                    <Box component="span" sx={{ color: 'text.secondary', ml: 2 }}>
                                        {job.companyName}
                                    </Box>
                                    (<a href={job.companyWebsite} style={{ color: '#1976d2', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">Website</a>)
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Posted Date:</strong>
                                    <Box component="span" sx={{ color: 'text.secondary', ml: 2 }}>
                                        {job.jobPostedDate}
                                    </Box>
                                </Typography>
                                <Typography variant="body2" mb={2}>
                                    <strong>Expiration Date:</strong>
                                    <Box component="span" sx={{ color: 'text.secondary', ml: 2 }}>
                                        {job.jobExpirationDate}
                                    </Box>
                                </Typography>

                                <Typography variant="body2" mb={2}>
                                    <strong>How to Apply:</strong>
                                    <Box component="span" sx={{ color: 'text.secondary', ml: 2 }}>
                                        Send your resume to <a href={`mailto:${job.applicationEmail}`} style={{ color: '#1976d2', textDecoration: 'underline' }} >{job.applicationEmail}</a> including the Job ID #{job.id}
                                    </Box>

                                </Typography>

                                <Box mt={3}>
                                    <Button
                                        variant="outlined"
                                        startIcon={<DownloadIcon />}
                                        component="a"
                                        href={job.pdfUrl}
                                        download
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download PDF
                                    </Button>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

