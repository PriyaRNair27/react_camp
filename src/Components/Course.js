import { Button,Table,TableCell,TableRow,TableHead,TableContainer,TableBody, CircularProgress, Grid, Typography, Avatar } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'
import Header from './Header'

export default class Course extends Component {
    state={
        course:[],
        is_Loading:false
    }

    fetchCourse=()=>{
        this.setState({
            is_Loading:true
        })
        axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then((response)=>{
            console.log(response.data)
            this.setState({
                is_Loading:false,
                course:response.data
            })
        })
    }
  render() {
    return (
      <div> <Grid container style={{padding:70}}>
        <Header/>
      <Grid item xs={12} sm={12} md={12}>
          <Button onClick={this.fetchCourse}
          variant="contained"
          color='primary'
          fullWidth>FETCH COURSES</Button>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
          <Typography>{this.state.is_Loading ? < CircularProgress/>:(
              <div></div>
          )}</Typography>
      </Grid>
      <Header/>
      <Grid item xs={12} sm={12} md={12}>
      <TableContainer>
          <Table>
              <TableHead>
                  <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>courseTitle</TableCell>
                  <TableCell>courseDescription</TableCell>
                  <TableCell>courseDuration</TableCell>
                  <TableCell>courseDate</TableCell>
                  <TableCell>courseVenue</TableCell>
                  
                  </TableRow>
              </TableHead>
              <TableBody>{this.state.course.map((value,index)=>{
                  return<TableRow>
                  <TableCell>{value._id}</TableCell>
                  <TableCell>{value.courseTitle}</TableCell>
                  <TableCell>{value.courseDescription}</TableCell>
                      <TableCell>{value.courseDuration}</TableCell>
                      <TableCell>{value.courseDate}</TableCell>
                      <TableCell>{value.courseVenue}</TableCell>
                      
              </TableRow>
              })}
                  
              </TableBody>
          </Table>
      </TableContainer>
      </Grid>
  </Grid></div>
    )
  }
}
