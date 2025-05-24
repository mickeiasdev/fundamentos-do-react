import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const bgD = {
  color: "#ffff",
  backgroundColor: "#333",
};

const bgL = {
  color: "#fff9",
  backgroundColor: "#666",
};

const icon = {
  color: "#fff6",
};

export default function AccordionUsage({ name, content }) {
  return (
    <div>
      <Accordion style={bgD}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={icon} />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={bgL}
        >
          <Typography component="span">
            <strong>{name}</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{content}</AccordionDetails>
      </Accordion>
    </div>
  );
}
