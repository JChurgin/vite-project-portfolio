import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
          </ul>
        </article>
        {/* End First Card */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
          </ul>
        </article>
        {/* End Second Card */}
        <article className="service">
          <div className="service__head">
            <h3>Third Card</h3>
          </div>

          <ul className="service__list">
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit concter erilt.</p>
            </li>
          </ul>
        </article>
        {/* End Third Card */}
      </div>
    </section>
  )
}

export default Services