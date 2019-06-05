import React from 'react';
import {View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import VData from '../../utils/data';

const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2 // optional, default 3
};
const screenWidth = Dimensions.get('window').width;

function Graphic(props){
    
    return (
        <LineChart 
            data={VData.graphic.data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            bezier
            withInnerLines={false}
            style={{
                marginVertical: 8,
                borderRadius: 16
              }}
        />
    );
}

export default Graphic;