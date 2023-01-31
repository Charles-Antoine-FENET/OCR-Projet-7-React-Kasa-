import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import AboutBannerIllustration from '../../assets/img/aboutBanner.jpg'
import HomeBannerIllustration from '../../assets/img/homeBanner.jpg'

//
//
// GlobalStyle Wraper and font
//
//
export const GlobalStyle = styled.div`
  max-width: 1340px;
  height: 100vh;
  width: 100%;
  margin: 0px auto;
  font-family: 'Montserrat';
`

//
//
// Logos images, images and pictograms
//
//

export const LogoPrimary = styled.img`
  height: 68px;
`
export const LogoSecondary = styled.img`
  height: 40px;
`

export const CardImage = styled.img`
  width: 340px;
  height: 340px;
  object-fit: cover;
  border-radius: 10px;
`

//
//
// Graphical charter
//
//

export const colors = {
  primary: '#FF6060' /** KasaOrange*/,
  secondary: '#FFFFFF' /** White */,
  tertiary: '#000000' /**Black */,
  lightGrey: '#F7F7F7',
  darkGrey: '#E5E5E5',
  backgroundFilter: `linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );`,
}

//
//
// Text
//
//

export const HomeTitle = styled.h1`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 48px;
  color: ${colors.secondary};
`
export const CardTitle = styled.h2`
  position: absolute;
  bottom: 30px;
  left: 10px;
  text-align: start;
  color: ${colors.secondary};
  font-size: 18px;
  font-weight: normal;
  text-decoration: none;
  padding: 0px;
  margin: 0px;
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

export const TextPrimary = styled.p`
  color: ${colors.primary};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
`

export const CopyrightText = styled.p`
  color: ${colors.secondary};
`

//
//
// Links
//
//
export const StyledCardLink = styled(Link)`
  display: flex;
  position: relative;
  height: inherit;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  background: red;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`

export const StyledNavLink = styled(NavLink)`
  padding: 10px 25px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &.active {
    text-decoration: underline;
  }
`

//
//
// Banners
//
//

export const HomeBannerContainer = styled.div`
  border-radius: 25px;
  height: 223px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${HomeBannerIllustration});
  background-size: cover;
`

export const AccommodationGalleryContainer = styled.div`
  border-radius: 25px;
  height: 415px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${AboutBannerIllustration});
  background-size: cover;
`

//
//
// Containers
//
//

// export const HeaderContainer = styled.header`
//   background-color: ${colors.secondary};
//   padding: 30px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

export const NavContainer = styled.nav``


export const FooterContainer = styled.footer`
  background-color: ${colors.tertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const CardsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  // display: grid;
  // grid-template-columns: repeat(3, 340px);
  row-gap: 24px;
  column-gap: 40px;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.lightGrey};
  border-radius: 25px;
  padding: 25px;
  margin: 50px 0px;
`

export const AccommodationCard = styled.li`
  border-radius: 10px;
  transition: 200ms;
  list-style-type: none;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px blue;
  }
`
