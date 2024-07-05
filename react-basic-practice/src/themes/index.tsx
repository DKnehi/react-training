import { extendTheme } from "@chakra-ui/react";
import { fontSizes, fontWeights, colors, borderRadius } from "./variables";
import Button from "./components/button";
import "../assets/fonts/Inter-Regular.ttf";


const theme = extendTheme({
  fontSizes,
  fontWeights,
  colors,
  borderRadius,
  fonts: {
    body: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    heading: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  components: {
    Button,
  },
});

export default theme;
