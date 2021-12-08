import React from 'react'
import '../component/procss.css'
import { Row, Col, Image} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import Slidfile from './Slidfile'
function Home() {


    return (
        <div>
            <p>We are a technology company first, but with a major focus on consumer well-being through a healthy diet.
                Most people are very busy with their jobs, family and friends, and other important activities, which
                doesn't leave much time for cooking. This might lead to a poor diet and lasting health consequences.
                We want to solve this problem by using an AI-centric approach. Users can use our app to select their
                diet and foods they like and dislike, and our AI algorithm will create a custom and individual weekly
                meal plan. But we don't stop there. We partner with restaurants and other cooking partners to actually
                cook and deliver all meals from the generated meal plans, in selected cities. All this will be packed
                up in a monthly subscription, where users can choose between receiving one or two meals per day, every
                single day of the month.
            </p>
            <Container>
                <Row className='about'>
                    <Col className="aboutreact1"><h3 className="aboutreact">About React</h3>
                        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application,
                            and React will efficiently update and render just ...</p>
                    </Col>
                    <Col className="aboutjs1">
                        <h3 className="aboutjs">
                            About js</h3>
                        <p>JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class
                            functions, and is best known as ...</p>
                    </Col>
                    <Col className="abouthtml1">
                        <h3 className="abouthtml">
                            About html</h3>
                        <p>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed
                            in a web browser. ... HTML provides a means to create structured documents by denoting structural semantics for
                            text such as headings, paragraphs, lists, links, quotes and other items.</p>
                    </Col>
                    <Col className="aboutcss1">
                        <h3 className="aboutcss">
                            About css</h3>
                        <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written
                            in a markup language such as HTML.</p>
                    </Col>
                </Row>
                <Row>
                    <Col><Image src="https://i.pinimg.com/originals/66/b7/f6/66b7f6e5ad85cdfeab3459f2b5480407.jpg" fluid /></Col>
                    <Col><Image src="https://wallpapercave.com/wp/wp2634222.jpg" fluid /></Col>
                    <Col><Image src="https://c4.wallpaperflare.com/wallpaper/234/414/551/earth-4k-hd-image-for-wallpaper-preview.jpg" fluid /></Col>
                </Row>
            </Container>
            <Slidfile  />
            <Row className="footer">
                <Col><h5 className="title">Footer Content</h5>
                    <p>
                        Here you can use rows and columns here to organize your footer
                        content.
                    </p></Col>
                <Col><h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="http://www.facebook.com">face book</a>
              </li>
              <li className="list-unstyled">
                <a href="https://twitter.com/">twitter</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/">youtube</a>
              </li>
              <li className="list-unstyled">
                <a href="https://mail.google.com/">gmail</a>
              </li>
            </ul></Col>
                <Col><h5 className="title">Footer Content</h5>
                    <p>
                        Here you can use rows and columns here to organize your footer
                        content.
                    </p></Col>
                <Col><h5 className="title">Footer Content</h5>
                    <p>
                        Here you can use rows and columns here to organize your footer
                        content.
                    </p></Col>
            </Row>
            <div class="text-center p-4">
    © Go to react-bootstrap:
    <a class="text-reset fw-bold" href="http://react-bootstrap.com/">react-Bootstrap.com</a>
  </div>


        </div>
    )
}
export default Home;