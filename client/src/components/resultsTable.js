import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import './resultsTable.css';

const ResultsTable = () => {
  const earthquakes = useSelector(
    (state) => state.earthquakeData.earthquakes,
  );
  if (!earthquakes) {
    return null;
  }

  return (
    <div className="ResultsTable">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="ResultsTable__title">
              First 100 Results
            </div>
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Magnitude</TableCell>
                    <TableCell align="right">Place</TableCell>
                    <TableCell align="right">time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {earthquakes.map(({ mag, place, time }) => (
                    <TableRow key={time}>
                      <TableCell component="th" scope="row">
                        {mag}
                      </TableCell>
                      <TableCell align="right">{place}</TableCell>
                      <TableCell align="right">{time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsTable;
