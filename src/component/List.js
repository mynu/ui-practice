import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

class List extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            error: '',
            fatching: false

        }
    }
    fetchData = async () => {
        // const res = axios.get or

        try {
            const res = await axios('https://fakestoreapi.com/products')
            console.warn('Response', res)
            const { data } = res
            this.setState({
                data: data
            })
        } catch {
            this.setState({
                error: "Faild to fatch data"
            })
        }
    }
    componentDidMount() {
        this.fetchData()
    }
    render() {
        console.log('this', this.state.data)
        const { data, error, fatching } = this.state
        if (error) {
            return <h3>{error}</h3>
        }
        if (fatching) {
            return <h1>Loading33333333333</h1>
        }
        return (
            <div>

                {
                    data.length &&
                    <ul>
                        <div className="jsondata">
                            <div className='card11'><Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={data[0].image}></Card.Img>
                                <Card.Body>

                                    <Card.Title>{data[0].id}<br />{data[0].title}</Card.Title>
                                    <Card.Text>
                                        {data[0].description}
                                    </Card.Text>
                                    <Button variant="primary">Submit Button</Button>
                                </Card.Body>
                            </Card>
                            </div>
                            <div className="card12">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={data[1].image}></Card.Img>
                                    <Card.Body>

                                        <Card.Title>{data[1].id}<br />{data[1].title}</Card.Title>
                                        <Card.Text>
                                            {data[1].description}
                                        </Card.Text>
                                        <Button variant="primary">Submit Button</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="card13">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={data[2].image}></Card.Img>
                                    <Card.Body>

                                        <Card.Title>{data[2].id}<br />{data[2].title}</Card.Title>
                                        <Card.Text>
                                            {data[2].description}
                                        </Card.Text>
                                        <Button variant="primary">Submit Button</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="card14">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={data[3].image}></Card.Img>
                                    <Card.Body>

                                        <Card.Title>{data[3].id}<br />{data[3].title}</Card.Title>
                                        <Card.Text>
                                            {data[3].description}
                                        </Card.Text>
                                        <Button variant="primary">Submit Button</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </ul>


                }

            </div>
        )
    }
}
export default List;