
import { Button, Grid, TextField } from '@material-ui/core'
import React, { Component } from 'react'

export default class Movie extends Component {
    state={
        "moviename":"",
        "title":"",
        "year":"",
        "director":"",
        "production":"",
        "list":""
    }

movieData=()=>{

console.log(this.state)
}    
movieread=(event)=>{
    this.setState({
        [event.target.name]:event.target.value

    })
}

  render() {
    return (

      <Grid container>
        <Grid item xs={12} sm={12}>
      <TextField
      variant='outlined'
      label="movie name "
      margin='normal'
      fullWidth
      required
      name='moviename'
      onChange={this.movieread}/>
        </Grid>

        <Grid item xs={12} sm={12}>
      <TextField
      onChange={this.movieread}
      variant='outlined'
      label="movie title "
      margin='normal'
      fullWidth
      required
      name='title'/>
        </Grid>

        <Grid item xs={12} sm={12}>
      <TextField
      variant='outlined'
      label="movie year "
      margin='normal'
      onChange={this.movieread}
      fullWidth
      required
      name='year'/>
        </Grid>

        <Grid item xs={12} sm={12}>
      <TextField
      variant='outlined'
      label="movie director "
      margin='normal'
      fullWidth
      required
      onChange={this.movieread}
      name='director'/>
        </Grid>

        <Grid item xs={12} sm={12}>
      <TextField
      variant='outlined'
      onChange={this.movieread}
      label="movie production "
      margin='normal'
      fullWidth
      required
      name='production'/>
        </Grid>


        <Grid item xs={12} sm={12}>
      <TextField
      variant='outlined'
      label="movie list "
      onChange={this.movieread}
      margin='normal'
      fullWidth
      required
      name='list'/>
        </Grid>

        <Grid xs={12} sm={12}>
          <Button 
          variant='contained'
          onClick={this.movieData}
        type='submit'
        color='primary'
        fullWidth
        margin="normal">
            submit
          </Button>
        </Grid>
      </Grid>       
     
    )
  }
}
