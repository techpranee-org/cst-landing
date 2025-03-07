import { Box } from "@mui/material";

interface ImageWithGradientProps {
  src: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

const ImageWithGradient: React.FC<ImageWithGradientProps> = ({
  src,
  width = "100%",
  height = "auto",
  borderRadius = 12,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width,
        height,
        borderRadius,
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={src}
        alt="Image"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures image covers the area properly
          borderRadius
        }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7))",
          borderRadius,
        }}
      />
    </Box>
  );
};

export default ImageWithGradient;
