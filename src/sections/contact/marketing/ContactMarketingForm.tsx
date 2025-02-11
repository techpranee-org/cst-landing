import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { LoadingButton } from "@mui/lab";
import { Stack, Typography, ToggleButton, FormHelperText } from "@mui/material";
// utils
import { fCurrency } from "src/utils/formatNumber";
// components
import FormProvider, {
  RHFTextField,
  RHFSlider,
} from "src/components/hook-form";
import { useEffect, useRef } from "react";
import { ReCAPTCHA } from "react-google-recaptcha";
import { MutableRefObject } from 'react';

// ----------------------------------------------------------------------

const SERVICES = [
  "Healthcare Recruitment",
  "IT Recruitment Services",
  "Embedded Software Services",
  "Web Development Services",
  "Cloud Services",
  "Resourcing & Talent",
];

type FormValuesProps = {
  services: string[];
  name: string;
  // lastName: string;
  email: string;
  phoneNumber: string;
  // compnany: string;
  // website: string;
  // budget: number | number[];
  message: string;
};

// ----------------------------------------------------------------------

export default function ContactMarketingForm() {
  const recaptchaRef: MutableRefObject<ReCAPTCHA | null> = useRef(null);
  
  const handleRecaptchaCallback = (token: string | null) => {
    // This function will be called when reCAPTCHA is successfully validated.
    // You can add any additional logic here if needed.
    console.log("reCAPTCHA validation successful. Token:", token);
  
    // Now, you can submit the form or perform any other actions.
    // onSubmit(); // Call your form submission function here
  };
  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );
  const MarketingContactSchema = Yup.object().shape({
    services: Yup.array()
      .required()
      .min(1, "Services field must have at least 1 items"),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("That is not an email"),
    phoneNumber: Yup.string().required("Phone Number is required").matches(phoneRegex, "Invalid phone number"),
    // compnany: Yup.string().required('Compnany is required'),
    // website: Yup.string().required('Website is required'),
    message: Yup.string().required("Message is required"),
  });

  const defaultValues = {
    services: [],
    // firstName: '',
    // lastName: '',
    name: "",
    email: "",
    phoneNumber: "",
    // compnany: '',
    // website: '',
    // budget: [2000, 10000],
    message: "",
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(MarketingContactSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;


  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://www.google.com/recaptcha/api.js";
  //   script.async = true;
  //   script.defer = true;
  //   script.addEventListener("load", () => {
  //     // Initialize reCAPTCHA with your site key
  //     window.grecaptcha.init({
  //       sitekey: "6LdOAEkoAAAAAA1k7A3vvaQYIFU8JmRE-1-UAoBC", // Replace with your reCAPTCHA site key
  //       size: "invisible",
  //       callback: handleRecaptchaCallback,
  //     });
  //   });

  //   document.body.appendChild(script);
  // }, []);

  const onSubmit = async (data: FormValuesProps) => {
    try {
      // Trigger reCAPTCHA validation
      const recaptcha = recaptchaRef.current;
      if (recaptcha) {
        await recaptcha.executeAsync(); // Use the recaptchaRef
      } else {
        console.error("reCAPTCHA ref is null or undefined.");
        return; // Exit early if recaptchaRef is null or undefined
      }
  
      // Wait for reCAPTCHA to complete validation
      const token = await recaptchaRef.current?.getValue(); // Use optional chaining
  
      // Reset the form (assuming there's a reset function available)
      // console.log(token)
      reset();
  
      // Create the API payload
      const apiPayload = {
        data: {
          Name: data.name,
          Email: data.email,
          Service: String(data.services),
          Message: data.message,
          phone: data.phoneNumber,
          recaptchaToken: token, // Include the reCAPTCHA token in your payload
        },
      };
  
      // Make an API request using fetch or any other suitable method
      const response = await fetch(
        "https://content.techpranee.com/api/leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiPayload),
        }
      );
  
      // Handle the API response
      if (response.ok) {
        // Handle success
      } else {
        console.error("API Error:", response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  // const onSubmit = async (data: FormValuesProps) => {
  //   try {
  //     // Simulate a delay of 500ms
  //     await new Promise((resolve) => setTimeout(resolve, 500));

  //     // Reset the form (assuming there's a reset function available)
  //     reset();

  //     // Log the form data

  //     // Create the API payload
  //     const apiPayload = {
  //       data: {
  //         Name: data.name,
  //         Email: data.email,
  //         Service: String(data.services),
  //         Message: data.message,
  //         phone: data.phoneNumber,
  //       },
  //     };

  //     // Make an API request using fetch or any other suitable method
  //     const response = await fetch("https://content.techpranee.com/api/leads", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(apiPayload),
  //     });

  //     // Handle the API response
  //     if (response.ok) {
  //     } else {
  //       console.error("API Error:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  
 


  const getSelected = (selectedItems: string[], item: string) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5} alignItems="flex-start">
        <Controller
          name="services"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <div>
              <Stack direction="row" flexWrap="wrap">
                {SERVICES.map((service) => (
                  <ToggleButton
                    {...field}
                    key={service}
                    color="standard"
                    selected={field.value.includes(service)}
                    onChange={() =>
                      field.onChange(getSelected(field.value, service))
                    }
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
              </Stack>

              {!!error && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )}
            </div>
          )}
        />

        <Stack
          spacing={{ xs: 2.5, md: 2 }}
          direction={{ xs: "column", md: "row" }}
          sx={{ width: 1 }}
        >
          <RHFTextField name="name" label="Full Name" />
          {/* <RHFTextField name="lastName" label="Last Name" /> */}
        </Stack>

        <RHFTextField name="email" label="Email" />
        <RHFTextField name="phoneNumber" label="Phone number" />

        {/* <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2.5, md: 2 }}
          sx={{ width: 1 }}
        >
          <RHFTextField name="compnany" label="Compnany" />

          <RHFTextField name="website" label="Website" />
        </Stack> */}

        {/* <Stack spacing={5} sx={{ py: 2, width: 1 }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Your Budget
          </Typography>

          <RHFSlider
            name="budget"
            valueLabelDisplay="on"
            max={20000}
            step={1000}
            valueLabelFormat={(value) => fCurrency(value)}
          />
        </Stack> */}

        <RHFTextField name="message" label="Message" multiline rows={4} />
      </Stack>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6LdOAEkoAAAAAA1k7A3vvaQYIFU8JmRE-1-UAoBC" // Replace with your reCAPTCHA site key
        size="invisible"
        onChange={handleRecaptchaCallback}
      />


      <LoadingButton
        size="large"
        color="inherit"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ mt: 3 }}
      >
        Send Request
      </LoadingButton>
    </FormProvider>
  );
}
