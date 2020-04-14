import { BasicConfig, Utils } from 'react-awesome-query-builder';

export default {
  ...BasicConfig,
  fields: {
    textColor: {
      label: 'Text Color',
      type: 'treeselect',
      valueSources: ['value'],
      // listValues: [
      //   { value: 'null', title: 'NULL' },
      //   { value: 'yellow', title: 'Yellow' },
      //   { value: 'green', title: 'Green' },
      //   { value: 'orange', title: 'Orange' },
      //   { value: 'red', title: 'Red' },
      // ],
      listValues: [
        { value: 'warm', title: 'Warm colors' },
        { value: 'red', title: 'Red', parent: 'warm' },
        { value: 'orange', title: 'Orange', parent: 'warm' },
        { value: 'cold', title: 'Cold colors' },
        { value: 'blue', title: 'Blue', parent: 'cold' },
        { value: 'green', title: 'Green', parent: 'cold' },
      ],
    },
    backgroundColor: {
      label: 'Background Color',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'null', title: 'NULL' },
        { value: 'white', title: 'White' },
        { value: 'gray', title: 'Gray' },
        { value: 'black', title: 'Black' },
      ],
    },
    foregroundColor: {
      label: 'Foreground Color',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'null', title: 'NULL' },
        { value: 'pink', title: 'Pink' },
        { value: 'gray', title: 'Gray' },
        { value: 'black', title: 'Black' },
      ],
    },
  },
  settings: {
    queryName: 'Colors',
    initialValue: {
      id: Utils.uuid(),
      type: 'group',
      children1: {
        [Utils.uuid()]: {
          type: 'rule',
          properties: {
            field: 'textColor',
            operator: 'select_not_equals',
            value: ['green'],
            valueSrc: ['value'],
            valueType: ['select'],
          },
        },
      },
    },
    immutableFieldsMode: false,
    immutableGroupsMode: false,
    showNot: false,
  },
};
