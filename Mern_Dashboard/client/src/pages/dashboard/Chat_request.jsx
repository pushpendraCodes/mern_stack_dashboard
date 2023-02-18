import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Pagination from "./Pagination";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Input
} from "@material-tailwind/react";
import pic from "../dashboard/notfound.jpg"
import './Dashboared.css';
import { FcStart } from 'react-icons/fc';
// import { FcStart } from 'react-icons/fc';
import { FcVoicePresentation } from 'react-icons/fc';

const Chat_request = () => {

  const inputRef = React.useRef()
  const closeRef = React.useRef()


  const [showPerPage, setShowPerPage] = useState(6)

  const [pagination, setPagination] = useState({
    start: 0,
    end: 6
  })

  const paginationChange = (Start, End) => {

    setPagination({ start: Start, end: End })

    // console.log(Start, End)



  }




  let user_name = JSON.parse(localStorage.getItem("user_name"))
  let user_id = JSON.parse(localStorage.getItem("user_id"))
  // console.log("user_id", user_id)



  // Replacing " " (space) to "" empty space
  const client_name = user_name.replace(/ /g, '')
  // console.log("client name", client_name);

  // console.log("l", user_name)
  const [chat_request, setChatRequest] = useState([])
  let
    mapReverse2 = [...chat_request].reverse().map(element => {
      return element;
    });






  let url = "https://voicechat.online:4000"


  useEffect(() => {
    chat_invitation()


  }, [])

  const [chat_url, setchat_url] = useState()

  let abc = () => {

    if (mapReverse2[0]) {
      // console.log("j", mapReverse2)

      //  setchat_url(mapReverse2[0].chat_url)
      //  inputRef.current.click()
      window.location.replace(`${mapReverse2[0].chat_url}?client=${client_name}`);
      localStorage.clear("user")

    }
  }
  // console.log("h", chat_url)


  useEffect(() => {


    abc()


  }, [chat_request])



  const chat_invitation = async () => {
    let res = await axios.get(`${url}/chat/invitation/${user_id}`, {
      headers: {
        // 'Content-Type': 'application/json',
        'authorization': JSON.parse(localStorage.getItem("user"))
      },



    })

    if (res) {

      setChatRequest(res.data)


    }

  }

  const close = () => {

    closeRef.current.click()
  }

  return (

    <div>





      <button

        ref={inputRef}
        type="button" class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
    
      ease-in-out d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog relative w-auto pointer-events-none">
          <div
            class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            {/* <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Chat Request   <FcVoicePresentation/></h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div> */}
            <div
              style={{ display: 'flex' }}
              class="modal-body relative p-4 ">
              <b>Chat Request</b>

              <p className='mx-2 my-1'><FcVoicePresentation /></p>


            </div>
            <p className='text-center'>click start to join!</p>
            <div
              class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button type="button" class="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal" ref={closeRef}>Close</button>
              <button type="button" class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-"
              > <a href={`${chat_url}?client=${user_name}`} target="blank" onClick={close} >Start   </a>  </button>
            </div>
          </div>
        </div>
      </div>




      {/* <Card className='mt-4'>

        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">

          <Typography variant="h6" color="white">
            CHATS Request
          </Typography>





        </CardHeader>



        <div className="mr-auto md:mr-4 md:w-56  mx-4 my-4">
          <Input label="Type here"
            onChange={(e) => { }}
          />
        </div>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["S.no", "chat Name", "chat Host", "chat Members", 'chat Date', "chat Link", "status"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>


            <tbody>


              {chat_request ? mapReverse2.slice(0, 1).map(
                ({ chat_name, chat_host, chat_members_name, chat_date, chat_url, is_active, user_type, _id, chat_time }, key) => {
                  const className = `py-3 px-5 ${key === chat_request.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                    }`;
                  
                  return (
                    <tr key={chat_name}>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">

                        
                          {key + 1}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">

                        </Typography>
                      </td>


                      <td className={className}>
                        <div className="flex items-center gap-4">
                       
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {chat_name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">

                            </Typography>
                          </div>
                        </div>
                      </td>

                      <td className={className}>

                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {chat_host}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          [
                          {
                            chat_members_name.length > 2 ? chat_members_name.slice(0, 2).map((e) => { return (<span className='mx-1'>{e} ,</span>) }) : chat_members_name.slice(0, 2).map((e) => { return (<span className='mx-1'>{e}&nbsp;,</span>) })
                          }...
                          ]

                        </Typography>
                      </td>
                      <td style={{ display: 'flex' }} className={className}>

                        <Typography className="text-xs font-semibold text-blue-gray-600 mx-2">
                          {chat_date}
                        </Typography>

                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {chat_time}
                        </Typography>


                      </td>
                      <td className={className}>

                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          <a disabled="disabled" className={is_active === true ? "text-primary " : "text-secondary disabled"} target="_blank" href={`${chat_url}?client=${user_name}`}>Link</a>
                        </Typography>

                      </td>
                      <td className={className}>


                    
                        {
                          is_active === true ? <Typography className="text-xs font-semibold text-blue-gray-600">
                            Active
                          </Typography> : <Typography className="text-xs font-semibold text-blue-gray-600">
                            InActive
                          </Typography>

                        }


                      </td>

                    </tr>
                  );
                }
              )

                : <>

                  <figure style={{ width: '500px' }}>
                    <img style={{ width: '150px', float: 'right' }} src={pic} alt="" />
                  </figure>

                </>


              }
            </tbody>
          </table>


        </CardBody>

      </Card> */}
      <div style={{ float: 'right' }}>
   
      </div>

    </div>
  )
}

export default Chat_request
