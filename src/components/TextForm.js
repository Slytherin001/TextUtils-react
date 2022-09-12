import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase())
    props.showAlert('Converted to uppercase', 'success')
  }
  const handleLowClick = () => {
    setText(text.toLowerCase())
    props.showAlert('Converted to lowercase', 'success')
  }
  const handleOnChnage = (event) => {
    setText(event.target.value)
  }
  const handleClearClick = () => {
    setText('')
    props.showAlert('Text cleared', 'danger')
  }
  const handleCopy = () => {
    let text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert('Text copied', 'success')
  }
  const [text, setText] = useState('')
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChnage}
            style={{
              backgroundColor: props.mode === 'dark' ? 'black' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary me-5" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary me-5" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary me-5" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary me-5" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container mt-3"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h2>Your Summary</h2>
        <p>
          {text.split(' ').length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter Something to preview'}</p>
      </div>
    </>
  )
}
