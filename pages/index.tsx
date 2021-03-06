import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Sensor } from 'lib/sensors';

const Page = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Sensor name="Chico" />
                <Sensor name="Pleasanton" />
                <Sensor name="San_Ramon" />
                <Sensor name="Redding" />
            </Grid>
        </Container>
    );
};

export default Page;
