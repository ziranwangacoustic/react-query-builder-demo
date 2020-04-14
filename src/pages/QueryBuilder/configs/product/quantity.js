import { BasicConfig, Utils } from 'react-awesome-query-builder';

export default {
  ...BasicConfig,
  name: 'Quantity',
  fields: {
    quantity: {
      label: 'Quantity',
      type: 'number',
      fieldSettings: {
        min: 0,
      },
      valueSources: ['value'],
      preferWidgets: ['number'],
      operators: ['equal'],
    },
  },
  settings: {
    queryName: 'Quantity',
    initialValue: {
      id: Utils.uuid(),
      type: 'rule',
      properties: {
        field: 'quantity',
        operator: 'equal',
        value: [0],
        valueSrc: ['value'],
        valueType: ['number'],
      },
    },
    // initialValue: {
    //   id: Utils.uuid(),
    //   type: 'group',
    //   children1: {
    //     [Utils.uuid()]: {
    //       type: 'rule',
    //       properties: {
    //         field: 'quantity',
    //         operator: 'select_not_equals',
    //         value: ['green'],
    //         valueSrc: ['value'],
    //         valueType: ['select'],
    //       },
    //     },
    //   },
    // },
    immutableFieldsMode: false,
    immutableGroupsMode: false,
    showNot: false,
  },
};
