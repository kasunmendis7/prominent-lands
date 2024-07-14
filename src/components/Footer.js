import { Footer, FooterLinkGroup } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsDiscord, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container className='border border-t-8 border-gray-600'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg
      sm:text-xl font-semibold"
            >
              <span
                className="px-3 py-1 bg-gradient-to-r from-slate-700
         via-gray-500
        to-slate-500 rounded-lg text-white"
              >
                Prominent
              </span>
              Lands
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
            <Footer.Title title='About'/>
            <FooterLinkGroup col>
              <Footer.Link href="/about">Our Story</Footer.Link>
              <Footer.Link href="/contact-us">Contact Us</Footer.Link>
            </FooterLinkGroup>
            </div>
            <div>
            <Footer.Title title='Follow Us'/>
            <FooterLinkGroup col>
              <Footer.Link href="https://linkedin.com/in/kasunmendis" target='_blank' rel='noopener noreferrer'>LinkedIn</Footer.Link>
              <Footer.Link href="https://github.com/kasunmendis7" target='_blank' rel='noopener noreferrer'>GitHub</Footer.Link>
            </FooterLinkGroup>
            </div>
            <div>
            <Footer.Title title='Legal'/>
            <FooterLinkGroup col>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
            </FooterLinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright href="https://linkedin.com/in/kasunmendis" by='Prominent Lands' year={new Date().getFullYear()}/>
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href="https://linkedin.com/in/kasunmendis" target='_blank' rel='noopener noreferrer' icon={BsLinkedin}/>
            <Footer.Icon href="https://linkedin.com/in/kasunmendis" target='_blank' rel='noopener noreferrer' icon={BsFacebook}/>
            <Footer.Icon href="https://linkedin.com/in/kasunmendis" target='_blank' rel='noopener noreferrer' icon={BsDiscord}/>
            <Footer.Icon href="https://linkedin.com/in/kasunmendis" target='_blank' rel='noopener noreferrer' icon={BsInstagram}/>
            <Footer.Icon href="https://github.com/kasunmendis7" target='_blank' rel='noopener noreferrer' icon={BsGithub}/>
            <Footer.Icon href="https://linkedin.com/in/kasunmendis" target='_blank' rel='noopener noreferrer' icon={BsTwitterX}/>
          </div>
        </div>
      </div>
    </Footer>
  )
}
