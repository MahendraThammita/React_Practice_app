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

import {books} from './books'
import Book from  './Book'

function Booklist() {
  return (
    <section className= 'Booklist'>
      {/* map method will iterate through the list. onbook will be a single list item in each iteration */}
      {books.map((oneBook) => {
        const {img ,  title , auther , add} = oneBook;
        return (<Book key = {oneBook.id} book = {oneBook}></Book> )
        //Following is the second methos can be used to pass a list to componants.
        //This method is called 'Spread Operator'
        //This will not pass an objects to the other compos, insted it will pass
        //all the props in the object (ex: img , title , .etc)

        //return (<Book key = {oneBook.id} {...oneBook}></Book> )
      })}
    </section>
  );
}


ReactDOM.render(<Booklist/> , document.getElementById('root'));