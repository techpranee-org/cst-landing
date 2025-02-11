// @mui
import {
  Box,
  Stack,
  Button,
  BoxProps,
  Container,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
// components
import SvgColor from "src/components/svg-color";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// ----------------------------------------------------------------------
const validationSchema = Yup.object().shape({
  message: Yup.string().required("Message is required"),
});

type FormValuesProps = {
  message: string;
};
export default function NewsletterMarketing({ sx, ...other }: BoxProps) {
  const defaultValues = {
    message: "",
  };
  const { handleSubmit, control, reset } = useForm<FormValuesProps>({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (formData: FormValuesProps) => {
    try {
      const apiPayload = {
        data: {
          Message: formData.message,
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
  return (
    <Box sx={{ py: 8, bgcolor: "background.neutral" }} {...other}>
      <Container>
        <Stack
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }}
        >
          <Stack
            spacing={3}
            alignItems="center"
            direction={{ xs: "column", md: "row" }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <SvgColor
              src="/assets/icons/ic_newsletter.svg"
              sx={{ width: 80, height: 80, color: "primary.main" }}
            />

            <div>
              <Typography variant="h4" gutterBottom>
                {/* Sign Up For Newsletter */} Are you a start-up?
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {/* Receive 50% discount on first project */}
                We offer landing page development for selected startups for free
              </Typography>
            </div>
          </Stack>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="message"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <TextField
                    fullWidth
                    hiddenLabel
                    placeholder="StartUp Application"
                    {...field}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            size="large"
                            type="submit"
                            color="inherit"
                            variant="contained"
                            sx={{
                              height: 54,
                              borderTopLeftRadius: 0,
                              borderBottomLeftRadius: 0,
                            }}
                          >
                            Apply now
                          </Button>
                        </InputAdornment>
                      ),
                      sx: { pr: 0 },
                    }}
                    sx={{ maxWidth: 466 }}
                  />
                  {fieldState.error && (
                    <Typography variant="caption" color="error">
                      {fieldState.error.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </form>
        </Stack>
      </Container>
    </Box>
  );
}
