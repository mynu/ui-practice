import React from 'react'
import { Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

export default function Contacts() {
    const item = [
        { id: 1, name: 'mynu' },
        { id: 2, name: 'kiran' },
        { id: 3, name: 'shiva' },
        { id: 4, name: 'sameer' },
        { id: 5, name: 'sunil' },
        { id: 6, name: 'surya' },
        { id: 7, name: 'kishore' },
        { id: 8, name: 'bobby' },
        {id:9, name:'zaheer'},
        {id:10, name:'jadeed'}
    ]
    return (

        <div className="contactsname">
            <div className='listname'>
                {item.map((item) => <li key={item.id}> {item.name}</li>)}
            </div>



            <div>
                <Container>
                    <Row className='f-row'>
                        <Col>{item[4].id} {item[4].name}</Col>
                    </Row>
                    <Row className='c2-1row'>
                        <Col>{item[5].id} {item[5].name}</Col>
                        <Col>{item[6].id} {item[6].name}</Col>
                    </Row>
                    <Row className='c3-1row'>
                        <Col>{item[7].id} {item[7].name}</Col>
                        <Col>{item[8].id} {item[8].name}</Col>
                        <Col>{item[9].id} {item[9].name}</Col>
                    </Row>
                    <Row className='c4-1row'>
                        <Col>{item[0].id} {item[0].name}</Col>
                        <Col>{item[1].id} {item[1].name}</Col>
                        <Col>{item[2].id} {item[2].name}</Col>
                        <Col>{item[3].id} {item[3].name}</Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>
            </div>


        </div>
    )
}
