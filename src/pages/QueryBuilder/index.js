import React, { Component } from 'react';
import { Query, Builder, Utils } from 'react-awesome-query-builder';
import { Button, Card, Dropdown, Icon, Menu, Select } from 'antd';
import 'antd/dist/antd.css';
import 'react-awesome-query-builder/css/styles.scss';
import './index.css';
import productConfigs from './configs/product';
import locationConfigs from './configs/location';

// const emptyValue = { id: Utils.uuid(), type: 'group' };

export default class DemoQueryBuilder extends Component {
  constructor() {
    super();
    this.state = {
      queryMap: {}, // map of uuid => { config, value, conjunction: 'AND'|'OR' }
    };
  }

  // queryMap = { 1: query1, 2: query2 }

  onAddConfig = ({ item }) => {
    const { config } = item.props;
    const { initialValue } = config.settings;

    const value = Utils.loadTree(initialValue, config);
    const query = { config, value, conjunction: 'AND' };

    this.setState(prevState => ({ queryMap: { ...prevState.queryMap, [Utils.uuid()]: query } }));
  };

  onDeleteConfig = id => {
    this.setState(prevState => {
      const { [id]: deleted, ...queryMap } = prevState.queryMap;
      return { queryMap };
    });
  };

  onChangeConfig = (id, value, config) => {
    this.setState(prevState => ({
      queryMap: {
        ...prevState.queryMap,
        [id]: { ...prevState.queryMap[id], config, value },
      },
    }));
  };

  onChangeConfigConjunction = (id, conjunction) => {
    this.setState(prevState => ({
      queryMap: {
        ...prevState.queryMap,
        [id]: { ...prevState.queryMap[id], conjunction },
      },
    }));
  };

  render() {
    const { queryMap } = this.state;
    // console.log(queryMap);
    return (
      <div>
        <div style={{ margin: 16 }}>
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu onClick={this.onAddConfig}>
                {productConfigs.map(config => (
                  <Menu.Item key={config.settings.queryName} config={config}>
                    {config.settings.queryName}
                  </Menu.Item>
                ))}
              </Menu>
            }
          >
            <Button className="button">
              Product <Icon type="down" />
            </Button>
          </Dropdown>
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu onClick={this.onAddConfig}>
                {locationConfigs.map(config => (
                  <Menu.Item key={config.settings.queryName} config={config}>
                    {config.settings.queryName}
                  </Menu.Item>
                ))}
              </Menu>
            }
          >
            <Button className="button">
              Location <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
        {Object.entries(queryMap).map(([id, query], index) => {
          const { config, value } = query;
          // const { logic, data, errors } = Utils.jsonLogicFormat(value, config);
          // console.log(errors);
          // console.log(Utils.getTree(value));
          return (
            <Card
              key={id}
              style={{ margin: 16 }}
              size="small"
              title={config.settings.queryName}
              extra={<Button type="danger" icon="delete" onClick={() => this.onDeleteConfig(id)} />}
            >
              {index > 0 && (
                <Select
                  size="small"
                  defaultValue="AND"
                  onChange={conjunction => this.onChangeConfigConjunction(id, conjunction)}
                >
                  <Select.Option key="AND">AND</Select.Option>
                  <Select.Option key="OR">OR</Select.Option>
                </Select>
              )}
              <Query
                {...config}
                value={value}
                onChange={(newValue, newConfig) => this.onChangeConfig(id, newValue, newConfig)}
                renderBuilder={props => (
                  <div className="query-builder-container">
                    <div
                      className="query-builder"
                      style={{ margin: '12px 0 0', border: '1px solid #ffc440' }}
                    >
                      <Builder {...props} />
                    </div>
                  </div>
                )}
              />
            </Card>
          );
        })}
        <div className="query-builder-result" style={{ margin: 14 }}>
          sqlFormat:
          <pre
            style={{ backgroundColor: 'lightgrey', margin: '10px 0', padding: 10, minHeight: 64 }}
          >
            {Object.values(queryMap).map((query, index) => {
              const { config, value, conjunction } = query;
              const sqlString = JSON.stringify(Utils.sqlFormat(value, config), undefined, 2);

              return `${index > 0 ? `${conjunction} ` : ''}${sqlString}\n`;
            })}
          </pre>
        </div>
      </div>
    );
  }
}
