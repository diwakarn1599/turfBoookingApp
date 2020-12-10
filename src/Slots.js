import React from 'react';
import './slots.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Button} from 'react-bootstrap';

function Slots(props) {
    return (
        <div className="Slots">
            <Container>
                <ul className="Slots-row">
                <Link to="/morning">
                <Button variant="outline-primary" className="slots_button">Morning</Button>{' '}
                    </Link>
                    <Link to="/noon">
                    <Button variant="outline-primary" className="slots_button">Noon</Button>{' '}
                    </Link>
                    <Link to="/evening">
                    <Button variant="outline-primary" className="slots_button">Evening</Button>{' '}
                    </Link>
                    <Link to="/night">
                    <Button variant="outline-primary" className="slots_button">Night</Button>{' '}
                    </Link>
                </ul>
            </Container>
            <h2>{props.value}</h2>
            <Container className="center">
                        <ul className="Slots-row">
                            <li ><input type="checkbox" />{props.time + ".00"}</li>
                            <li ><input type="checkbox" />{props.time+ ".30"}</li>
                            <li ><input type="checkbox" />{props.time+ 1 + ".00"}</li>
                            <li ><input type="checkbox" />{props.time+ 1 + ".30"}</li>
                        </ul>
                        <ul className="Slots-row">
                            <li  ><input type="checkbox" />{props.time+ 2 + ".00"}</li>
                            <li  ><input type="checkbox" />{props.time+ 2 + ".30"}</li>
                            <li  ><input type="checkbox" />{props.time+ 3 + ".00"}</li>
                            <li  ><input type="checkbox" />{props.time+ 3 + ".30"}</li>
                        </ul>
                        <ul className="Slots-row">
                            <li  ><input type="checkbox" />{props.time+ 4 + ".00"}</li>
                            <li  ><input type="checkbox" />{props.time+ 4+ ".30"}</li>
                            <li  ><input type="checkbox" />{props.time+ 5+ ".00"}</li>
                            <li  ><input type="checkbox" />{props.time+ 5+ ".30"}</li>
                        </ul>
                        <ul className="Slots-row">
                            <li  ><input type="checkbox" />{props.time+ 6+ ".00"}</li>
                            <li  ><input type="checkbox" />{props.time+ 6+ ".30"}</li>
                            <li  ><input type="checkbox" />{props.time+ 7+ ".00"}</li>
                            <li  ><input type="checkbox" />{props.time+ 7+".30"}</li>
                        </ul>
            </Container>
        </div>
    );
}

export default Slots;
