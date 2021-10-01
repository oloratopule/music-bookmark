import React, { Component} from "react";
import "./style.css";
import BookmarkForm from './components/BookmarkForm'
import   DisplayList from './components/DisplayList'

class  App extends Component{
  state = {
    list: [
      {
        Artist: 'John-Legend',
        Song: "I Do",
        Album: "Bigger Love",
        YearReleased: "2020",
        Link: "https://efghyju"
   },
    
    ],
    
  };

  handleSubmit = (song, artist, album, year, link)=>{
    let obj = {
      song:song,
      artist:artist,
      album:album,
      year:year,
      link:link
    }
    
    if(song === ""){
      alert("Please enter text")
    }

     else if(artist  === "" ){
      alert("Please enter text")
     }

     else if(album  === "" ){
      alert("Please enter text")
     }

     else if(year  === "" ){
      alert("Please enter text")
     }
     else if(link  === "" ){
      alert("Please enter text")
     }

    else{
      this.setState({
        list:[...this.state.list, obj]
      })
    }
    }
    handleDelete = song => {
      this.setState({
        list: this.state.list.filter(item => item.song !==song)
      })
      console.log(this.state.list)
    }

    Tracks (song){
      this.setState({
        list: this.state.list.filter(item => item.song !==song)
      })
    }
   

  render(){
    
    return (

      <div> 
         <BookmarkForm   handleSubmit={this.handleSubmit}/>
         <DisplayList  data={this.state.list} Delete={this.handleDelete}/>

      </div>
     
      
    

    )
  }
  

  
}


export default App ;