// @mui
import { alpha, styled } from "@mui/material/styles";
import {
  Stack,
  Button,
  Container,
  InputBase,
  Typography,
  InputBaseProps,
  InputAdornment,
  Unstable_Grid2 as Grid,
} from "@mui/material";
// hooks
import useResponsive from "src/hooks/useResponsive";
// utils
import { bgGradient } from "src/utils/cssStyles";
// components
import Iconify from "src/components/iconify";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { handleUrlService } from "src/utils/handleUrlService";
import { debounce } from 'lodash';


// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
    imgUrl: "/assets/images/marketing/marketing_services_hero.jpg",
  }),
  padding: theme.spacing(15, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(20, 0),
  },
}));

const StyledInput = styled((props: InputBaseProps) => (
  <InputBase fullWidth {...props} />
))(({ theme }) => ({
  ...theme.typography.body1,
  height: 56,
  paddingLeft: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
}));

// ----------------------------------------------------------------------
const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid email"),
  name: Yup.string().required("Website url is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Invalid phone number"),
});

type FormValuesProps = {
  email: string;
  name: string;
  phoneNumber: string;
};
export default function MarketingServicesHero() {
 
  return (
    <StyledRoot>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                mb: 5,
                mx: "auto",
                maxWidth: 480,
                textAlign: "center",
                color: "common.white",
              }}
            >
              <Typography variant="h1">
                Grow Traffic <br />
                <Typography>with our SEO Services</Typography>
              </Typography>

              <Typography sx={{ opacity: 0.72 }}>
                At Techpranee, we help in elevating your online presence to new
                heights. In today's digital landscape, being visible is the key
                to success, and that's where our expert Search Engine
                Optimization (SEO) services come in.
              </Typography>
            </Stack>

            <MarketingServicesHeroForm />
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

function MarketingServicesHeroForm() {
  const {
    asPath,      
    pathname, 
  } = useRouter();
  const isMdUp = useResponsive("up", "md");
  const defaultValues = {
    email: "",
    name: "",
    phoneNumber: "",
  };
  const { handleSubmit, control, reset } = useForm<FormValuesProps>({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (formData: FormValuesProps) => {
    const extractedUrl = pathname.substring(1);

    try {
      const apiPayload = {
        data: {
          Email: formData.email,
          Message: formData.name,
          phone: formData.phoneNumber,
          Service : handleUrlService(extractedUrl)
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
      console.log("responseData",responseData)
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
  const debouncedOnSubmit = debounce(onSubmit, 3000);

  const handleFormSubmit = (formData: FormValuesProps) => {
    debouncedOnSubmit(formData);
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Stack
        spacing={2.5}
        direction={{ xs: "column", md: "row" }}
        alignItems={{ md: "start" }}
      >
        <Stack sx={{ width: "100%" }}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <StyledInput
                  {...field}
                  startAdornment={
                    <InputAdornment position="start">
                      <Iconify
                        icon="carbon:email"
                        width={24}
                        sx={{ color: "text.disabled" }}
                      />
                    </InputAdornment>
                  }
                  placeholder="Email"
                />
                {fieldState.error && (
                  <Typography variant="caption" color="error">
                    {fieldState.error.message}
                  </Typography>
                )}
              </>
            )}
          />
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <StyledInput
                  {...field}
                  startAdornment={
                    <InputAdornment position="start">
                      <Iconify
                        icon="carbon:license-global"
                        width={24}
                        sx={{ color: "text.disabled" }}
                      />
                    </InputAdornment>
                  }
                  placeholder="Website URL"
                />
                {fieldState.error && (
                  <Typography variant="caption" color="error">
                    {fieldState.error.message}
                  </Typography>
                )}
              </>
            )}
          />
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <StyledInput
                  {...field}
                  startAdornment={
                    <InputAdornment position="start">
                      <Iconify
                        icon="carbon:phone"
                        width={24}
                        sx={{ color: "text.disabled" }}
                      />
                    </InputAdornment>
                  }
                  placeholder="Phone Number"
                />
                {fieldState.error && (
                  <Typography variant="caption" color="error">
                    {fieldState.error.message}
                  </Typography>
                )}
              </>
            )}
          />
        </Stack>

        <Button
          fullWidth={!isMdUp}
          type="submit"
          size="large"
          variant="contained"
          sx={{ height: "55px", paddingX: "40px" }}
        >
          enquire
        </Button>
      </Stack>
    </form>
  );
}
