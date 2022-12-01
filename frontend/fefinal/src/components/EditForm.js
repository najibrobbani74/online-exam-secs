import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStateContext } from "../contexts/ContextProvider";
import { motion ,AnimatePresence} from 'framer-motion';
import {MdOutlineCancel} from 'react-icons/md';


const EditForm = () => {

  const{formId,tokenref,akunNama,akunEmail,setForm} = useStateContext();
  const file = new FileReader()
  const  id_form  = formId;
  console.log(id_form)
  let [form, setform] = useState()
  const [result, setResult] = useState([])
  const BACKEND_URL = 'https://online-exam-secs.herokuapp.com/'
  const getFormById = async () => {
    const form = await axios.get(BACKEND_URL + "forms/id/" + id_form, { headers: 
      { "Authorization": "Bearer " +tokenref } })
    console.log(form.data[0])
    setform(form.data[0])
    document.getElementById("form_name").value = form.data[0].name
    document.getElementById("description").value = form.data[0].description
    document.getElementById("start_time").value = form.data[0].start_time
    document.getElementById("duration").value = form.data[0].duration

    const c = []
    form.data[0].answers.forEach((element, i) => {
      c.push(
        <div key={i} className="row">
          <div className="col-11">{element.email}</div>
          <div className='col-1'>
            <a className="badge btn btn-warning" onClick={() =>
               modal(element.answer)} data-bs-toggle="modal" data-bs-target="#exampleModal">View</a>
          </div>
        </div>)
    });
    setResult(c)
  }

  // const upload = (e)=>{
  //   const file = e.target.files[0]
  //   const reader = new FileReader()
  //   reader.readAsText(file)
  //   reader.onload=()=>{console.log(reader.result)}
  // }

  const modal = (e) => {
    e = e.map((e,i)=>(`${i+1}. `+e))
    document.getElementById("modal").innerHTML = e.join("<br>")

  }

  const saveForm = async () => {
    let resultSoal = []
    let satuSoal = {}
    let a;
    let soal = document.getElementById("middlesoal").value
    soal = soal.split("]]").join('').split("[[")
    for (let i = 0; i < soal.length; i++) {
      a = soal[i].split("))").join("").split("((")
      resultSoal[i] = {
        "question": a.shift(),
        "answer": a
      }
    }
    resultSoal.shift()
    const coba = {
      "form_name": document.getElementById("form_name").value,
      "description": document.getElementById("description").value,
      "start_time": document.getElementById("start_time").value,
      "duration": document.getElementById("duration").value,
      "questions": resultSoal
    }
    const saved = await axios.put(BACKEND_URL + "forms/" + id_form, coba, 
    { headers: { "Authorization": "Bearer " + tokenref } }).then((e) => { alert("berhasil") }).catch(() => { alert("all must be filled") })
    console.log(saved)
  }

  const generate = () => {
    let jml_nomor = document.getElementById("jml_nomor").value
    let jml_pilihan_ganda = document.getElementById("jml_pilihan_ganda").value
    const abjadKecil = "abcdefghijklmnopqrstuvwxyz"
    const abjadBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let soalTextarea = document.getElementById("prasoal").value
    for (let i = 0; i < jml_nomor; i++) {
      soalTextarea = soalTextarea.replace('\n' + (i + 1) + ".", '\n' + "[[" + (i + 1) + ".]]")

    }
    for (let j = 0; j < jml_pilihan_ganda; j++) {
      soalTextarea = soalTextarea.replaceAll('\n' + abjadBesar[j] + ".", "((" + abjadBesar[j] + ".))").replaceAll('\n' + abjadKecil[j] + ".", "((" + abjadKecil[j] + ".))")
    }
    document.getElementById("middlesoal").innerHTML = soalTextarea
  }

  useEffect(() => {
    getFormById()
  }, [])


  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.rtl.min.css" integrity="sha384-dc2NSrAXbAkjrdm9IYrX10fQq9SDG6Vjz7nQVKdKcJl3pC+k37e7qJR5MVSCS+wR" crossOrigin="true"></link>
    <motion.div className='bg-half-transparent 
  w-screen h-screen fixed nav-item top-0 right-0 p-0 md:p-10 '

>
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto 
    md:hover:overflow-hidden  pb-10'>

    <div className="container mt-3">
      <div className="card">
      <motion.button  onClick={() => {setForm(null)}} 
      className='text-xl rounded-full dark:text-white ml-1  block ' 
        whileHover={{
          scale:1.01
        }}>
        <MdOutlineCancel/>

        </motion.button>
        <div className="card-body">
          <h4>Form : {form ? form["id"] : ""}</h4>
          <input type="text" id="form_name" className='form-control' placeholder='Form Name' />
          <textarea name="" id="description" cols="30" rows="10" className='form-control mt-1' placeholder='Description'></textarea>
          <label htmlFor="">Start Time</label>
          <input type="datetime-local" className='form-control' id='start_time' placeholder='Form Name' />
          <label htmlFor="">Duration</label>
          <input type="time" className='form-control' id='duration' placeholder='Form Name' />

          <label htmlFor="">Form</label>
          <textarea name="" id="prasoal" cols="30" rows="10" className='form-control mt-1' placeholder='Paste your Questions here'></textarea>
          {/* <input type="file"onInput={(e)=>{upload(e)}} className='form-control' /> */}
          <label htmlFor="">Count of questions</label>
          <input type="number" id='jml_nomor' className='form-control' />
          <label htmlFor="">Count of answer choices</label>
          <input type="number" id='jml_pilihan_ganda' className='form-control' />
          <button className='btn btn-danger mt-2 mb-2' onClick={() => generate()}>Generate</button><br />
          <label htmlFor="">Validation area</label>
          <textarea name="" id="middlesoal" cols="30" rows="10" className='form-control ' placeholder='Your generated form wil be here'></textarea>
          <button className='btn btn-success mt-2 mb-2' onClick={() => saveForm()}>Save</button><br />
        </div>
      </div>
      {form ? form.questions.length > 0 ?
        <div className="card mt-3">
          <div className="card-body row">
            <h5>Your Form</h5>
            <div className="col-10">{form.name}</div>
            <div className="col-1"><a className="badge btn btn-danger">Preview</a></div>
          </div>
        </div>
        : "" : ""};
      <div className="card  mt-3">
        <div className="card-body">
          <h5>Result</h5>
          <div className="card">
            <div className="card-body row" id='result'>
              {result}
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body" id='modal'>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>

    </div>
        </motion.div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" 
        integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" 
        crossorigin="anonymous"></script>
    </>

  )
}

export default EditForm