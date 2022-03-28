import styled from "@emotion/styled";
import { Box, Divider, Typography } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QuickreplyIcon from "@mui/icons-material/Quickreply";

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Option = styled(Box)`
  padding: 2em;
  display: flex;
  justify-content: center;
`;

const IconBox = styled(Box)`
  padding: 1em;
`;

const OptionContent = styled(Box)``;

export default function Options() {
  return (
    <StyledBox>
      <Option>
        <IconBox>
          <WorkspacePremiumIcon />
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

      <Divider orientation="vertical" flexItem />

      <Option>
        <IconBox>
          <LocalShippingIcon />
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

      <Divider orientation="vertical" flexItem />

      <Option>
        <IconBox>
          <QuickreplyIcon />
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
