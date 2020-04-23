import { BasicConfig, Utils } from 'react-awesome-query-builder';

export default {
  ...BasicConfig,
  fields: {
    email: {
      label: 'Email',
      type: 'text',
      // valueSources: ['value'],
      operators: ['equal', 'not_equal', 'is_empty', 'is_not_empty'],
    },
    lastModifiedDate: {
      label: 'Last Modified Date',
      type: 'text',
    },
    emailType: {
      label: 'Email Type',
      type: 'text',
    },
    emailDomainPart: {
      label: 'Email Domain Part',
      type: 'text',
    },
    optInDate: {
      label: 'Opt in Date',
      type: 'text',
    },
    optInDetails: {
      label: 'Opt in Details',
      type: 'text',
    },
    CRMLeadSource: {
      label: 'CRM Lead Source',
      type: 'text',
    },
  },

  operators: {
    ...BasicConfig.operators,
    equal: {
      label: 'is equal to',
      reversedOp: 'not_equal',
      sqlOp: 'is equal to',
      sqlFormatOp: (field, _op, value, _valueSrc, _valueType, opDef) =>
        `${field} ${opDef.sqlOp} ${value.replace("'", '')}`,
    },
    not_equal: {
      label: 'is not equal to',
      reversedOp: 'equal',
      sqlOp: 'is not equal to',
    },
    is_empty: {
      label: 'is blank',
      reversedOp: 'is_not_empty',
      sqlOp: 'is blank',
      sqlFormatOp: (field, _op, value, _valueSrc, _valueType, opDef) =>
        `${field} ${opDef.sqlOp} ${value.replace("'", '')}`,
    },
    is_not_empty: {
      label: 'is not blank',
      reversedOp: 'is_empty',
      sqlOp: 'is not blank',
      sqlFormatOp: (field, _op, value, _valueSrc, _valueType, opDef) =>
        `${field} ${opDef.sqlOp} ${value.replace("'", '')}`,
    },
    // contains: {
    //   label: 'contains',
    //   reversedOp: 'not_equal',
    //   sqlOp: 'contains',
    //   sqlFormatOp: (field, _op, value, _valueSrc, _valueType, opDef) =>
    //     `${field} ${opDef.sqlOp} --- ${value.replace("'", '')}`,
    // },
  },

  settings: {
    queryName: 'Data Fields',
    initialValue: {
      id: Utils.uuid(),
      type: 'rule',
      properties: {
        field: 'email',
        operator: 'equal',
        value: [undefined],
        // valueSrc: ['value'],
        valueType: ['text'],
      },
    },
    immutableFieldsMode: false,
    immutableGroupsMode: true,
    showNot: false,
    showLabels: true,
  },
};
