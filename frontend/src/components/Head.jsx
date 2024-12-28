import { Link } from 'react-router-dom';

export default function Head() {
    const linkStyle = {
        textDecoration: 'none',
        color: '#730ff5'
    }
  return (
    <nav>
        <div className="logo">
            <Link to={'/'} style={linkStyle}><h2>Note App</h2></Link>
        </div>
        
    </nav>
  )
}
