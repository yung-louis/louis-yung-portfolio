import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const SarcoSim: React.FC = () => {
    return (
        <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin="0 15% 0 15%"
            height="100%"
            spacing={2}
        >
            <Typography variant="h2">SarcoSim</Typography>
            <Typography variant="body1">
                SarcoSim was my Software Engineering BSc Dissertation. The goal
                of project was to create a 3D simulate the sarcomeres of the
                heart. I accomplished this by creating a custom Java application
                using LWJGL3 as a api for OpenGL to create a simulation from the
                ground up. If you would like to get a more in depth explanation
                of the project my dissertation can be downloaded.
            </Typography>
            <Button variant="contained">Download the jar</Button>
            <Button variant="contained">Disseration PDF</Button>
        </Stack>
    );
};

export default SarcoSim;
