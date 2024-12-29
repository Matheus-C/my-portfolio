import styled from "styled-components";
import { breakpoints } from "../../global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  position: sticky;
`

export const ContainerNav = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: white;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 45px;
  @media(min-width: ${breakpoints.desktop}){
    height: 60px;
    gap: 80px;
    justify-content: center;
    padding: 10px 128px;
  }
`



export const Dropdown = styled.div`
  display: flex;
  top: 0;
  transform: translateY(-100%);
  position: absolute;
  flex-direction: column;
  z-index: -1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  transition: transform 500ms;
  margin-top: 0;
`

export const DropdownItem = styled.div`
  display: flex;
  position: sticky;
  z-index: 1000000;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`

export const ContentContainer = styled.div`
  @media(min-width: ${breakpoints.desktop}){
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`