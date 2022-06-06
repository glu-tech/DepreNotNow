import React from 'react';
import ButtonControlSound from '../ButtonControlSound';
import { Grid } from './styles';

export function GridControlSound() {
    return (
        <Grid>
            <ButtonControlSound imgName='backTime' styles={{ width: 50, height: 50, right: 80 }} />
            <ButtonControlSound imgName='playMusic' styles={{ width: 70, height: 70, top: -6 }} />
            <ButtonControlSound imgName='fowardTime' styles={{ width: 50, height: 50, left: 80 }} />
        </Grid>
  );
}

export default GridControlSound;