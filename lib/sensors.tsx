import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { stringify } from 'querystring';

const sensors = {
    Chico: { id: '19985', hash: 'MMPTVOHTR95AUI5O' },
    Wyne: { id: '19985', hash: 'MMPTVOHTR95AUI5O' },
    Pleasanton: { id: '44091', hash: 'E43ULCF95GAAE1TO' },
    San_Ramon: { id: '60537', hash: 'XVDT6KX4PBRG7BZ1' },
    Redding: { id: '14127', hash: '5BO2PPT7OZXT86FV' },
    Grigsby_Ranch: { id: '14127', hash: '5BO2PPT7OZXT86FV' },
    Gammie: { id: '16091', hash: 'AIFCCSF5POBJ5D8I' },
    Matt_Oma: { id: '8058', hash: 'AQREN8OU0YYN3AX7' },
    Spencers: { id: '8116', hash: 'JWZ0G91PVERTAUID' },
};

export const Sensor: React.FC<{ name: keyof typeof sensors }> = ({ name }) => {
    const { id, hash } = sensors[name];
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography>{name}</Typography>
            <div
                id={`PurpleAirWidget_${name}_module_AQI_conversion_C0_average_10_layer_standard`}
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
                    container: `PurpleAirWidget_${name}_module_AQI_conversion_C0_average_10_layer_standard`,
                })}`}
            ></script>
        </Grid>
    );
};
