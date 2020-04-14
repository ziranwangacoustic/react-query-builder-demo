import { BasicConfig, Utils } from 'react-awesome-query-builder';

export default {
  ...BasicConfig,
  name: 'City',
  fields: {
    city: {
      label: 'City',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'atlanta', title: 'Atlanta' },
        { value: 'new-york-city', title: 'New York City' },
      ],
    },
    nickname: {
      label: 'Nick Name',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'cokecity', title: 'Coke City' },
        { value: 'bigapple', title: 'Big Apple' },
      ],
    },
  },
  settings: {
    queryName: 'City',
    initialValue: {
      id: Utils.uuid(),
      type: 'rule',
      properties: {
        field: 'city',
        operator: 'select_equals',
        value: [undefined],
        valueSrc: ['value'],
        valueType: ['select'],
      },
    },
    immutableFieldsMode: false,
    immutableGroupsMode: true,
    showNot: false,
  },
};
