import React from 'react';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

function Table(props) {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };

    const students = props.data.filter(e => e.gender==="Female").sort((a, b) => (a.first_name > b.first_name ? -1 : 1)).map(v => {
        return (
        <tr key={v.id}>
            <td>{v.id}</td>
            <td>{v.first_name}</td>
            <td>{v.last_name}</td>
            <td>{v.email}</td>
            <td>{v.gender}</td>
        </tr>
        );
    });
    // const filterStudents =props.data.filter(e => e.gender==="Female");
  return (
    <div>
        <table>
            <thead>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
            </thead>
            <tbody>
                {students}
            </tbody>
        </table>
        <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  )
}

export default Table