import React from 'react'

import {
  Card,
  CardHeader,
  Typography
} from "@material-tailwind/react";

import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FcApproval } from 'react-icons/fc';

import TimePicker from 'react-time-picker';
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import moment from "moment";


const Chat = () => {
  let url = "https://voicechat.online:4000"

  // const customStyles = {
  //   content: {
  //     width: "400px",
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)',
  //   },
  // };
  // const [modalIsOpen, setIsOpen] = useState(false);

  // const [copy, setcopy] = useState("copy")
  var val = Math.floor(1000 + Math.random() * 9000);
  // console.log(val);
  const [Random, setval] = useState(val)
  // const [chat_name, setchatName] = useState("")
  // const [chat_name1, setchatName1] = useState("")


  // let userName = JSON.parse(localStorage.getItem("user_name"))
  // // let User_id = JSON.parse(localStorage.getItem("user_id"))
  // console.log("user_id", userName)
  // // console.log("user_id",user_id)




  // const client_name = userName.replace(/ /g, '')
  // console.log("client name", client_name);



  // console.log(chat_name)
  // let tooltip = document.getElementById('tooltip');
  // const copy_url = () => {
  //   navigator.clipboard.writeText(`https://www.voicechat.online:3000/join/${Random}${chat_name}?client=${client_name}`)
  //   setcopy("copied!")

  //   if (tooltip.style.display === "none") {
  //     tooltip.style.display = "block";
  //   }
  //   else {
  //     tooltip.style.display = "none";
  //   }

  // }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // const [selectedOptions, setSelectedOptions] = useState([]);
  // const [options, setoptions] = useState([])
  // console.log("o", options)
  //  console.log("m",selectedOptions)





  // useEffect(() => {
  //   let user_id = JSON.parse(localStorage.getItem("user_id"))
  //   let u_type = JSON.parse(localStorage.getItem("u_type"))
  //   console.log(user_id, "user_id")

  //   // const getclient = async () => {
  //   //   var arr = [];
  //   //   var arr1 = [];
  //   //   console.log(arr1)
  //   //   let res = await axios.post(`${url}/chat/client`, { user_id: user_id, u_type: u_type }, {
  //   //     headers: {

  //   //       'authorization': JSON.parse(localStorage.getItem("user"))
  //   //     },
  //   //   })
  //   //   console.log(res, "55")
  //   //   for (let i = 0; i < res.data.length; i++) {
  //   //     arr.push(res.data[i].name);
  //   //     arr1.push(res.data[i]._id);
  //   //   }

  //   //   setoptions(arr)
  //   // }
  //   // getclient()
  // }, [])




  // const [time, onChange] = useState('10:00');
  // const [chat_Date, setChatDATE] = useState(new Date())
  // const [chat_url, setchaturl] = useState("")

  // const multiselectRef = useRef();

  // const resetSelectField = () => {
  //   multiselectRef.current.resetSelectedValues();
  // };




  // console.log(chat_Date, time)

  let u_type = JSON.parse(localStorage.getItem("u_type"))
  let user_name = JSON.parse(localStorage.getItem("user_name"))
  let type = "host"
  let user_id = JSON.parse(localStorage.getItem("user_id"))

  const client_name = user_name.replace(/ /g, '')
  // const str = "B72 1JL";

  // Replacing " " (space) to "" empty space
  // const res = user_name.replace(/ /g, '')
  // console.log(res); 

  // console.log("createchta", chat_Date, chat_name, chat_url, selectedOptions)
  // console.log(chat_Date)
  // const createChat = async (e) => {
  //   e.preventDefault()


  //   if (chat_name && chat_Date && selectedOptions.length > 0) {

  //     let res = await axios.post(`${url}/create/chat`, { chat_name, chat_Date, time, selectedOptions, u_type, user_name, Random, user_id }, {
  //       headers: {

  //         'authorization': JSON.parse(localStorage.getItem("user"))
  //       },
  //     })
  //     if (res.status === 200) {
  //       console.log(res.data)
  //       toast("success created chat ", {
  //         type: 'success'
  //       });
  //       setchatName1(chat_name)
  //       setIsOpen(true)

  //       setChatDATE(" ")
  //       setchaturl(" ")
  //       setchatName(" ")
  //       setSelectedOptions([])
  //       resetSelectField();




  //     }
  //     else {
  //       toast("something Went wrong ", {
  //         type: 'error'
  //       });
  //     }
  //   } else {
  //     alert("all feild required")
  //   }


  // }

  // const [clientData, setclient] = useState([])
  var arr = []
  var arr1 = []
  // console.log(arr, "arr")

  const dataFetch = useRef(false)
  useEffect(() => {
    // console.log('Running ...')

    // start:: prevent executing useEffect twice
    if (dataFetch.current)
        return
    dataFetch.current = true

    const getclient = async () => {

      let res = await axios.post(`${url}/list/client`, { user_id: user_id, u_type: u_type }, {
        headers: {

          'authorization': JSON.parse(localStorage.getItem("user"))
        },



      })


      // console.log("clent", res.data.length)

      if (res.data) {

        for (let i = 0; i < res.data.length; i++) {

          arr.push(res.data[i]._id);
          arr1.push(res.data[i].name);
          // console.log(res)


        }


      }

    }


    getclient()
  }, [])


  const createChat = async (e) => {
    e.preventDefault()




    let res = await axios.post(`${url}/create/chat`, {arr1, arr, u_type, user_name, Random, user_id }, {
      headers: {

        'authorization': JSON.parse(localStorage.getItem("user"))
      },
    })
    if (res.status === 200) {
      // console.log(res.data)
      toast("success created chat ", {
        type: 'success'
      });

      location.replace(`https://voicechat.online:3000/join/${Random}${user_id}${arr.length}?client=${client_name}&type=${type}`);




    }
    else {
      toast("something Went wrong ", {
        type: 'error'
      });
    }


  }


  return (
    <div>

      <ToastContainer />

      <Card>

        <CardHeader variant="gradient" color="blue" className="mb-8 p-2 mt-3 p-3">

          <button

            style={{ width: '150px', backgroundColor: "#e58938" }}
            type="button" class="px-6
py-2.5

text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-yellow-700 hover:shadow-lg
focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-yellow-800 active:shadow-lg
transition
duration-150
ease-in-out"
            onClick={createChat}

          >


            Start Chat

          </button>





        </CardHeader>
      </Card>
      <br />
      <br />

      {/* <form class="w-full max-w-lg">


     
        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Chat  Name
            </label>
            <input
              value={chat_name}
              required
              onChange={(e) => { setchatName(e.target.value.trim()) }}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />

          </div>
          <div class="w-full md:w-1/2 px-3 mb-4">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Chat Date
            </label>
            <input
              value={chat_Date}
              onChange={(e) => { setChatDATE(e.target.value) }}
              required
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="Date" />


          </div>



          <div class="w-full md:w-1/2 px-3 mb-4">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Chat Time
            </label>

            <TimePicker onChange={onChange} value={time} />

          </div>



          <div class="w-full md:w-1/2 px-3 mb-4">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Chat url
            </label>
            <input

              onChange={(e) => { setchaturl(e.target.value) }}
              value={`https://voicechat.online:3000/join`}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Clients
            </label>

            <Multiselect
              isObject={false}
              options={options} // Options to display in the dropdown
              // selectedValues={selectedOptions} // Preselected value to persist in dropdown
              onSelect={(event) => setSelectedOptions(event)} // Function will trigger on select event
              onRemove={(event) => console.log(event)} // Function will trigger on remove event
              displayValue="clients" // Property name to display in the dropdown options
              ref={multiselectRef}
            />

          </div>
        </div>

        <button

          onClick={(e) => { createChat(e) }}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-5">

          Submit
        </button>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <div className="row">
            <div className="col-12 d-flex mb-3">
              <p>  Congratulation !   successfully created chat    </p>
              <FcApproval style={{
                width: "60px",
                fontSize: "26px"
              }} />
            </div>



            <div className="col-8">
              <a onClick={() => { setIsOpen(false) }} target="_blank" className='mt-5 text-danger' href={`http://localhost:3000/join/${Random}${chat_name1}?client=${client_name}`}>{`http://localhost:3000/join/${Random}${chat_name1}?client=${client_name}`}</a>
              <br />
              <br />
              <button
                data-bs-toggle="tooltip" data-bs-placement="top" title={copy}
                onClick={() => { copy_url() }}
                type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Copy Url</button>
              <tooltip id='tooltip' style={{ display: "none" }}>
                copied!
              </tooltip>

            </div>
            <div className="col-4">
              <button onClick={() => { setIsOpen(false) }} type="button" class="inline-block px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-5">cancel</button>
            </div>

          </div>









        </Modal>

      </form> */}

    </div>
  )
}

export default Chat