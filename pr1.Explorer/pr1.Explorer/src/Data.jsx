import React, { Component } from 'react';


const TableRow = ({ data }) => {
    const { grid, name, email, password, course, city } = data;
    return (
        <tr>
            <td>{grid}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{course}</td>
            <td>{city}</td>
        </tr>
    );
};


class Data extends Component {
    render() {
        const { explorer } = this.props;

        return (
            <div style={{ margin: '0'}}>
                <h1 align='center'>STUDENT DATA</h1>
                <table style={{alignItems: 'center', margin: 'auto'}} border={3} cellPadding={10}  >
                    <thead>
                        <tr>
                            <th>GRID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PASSWORD</th>
                            <th>COURSE</th>
                            <th>CITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {explorer.map((data, index) => (
                            <TableRow key={data.grid || index} data={data} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Data;
