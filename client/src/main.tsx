import './style/globals.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import PageCalendaryDay from './pages/page-calendary-day'
import PageCalendary from './pages/page-calendary'
import NoteEditor from './pages/note-editor'

const router = createBrowserRouter([
	{
	  	path: '/calendary-day',
	  	element: <PageCalendaryDay/>,
	},
	{
	  	path: '/calendary',
	  	element: <PageCalendary/>,
	},
	{
	  	path: '/editor',
	  	element: <NoteEditor/>,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)