import { FunctionComponent, useContext } from 'react';
import { Table } from 'react-bootstrap';
import { ContextData } from '../@contextAPI';
import { ContextType } from '../type';



const HistoryPage: FunctionComponent = (props) => {
  const { queryData } = useContext(ContextData) as ContextType;
  return (
    <>
      <h1 className='my-3'>History Table</h1>
      <Table className='container border border-3' striped bordered hover>
        <thead>
          <tr className='bg-dark bg-gradient text-white'>
            <th>Serial No</th>
            <th> Name</th>
          </tr>
        </thead>
        <tbody>
          {queryData?.map((data, index) => (<tr>
            <td>{index + 1}</td>
            <td>{data}</td>

          </tr>))}
        </tbody>
      </Table>
    </>
  )
}

export default HistoryPage