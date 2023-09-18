import { Link } from "react-router-dom";
import {SiHelpscout} from 'react-icons/si'


function Nav() {
  return (
    <div>
      <div className="navbar bg-transparent rounded-3xl  border-b border-red-700">
        <div className="flex-1">
         <Link to={'/'}>
            <a className="btn btn-ghost normal-case text-4xl text-zinc-300 gap-0 tracking-widest">
              Fit<span className="text-red-700">pedia</span>
            </a>
         </Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
           <SiHelpscout/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
