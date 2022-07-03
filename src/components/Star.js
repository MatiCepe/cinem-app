import { CButton } from "@coreui/react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

export const Star = (props) => {
  return (
    <>
      <CButton id={props.id} color="secondary" >
        {props.filled 
          ? <AiFillStar />
          : <AiOutlineStar />
        }
      </CButton>
    </>
  )
}