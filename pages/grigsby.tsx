import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Sensor } from 'lib/sensors';

const Page = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Sensor name="Wyne" />
                <Sensor name="Grigsby_Ranch" />
                <Sensor name="Gammie" />
                <Sensor name="Matt_Oma" />
                <Sensor name="Spencers" />
            </Grid>
        </Container>
    );
};

export default Page;
