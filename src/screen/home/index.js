import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ImageScreen from '../../Components/ImageScreen';
import Post from '../../Components/Post';
import { getPosts, setPost, updatePost, deletePost } from '../../store/post/actions';
import './styles.css';
import Loader from '../../Components/Loader'

function Home() {
    const post = useSelector(state => state.Post)
    const [deleteId, setDeleteId] = useState('')
    const [showCreate, setShowCreate] = useState(false)
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const [editId, setEditId] = useState('')
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts(1))
    }, [])
    const createPostRequest = (e) => {
        e.preventDefault();
        console.log('create')
        if (body && title) {
            setShowCreate(false)
            setTitle('')
            setBody('')
            setEditId('')
            dispatch(setPost({
                id: Math.random(),
                body: body,
                title: title
            }))
        }
        else
            alert('Title and Desciption is necessary')
    }

    const updatePostRequest = (e) => {
        e.preventDefault();
        console.log('update')
        if (body && title) {
            setShowCreate(false)
            setTitle('')
            setBody('')
            setEditId('')
            dispatch(updatePost({
                data: {
                    body: body,
                    title: title
                },
                id: editId,
            }))
        }
        else
            alert('Title and Desciption is necessary')
    }
    const deletePostRequest = (id) => {
        console.log('deleteId', id)
        setEditId('')
        dispatch(deletePost(id))
    }
    // console.log(title)
    // console.log(body)
    console.log('post.post', post.post)
    return (
        <div>
            {/* <button onClick={updatePostRequest}>Send Post</button> */}
            <div>
                <Post
                    show={showCreate}
                    setShow={() => {
                        setShowCreate(!showCreate)
                        if (showCreate) {
                            setTitle('')
                            setBody('')
                            setEditId('')
                        }
                    }}
                    title={title}
                    body={body}
                    setTitle={(text) => setTitle(text)}
                    setBody={(text) => setBody(text)}
                    buttonTitle={editId != '' ? 'Update' : 'Create'}
                    onSubmit={editId != '' ? updatePostRequest : createPostRequest}
                />
            </div>
            <div className='main'>
                <div className="container">
                    {!post.loading ?
                        post.post?.map((item, index) => {
                            if (item.id == deleteId)
                                return null
                            return (
                                <ImageScreen
                                    data={item}
                                    keyIndex={index}
                                    toEdit={(id, title, body) => {
                                        setEditId(id)
                                        setTitle(title)
                                        setBody(body)
                                        setShowCreate(true)
                                    }}
                                    toDelete={(id) => {
                                        setDeleteId(id)
                                        deletePostRequest(id)
                                    }}
                                />)
                        })
                        :
                        <Loader />
                    }


                </div>
            </div>
        </div>
    )
}

export default Home
