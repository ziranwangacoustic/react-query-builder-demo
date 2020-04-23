import { BasicConfig, Utils } from 'react-awesome-query-builder';

export default {
  ...BasicConfig,
  fields: {
    contactList: {
      label: 'Contact List',
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
    queryName: 'Contact List',
    initialValue: {
      id: Utils.uuid(),
      type: 'rule',
      properties: {
        field: 'contactList',
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
