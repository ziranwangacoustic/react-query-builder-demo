import { BasicConfig, Utils } from 'react-awesome-query-builder';

export default {
  ...BasicConfig,
  name: 'State',
  fields: {
    state: {
      label: 'State',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'ga', title: 'Georgia' },
        { value: 'nj', title: 'New Jersey' },
        { value: 'ny', title: 'New York' },
      ],
    },
  },
  settings: {
    queryName: 'State',
    initialValue: {
      id: Utils.uuid(),
      type: 'rule',
      properties: {
        field: 'state',
        operator: 'select_equals',
        value: [undefined],
        valueSrc: ['value'],
        valueType: ['select'],
      },
    },
    immutableFieldsMode: true,
    immutableGroupsMode: true,
    showNot: false,
  },
};
