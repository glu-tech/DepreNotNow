import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import GridMenu from '../../components/GridMenu';
import GridOptionsClock from '../../components/GridOptionsClock';
import ViewSelectedOption from '../../components/ViewSelectedOption';

export function SelectionTime() {
  const [typeBinauralSound, setTypeBinauralSound] = useState<string>();
  const [typeBackgroundSound, setTypeBackgroundSound] = useState<string>();

  useEffect(() => {
      async function loadStorage() {
          const typeBinaural:string | null = await AsyncStorage.getItem('@deprenotnow:typeBinaural');
          const typeBackground:string | null = await AsyncStorage.getItem('@deprenotnow:backgroundSound');

          setTypeBinauralSound(typeBinaural?.split(',')[0] || '');
          setTypeBackgroundSound(typeBackground?.split(',')[0] || '');
      }

      loadStorage();
  },[]);

  return (
      <GridMenu title='Por quanto tempo?' visibleMenuBar={true} optionMenuSelected={[true, false, false]} >
        <ViewSelectedOption text={`${typeBinauralSound}`} imgName={"binaural"} borderTop={15} borderBottom={0} />
        <ViewSelectedOption text={`${typeBackgroundSound}`} imgName={"background"} borderTop={0} borderBottom={15} />

        <GridOptionsClock />
      </GridMenu>
  );
}

export default SelectionTime;