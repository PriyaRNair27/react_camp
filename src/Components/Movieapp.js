import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { Component } from 'react'
import Header from './Header'

export default class Movieapp extends Component {
    state={
        movievalues:[
            {
                "moviename":"RRR",
                "director":"Rajamauli",
                "year":2022,
                "Actor":"Ramcharan,NTR"
            },{
                "moviename":"jilla",
                "director":"jeba",
                "year":2017,
                "Actor":"Vijay"
            },{
                "moviename":"Singam-3",
                "director":"sreejith",
                "year":2019,
                "Actor":"Surya"
            },{
                "moviename":"Thuppaki",
                "director":"jeba",
                "year":2015,
                "Actor":"Vijay"
            }
        ]
    }
  render() {
    return (
      
        <TableContainer>
            <Header/>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>MOVIE NAME</TableCell>
                        <TableCell>DIRECTOR</TableCell>
                        <TableCell>YEAR</TableCell>
                        <TableCell>ACTOR</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        {this.state.movievalues.map(
                            (value,index)=>{

                                return <TableRow>
                                <TableCell>{value.moviename}</TableCell>
                                <TableCell>{value.director}</TableCell>
                                <TableCell>{value.year}</TableCell>
                                <TableCell>{value.Actor}</TableCell>
                            </TableRow>
                            }
                        )}
                       
                    </TableBody>
            </Table>
        </TableContainer>
    
    )
  }
}
