import React from "react";

const ProgressWithLabel = ({ label, ...props }) => (
  <Box display="flex" alignItems="center">
    <Box minWidth={35}>
      <Typography variant="body2" color="textSecondary">{label}</Typography>
    </Box>
    <Box width="100%" mr={1}>
      <LinearProgress variant="determinate" {...props} />
    </Box>
  </Box>
);

export default ProgressWithLabel;