import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';

export const Footer: FC = (): ReactElement => {
    return (
        <Paper elevation={3} sx={{ marginTop: 2 }}>
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                }}
            >
                <Container maxWidth="lg">
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={12}>
                            <Link href='https://github.com/luanAfons0' target="_blank" underline="hover">
                                <Typography variant="h5">
                                    <GitHubIcon></GitHubIcon>
                                    Luan Henrique Afonso
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex' }}>
                            <Typography color="textSecondary" variant="subtitle1">
                                {`${new Date().getFullYear()} | `}
                                <Link href="https://react.dev" target="_blank" underline="hover"> React.js |</Link>
                                <Link href="https://nextjs.org" target="_blank" underline="hover"> Next.js |</Link>
                                <Link href="https://nestjs.com" target="_blank" underline="hover"> Nest.js |</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Paper>
    );
};

export default Footer;