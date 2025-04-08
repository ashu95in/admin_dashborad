import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Card, CardContent, Typography, Box } from "@mui/material";
import UpdateConfirm from "../msgBox/actionBox/UpdateConfirm";
import { updatePlan,createPlan } from "../../api/PlanApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuthStore from "../../store/adminAuth";
const PlanForm = ({ id, data }) => {
  const queryClient = useQueryClient();
  const {token} = useAuthStore()
  // Initialize state with default values
  const [formData, setFormData] = useState({
    title: data?.title || "",
    price: data?.price || 0,
    taskCounts: data?.task || 0,
    taskPrice: data?.task_price || 0,
    pricePerDay: 0, // Will be calculated dynamically
    pricePerMonth: 0,
    pricePerYear: 0,
 
  });

  // Recalculate prices whenever taskCounts or taskPrice change
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      pricePerDay: prevData.taskCounts * prevData.taskPrice,
      pricePerMonth: prevData.taskCounts * prevData.taskPrice * 30,
      pricePerYear: prevData.taskCounts * prevData.taskPrice * 365,
    }));
  }, [formData.taskCounts, formData.taskPrice]); // Dependencies: recalculate when these change

  // Mutation for updating the plan
  const { mutate: update, isPending, isError } = useMutation({
    mutationFn: () =>id=='New'?createPlan(id,formData,token): updatePlan(id, formData,token),
    mutationKey:['plan1'],
    onSuccess: () => {
      queryClient.invalidateQueries(["plan1"]);
      
    },
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Show confirmation box before updating
  const [showDialog, setShowDialog] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDialog(true);
  };

  return (
    <Grid container justifyContent="center" style={{ marginTop: 20 }}>
      <Grid item xs={12} sm={8} md={6}>
        <Card elevation={3} sx={{ bgcolor: "hsla(0, 0.00%, 95.30%, 0.99)" }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>Update Plan</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {Object.keys(formData).map((key) => (
                  <Grid item xs={12} sm={6} key={key}>
                    <TextField
                      fullWidth
                      label={key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                      type={typeof formData[key] === "number" ? "number" : "text"}
                      disabled={["pricePerDay", "pricePerMonth", "pricePerYear"].includes(key)} // Disable auto-calculated fields
                    />
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Update
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

      {showDialog && (
        <Box sx={{ position: "absolute", top: "35%", left: "46%", zIndex: 1 }}>
          <UpdateConfirm state={setShowDialog} confirm_func={update} />
        </Box>
      )}
    </Grid>
  );s
};

export default PlanForm;
