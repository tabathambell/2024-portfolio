import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";

const Space = Space_Grotesk({ subsets: ["latin"] });

export default function Header() {
    return (
        <Box sx={{ pt: 10, pl: 17, display: "flex", justifyContent: "center", width: "90%" }}>
        <Image
          src="/purple-border.png"
          width="500"
          height="300"
          alt="purple and silver gaming border"
        />
        <Typography className={Space.className} sx={{ color: "white", pl: 5, fontSize: 22 }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Typography>
        </Box>
    );
}