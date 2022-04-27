import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import { rootState } from '../../redux/reducers/rootReducer';
import '../books table/booksTable.css'

const BookDetails = () => {
const {name} = useParams()
const {books} = useSelector((state:rootState)=>state.DataReducer) 
const navigate = useNavigate() 
  return (
    <div>
         {books.filter((book)=>(book.volumeInfo.title===name)).map((book)=>(
                
                  <CardBody className='card'>
                  <CardTitle><strong>Title:</strong> {book.volumeInfo.title? book.volumeInfo.title : "NA"}</CardTitle>
                  <CardSubtitle><strong>Subtitle:</strong> {book.volumeInfo.subtitle ? book.volumeInfo.subtitle : "NA"}</CardSubtitle>
                  <img src= {book.volumeInfo.imageLinks.thumbnail} alt="hi" height="150px" width ="120px"  />
                  <p><strong>Pages:</strong> {book.volumeInfo.pageCount ? book.volumeInfo.pageCount : "NA"}</p>
                  <p><strong>Description:</strong> {book.volumeInfo.description ? book.volumeInfo.description : "NA"}</p>
                  <p className='infolink' ><a href={book.volumeInfo.infoLink}>Info Link</a></p>
                  <Button className='.btn' onClick={()=>navigate("/store")}>Back</Button>

                  </CardBody>
                
              ))}
    </div>
  )
}

export default BookDetails