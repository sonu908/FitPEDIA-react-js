import {CgGym} from 'react-icons/cg'
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'


function Footer() {
  return (
    <footer className="footer bg-black footer-center p-10 border border-red-700 text-primary-content">
      <div>
        <CgGym/>
               <p className="font-bold">
          FITPEDIA. <br />
           Fitness since 1992
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href='https://github.com/sonu908' target="_blank" rel="noopener noreferrer">
            <AiFillGithub className='text-xl'/>
          </a>
          <a href='https://www.linkedin.com/in/sonu908/' target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className='text-xl' />
          </a>
         <a href='https://www.instagram.com/s0.n.u/' target="_blank" rel="noopener noreferrer"> <AiFillInstagram className='text-xl'/></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
