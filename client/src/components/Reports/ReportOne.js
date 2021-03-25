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



const columns2 = [
  {
    title: "id",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "stationId_ProductId",
    dataIndex: "stationId_ProductId",
    key: "stationId_ProductId"
  },
  {
    title: "Stationstatus_FusionStatus",
    dataIndex: "Stationstatus_FusionStatus",
    key: "Stationstatus_FusionStatus"
  },
  {
    title: "Rec_Date",
    dataIndex: "Rec_Date",
    key: "Rec_Date"
  },
  {
    title: "App_Date",
    dataIndex: "App_Date",
    key: "App_Date"
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
      .get("http://localhost:7260/api/stationlogreport")
      .then(response => {
        let dataResponse = [];
        for (let i = 0; i < 3; i++) {
          let getData = response.data[i];
          dataResponse.push({
            key: getData.id,
            id:getData.id,
            Stationstatus_FusionStatus:getData.Status,
            stationId_ProductId: getData.stationID,
            Rec_Date: getData.RecieptDate,
            App_Date: getData.AppliedDate,
         
            children: []
          });

          dataResponse[i].children.push({
            key: "w" + i,
            stationId_ProductId: getData.ProductID,
            Stationstatus_FusionStatus: getData.FusionValidationStatus
            
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
      
      <div className="ReportBody">
        {/* <div className="reportbtnrow"> 
        <button className=" reportbtn "> <i class="fas fa-print"></i> Print</button> 
 
      <button className=" reportbtn "> <i class="fas fa-file-excel"></i> Excel</button> 
   
      <input
            className="reportsearch"
            id="Gasoline80"
            name="Gasoline80"
            type="search"
            placeholder="Search"
            
            /> 
        </div> */}
 

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

