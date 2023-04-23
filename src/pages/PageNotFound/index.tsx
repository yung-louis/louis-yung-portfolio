import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PageNotFound: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <Stack
                spacing={5}
                sx={{
                    display: "flex",
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography color="white" variant="h1">
                    404: Page Not Found :(
                </Typography>
                <Button variant="contained" onClick={() => navigate("/")}>
                    Return to the home page
                </Button>
            </Stack>
        </>
    );
};

export default PageNotFound;
