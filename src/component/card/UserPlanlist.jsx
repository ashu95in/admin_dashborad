import React from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";

const userPlan = {
  currentPlan: "Premium",
  expiryDate: "April 30, 2025",
  availablePlans: [
    { name: "free", expiry: "never" },
    { name: "Premium", expiry: "jun 30, 2025" },
    { name: "Premium", expiry: "April 2, 2025" },
    { name: "Premium", expiry: "aug 30, 2025" },
  ],
};

const UserPlanlist = ({info}) => {
  
  return (
    <Card style={{ maxWidth: 400, margin: "auto", padding: 1,boxShadow:0 }} sx={{boxShadow:0,backgroundColor:'transparent'}} >
      <CardContent  >
        <Typography variant="h6" sx={{fontSize:18,fontFamily:'poppins'}} >Current Plans</Typography>
        <List sx={{p:0,gap:0,borderRadius:2,}} >
          {info?.map((plan, index) => (
            <ListItem key={index}  sx={{py:0}} >
              <ListItemText
                primaryTypographyProps={{ sx: {fontFamily:'poppins', fontSize: 13} }}
                secondaryTypographyProps={{ sx: { fontFamily:'poppins',fontSize: 12, color: "gray" } }}
                primary={plan?.name}
                secondary={plan?.expiry !== "N/A" ? `Expiry: ${plan?.expiry}` : "Available"}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UserPlanlist;
