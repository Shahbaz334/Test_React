import './Post.css';
import { useState } from 'react';
import logo from '../assets/cat.jpg'
import cross from '../assets/cross.png';

function Post({ show, setShow, title, setTitle, body, setBody, onSubmit,buttonTitle }) {

    return (

        <div>
            <div className="container" style={{ borderWidth: 5, borderColor: 'black' }}>
                <div class="row">
                    <div class="col-lg-12">
                        <div className="box">
                            <div className="circle">
                                <img src={logo} />
                            </div>
                            <div className="text" onClick={setShow}>

                                <input type="text" placeholder="What's on your mind" />
                            </div>

                        </div>
                    </div>
                </div>
                {show ?
                    <div class="col-lg-12">
                        <div className='input' >
                            <div>
                                <div onClick={setShow} >
                                    <img style={{ width: 20, height: 20, marginLeft: 500, marginTop: 20 }} src={cross} />
                                </div>
                                <label>Title</label>
                                <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    type="text"
                                    class="form-control"
                                    placeholder="Title"
                                />
                                <label>Description</label>
                                <input
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                    type="text"
                                    class="form-control"
                                    placeholder="Description"
                                />
                            </div>
                            <div className='Button'>
                                <button
                                    class="btn btn-primary"
                                    onClick={onSubmit}>{buttonTitle}</button>
                            </div>
                        </div>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default Post
