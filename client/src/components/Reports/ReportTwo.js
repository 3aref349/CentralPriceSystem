import React from "react";
import { Table } from "antd";
import axios from "axios";
import { render } from "react-dom";
import "antd/dist/antd.css";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { ExcelExport } from "@progress/kendo-react-excel-export";
// import 'react-table/react-table.css'

const options = {
  exportButton: {
    csv: true,
    pdf: false,
  },
};

const source = [
  {
    key: "1",
    Code: "SP",
    children: [
      {
        key: "11",
        Code: "5001",
        DisplayName: "audi",
        Name: "r8",
        Type: "2012",
      },
      {
        key: "12",
        Code: "313",
        DisplayName: "audi",
        Name: "rs5",
        Type: "2013",
      },
    ],
  },
  {
    key: "2",
    Code: "Code",
    children: [
      {
        key: "21",
        Code: "243",
        DisplayName: "ford",
        Name: "mustang",
        Type: "2012",
      },
      {
        key: "22",
        Code: "503431",
        DisplayName: "ford",
        Name: "fusion",
        Type: "2015",
      },
    ],
  },
  {
    key: "3",
    Code: "Message",
    children: [
      {
        key: "31",
        Code: "4311",
        DisplayName: "kia",
        Name: "optima",
        Type: "2012",
      },
    ],
  },
];

const columns = [
  {
    title: "Code",
    dataIndex: "Code",
    key: "Code",
    filters: [
      { text: "SP", value: "SP" },
      { text: "Code", value: "Code" },
      { text: "Message", value: "Message" },
    ],
    onFilter: (value, record) => record.Code.indexOf(value) === 0,
  },
  {
    title: "Display Name",
    dataIndex: "DisplayName",
    key: "DisplayName",
    filters: [
      { text: "audi", value: "audi" },
      { text: "ford", value: "ford" },
      { text: "kia", value: "kia" },
    ],
    onFilter: (value, record) =>
      record.children.filter((child) => child.DisplayName === value).length > 0,
  },
  { title: "Name", dataIndex: "Name", key: "Name" },
  { title: "Type", dataIndex: "Type", key: "Type" },
];

const columns2 = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "creationDate",
    dataIndex: "creationDate",
    key: "creationDate",
  },
  {
    title: "applicationDate",
    dataIndex: "applicationDate",
    key: "applicationDate",
  },
  {
    title: "applicationTime",
    dataIndex: "applicationTime",
    key: "applicationTime",
  },
  {
    title: "Description",
    dataIndex: "Description",
    key: "Description",
  },
  {
    title: "ProductID",
    dataIndex: "ProductID",
    key: "ProductID",
  },
];

export default class ReportTwo extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios
      .get("http://localhost:7260/api/priceeventreport")
      .then((response) => {
        let dataResponse = [];
        for (let i = 0; i < 3; i++) {
          let getData = response.data[i];
          dataResponse.push({
            key: getData.id,
            creationDate: getData.creationDate,
            applicationDate: getData.applicationDate,
            applicationTime: getData.applicationTime,
            children: [],
          });

          dataResponse[i].children.push({
            key: "w" + i,
            Description: getData.NewPrice,
            ProductID: getData.ProductID,
          });
        }
        this.setState({
          data: dataResponse,
        });
      })
      .catch((err) => {
        console.log("error fetching image: ");
      });
  };

  render() {
    return (
      <div>
        <div className="reportbtnrow">
          <button className=" reportbtn ">
            {" "}
            <i class="fas fa-print"></i> Print
          </button>
          <button className=" reportbtn ">
            {" "}
            <i class="fas fa-file-excel"></i> Excel
          </button>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="Download as XLS"
          />
          <input
            className="reportsearch"
            id="Gasoline80"
            type="search"
            placeholder=" Search   "
          />
        </div>

        {this.state.data.length > 0 ? (
          <Table
            options={options}
            table="table-to-xls"
            id="table-to-xls"
            size="small"
            indentSize={0}
            columns={columns2}
            dataSource={this.state.data}
            defaultExpandAllRows={true}
          />
        ) : null}
      </div>
    );
  }
}
