import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home-container'>
      <img className='home-image' src='https://cdn.velonews.com/wp-content/uploads/2022/12/Copy-of-spectrum-vest-front.jpg?width=730' alt='woman standing with bike' />
      <div className='home-text'>
        <h2>INSPIRE ME</h2>
        <p>
          Get inspired with our curated selection of road cycling wear designed to provide unrivaled fit, performance, comfort and durability.
        </p>
      </div>
      <div className='two-cols-home'>
        <div className='home-pic-men'>
          <Link to="/mensproducts">
            <button>MEN</button>
          </Link>
        </div>
        <div className='home-pic-women'>
          <Link to="/womensproducts">
            <button>WOMEN</button>
          </Link>
        </div>
      </div>
      <div className='home-text home-text-2'>
        <h4>Jerseys</h4>
        <p>
          The best cycling jerseys in the world, made with the iconic designs and fabrics of our premium line.
        </p>
      </div>
    </div>
  )
}
