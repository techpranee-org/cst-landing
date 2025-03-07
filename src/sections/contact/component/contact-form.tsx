
// @mui
import { LoadingButton } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
// utils
import { useRef } from "react";
// ----------------------------------------------------------------------

export default function ContactForm() {

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.reset(); 
      }
    }, 500); 
  };


  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      target="_blank"
      action="https://formsubmit.co/31b90aea318b967b2eb24da8d5424b7c"
      method="POST"
      style={{ width: "100%" }}
    >
      <Stack spacing={2.5} alignItems="flex-start">
        <Stack
          spacing={{ xs: 2.5, md: 2 }}
          direction={{ xs: "column", md: "row" }}
          sx={{ width: 1 }}
        >
          <TextField fullWidth label='name' name="name" type="text" required />
        </Stack>

        <TextField fullWidth label='Email' name="email" type="email" required />
        <TextField fullWidth label='Phone number' name="phoneNumber" type="tel" required />
        <TextField fullWidth label='Message' name="message" type="text" multiline rows={4} required />
      </Stack>

      {/* Submit Button */}
      <LoadingButton
        size="large"
        color="inherit"
        type="submit"
        variant="contained"
        sx={{ mt: 3 }}
      >
        Send Request
      </LoadingButton>
    </form>

  );
}
