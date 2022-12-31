import { getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { db } from '../firebase.config'
import Spinner from '../components/Spinner'
import shareIcon from '../assets/svg/shareIcon.svg'


const Listing = () => {

   const [listing, setListing] = useState(null)
   const [loading, setLoading] = useState(null)
   const [shareLinkCopied, setShareLinkCopied] = useState(false)

   const navigate = useNavigate()
   const params = useParams()
   const auth = getAuth()

   useEffect(() => {

   })
    
  return (
    <div>Listing</div>
  )
}

export default Listing