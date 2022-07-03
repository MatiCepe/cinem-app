import { CContainer, CHeader, CHeaderBrand } from "@coreui/react"

export const Header = () => {
  return (
    <CHeader className="header-style">
      <CContainer fluid>
        <CHeaderBrand className="text-style">
        Cinem-App || botones de naveagcion.....!
        </CHeaderBrand>
          
      </CContainer>
    </CHeader>
  )
}