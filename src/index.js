import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'


//Method 1 for creating componants

// function Greeting() {
//   return <h4> This is Mahendra.This is my first react componant </h4>;
// }

//Creating nested elements with method 1

// function Greeting() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

//---------------------------------------------------------------------------------------------------

//Method 2 for creating componants

// const Greeting = () => {
//   return React.createElement(
//     'h1',{},'Hello World'
//     )
// }

//Creating nested elements with Method 2 

// const Greeting = () => {
//   return React.createElement(
//     'div', {},React.createElement('h1' , {} , 'Hello World')
//   )
// }

//way of rendering is common for both methods


//---------------------------------------------------------------------------------------------------
//Nested Componants

// function Greeting() {
//   return (
//     <div>
//       <Person/>
//       <Message/>
//     </div>
//   );
// }

// const Person = () => <h1>This is title from person compo</h1>;
// const Message = () => {
//   return (
//     <p>This is paragraph from Message comonant</p>
//   );
// }

// ReactDOM.render( <Greeting/> , document.getElementById('root'));

//----------------------------------------------------------------------------------------------------

const books = [
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title : 'I Love You to the Moon and Back',
  auther : 'Amelia Hepworth',
  add : 'Additional Text'
},
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/81HCcHPXZnL._AC_UL200_SR200,200_.jpg',
  title : 'School Zone - Big Preschool Workbook',
  auther : 'Joan Hoffman',
  add : 'Additional Text 2'
},
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg',
  title: 'The Vanishing Half: A Novel',
  auther: 'Brit Bennett',
  add : 'Additional Text 3'
},
];

function Booklist() {
  return (
    <section className= 'Booklist'>
      {/* map method will iterate through the list. onbook will be a single list item in each iteration */}
      {books.map((oneBook) => {
        const {img ,  title , auther , add} = oneBook;
        return (<Book book = {oneBook}></Book> )
      })}
    </section>
  );
}


function Book(bookVar){
  console.log(bookVar);
  console.log(bookVar.book);
  return (
    <article className='Book'>
      {/* bookVar is the local input variable inside of the function */}
      {/* book is the key name of the value that is passing to this function */}
      {/* img , title , auther , add ,  are the key name of book variable that is passing to this function */}
      <Imagess img = {bookVar.book.img} > </Imagess> 
      <Title title = {bookVar.book.title}> </Title> 
      <Author auth = {bookVar.book.auther}> </Author>
      <Additional add = {bookVar.book.add}> </Additional>
    </article>
  )
}

const Imagess = (img) => (
  <img
    src = {img.img}
    alt = ''
    />
);


//Setting up JAX javascript

//title_inner is local variable inside of this function
//title is the key of the passin value to the function
const Title = (title_inner) => ( <h2 style={{color:'blue' , fontSize:'1rem'}}> {title_inner.title} </h2> );

const Author = (auther) => {

  //auther is local variable inside of this function
  //auth is the key of the passin value to the function
  return React.createElement('h4', {}, auther.auth);
}
const Additional = (add) => {
  return (
    <div>
      <p>{add.add}</p>
    </div>
    )
};

ReactDOM.render(<Booklist/> , document.getElementById('root'));