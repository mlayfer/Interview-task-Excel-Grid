import React, { Component } from 'react';
import '../App.css';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import axios from 'axios';

class Grid extends Component {
    constructor() {
        super();
        this.makeData = this.makeData.bind(this);
        this.renderEditable = this.renderEditable.bind(this);
        this.updateDB = this.updateDB.bind(this);
        this.state = {
            data: this.makeData()
        };
    }
    makeData() {
        const data = [];
        for (var i=1; i<=20; i++) {
            data.push({
                row: i,
                a: '',
                b: '',
                c: ''
            })
        }
        return data;
    }
    renderEditable(cellInfo) {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = this.state.data;
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({ data });
                    this.updateDB(cellInfo.column.id, cellInfo.index, this.state.data[cellInfo.index][cellInfo.column.id]);
                }}
                dangerouslySetInnerHTML={{
                    __html: this.state.data[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }
    updateDB(x, y, text) {
        console.log(this.state.data);
        console.log(x, y, text);
        axios.post('http://localhost:8000/api/Sheet/Save', {
            row: x,
            col: y,
            text: text
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render() {

        const columns = [{
                Header: '',
                accessor: 'row',
                maxWidth:50
            },{
                Header: 'A',
                accessor: 'a',
                Cell: this.renderEditable
            }, {
                Header: 'B',
                accessor: 'b',
                Cell: this.renderEditable
            }, {
                Header: 'C',
                accessor: 'c',
                Cell: this.renderEditable
        }];

        return (
          <div className="Grid">
              <ReactTable data={this.state.data} columns={columns} showPagination={false}/>
          </div>
        );
    }
}

export default Grid;
