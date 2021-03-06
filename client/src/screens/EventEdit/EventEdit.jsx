import React, { useState, useEffect } from "react"
import Layout from "../../components/shared/Layout/Layout"
import Button from "../../components/shared/Button/Button"
import { useParams, Redirect } from "react-router-dom"
import { getEvent, updateEvent, deleteEvent } from "../../services/events.js"
import Contributors from "../../components/shared/Contributors/Contributors"

import "./EventEdit.css"

const EventEdit = (props) => {
	const [event, setEvent] = useState({
		imgURL: "",
		title: "",
		funds: 0,
		content: "",
		quote: "",
		author: "",
		age: 0,
	})

	const [isUpdated, setIsUpdated] = useState(false)
	const [isEventDeleted, setIsEventDeleted] = useState(false)
	const [imagePath, updImagePath] = useState("")
	let { id } = useParams()

	useEffect(() => {
		const fetchEvent = async () => {
			const event = await getEvent(id)
			setEvent(event)
		}
		fetchEvent()
	}, [id])
    
	useEffect(() => {
		try {
			updImagePath(require(`../../img/${event.imgURL}`))
		} catch (err) {
			updImagePath(require("../../img/noimg.jpg"))
		}
	}, [event.imgURL])
    
	const handleChange = (e) => {
		const { name, value } = e.target
		setEvent({
			...event,
			[name]: value,
		})
	}

	const handleDelete = async (e) => {
		e.preventDefault()
		const deleted = await deleteEvent(event._id)
		if (deleted) {
			setIsEventDeleted(!isEventDeleted)
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		let { id } = props.match.params
		const updatedEvent = await updateEvent(id, event)
		setIsUpdated(updatedEvent)
	}

	if (isUpdated) {
		return <Redirect to={"/whereyourmoneygoes"} />
	}

	if (isEventDeleted) {
		return <Redirect to={"/whereyourmoneygoes"} />
	}

	return (
		<Layout>
			<div className="event-edit">
				<div className="img-container">
					{event.imgURL.length > 0 && (
						<img
							className="event-image"
							src={event.imgURL.startsWith("http") ? event.imgURL : imagePath}
							alt={event.title}
						/>
					)}
				</div>
				<form className="edit-form">
					<label htmlFor="imgURL">
						ImageURL:
						<input
							className="edit-img-link"
							placeholder="Img Link"
							value={event.imgURL}
							name="imgURL"
							required
							onChange={handleChange}
						/>
					</label>

					<label htmlFor="title">
						Title:
						<input
							className="input-title"
							placeholder="Title"
							name="title"
							value={event.title}
							required
							autoFocus
							onChange={handleChange}
						/>
					</label>

					<label htmlFor="funds">
						Percentage:
						<input
							className="input-funds"
							placeholder="Percentage"
							name="funds"
							value={event.funds}
							required
							onChange={handleChange}
						/>
					</label>

					<label htmlFor="content">
						Content:
						<textarea
							className="textarea-content"
							placeholder="Content"
							value={event.content}
							name="content"
							required
							onChange={handleChange}
						/>
					</label>

					<label htmlFor="quote">
						Quote:
						<input
							className="input-quote"
							placeholder="Quote"
							name="quote"
							value={event.quote}
							required
							onChange={handleChange}
						/>
					</label>

					<label htmlFor="author">
						Author:
						<input
							className="input-author"
							placeholder="Author"
							name="author"
							value={event.author}
							required
							onChange={handleChange}
						/>
					</label>

					<label htmlFor="age">
						Age:
						<input
							className="input-age"
							placeholder="Age"
							name="age"
							value={event.age}
							required
							onChange={handleChange}
						/>
					</label>
					<div className="event-edit-buttons">
						<Button
							content="EDIT"
							sizeClassName="medium-edit"
							onClick={handleSubmit}
						/>
						<Button
							content="DELETE"
							sizeClassName="medium-delete"
							onClick={handleDelete}
						/>
					</div>
				</form>
			</div>
		</Layout>
	)
}

export default EventEdit
