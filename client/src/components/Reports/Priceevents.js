import React from "react";
import { Table } from "antd";
import axios from "axios";
import { render } from "react-dom";
import "antd/dist/antd.css";

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
        Type: "2012"
      },
      {
        key: "12",
        Code: "313",
        DisplayName: "audi",
        Name: "rs5",
        Type: "2013"
      }
    ]
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
        Type: "2012"
      },
      {
        key: "22",
        Code: "503431",
        DisplayName: "ford",
        Name: "fusion",
        Type: "2015"
      }
    ]
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
        Type: "2012"
      }
    ]
  }
];

const columns = [
  {
    title: "Code",
    dataIndex: "Code",
    key: "Code",
    filters: [
      { text: "SP", value: "SP" },
      { text: "Code", value: "Code" },
      { text: "Message", value: "Message" }
    ],
    onFilter: (value, record) => record.Code.indexOf(value) === 0
  },
  {
    title: "Display Name",
    dataIndex: "DisplayName",
    key: "DisplayName",
    filters: [
      { text: "audi", value: "audi" },
      { text: "ford", value: "ford" },
      { text: "kia", value: "kia" }
    ],
    onFilter: (value, record) =>
      record.children.filter(child => child.DisplayName === value).length > 0
  },
  { title: "Name", dataIndex: "Name", key: "Name" },
  { title: "Type", dataIndex: "Type", key: "Type" }
];

const columns2 = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  }
];

 export default class Reportone extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        let dataResponse = [];
        for (let i = 0; i < 3; i++) {
          let getData = response.data[i];
          dataResponse.push({
            key: getData.id,
            name: getData.name,
            username: getData.username,
            email: getData.email,
            children: []
          });

          dataResponse[i].children.push({
            key: "w" + i,
            name: getData.address.street,
            username: getData.address.suite,
            email: getData.address.city
          });
        }
        this.setState({
          data: dataResponse
        });
      })
      .catch(err => {
        console.log("error fetching image: ");
      });
  };

  render() {
    return (
      <div>
      

        {this.state.data.length > 0 ? (
          <Table
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

