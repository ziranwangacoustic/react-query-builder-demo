import { BasicConfig, Utils } from 'react-awesome-query-builder';

export default {
  ...BasicConfig,
  name: 'Universal',
  fields: {
    universal: {
      label: 'Universal Behavior',
      type: 'number',
      valueSources: ['value'],
      fieldSettings: {
        min: 10,
        max: 100,
      },
      // isOptional: true,
      preferWidgets: ['slider', 'rangeslider'],
    },
  },
  settings: {
    queryName: 'Universal Behavior',
    initialValue: {
      id: Utils.uuid(),
      type: 'group',
      children1: {
        [Utils.uuid()]: {
          type: 'rule',
          properties: {
            field: 'universal',
            operator: 'equal',
            value: [10],
            valueSrc: ['value'],
            valueType: ['number'],
          },
        },
      },
    },
    immutableFieldsMode: true,
    immutableGroupsMode: false,
    showNot: false,
  },
  // settings: {
  //   queryName: 'Price',
  //   initialValue: {
  //     id: Utils.uuid(),
  //     type: 'rule',
  //     properties: {
  //       field: 'price',
  //       operator: 'equal',
  //       value: [10],
  //       valueSrc: ['value'],
  //       valueType: ['number'],
  //     },
  //   },
  //   immutableFieldsMode: true,
  //   immutableGroupsMode: true,
  //   showNot: false,
  // },
};
