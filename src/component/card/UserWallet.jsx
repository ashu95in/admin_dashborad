import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import DeleteIcon from "@mui/icons-material/Delete";

const userWallet = {
  name: "John Doe",
  balance: "$1,250.00",
  lastTransaction: "March 30, 2025",
  totalTransactions: 15,
};

const UserWallet = ({info}) => {
  const handleDelete = () => {
    console.log("Wallet deleted for user:", userWallet.name);
  }

  return (
    <Card
    sx={{boxShadow:0}}
      style={{
     
        maxWidth: 400,
        margin: "auto",
        padding: 5,
        textAlign: "center",
        backgroundColor: "rgba(218, 217, 217, 0.42)",
        
      }}
    >
      <CardContent sx={{ boxShadow: 0 }}>
        <AccountBalanceWalletIcon style={{ fontSize: 40, color: "#1976d2" }} />

        <Typography variant="body1" style={{ fontWeight: "bold" }}>
          Balance: {info?.balance}
        </Typography>
        <Typography variant="body2">
          Last Transaction: {info?.last_transaction}
        </Typography>
        <Typography variant="body2">
          Total Transactions: {info?.total_transaction}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserWallet;
