import { BasicConfig, Utils } from 'react-awesome-query-builder';

export default {
  ...BasicConfig,
  fields: {
    query: {
      label: 'Query',
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
    queryName: 'Query',
    initialValue: {
      id: Utils.uuid(),
      type: 'rule',
      properties: {
        field: 'query',
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
