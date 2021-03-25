import React, { Component } from "react";
import { Excel } from "antd-table-saveas-excel";
import { DownloadOutlined } from "@ant-design/icons";

import { Table, Input, Button, Space, Tag, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import moment from "moment";


class ExportExceltwo extends React.Component {
  state = {
    searchText: "",
    searchedColumn: "",
    ProductData: [],
  };
  componentDidMount() {
    axios.get("http://localhost:7260/api/priceeventreport").then((response) => {
      console.log(response.data);
      this.setState({
        ProductData: response.data,
      });
    });
  }
  saveToExcel = () => {
    const excel = new Excel();
    excel.addSheet("data");
    excel.addColumns(
      [
        {
          title: "Id",
          dataIndex: "id",
        },
        {
          title: "Creation Date",
          dataIndex: "creationDate",
        },
        {
          title: "Application Date",
          dataIndex: "applicationDate",
        },

        {
          title: "Creation Date",
          dataIndex: "creationDate",
        },
        {
          title: "Application Time",
          dataIndex: "applicationTime",
        },
        {
          title: "Description",
          dataIndex: "Description",
        },
        {
          title: "ProductID",
          dataIndex: "ProductID",
        },
        {
          title: "New Price",
          dataIndex: "NewPrice",
        },
      ],
      1
    );
    excel.addDataSource(this.state.ProductData);
    excel.setTHeadStyle({
      background: "FF404040",
    });
    excel.setTBodyStyle({
      background: "FFFFFFFF",
    });
    excel.saveAs("data2.xlsx", "blob", true);
  };
  // COLUMNS PROPS
  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const columns = [
      {
        title: "id",
        dataIndex: "id",
        key: "id",
        ...this.getColumnSearchProps("id"),
        render: (text) => text,
      },
      {
        title: "creationDate",
        dataIndex: "creationDate",
        key: "creationDate",
        ...this.getColumnSearchProps("creationDate"),
        render: (text) => moment(text).format("MMMM Do YYYY, hh:mm:ss"),
      },
      {
        title: "applicationDate",
        dataIndex: "applicationDate",
        key: "applicationDate",
        ...this.getColumnSearchProps("applicationDate"),
        render: (text) => moment(text).format("MMMM Do YYYY"),
      },
      {
        title: "applicationTime",
        dataIndex: "applicationTime",
        key: "applicationTime",
        ...this.getColumnSearchProps("applicationTime"),
        render: (text) => moment(text).format(" hh:mm:ss"),
      },
      {
        title: "Description",
        dataIndex: "Description",
        key: "Description",
        ...this.getColumnSearchProps("Description"),
        render: (text) => text,
      },
      {
        title: "ProductID",
        dataIndex: "ProductID",
        key: "ProductID",
        ...this.getColumnSearchProps("ProductID"),
        render: (text) => text,
      },
      {
        title: "NewPrice",
        dataIndex: "NewPrice",
        key: "NewPrice",
        ...this.getColumnSearchProps("NewPrice"),
        render: (text) => text,
      },
    ];
    return (
      <>
       <Tooltip title="Save this table as .xlxs">
          <Button
            icon={<DownloadOutlined />}
            onClick={this.saveToExcel}
            style={{ color: "green", border: "green" }}
          >
            Export to Excel
          </Button>
        </Tooltip>
        <Table columns={columns} dataSource={this.state.ProductData}  size="middle"/>
      </>
    );
  }
}

export default ExportExceltwo;
