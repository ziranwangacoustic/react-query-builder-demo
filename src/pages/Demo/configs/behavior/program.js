import { BasicConfig, Utils } from 'react-awesome-query-builder';

// operators: {
//   equal,
//   not_equal,
//   less,
//   less_or_equal,
//   greater,
//   greater_or_equal,
//   like,
//   not_like,
//   between,
//   not_between,
//   range_between, // like `between`, but for slider
//   range_not_between,
//   is_empty,
//   is_not_empty,
//   select_equals, // like `equal`, but for select
//   select_not_equals,
//   select_any_in,
//   select_not_any_in,
//   multiselect_equals, // like `equal`, but for multiselect
//   multiselect_not_equals,
//   proximity, // complex operator with options
// },

// console.log(BasicConfig);

export default {
  ...BasicConfig,
  fields: {
    program: {
      label: 'Program Behavior',
      type: 'number',
      valueSources: ['value'],
      fieldSettings: {
        min: 10,
        max: 100,
      },
      operators: ['equal', 'not_equal'],
      // excludeOperators: [],
      // defaultOperator: [],
      preferWidgets: ['slider', 'rangeslider'],
    },
  },
  // operators: {
  //   between: {
  //     ...BasicConfig.operators.between,
  //     valueLabels: ['Value from', 'Value to'],
  //     textSeparators: ['from', 'to'],
  //   },
  //   proximity,
  // },
  operators: {
    ...BasicConfig.operators,
    equal: {
      label: 'Has',
      reversedOp: 'not_equal',
      labelForFormat: 'Has',
      cardinality: 1,
    },
    not_equal: {
      label: 'Has not',
      reversedOp: 'equal',
      labelForFormat: 'Has not',
      cardinality: 1,
    },
  },

  settings: {
    queryName: 'Program Behavior',
    initialValue: {
      id: Utils.uuid(),
      type: 'group',
      children1: {
        [Utils.uuid()]: {
          type: 'rule',
          properties: {
            field: 'program',
            operator: 'equal',
            value: [10],
            valueSrc: ['value'],
            valueType: ['number'],
          },
        },
      },
    },
    immutableFieldsMode: false,
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
