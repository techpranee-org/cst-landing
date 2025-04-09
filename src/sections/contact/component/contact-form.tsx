
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


  /* const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (!formRef.current) return;
  
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    setLoading(true);
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycby8k2LJWhpXNzIRqbdnHr7rKKneQPUXWC3l0_iQseYcmTNSFkjR2uLiUlLYndiKc9IX/exec', {
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
  }; */

  /* https://script.google.com/macros/s/AKfycbyzNVDlLWr5O9NOiNpMJDQ2TX9W5w-r7WUPTyeoO6kcEL9ItS7yiJhcbZ8F_O-W3BP_/exec */
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
  
    const formData = new FormData(event.currentTarget);
    const googleFormData = new URLSearchParams({
      "entry.11698890": formData.get("name") as string,
      "entry.227979588": formData.get("email") as string,
      "entry.165307385": formData.get("phoneNumber") as string,
      "entry.2061946990": formData.get("message") as string,
    });
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbws5Y7fCBLejWUigPshzRh4A_y7gb_de-MM7bc_cIyXuFX7glpUXbD-kMrG1zwGQXld/exec", {
        method: "POST",
        body: googleFormData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Ensure the content type is correct
        },
      });
  
      // Check if the response was successful
      if (response.ok) {
        alert("Form submitted successfully!");
        setTermsAccepted(false);
        formRef.current?.reset();
      } else {
        throw new Error('Submission failed.');
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed.");
    } finally {
      setLoading(false);
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
          sx={{ alignItems: "flex-start"}}
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
            <Typography variant="body2" mt={.5}>
              By opting in for text messages, you agree to receive an appointment reminders and important updates from California SoftTech Inc at the number provided. Message frequency varies. Msg & data rates may apply. Reply STOP to unsubscribe. Reply HELP for help. View our <Link href="/privacy-policy" underline="hover">
                Privacy Policy
              </Link> {" "} and{" "} <Link href="/terms-and-conditions" underline="hover">
                Terms and Conditions
              </Link>  for more information.             
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
