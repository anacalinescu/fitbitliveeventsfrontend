import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Grid from '@material-ui/core/Grid';

export default function Chart({name, data}) {
  const theme = useTheme();

  return (
      <React.Fragment>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 16,
              right: 16,
              bottom: 0,
              left: 24,
            }}
          >
            <XAxis dataKey="month" stroke={theme.palette.text.secondary} />
            <YAxis stroke={theme.palette.text.secondary}>
              <Label
                angle={270}
                position="left"
                style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
              >
                {name}
              </Label>
            </YAxis>
            <Line type="monotone" dataKey="amount" stroke={'#e91e63'} dot={false} strokeWidth={'2'}/>
          </LineChart>
        </ResponsiveContainer>
      </React.Fragment>
  );
}