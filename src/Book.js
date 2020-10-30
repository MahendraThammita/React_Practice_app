import React from 'react'

const  Book = (bookVar) => {
  console.log(bookVar);
  console.log(bookVar.book);

  //Event functions
  //All event functions should be declared within the same componant function tht it occours the event
  const alertEvent = () => {
    alert('Hello World');
  }
  const autherEvent = (auther) => {
    console.log(auther);
  }
  const addEvent = (add) => {
    console.log(add);
  }

  return (
    <article className='Book' onMouseOver = {() => {console.log(bookVar.book.title);}}>
      {/* bookVar is the local input variable inside of the function */}
      {/* book is the key name of the value that is passing to this function */}
      {/* img , title , auther , add ,  are the key name of book variable that is passing to this function */}
      
      {/* we can access elements in following way in Spread operator method */}
      {/* <Imagess img = {bookVar.img} > </Imagess> 
      <Title title = {bookVar.title}> </Title> 
      <Author auth = {bookVar.auther}> </Author>
      <Additional add = {bookVar.add}> </Additional> */}

      {/* we can access elements in following way in usual method */}
      <Imagess img = {bookVar.book.img} > </Imagess> 
      <Title title = {bookVar.book.title}> </Title> 
      <Author auth = {bookVar.book.auther}> </Author>
      <Additional add = {bookVar.book.add}> </Additional>

      {/* this is the regular way of calling event functions
      after occouring the event it will call the function mentioned inside of the parathasis */}
      <button type = 'button' onClick = {alertEvent}>Alert Button</button>

      {
        /* this is the inline event functions calling
              the event function is implemented inside of paranthasis */
      }
      <button type = 'button' onClick = {() => console.log(bookVar.book.title)}>Title Button</button>
      
      {
        /* this is the regular way of calling event functions with passing parameters
              but this function will not wait untill the event occours hense it has the paranthasis
              Thus it will execute at the rendering */
      }
      <button type = 'button' onClick = {autherEvent(bookVar.book.auther)}>Auther Button</button>
      
      {
        /* this is the way to avoide above issue
              call the event function inside of another inline function with the parameters */
      }
      <button type = 'button' onClick = {() => addEvent(bookVar.book.add)}>Add Button</button>

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

export default Book
