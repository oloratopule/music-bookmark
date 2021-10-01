import React, { useState } from 'react';

function BookmarkForm(props) {
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [year, setYear] = useState('');
  const [link, setLink] = useState('');

  const handleChange = e => {
    setSong(e.target.value);
  };

  const handleChangeArtist = e => {
  setArtist(e.target.value);
  };
  const handleChangeAlbum = e => {
    setAlbum(e.target.value);
    };
    const handleChangeYear = e => {
      setYear(e.target.value);
      };
      const handleChangeLink = e => {
        setLink(e.target.value);
        };

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(song, artist, album, year, link);
  };

  return (
    <div className=" container form-group mt-5">
      <h1>Music? What do we do without it
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>
      
     
      </h1>
   
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Artist Name"
          className="form-control w-75 mt-3"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Song"
          className="form-control w-75 mt-3"
          onChange={handleChangeArtist}
        />
         <input
          type="text"
          placeholder="Album"
          className="form-control w-75 mt-3"
          onChange={handleChangeAlbum}
        />
        <input
          type="text"
          placeholder="Year Released"
          className="form-control w-75 mt-3"
          onChange={handleChangeYear}
        />
         <input 
         type="url"
         placeholder="https://www.google.com" 
         className="form-control w-75 mt-2"
         onChange={handleChangeLink}  
         pattern="https://.*" 
          />

        <input 
        type="submit" 
        value="Add" 
        className="mt-3" />
        <input 
        className=" mt-3 ml-3" 
        type="reset" />

        <input
        type="text"
        placeholder="search"
        className="form-control w-90 h-20"
      />
      </form>
    </div>
  );
}

export default BookmarkForm;