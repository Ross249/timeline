import React, { ReactNode } from "react";
import Head from "next/head";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Link from "../components/Link";
import { Box } from "@mui/material";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: [5, 10],
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/about"
          >
            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            About
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/contents"
          >
            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Contents List
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/api/contents"
          >
            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Contents API
          </Link>
        </Breadcrumbs>
      </header>
      {children}
      <footer>
        <hr />
        <span>JimLuo @copyright</span>
      </footer>
    </Box>
  );
};

export default Layout;
