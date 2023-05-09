import { Button, Form, Container, Row, Col,Table } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import '../component/dashboard.css'
import { getData } from '../api/Api';

export default function Dashboard() {
    const [form, setForm] = useState();
    function handleChange(event) {
        if (event.target.name != 'call_date_from' && event.target.name != 'call_date_to')
            setForm({ ...form, [event.target.name]: event.target.value })
        else {
            if (event.target.name == 'call_date_from') {
                var x = fixDate(event.target.value)
                setForm({ ...form, ["call_date_from"]: x })
            }
            else if (event.target.name == 'call_date_to') {
                var y = fixDate(event.target.value)
                setForm({ ...form, ["call_date_to"]: y })
            }
        }
    }
    function fixDate(input) {
        let str = input;
        let arr = str.split("-");
        let out = arr.join('')
        return out
    }
    async function handleSave() {
        await getData(form).then(d => {
            //console.log(d.data)
            setData(d.data)
        })

    }
    const[data,setData] = useState()
    const formRef = useRef(null)
    function handleClear() {
        setForm()
        setData()
        formRef.current.reset()
    }

    return (
        <>
            <Container className='pt-5'>
                <Row className="Input justify-content-center">
                    <Col xs={12} md={12} style={{ backgroundColor: "lightgrey" }} className="justify-content-center p-2">
                        <Form ref={formRef}>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
                                    Call Date From
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control
                                        type="date"
                                        onChange={handleChange}
                                        name="call_date_from"
                                        placeholder="enter date"
                                    />
                                </Col>
                                <Form.Label column sm="2">
                                    Call Date To
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="date" onChange={handleChange} name="call_date_to" placeholder="Enter date" />
                                </Col>
                                <Form.Label column sm="2">
                                    Phone Number
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="number" onChange={handleChange} name="phone_number" placeholder="Enter phone number" />
                                </Col>
                                <Form.Label column sm="2">
                                    Volunteer Number
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="number" onChange={handleChange} name="volunteer_no" placeholder="Enter vounteer number" />
                                </Col>
                                <Form.Label column sm="2">
                                    Campaign Id
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="number" onChange={handleChange} name="campaign_id" placeholder="Enter campaign id" />
                                </Col>
                                <Form.Label column sm="2">
                                    Agent Id
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="number" onChange={handleChange} name="agent_id" placeholder="Enter Agent Id" />
                                </Col>
                            </Form.Group>

                            <Button variant="primary" onClick={handleSave} className="save" style={{ width: '8rem' }} >
                                Save
                            </Button>

                            <Button variant="primary" onClick={handleClear} className="clear" style={{ width: '8rem' }} >
                                Clear
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row className='table pt-5'>
                    <div style={{ width: "100%", overflowY: "scroll", overflowX: "auto" }}>
                        <Table bordered hover striped variant='light'>
                            <thead>
                                <tr className="text-center">
                                    <th>Call Date From</th>
                                    <th>Call Date To</th>
                                    <th>Phone Number</th>
                                    <th >Campaign Id</th>
                                    <th>Agent Id</th>
                                    <th>Volunteer Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {data && data.map((e, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{form.call_date_from}</td>
                                            <td>{form.call_date_to}</td>
                                            <td>{e.phone_number}</td>
                                            <td>{e.campaign_id}</td>
                                            <td>{e.agent_id}</td>
                                            <td>{e.volunteer_no}</td>
                                            <td>
                                                <Button style={{margin:"auto"}}>
                                                    download
                                                </Button>
                                                <Button style={{margin:"auto"}}>
                                                    play
                                                </Button>
                                            </td>

                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                </Row>
            </Container>
        </>
    )
}