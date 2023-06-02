import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home-container'>
      <img className='home-image' src='https://manofmany.com/wp-content/uploads/2020/04/soomom-cycling-brands-1.png' alt='woman standing with bike' />
      <div className='home-text'>
        <h2>INSPIRE ME</h2>
        <p>
          Get inspired with our curated selection of road cycling wear designed to provide unrivaled fit, performance, comfort and durability.
        </p>
      </div>
      <div className='two-cols-home'>
        <Link to="/mensproducts">
          <div className='home-pic-men'>
            <button>SHOP MEN</button>
          </div>
        </Link>
        <Link to="/womensproducts">
        <div className='home-pic-women'>
            <button>SHOP WOMEN</button>
        </div>
        </Link>
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
