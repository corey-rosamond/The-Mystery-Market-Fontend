import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter
} from "@mui/icons-material";
import {mobile} from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`

`;

const Description = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    transform: scale(1.5);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    transform: scale(1.1);
    color: black;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


/**
 * FooterComponent
 */
class FooterComponent extends React.Component
{
  /**
   * constructor
   * @param props
   */
  constructor(props)
  {
    super(props);
    this.state = {
      companyName: "The Mystery Market",
      companyDescription: "The Mystery Market is your premier supplier of both generic and themed mystery boxes! So stop by our store today and bring a little mystery back to your life!",
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
      pinterestLink: "",
      linksTitle: "Useful Links",
      links: [
        {
          title:"Home",
          destination: ""
        },
        {
          title:"Men's Fashion",
          destination: ""
        },
        {
          title:"Accessories",
          destination: ""
        },
        {
          title:"Order Tracking",
          destination: ""
        },
        {
          title:"Wishlist",
          destination: ""
        },
        {
          title:"Cart",
          destination: ""
        },
        {
          title:"Women's Fashion",
          destination: ""
        },
        {
          title:"My Account",
          destination: ""
        },
        {
          title:"Wishlist",
          destination: ""
        },
        {
          title:"Terms & Conditions",
          destination: ""
        },
      ],
      companyAddress: "Temecula CA, 92592",
      companyPhone: "(760) 412-2023",
      companyEmail: "webmaster@themysterymarket.com"
    };
  }

  /**
   * render
   * @returns {JSX.Element}
   */
  render()
  {
    return (
      <Container>
        <Left>
          <Logo>{this.state.companyName}</Logo>
          <Description>{this.state.companyDescription}</Description>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>{this.state.linksTitle}</Title>
          <List>
            {this.state.links.map(link=>{
              return(<ListItem key={link.title.toString()}>{link.title}</ListItem>);
            })}
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> {this.state.companyAddress}
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> {this.state.companyPhone}
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> {this.state.companyEmail}
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    )
  }
}

export default FooterComponent;