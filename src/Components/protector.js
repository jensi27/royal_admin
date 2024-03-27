import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export const Protector = (props) => {
    const history = useHistory()
    const [gettoken , settoken] = useState("")
    useEffect(() => {
        const token= localStorage.getItem("admintoken")
        if(!token){
            return(history.push("/"))
        }
        settoken(token)
    })
    if(!gettoken){
        return ( <p>....loader</p> )
    }
  return props.children
}
