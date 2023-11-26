import React from 'react';
import styled from '@emotion/styled';
import { Container, Typography} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

const FooterContainer = styled.footer`
  background-color: #F7EBCB;
  padding: 0;
  margin-top: 15px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Container maxWidth="sm">
                <Typography variant="body2" color="textSecondary" align="center" style={{ color: '#2e2e2e', fontSize: '20px' }}>
                    {'© '}
                    {new Date().getFullYear()}
                    {' BLOG ME '}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center" style={{ color: '#2e2e2e', fontSize: '20px' }}>
                    <a href="https://www.facebook.com/hao.nhat.90410" style={{color: '#2e2e2e'}}><FacebookIcon></FacebookIcon></a>
                    <a href="https://www.facebook.com/hao.nhat.90410" style={{color: '#2e2e2e'}}><FacebookIcon></FacebookIcon></a>
                    <a href="https://www.facebook.com/hao.nhat.90410" style={{color: '#2e2e2e'}}><FacebookIcon></FacebookIcon></a>

                </Typography>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
