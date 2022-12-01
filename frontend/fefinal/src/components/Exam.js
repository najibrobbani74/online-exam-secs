import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStateContext } from "../contexts/ContextProvider";
import { motion ,AnimatePresence} from 'framer-motion';



const Exam = () => {
    const [soal, setSoal] = useState([])
    const{formid,tokenref,akunNama,akunEmail} = useStateContext();
    const  id_form  = formid;
    const BACKEND_URL = 'https://online-exam-secs.herokuapp.com/'
    const [formsoal, setformsoal] = useState([])
    const getForm = async () => {
        const form = (await axios.get(BACKEND_URL + "forms/id/" + id_form, 
        { headers: { "Authorization": "Bearer " + tokenref } })).data[0]
        setformsoal(form)
        const array = []
        array.push(
            <div key={"judul"}>
                <h5>{form.name}</h5>
                <p>{form.description}</p>
            </div>
        )
        form.questions.map((a,i) => {
            array.push(
                <div className='mt-2' key={"question"+i}>
                    <b>{a.question}</b>
                </div>
            )
            a.answer.map((b,j) => {
                array.push(
                    <div className=" row"key={"answer"+j+"questions"+i}>
                        <div className="col-1">
                        <input  type="radio" value={b} name={(i+1)} id="flexRadioDefault1"/>
                        </div>
                        <div className="col-11">
                            <label  >{b}</label>
                        </div>
                        
                    </div>
                )
            })
        })
        setSoal(array)
    }

    const save=async(e)=>{
        e.preventDefault()
        const form = new FormData(document.forms.soal)
        const answers = []
        for (let i = 0; i < formsoal.questions.length; i++) {
            answers.push(form.get(`${(i+1)}`) !== null ? form.get(`${(i+1)}`) : "")
        }
        const body = {
            "form_id":id_form,
            "name":akunNama,
            "email":akunEmail,
            "answer":answers
        }
        const post = await axios.post(BACKEND_URL + "forms/answer" ,body,
        { headers: { "Authorization": "Bearer " + tokenref } }).then(()=>{alert("berhasil");
        window.location = "/home"}).catch((e)=>{alert(e)})
    }

    useEffect(() => {
        getForm()
    }, [])

    return (

        <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.rtl.min.css" integrity="sha384-dc2NSrAXbAkjrdm9IYrX10fQq9SDG6Vjz7nQVKdKcJl3pC+k37e7qJR5MVSCS+wR" crossOrigin="true"></link>
        <motion.div className='bg-half-transparent 
    w-screen h-screen fixed nav-item top-0 right-0 p-0 md:p-10 '
    
    >
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto 
        md:hover:overflow-hidden  pb-10'>
        <div className='container mt-4'>
            <div className="card">
                <div className="card-body">
                    <form action="" method='post' id='soal'>
                    {soal}
                    <button type='submit' className='btn btn-success mt-5' onClick={(e)=>save(e)}>Save</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </motion.div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous"></script>
    </>
    )
}

export default Exam