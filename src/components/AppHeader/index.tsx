import { Button, Stack, Switch, Typography } from "@mui/material";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useLocation, useNavigate } from "react-router-dom";

const AppHeader: React.FC<{
    state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}> = ({ state }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [threeD, setThreeD] = state;
    return (
        <>
            <Stack
                direction="row-reverse"
                sx={{ m: "10px" }}
                justifyContent="space-between"
            >
                <Stack direction="row" alignItems="center">
                    <Switch
                        checked={threeD}
                        onChange={(_event, checked) => setThreeD(checked)}
                    />
                    <Typography>3D Graphics</Typography>
                </Stack>
                {location.pathname !== "/" && (
                    <Button
                        variant="text"
                        startIcon={<KeyboardBackspaceIcon fontSize="large" />}
                        onClick={() => navigate("/")}
                    >
                        Go Back Home
                    </Button>
                )}
            </Stack>
        </>
    );
};

export default AppHeader;
