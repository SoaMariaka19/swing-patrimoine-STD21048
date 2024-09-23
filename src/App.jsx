import React, { useState } from 'react';
import './index.css';
import { Grid, Box, Typography } from '@mui/material';
import UserInputForm from './components/UserInputForm';
import Chart from './components/Chart';
import FlowDisplay from './components/FlowDisplay';

const App = () => {
    const [dataSelection, setDataSelection] = useState({
        aggregat: false,
        tresorerie: false,
        immobilisations: false,
        obligations: false,
        dateFrom: '',
        dateTo: '',
    });

    const [dailyFlows, setDailyFlows] = useState([]);
    const [impossibleFlows, setImpossibleFlows] = useState([]);

    const updateFlows = (dataSelection) => {
        const newDailyFlows = [];
        const newImpossibleFlows = [];
        const date = dataSelection.dateFrom || "Date non sélectionnée";

        if (dataSelection.aggregat) {
            newDailyFlows.push(`[${date}] Lorem ipsum dolor sit amet, consectetur adipiscing elit.`);
        }
        if (dataSelection.tresorerie) {
            newDailyFlows.push(`[${date}] Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`);
        }
        if (dataSelection.immobilisations) {
            newDailyFlows.push(`[${date}] Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`);
        }
        if (dataSelection.obligations) {
            newDailyFlows.push(`[${date}] Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`);
        }

        if (!dataSelection.aggregat && !dataSelection.tresorerie && !dataSelection.immobilisations && !dataSelection.obligations) {
            newImpossibleFlows.push(`[${date}] Flux impossible : Aucune sélection.`);
        }

        setDailyFlows(newDailyFlows);
        setImpossibleFlows(newImpossibleFlows);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Box p={2} border={1} borderColor="grey.400" borderRadius={2} bgcolor="background.paper">
                    <Typography variant="h6">Entrées Utilisateur</Typography>
                    <UserInputForm onChange={(data) => {
                        setDataSelection(data);
                        updateFlows(data); 
                    }} />
                </Box>
                <Box mt={2} borderRadius={2} bgcolor="background.paper">
                    <FlowDisplay dailyFlows={dailyFlows} impossibleFlows={impossibleFlows} />
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box p={2} border={1} borderColor="grey.400" borderRadius={2} bgcolor="background.paper">
                    <Typography variant="h6">Graphique</Typography>
                    <Chart dataSelection={dataSelection} />
                </Box>
            </Grid>
        </Grid>
    );
};

export default App;
