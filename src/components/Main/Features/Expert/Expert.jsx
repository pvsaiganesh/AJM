import { Button, Typography } from "@mui/material";
import "./Expert.scss";

const Expert = () => {
  return (
    <div className="bg  p-5 d-flex flex-row justify-content-center align-items-center">
      <div className="p-5 text-center text-white">
        <Typography variant="h4">Talk to a Expert Now</Typography>
        <Typography variant="h6">
          One Stop Construction materials store for all type of constructions
        </Typography>
        <Button variant="contained" className="rounded-pill">
          Call Now
        </Button>
      </div>
    </div>
  );
};

export default Expert;
