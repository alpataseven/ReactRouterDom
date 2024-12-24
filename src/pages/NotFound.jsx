import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import swal from 'sweetalert';

export default function NotFound() {

    const navigate = useNavigate()
    const [message, setMessage] = useState('')
    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
        swal({
            title: "404",
            text: "Sayfa bulunamadı!",
            icon: "error",
            buttons: "Ana sayfaya Git",
        }).then(() => {
            setMessage("Ana Sayfaya Yönlendiriliyorsunuz...")
            setShowMessage(true)
            setTimeout(() => {
                navigate('/')
            }, 2000)
        })
    }, [navigate])

    return (
        <>
            {showMessage && (
               <div className="alert alert-success mx-5" role="alert">{message}</div> 
            )}
        </>
    )
}