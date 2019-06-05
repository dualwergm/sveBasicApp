const testData = {
    inds: [
        {
            id: 1,
            name: 'Variable Nia Nia 1',
            state: {
                color: '#4caf50',
                icon: '1'
            },
            value: '982.56',
            target: '1000.00',
            compliance: '98.25',
            date: '21/May/2019 23:59',
            unit: 'Millones de pesos',
            timer: 'Mensual',
            isDate: true
        },
        {
            id: 2,
            name: 'Variable Edna 2',
            state: {
                color: '#00bcd4',
                icon: '3'
            },
            value: '782.56',
            target: '1000.00',
            compliance: '78.25',
            date: '21/May/2019 23:59',
            unit: 'Millones de pesos',
            timer: 'Mensual',
            isDate: true
        },
        {
            id: 3,
            name: 'Variable Juan Juan',
            state: {
                color: '#ffeb3b',
                icon: '2'
            },
            value: '582.56',
            target: '1000.00',
            compliance: '58.25',
            date: '21/May/2019 23:59',
            unit: 'Millones de pesos',
            timer: 'Mensual',
            isDate: false
        },
        {
            id: 4,
            name: 'Ventas nacionales',
            state: {
                color: '',
                icon: '0'
            },
            value: '482.56',
            target: '1000.00',
            compliance: '48.25',
            date: '21/May/2019 23:59',
            unit: 'Unidades',
            timer: 'Mensual',
            isDate: true
        },
        {
            id: 5,
            name: 'Ventas internacionales con Trump',
            state: {
                color: '#e91e63',
                icon: '1'
            },
            value: '282.56',
            target: '1000.00',
            compliance: '28.25',
            date: '21/May/2019 23:59',
            unit: 'Millones de pesos',
            timer: 'Mensual',
            isDate: true
        }
    ],
    graphic: {
        data: {
            labels: ['Ene/2019', 'Feb/2019', 'Mar/2019', 'Abr/2019', 'May/2019', 'Jun/2019', 
                    'Jul/2019', 'Ago/2019', 'Sep/2019', 'Oct/2019', 'Nov/2019', 'Dic/2019'],
            datasets: [{
              data: [
                17.25,
                79.58,
                55,
                12.77,
                99,
                63,
                76,
                45,
                23,
                61,
                39,
                88
              ]
            },
            {
                data: [
                  77.25,
                  19.58,
                  85,
                  72.77,
                  39,
                  93,
                  26,
                  75,
                  83,
                  51,
                  79,
                  28
                ]
              }
            ]
          }
    }
};

export default testData;