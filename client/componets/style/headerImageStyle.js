import styled from "@emotion/styled";
import banner from '../../src/assets/img/banner.jpg'
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export const Image = styled(Box)({
    background: `url(${banner}) center/55% repeat-x #000`,
    width: '100%',
    height: '50vh',
    display: 'flex',
    flexDirection: 'collumn',
    justifyContent: 'center',
    alignItems: 'center',
})

export const Heading = styled(Typography)({
    fontSize: '70px',
    color: '#000',
    lineHeight: 1,
})

export const Title = styled(Typography)({
    fontSize: '20px',
    color: '#000',
})