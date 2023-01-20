import styled from 'styled-components'

export const LogoPrimary = styled.img`
  height: 53.36px;
  width: 46.04px;
`

export const LogoSecondary = styled.img`
  height: 40px;
`

const colors = {
  primary: '#FF6060',
  secondary: '#FFFFFF',
  backgroundLight: '#F7F7F7',
  backgroundDark: '#E5E5E5',
}

export const TextPrimary = styled.p`
  color: #ff6060;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
`

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  color: ${colors.secondary};
`
export const NavContainer = styled.header`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Banner = styled.div`
  border-radius: 25px;
  height: 223px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.backgroundLight};
  border-radius: 25px;
  padding: 25px;
  margin: 50px 0px;
`

export const AccommodationCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  border-radius: 10px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px blue;
  }
`

export const AccommodationImg = styled.img`
  height: 150px;
  widht: 150px;
  align-self: center;
`

export const AccommodationTitle = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: flex-end;
  color: ${colors.secondary};
`

export const FooterContainer = styled.footer`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const CopyrightText = styled.p`
  color: white;
`