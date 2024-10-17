import { FaPen, FaTrash } from "react-icons/fa"
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

// delete button action
const TableActionButtons=({deleteAction,id,editUrl}:{deleteAction:any,id:string,editUrl:string})=>{
    const handleDelete=async (e:any)=>{
        e.preventDefault()  // yesle chai link lai first ma kholna bata prevent garcha.
        try{
            const result=await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              })
            if(result.isConfirmed){
                deleteAction(id)
            }

        }
        catch(exception){
            console.log(exception)
        }
          
    }

    return(
        <>
          <NavLink
                      to={editUrl}
                      className="me-3 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      <FaPen></FaPen>
                    </NavLink>
                    <a onClick={handleDelete}
                      href="#"
                      className="me-3 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      <FaTrash></FaTrash>
                    </a>
        </>
    )
}

export default TableActionButtons