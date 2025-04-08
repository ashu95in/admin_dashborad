import React from "react";

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  Button,
  Box,
} from "@mui/material";
import { useParams } from "react-router-dom";
const TotalBala = () => {
  const { id } = useParams();
  return (
    <Card
      sx={{
        maxWidth: 250,
        p: 2,
        boxShadow: 0,
        borderRadius: 5,
        height: 115,
        // boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
         backgroundColor: "rgba(246, 246, 246, 0.71)",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        sx={{ color: "theme.primary", gap: .5, flexDirection: "column-reverse" }}
      >
        Request Amount
        <Typography
          sx={{ fontFamily: "poppins", fontWeight: 600 }}
          variant="h4"
        >
          ₹ 500
        </Typography>
      </Box>
    </Card>
  );
};

export default TotalBala;
