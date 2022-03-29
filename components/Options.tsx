import styled from "@emotion/styled";
import { Box, Divider, Typography, Grid } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QuickreplyIcon from "@mui/icons-material/Quickreply";

const StyledBox = styled(Grid)`
  display: flex;
  justify-content: center;
`;

const Option = styled(Grid)`
  display: flex;
  justify-content: center;
`;

const IconBox = styled(Box)`
  padding: 1em;
  display: flex;
  align-items: center;
`;

const OptionContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export default function Options() {
  return (
    <StyledBox container>
      <Option item sm={12} md={4} xl={3}>
        <IconBox>
          <WorkspacePremiumIcon fontSize="large" />
        </IconBox>
        <OptionContent>
          <Typography variant="h5" fontWeight="500" component="div">
            Garancia spokojnosti
          </Typography>
          <Typography variant="subtitle1" component="div">
            Moznost vratenia stanu do 30 dni
          </Typography>
        </OptionContent>
      </Option>

      <Option item sm={12} md={4} xl={3}>
        <IconBox>
          <LocalShippingIcon fontSize="large" />
        </IconBox>
        <OptionContent>
          <Typography variant="h5" fontWeight="500" component="div">
            Doprava zdarma
          </Typography>
          <Typography variant="subtitle1" component="div">
            Do 2km od Petrzalky
          </Typography>
        </OptionContent>
      </Option>

      <Option item sm={12} md={4} xl={3}>
        <IconBox>
          <QuickreplyIcon fontSize="large" />
        </IconBox>
        <OptionContent>
          <Typography variant="h5" fontWeight="500" component="div">
            Osobne prebratie
          </Typography>
          <Typography variant="subtitle1" component="div">
            S moznostou instruktaze na Drazdiaku
          </Typography>
        </OptionContent>
      </Option>
    </StyledBox>
  );
}
