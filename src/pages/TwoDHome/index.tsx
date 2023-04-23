import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const TwoDHome: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin="0 15% 0 15%"
            height="100%"
            spacing={2}
        >
            <Typography variant="h2">Louis' Portfolio</Typography>
            <Button variant="contained" onClick={() => navigate("/sarcosim")}>
                SarcoSim
            </Button>
        </Stack>
    );
};

export default TwoDHome;
