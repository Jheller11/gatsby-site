---
path: '/react/forms'
cate: 'react'
date: '2018-10-30'
keywords: 'react, forms'
title: 'React Forms'
---

A basic template for a React form component.

```
import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        let target = e.target.name
        let value = e.target.value
        this.setState({
             [target]: value
         })
  }

  handleSubmit(e) {
      e.preventDefault()
      //some code
  }

  render() {
      return (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='label'>LABEL</label>
            <input onChange={this.handleChange} type='text'                 name='name' placeholder='' />
            <input type="submit" value="Submit" />
          </form>
      )
  }
}
```

Links: React Docs: https://reactjs.org/docs/forms.html
