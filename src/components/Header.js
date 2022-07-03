import { CContainer, CCol, CRow, CHeader, CTooltip, CLink, CHeaderBrand } from "@coreui/react"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { AiFillMail } from "react-icons/ai"
import { IoLogoWhatsapp } from "react-icons/io"

export const Header = () => {
  return (

    <CHeader position="sticky" container="fluid" className="h-20 w-100 header-style p-0 m-0">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6} xs={6} className="text-end">
            <CHeaderBrand className="title"> CINEM - APP </CHeaderBrand>
          </CCol>
          <CCol md={6} xs={6} className="text-start">
            <CLink className="p-1 link" href="https://www.linkedin.com/in/matiascepellotti/" target="_blank">
              <BsLinkedin size={30} />
            </CLink>
            <CLink className="p-1 link" href="https://github.com/MatiCepe" target="_blank">
              <BsGithub size={30} />
            </CLink>
            <CLink className="p-1 link" href="mailto:mcepellotti@gmail.com">
              <AiFillMail size={35} />
            </CLink>
            <CLink className="p-1 link" href="https://wa.me/5493434058464" target="_blank">
              <IoLogoWhatsapp size={30} />
            </CLink>
          </CCol>
        </CRow>
      </CContainer>
    </CHeader>



  )
}