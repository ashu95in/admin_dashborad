import React from "react";
import { Card, CardContent, CardActions, Button, Typography,Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomCard = ({ title, description, onDelete, onUpdate, onShowMore }) => {
  return (
    <Card sx={{  p: 1, boxShadow: 1, borderRadius: 2,bgcolor:'background.default' }}>
      <CardContent  >
        <Typography  gutterBottom sx={{fontWeight:500,fontSize:'1.1rem'}} >
          {title}
        </Typography>
        <Typography variant="p" color="text.secondary" sx={{fontSize:".9rem",border:1,borderColor:'#fff'}} >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
       <Box sx={{display:'flex',gap:1}} >
        <Button variant="outlined" startIcon={<EditIcon />} onClick={onUpdate}>
          Update
        </Button>
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={onDelete}>
          Delete
        </Button>
        </Box>
        <Button variant="contained" endIcon={<ExpandMoreIcon />} onClick={onShowMore}>
          Show More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
