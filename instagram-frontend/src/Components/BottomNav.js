import React from 'react'
import { MdHome, MdPhotoCamera, MdPerson} from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function BottomNav() {
  return (
    <footer>
        <nav>
            <Link to='/feed'>
                <MdHome size={25}/>
            </Link>
            <Link to='/post'>
                <MdPhotoCamera size={25} />
            </Link>
            <Link to='/profile'>
                <MdPerson size={25}/>
            </Link>
        </nav>
    </footer>
  )
}
