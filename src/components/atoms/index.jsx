import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import AboutBannerIllustration from '../../assets/AboutBanner.jpg'
import HomeBannerIllustration from '../../assets/HomeBanner.jpg'

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

  widht: 100%;
  object-fit: cover;
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
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  text-decoration: none;
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
export const StyledLink = styled(Link)`
  padding: 10px 25px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
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

export const HeaderContainer = styled.header`
  background-color: ${colors.secondary};
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavContainer = styled.nav``

export const FooterContainer = styled.footer`
  background-color: ${colors.tertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.lightGrey};
  border-radius: 25px;
  padding: 25px;
  margin: 50px 0px;
`

export const AccommodationCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  border-radius: 10px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px blue;
  }
`
