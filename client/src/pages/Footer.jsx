import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Link } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
        marginTop: 'auto',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body2" color="textSecondary" align="center">
                    {'© '}
                    {new Date().getFullYear()}
                    {' Your Website '}
                    <Link color="inherit" href="https://www.yourwebsite.com">
                        www.yourwebsite.com
                    </Link>
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
