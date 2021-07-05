import {
    Col,
    Row
}from 'reactstrap';

 function LandingPage() {

    return (
        <div className="container">
            <Row className="mt-5">
                <Col xs="4">
                    <h2 className="text-start">
                        Was ist unsere Vision?
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col xs="4">
                   <p className="text-start">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conset</p> 
                </Col>
            </Row>
            <Row>
                <Col xs="4">
                <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Melde dich für den Newsletter an!" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
                </Col>
            </Row>
        </div>
    )
}
export default LandingPage