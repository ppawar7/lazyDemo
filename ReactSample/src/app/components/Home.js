
import React, { Component } from 'react'
import { BlogComponent } from './Blog'
import { Container, Row } from 'mdbreact';
import { homeMockData } from '../MockData/HomeData'
class Home extends Component {
  render() {
    return (
      <Container>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">Welocome to Infosys</h2>
          <p className="grey-text w-responsive mx-auto mb-5">Infosys, a global leader in technology services & consulting, helps clients in more than 50 countries to create & execute digital transformation strategies.</p>
            <BlogComponent blogResponse={homeMockData} />
        </section>
      </Container>
    )
  }
}

export { Home }
