// Callback function to handle reCAPTCHA verification success



declare global {
  interface Window {
    grecaptcha: any; // Replace with the correct type if available
  }
}

// @mui
import { styled, alpha } from "@mui/material/styles";
import {
  Link,
  Stack,
  Button,
  Container,
  TextField,
  Typography,
  TextFieldProps,
  Unstable_Grid2 as Grid,
} from "@mui/material";
// utils
import { bgGradient } from "src/utils/cssStyles";
// components
import Iconify from "src/components/iconify";
import FormProvider, {
  RHFTextField,
  RHFSlider,
} from "src/components/hook-form";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0),
    imgUrl: "/assets/images/marketing/marketing_get_free_seo.jpg",
  }),
  padding: theme.spacing(10, 0),
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(15, 0),
  },
}));

const StyledInput = styled((props: TextFieldProps) => (
  <TextField fullWidth {...props} />
))(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: theme.palette.common.white,
  },
  "& .MuiInputLabel-root,& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.grey[500],
  },
}));

const phoneRegex = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);

// ----------------------------------------------------------------------
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  phoneNumber: Yup.string().required("Phone Number is required").matches(phoneRegex, "Invalid phone number"),
  website: Yup.string().required("Website is required"),
});

type FormValuesProps = {
  name: string;
  email: string;
  phoneNumber: string;
  website: string;
  pageType: string;
};

export default function MarketingLandingFreeSEO() {
  const defaultValues = {
    name: "",
    email: "",
    phoneNumber: "",
    website: "",
  };
  const { handleSubmit, control, reset } = useForm<FormValuesProps>({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (formData: FormValuesProps) => {
    try {
      const apiPayload = {
        data: {
          Name: formData.name,
          Email: formData.email,
          Message: formData.website,
          phone: formData.phoneNumber,
          Service: formData.pageType,
        },
      };

      const response = await fetch("https://content.techpranee.com/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiPayload),
      });

      const responseData = await response.json();
      if (response.ok) {
        // Handle success, show success message to user
        reset(defaultValues);
      } else {
        console.error("API Error:", responseData);
        // Handle error, show error message to user
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle unexpected errors, show error message to user
    }
  };

  // const onSubmit = async (formData: FormValuesProps) => {
  //   try {
  //     // Verify the reCAPTCHA
  //     const recaptchaResponse = await new Promise<string>((resolve) => {
  //       window.grecaptcha.execute('6Lc9l0IoAAAAAE_rXBMuSGVWykei0oo-RFqWBStw', { action: 'submit' }, resolve);
  //     });
  
  //     // Send the reCAPTCHA response along with your form data
  //     const apiPayload = {
  //       data: {
  //         Name: formData.name,
  //         Email: formData.email,
  //         Message: formData.website,
  //         phone: formData.phoneNumber,
  //         Service: formData.pageType,
  //         // Add the reCAPTCHA response to the payload
  //         recaptchaResponse,
  //       },
  //     };
  
  //     // Send the API request with the payload
  //     const response = await fetch("https://content.techpranee.com/api/leads", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(apiPayload),
  //     });
  
  //     const responseData = await response.json();
  //     if (response.ok) {
  //       // Handle success, show success message to the user
  //       reset(defaultValues);
  //     } else {
  //       console.error("API Error:", responseData);
  //       // Handle error, show an error message to the user
  //     }
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //     // Handle unexpected errors, show an error message to the user
  //   }
  // };

  // const onRecaptchaSuccess=()=> {
    
  //   alert('reCAPTCHA verification successful! Form can be submitted.');
  // }
  
  return (
    
    <StyledRoot>
      <Container>
        <Grid
          container
          spacing={{
            xs: 5,
            md: 3,
          }}
          justifyContent="space-between"
        >
          <Grid xs={12} md={5}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                color: "primary.main",
                mb: { xs: 3, md: 8 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Have a project in mind ?
            </Typography>

            {/* <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ color: 'common.white', mb: 2 }}
            >
              <Iconify icon="carbon:email" width={24} sx={{ mr: 2 }} />

              <Link color="inherit" href="mailto:hello@example.com">
                hello@example.com
              </Link>
            </Stack> */}

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ color: "common.white" }}
            >
              {/* <Iconify icon="carbon:location" width={24} sx={{ mr: 2 }} /> */}
              book a free consultation session and get a professional strategy
              for free
            </Stack>
          </Grid>

          <Grid xs={12} md={5}>
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div
    className="g-recaptcha"
    data-sitekey="6Lc9l0IoAAAAAE_rXBMuSGVWykei0oo-RFqWBStw"
    data-callback="onRecaptchaSuccess"
    data-size="invisible"
    onSubmit={onRecaptchaSuccess}
  ></div> */}
              <Stack alignItems={{ xs: "center", md: "flex-start" }}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => (
                    <>
                      <StyledInput
                        {...field}
                        variant="filled"
                        label="Name"
                        sx={{ mb: 2.5 }}
                      />
                      {fieldState.error && (
                        <Typography
                          variant="caption"
                          color="error"
                          sx={{ mt: -2, mb: 2.5 }}
                        >
                          {fieldState.error.message}
                        </Typography>
                      )}
                    </>
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <>
                      <StyledInput
                        {...field}
                        variant="filled"
                        label="Email"
                        sx={{ mb: 2.5 }}
                      />
                      {fieldState.error && (
                        <Typography
                          variant="caption"
                          color="error"
                          sx={{ mt: -2, mb: 2.5 }}
                        >
                          {fieldState.error.message}
                        </Typography>
                      )}
                    </>
                  )}
                />

                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field, fieldState }) => (
                    <>
                      <StyledInput
                        {...field}
                        variant="filled"
                        label="Phone"
                        sx={{ mb: 2.5 }}
                      />
                      {fieldState.error && (
                        <Typography
                          variant="caption"
                          color="error"
                          sx={{ mt: -2, mb: 2.5 }}
                        >
                          {fieldState.error.message}
                        </Typography>
                      )}
                    </>
                  )}
                />

                <Controller
                  name="website"
                  control={control}
                  render={({ field, fieldState }) => (
                    <>
                      <StyledInput
                        {...field}
                        variant="filled"
                        label="Website URL / Brand Name"
                        sx={{ mb: 5 }}
                      />
                      {fieldState.error && (
                        <Typography
                          variant="caption"
                          color="error"
                          sx={{ mt: -4.5, mb: 2.5 }}
                        >
                          {fieldState.error.message}
                        </Typography>
                      )}
                    </>
                  )}
                />
                <input type="hidden" name="pageType" value="home" />
                <Button size="large" type="submit" variant="contained">
                  Send Request
                </Button>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

// Callback function to handle reCAPTCHA verification success
