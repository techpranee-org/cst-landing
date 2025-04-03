
// @mui
import { LoadingButton } from "@mui/lab";
import { Checkbox, FormControlLabel, Link, Stack, TextField, Typography } from "@mui/material";
// utils
import { useRef, useState } from "react";
// ----------------------------------------------------------------------

export default function ContactForm() {

  const formRef = useRef<HTMLFormElement>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (!formRef.current) return;
  
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    setLoading(true);
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', // Ensure that the method is POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Message sent successfully!');
        formRef.current.reset();
        setTermsAccepted(false);
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Stop loading after the response is received (success or error)
    }
  };
  
  
  


  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      style={{ width: "100%" }}
    >
      <Stack spacing={2.5} alignItems="flex-start">
        <Stack
          spacing={{ xs: 2.5, md: 2 }}
          direction={{ xs: "column", md: "row" }}
          sx={{ width: 1 }}
        >
          <TextField fullWidth label='Name' name="name" type="text" required />
        </Stack>

        <TextField fullWidth label='Email' name="email" type="email" required />
        <TextField fullWidth label='Phone number' name="phoneNumber" type="tel" required />
        <TextField fullWidth label='Message' name="message" type="text" multiline rows={4} required />
        <FormControlLabel
          control={
            <Checkbox
              required
              name="termsAccepted"
              checked={termsAccepted} // Controlled component
              onChange={() => setTermsAccepted(!termsAccepted)} // Toggle checkbox state
              sx={{ color: "primary.main" }}
            />
          }
          label={
            <Typography variant="body2">
              I accept the{" "}
              <Link href="/terms-and-conditions" underline="hover">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" underline="hover">
                Privacy Policy
              </Link>
            </Typography>
          }
        />
      </Stack>

      {/* Submit Button */}
      <LoadingButton
        size="large"
        color="inherit"
        type="submit"
        variant="contained"
        sx={{ mt: 3 }}
        loading={loading} // Show circular progress when loading is true
        loadingPosition="center"
      >
        Send Request
      </LoadingButton>
    </form>

  );
}
