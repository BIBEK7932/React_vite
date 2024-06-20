import { useState } from "react"
import './Comment.css'
export default function CommentForms({addNewComment}) {
    let [formData, setFormData] = useState({ userName: "", remark: "", rating: 5 })

    let handleChange = (event) => {
        setFormData((prev) => { return { ...prev, [event.target.name]: event.target.value } })
    }

    let handleSubmit = (event) => {
       
        addNewComment(formData)
        event.preventDefault()
        setFormData({ userName: "", remark: "", rating: 5 })
    }
    return (
        <div className="comment-form-container" onSubmit={handleSubmit}>
        <h4 className="comment-form-title">Give a comment</h4>
        <form className="comment-form">
            <input
                type="text"
                name="userName"
                id="userName"
                placeholder="User name"
                value={formData.userName}
                onChange={handleChange}
                required
                className="comment-form-input"
            />
            <br />
            <br />
            <textarea
                name="remark"
                id="remarks"
                value={formData.remark}
                placeholder="Enter new remarks"
                onChange={handleChange}
                className="comment-form-textarea"
            ></textarea>
            <br />
            <input
                type="number"
                name="rating"
                id="rating"
                placeholder="Enter rating"
                value={formData.rating}
                onChange={handleChange}
                min={1}
                max={5}
                className="comment-form-input"
            />
            <br />
            <button className="comment-form-button">Add Comments</button>
        </form>
    </div>
    )
}