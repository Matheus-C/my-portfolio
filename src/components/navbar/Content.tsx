import { Dropdown, DropdownItem, ContentContainer } from "./Container";
import { NavbarText } from "../../global/typography";
import { items } from "./items";
import { FaBars } from "react-icons/fa"

export const Content = () => {
  if (window.innerWidth <= 1280) {
    return (
      <ContentContainer>
        <FaBars size="25" onClick={() => document.getElementById("dropdown")!.getAttribute("style") === "transform: translateY(0%); margin-top: 45px" ?
          document.getElementById("dropdown")!.setAttribute("style", "transform: translateY(-100%); margin-top: 0") :
          document.getElementById("dropdown")!.setAttribute("style", "transform: translateY(0%); margin-top: 45px")} />
      </ContentContainer>
    )
  } else {
    return (
      <ContentContainer>
        {items.map((item) => <NavbarText key={item.key} onClick={() => window.location.href = item.url}>{item.item}</NavbarText>)}
      </ContentContainer>
    )
  }
}

export const MobileMenu = () => {
  return (
    <Dropdown id="dropdown" onClick={() => document.getElementById("dropdown")!.setAttribute("style", "transform: translateY(-100%); margin-top: 0")}>
      {items.map((item) => <DropdownItem key={item.key} onClick={() => window.location.href = item.url}><NavbarText>{item.item}</NavbarText></DropdownItem>)}
    </Dropdown>
  )
}