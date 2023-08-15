import { Box } from "@mui/material"
import Head from "next/head";
import { NavBar } from "../ui";
;

interface props {
    title?: string;
    children: JSX.Element | JSX.Element[]
}

export const MainLayout = ({ title = 'Home page', children }: props) => {
   
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>

            <NavBar />
            <Box sx={{ padding: '10px 20px',marginTop:10 }}>
                {children}
            </Box>
        </Box>
    )
}
