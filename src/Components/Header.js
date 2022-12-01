import { AppBar, Link, Toolbar, Typography } from '@material-ui/core'
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <AppBar color='secondary'>
            <Toolbar><Typography><Link href='/'> home</Link></Typography>&nbsp;&nbsp;&nbsp;
            <Link  href="/new">MOVIES</Link>&nbsp;&nbsp;&nbsp;
            
            <Link  href="/course">COURSES</Link>&nbsp;&nbsp;&nbsp;
            
            </Toolbar>
        </AppBar>
      </div>
    )
  }
}
