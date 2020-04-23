import { BasicConfig, Utils } from 'react-awesome-query-builder';

export default {
  ...BasicConfig,
  fields: {
    emailBehavior: {
      label: 'Email Behavior',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        // { value: 'chooseEmailBehavior', title: 'Choose Email Behavior' },
        { value: 'beenSentEmail', title: 'Been sent email' },
        { value: 'openedEmail', title: 'Opened email' },
        { value: 'clickedLinkInEmail', title: 'Clicked link in email' },
        { value: 'clickedAnyLinkInEmail', title: 'Clicked any link in email' },
      ],
      operators: ['select_equals', 'select_not_equals'],
      // preferWidgets: ['slider', 'rangeslider'],
    },
  },
  operators: {
    ...BasicConfig.operators,
    select_equals: {
      label: 'Has',
      reversedOp: 'select_not_equals',
      sqlOp: 'Has',
      sqlFormatOp: (field, _op, value, _valueSrc, _valueType, opDef) =>
        `${field} ${opDef.sqlOp} ${value.replace("'", '')}`,
    },
    select_not_equals: {
      label: 'Has not',
      reversedOp: 'select_equals',
      sqlOp: 'Has not',
    },
  },

  settings: {
    queryName: 'Email Behavior',
    initialValue: {
      id: Utils.uuid(),
      type: 'group',
      children1: {
        [Utils.uuid()]: {
          type: 'rule',
          properties: {
            field: 'emailBehavior',
            // operator: 'equal'
            operator: 'select_equals',
            value: [undefined],
            valueSrc: ['value'],
            valueType: ['select'],
          },
        },
      },
    },
    immutableFieldsMode: true,
    immutableGroupsMode: true,
    showNot: false,
  },
};
