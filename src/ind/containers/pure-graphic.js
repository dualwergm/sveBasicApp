import React, {Component} from 'react';
import PureChart from 'react-native-pure-chart';
import VData from '../../utils/data';

class PureGraphic extends Component {
    render(){
        return (
            <PureChart 
                data={VData.graphic.data1} 
                type={'bar'}
                height={200}
                width={'100%'}
                backgroundColor={'white'}
                color={'#eaeaea'}
                numberOfYAxisGuideLine={5}
            />
        );
    };
}

export default PureGraphic;