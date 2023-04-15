import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar-area'>
        <div className='sidebar-widget'>
            <h3 className='widget-title'>Search Product</h3>
            <hr />
            <input type="search" className='form-control' placeholder='Search keywords....' />
        </div>
        <div className='sidebar-widget'>
            <h3 className='widget-title'>Categories</h3>
            <hr />
            <ul className='list'>
                <li>
                    <div class="form-check form-switch gap-3 d-flex">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label class="form-check-label h5" for="flexSwitchCheckDefault">Men</label>
                    </div>
                </li>
                <li>
                    <div class="form-check form-switch gap-3 d-flex">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label class="form-check-label h5" for="flexSwitchCheckDefault">Men</label>
                    </div>
                </li>
            </ul>
        </div>
        <div className='sidebar-widget'>
            <h3 className='widget-title'>Brands</h3>
            <hr />
            <ul className='list'>
            <li>
                    <div class="form-check form-switch gap-3 d-flex">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label class="form-check-label h5" for="flexSwitchCheckDefault">Men</label>
                    </div>
                </li>
                <li>
                    <div class="form-check form-switch gap-3 d-flex">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label class="form-check-label h5" for="flexSwitchCheckDefault">Men</label>
                    </div>
                </li>
            </ul>
        </div>
        <div className='sidebar-widget'>
            <h3 className='widget-title'>Search Product</h3>
            <hr />
            <div className="price-search">
                <input type="search" placeholder="MIN"/> -
                <input type="search"  placeholder="MAX"/>
                <button>Search</button>
            </div>
        </div>
        <div className='sidebar-widget'>
            <h3 className='widget-title'>Tags</h3>
            <hr />
            <div className='items d-flex flex-wrap gap-2'>
                <Link href="#" className='btn btn-warning'>Eid</Link>
                <Link href="" className='btn btn-warning'>Puja</Link>
                <Link href="" className='btn btn-warning'>Corona</Link>
            </div>
        </div>
    </div>
  )
}

export default Sidebar