import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";

const Space = Space_Grotesk({ subsets: ["latin"] });

export default function Header() {
  return (
    <Box
      component="section"
      sx={{ p: 3, borderBottom: "3px solid black", backgroundColor: "#4c3269", width: '100%', display: 'flex', alignItems: "center", height: '100px'}}
    >
      <Box sx={{ width: '100%' }}>
        <Typography
          className={Space.className}
          sx={{ color: "white", fontSize: 40 }}
        >
          TABATHA BELL
        </Typography>
      </Box>
      <Box sx={{ pt: 1 }}>
        <Image
          src="/hearts.gif"
          width="125"
          height="100"
          alt="Chandelure from Pokemon"
        />
      </Box>
    </Box>
  );
}
