import React  from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../components/table'
//import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../components/popover'
import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
//import { useNavigate } from 'react-router-dom';
//import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

import { Input } from '../components/input';
import { Button } from '../components/button';

const filterJobs = [
  { job_title: "Software Engineer", created_at: "2024-11-22T10:30:00Z" },
  { job_title: "Frontend Developer", created_at: "2024-11-21T14:45:00Z" },
  { job_title: "Backend Developer", created_at: "2024-11-20T09:15:00Z" },
  { job_title: "Full Stack Developer", created_at: "2024-11-19T16:00:00Z" },
  { job_title: "Data Scientist", created_at: "2024-11-18T12:00:00Z" },
  { job_title: "UI/UX Designer", created_at: "2024-11-17T11:00:00Z" },
  { job_title: "Software Engineer", created_at: "2024-11-22T10:30:00Z" },
  { job_title: "Frontend Developer", created_at: "2024-11-21T14:45:00Z" },
  { job_title: "Backend Developer", created_at: "2024-11-20T09:15:00Z" },
  { job_title: "Full Stack Developer", created_at: "2024-11-19T16:00:00Z" },
  { job_title: "Data Scientist", created_at: "2024-11-18T12:00:00Z" },
  { job_title: "UI/UX Designer", created_at: "2024-11-17T11:00:00Z" }
];

const JobSection = () => {
 // const [input, setInput] = useState("");
//  const navigate = useNavigate();
  return (
    <div >

<div className='flex items-center justify-between my-5 mx-5'>
          <Input
            className="w-fit"
            placeholder="Filter by name, role"
           
          />
          <Button className="bg-red-500 text-white">New Jobs</Button>

        </div>
       <Table>
                <TableCaption>A list of your recent  posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        {/* <TableHead>Company Name</TableHead> */}
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="space-y-4" >
                    {
                        filterJobs?.map((job) => (
                            <tr className="py-4 text-black  bg-blue-400 border-b border-white  hover:bg-blue-200  rounded-lg hover:bg-blue-200 ">
                                {/* <TableCell>{job?.company?.name}</TableCell> */}
                                <TableCell>{job?.job_title}</TableCell>
                                <TableCell>{job?.created_at.split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className="w-32 bg-orange-400">
                                            <div  className='flex items-center gap-2 w-fit cursor-pointer'>
                                                <Edit2 className='w-4' />
                                                <span>Edit</span>
                                            </div>
                                            <div  className='flex items-center w-fit gap-2 cursor-pointer mt-2'>
                                                <Eye className='w-4'/>
                                                <span>Applicants</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </tr>

                        ))
                    }
                </TableBody>
            </Table>
     
      
    </div>
  )
}

export default JobSection
