import {React , useState }from 'react';
import './Box.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Slots from './Slots';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function Box(props) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Container className="box">
        <div>
        
            <div>
                <h1>Hello</h1>
                <DatePicker className="box_date" selected={startDate} onChange={date => setStartDate(date)} />
                <Slots value={props.value} time={props.time} />
            </div>
            
        </div>
        </Container>
    )
}

export default Box;
