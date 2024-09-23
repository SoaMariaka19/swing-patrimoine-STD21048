import React from 'react';
import { Box, Typography } from '@mui/material';

const FlowDisplay = ({ dailyFlows, impossibleFlows }) => {
    return (
        <Box mt={2}>
            <Box border={1} borderColor="grey.400" borderRadius={2} p={2} mb={2}>
                <Typography variant="h6">Flux Journaliers</Typography>
                <ul>
                    {dailyFlows.map((flow, index) => (
                        <li key={index}>{flow}</li>
                    ))}
                </ul>
            </Box>

            <Box border={1} borderColor="grey.400" borderRadius={2} p={2}>
                <Typography variant="h6">Flux Impossibles</Typography>
                <ul>
                    {impossibleFlows.map((flow, index) => (
                        <li key={index}>{flow}</li>
                    ))}
                </ul>
            </Box>
        </Box>
    );
};

export default FlowDisplay;
