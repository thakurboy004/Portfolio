import Link from 'next/link'
import { useRouter } from "next/router"
import React from 'react'
import { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon } from './Icons'
import {motion} from 'framer-motion'
import Logo from './Logo'

const CustomLink = ({href, title, className=""}) =>{
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath == href ? 'w-full':'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    );
}

const NavBar = () =>{
    return(
        <header className = 'w-full px-32 py-8 font-medium flex item-center justify-between'>
            <nav>
            <CustomLink href='/' title="Home" className="mr-4"/>
            <CustomLink href='/about' title="About" className="mx-4"/>
            <CustomLink href='/projects' title="Projects" className="ml-4"/>
            </nav>
            <nav>

                <motion.a href="/" target={"_blank"}
                whileHover={{y:-2 }} className="w-6 mr-3" whileTap={{scale:0.9}}>
                    <TwitterIcon/>
                </motion.a>

                <motion.a href="/" target={"_blank"}
                whileHover={{y:-2 }} className="w-6 mx-3" whileTap={{scale:0.9}}>
                    <GithubIcon/>
                </motion.a>

                <motion.a href="/" target={"_blank"}
                whileHover={{y:-2 }} className="w-6 mx-3" whileTap={{scale:0.9}}>
                    <LinkedInIcon/>
                </motion.a>

                <motion.a href="/" target={"_blank"}
                whileHover={{y:-2 }} className="w-6 ml-3" whileTap={{scale:0.9}}>
                    <DribbbleIcon/>
                </motion.a>
                </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo/>
            </div>
        </header>
    );
}

export default NavBar