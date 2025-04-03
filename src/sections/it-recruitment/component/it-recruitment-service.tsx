
import { Container, Typography, Stack, Unstable_Grid2 as Grid, Box } from '@mui/material';
import ImageWithGradient from 'src/components/general/image-gradient';



// ----------------------------------------------------------------------

export default function ITRecruitmentServices() {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid xs={12} md={6} lg={5}>
          <ImageWithGradient src="/assets/images/img_2.jpg" borderRadius={'12px'}/>
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h2">IT Recruitment Solutions</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              At California SoftTech Inc, we specialize in IT Recruitment Services, helping businesses find top-tier technology talent to drive innovation and digital transformation. With a deep understanding of the ever-evolving tech landscape, we connect organizations with highly skilled IT professionals who bring expertise, efficiency, and innovation to every role.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
