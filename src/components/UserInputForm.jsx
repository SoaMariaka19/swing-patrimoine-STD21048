import React, { useState } from 'react';
import { FormControlLabel, Checkbox, TextField, Box, Typography } from '@mui/material';

const UserInputForm = ({ onChange }) => {
    const [aggregat, setAggregat] = useState(false);
    const [tresorerie, setTresorerie] = useState(false);
    const [immobilisations, setImmobilisations] = useState(false);
    const [obligations, setObligations] = useState(false);
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;

        if (name === 'aggregat') setAggregat(checked);
        if (name === 'tresorerie') setTresorerie(checked);
        if (name === 'immobilisations') setImmobilisations(checked);
        if (name === 'obligations') setObligations(checked);

        onChange({
            aggregat: name === 'aggregat' ? checked : aggregat,
            tresorerie: name === 'tresorerie' ? checked : tresorerie,
            immobilisations: name === 'immobilisations' ? checked : immobilisations,
            obligations: name === 'obligations' ? checked : obligations,
            dateFrom,
            dateTo,
        });
    };

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        if (name === 'dateFrom') setDateFrom(value);
        if (name === 'dateTo') setDateTo(value);
    
        onChange({
            aggregat,
            tresorerie,
            immobilisations,
            obligations,
            dateFrom: name === 'dateFrom' ? value : dateFrom,
            dateTo: name === 'dateTo' ? value : dateTo,
        });
    };
    

    return (
        <Box>
            <Box sx={{ marginBottom: 2 }}>
                <FormControlLabel
                    control={<Checkbox checked={aggregat} onChange={handleCheckboxChange} name="aggregat" sx={{ color: '#00bcd4', '&.Mui-checked': { color: '#00bcd4' } }} />}
                    label="Agrégat"
                />
                <FormControlLabel
                    control={<Checkbox checked={tresorerie} onChange={handleCheckboxChange} name="tresorerie" sx={{ color: '#ffb74d', '&.Mui-checked': { color: '#ffb74d' } }} />}
                    label="Trésorerie"
                />
                <FormControlLabel
                    control={<Checkbox checked={immobilisations} onChange={handleCheckboxChange} name="immobilisations" sx={{ color: '#ce93d8', '&.Mui-checked': { color: '#ce93d8' } }} />}
                    label="Immobilisations"
                />
                <FormControlLabel
                    control={<Checkbox checked={obligations} onChange={handleCheckboxChange} name="obligations" sx={{ color: '#ef9a9a', '&.Mui-checked': { color: '#ef9a9a' } }} />}
                    label="Obligations"
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Box sx={{ flexGrow: 1, marginRight: 1 }}>
                    <Typography variant="subtitle1">De :</Typography>
                    <TextField type="date" name="dateFrom" value={dateFrom} onChange={handleDateChange} fullWidth />
                </Box>
                <Box sx={{ flexGrow: 1, marginLeft: 1 }}>
                    <Typography variant="subtitle1">À :</Typography>
                    <TextField type="date" name="dateTo" value={dateTo} onChange={handleDateChange} fullWidth />
                </Box>
            </Box>
        </Box>
    );
};

export default UserInputForm;
