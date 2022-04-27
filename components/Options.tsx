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

export default function Options({ content }) {
  const icons = [
    <WorkspacePremiumIcon fontSize="large" key="1" />,
    <LocalShippingIcon fontSize="large" key="2" />,
    <QuickreplyIcon fontSize="large" key="3" />,
  ];

  return (
    <StyledBox container>
      {content.map((option, i) => (
        <Option item sm={12} md={4} xl={3} key={i}>
          <IconBox>{icons[i]}</IconBox>
          <OptionContent>
            <Typography variant="h5" fontWeight="500" component="div">
              {option.title}
            </Typography>
            <Typography variant="subtitle1" component="div">
              {option.description}
            </Typography>
          </OptionContent>
        </Option>
      ))}
    </StyledBox>
  );
}
