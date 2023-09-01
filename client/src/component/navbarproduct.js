import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export default function Navbar()
{
    return(
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-nav p-3">
             <a className="navbar-brand text-light" href="#"><h2>KPR PRODUCTS</h2></a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button>

           <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto ">
                     <li className="nav-item active text-light">
                            <a className="nav-link text-light ml-3" href="#">Solutions <span class="sr-only">(current)</span></a>
                     </li>
                     <li className="nav-item ">
                            <a className="nav-link text-light " href="#">customers</a>
                     </li>
                     <li className="nav-item dropdown text-light ">
                            <a className="nav-link dropdown-toggle text-light ml-3" href="#" role="button" data-toggle="dropdown" aria-expanded="false"> about us</a>
                         <div className="dropdown-menu text-dark">
                            <a className="dropdown-item " href="#">community</a>
                            <a className="dropdown-item " href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item " href="#">Something else here</a>
                         </div>    
                    </li>
                    <li className="nav-item text-light ml-3">
                            <a className="nav-link disabled text-light">contacct us</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        </>
    );
}