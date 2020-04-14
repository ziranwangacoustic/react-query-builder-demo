import { BasicConfig, Utils } from 'react-awesome-query-builder';

export default {
  ...BasicConfig,
  fields: {
    location: {
      label: 'Location',
      tooltip: 'Group of location fields',
      type: '!struct',
      subfields: {
        city: {
          label: 'City',
          type: 'select',
          valueSources: ['value'],
          listValues: [
            { value: 'atlanta', title: 'Atlanta' },
            { value: 'new-york-city', title: 'New York City' },
          ],
        },
        state: {
          label: 'State',
          type: 'select',
          fieldSettings: {
            min: 0,
          },
          valueSources: ['value'],
          listValues: [
            { value: 'georgia', title: 'Georgia' },
            { value: 'new-jersey', title: 'New Jersey' },
            { value: 'new-york', title: 'New York' },
          ],
        },
      },
    },
    country: {
      label: 'Country',
      tooltip: 'Group of country fields',
      type: '!struct',
      subfields: {
        northAmerican: {
          label: 'North American',
          type: 'select',
          valueSources: ['value'],
          listValues: [
            { value: 'usa', title: 'USA' },
            { value: 'canada', title: 'Canada' },
          ],
        },
        european: {
          label: 'European',
          type: 'select',
          fieldSettings: {
            min: 0,
          },
          valueSources: ['value'],
          listValues: [
            { value: 'germany', title: 'Germany' },
            { value: 'ireland', title: 'Ireland' },
            { value: 'uk', title: 'UK' },
          ],
        },
      },
    },
  },
  settings: {
    queryName: 'Location',
    initialValue: {
      id: Utils.uuid(),
      type: 'group',
      children1: {
        [Utils.uuid()]: {
          type: 'rule',
          properties: {
            field: 'location.city',
            operator: 'select_equals',
            value: ['atlanta'],
            valueSrc: ['value'],
            valueType: ['select'],
          },
        },
      },
    },
    // immutableFieldsMode: false,
    immutableGroupsMode: false,
    showNot: false,
  },
};
