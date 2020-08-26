import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { stringify } from 'querystring';

const Sensor: React.FC<{ name: string; id: string; hash: string }> = ({
    name,
    id,
    hash,
}) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography>{name}</Typography>
            <div
                id={`PurpleAirWidget_${id}_module_AQI_conversion_C0_average_10_layer_standard`}
            >
                Loading {name}...
            </div>
            <script
                src={`https://www.purpleair.com/pa.widget.js?${stringify({
                    key: hash,
                    module: 'AQI',
                    conversion: 'C0',
                    average: '10',
                    layer: 'standard',
                    container: `PurpleAirWidget_${id}_module_AQI_conversion_C0_average_10_layer_standard`,
                })}`}
            ></script>
        </Grid>
    );
};

const Page = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Sensor name="Chico" id="19985" hash="MMPTVOHTR95AUI5O" />
                <Sensor name="Pleasanton" id="44091" hash="E43ULCF95GAAE1TO" />
                <Sensor name="San Ramon" id="60537" hash="XVDT6KX4PBRG7BZ1" />
                <Sensor name="Redding" id="14127" hash="5BO2PPT7OZXT86FV" />
            </Grid>
        </Container>
    );
};

export default Page;
