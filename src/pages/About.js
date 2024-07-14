import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function About() {
  const teamMembers = [
    {
      name: "Kasun Mendis",
      role: "CEO",
      image: "https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg",
      description:
        "Kasun Mendis is the CEO with over 20 years of experience in the real estate industry.",
    },
    {
      name: "Oshada Mendis",
      role: "CTO",
      image: "https://www.cio.com/wp-content/uploads/2024/01/shutterstock_1095953582.jpg?resize=1024%2C683&quality=50&strip=all",
      description:
        "Oshada is the CTO, leading our tech team with innovative solutions.",
    },
  ];
  return (
    <Container className="mt-10 mb-10">
      <Typography variant="h3" className="text-center font-bold mb-10 text-gray-700">
        About Us
      </Typography>

      <section className="mb-16 mt-5">
        <div className="flex flex-col md:flex-row items-center">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuUotCewtExM1UNKQZtIHpMd7IEnh1rt1Qr6HjKjBtODc3wHGVaOspOS-Xd_RW0nTfGIQ3gn4e2jxEDDSc9BH4xcdtOJ67R-6gli_rthUCvRx8O627IJl50XfRTHgRooJoZK30Q_UPAv2H/s1600/08-Skokie_Klehm_Bros_Grocery_Store_ca1900.jpeg"
            alt="Company History" className="md:w-1/2 mb-4 md:mb-0" />
          <div className="md:ml-8">
            <Typography variant="h4" className="font-semibold mb-4 text-gray-700">
              Our History
            </Typography>
            <Typography className="text-gray-500">
            Established in 2002, our real estate platform aims to revolutionize the way you find and manage your dream home. We have been dedicated to providing exceptional service and innovative solutions to our clients.
            </Typography>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div>
          <Typography variant="h4" className="font-semibold mb-4 text-gray-700">
            Our Vision
          </Typography>
          <Typography className="text-gray-500">
            Our vision is becoming the leading real estate platform that
            empowers individuals and families to find their perfect home,
            seamlessly and efficiently.
          </Typography>
        </div>
      </section>

      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-700">
          Our Mission
        </Typography>
        <Typography className="text-gray-500">
          Our mission is to deliver high-quality real estate services, making
          the process of buying, selling, or renting properties seamless and
          stress-free for our clients.
        </Typography>
      </section>

      <section>
        <Typography variant="h4" className="text-gray-700 font-semibold text-center mb-10">Meet the Team</Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index)=>(
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card>
                <CardMedia component="img" alt={member.name} height="200" image={member.image}/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{member.role}</Typography>
                  <Typography variant="body1" className="mt-2">{member.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
    </Container>
  );
}
