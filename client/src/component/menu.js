import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';
import {Link} from 'react-router-dom';

export default function Menu(){
    return(
        <>
        <div className='table-responsive'>
            <table classname='table-bordered'>
                <thead className=" shadow-sm p-3  mt-5 rounded text-center">
                     <tr >
                        <th ><h3 className='mt-5'>product Details</h3></th>
                     </tr>
                </thead>
                <tbody>
                    <tr className='mt-5'>
                        <td className='shadow-sm p-3  rounded text-center '>
                        <Link to="/products">Home</Link>
                        </td>
                    </tr><br/>
                    <tr className=' shadow-sm p-3 mb-5 bg-white rounded text-center'>
                        <td>
                        <Link to="/laptop">Laptop</Link>
                        </td>
                    </tr><br/>
                    <tr className=' shadow-sm p-3 mb-5 bg-white rounded text-center'>    
                        <td>
                            <Link to="/phone">phone</Link>
                        </td>

                    </tr><br/>
                    <tr className=' shadow-sm p-3 mb-5 bg-white rounded text-center'>    
                        <td>
                            <Link to="/bokks">books</Link>
                        </td>

                    </tr><br/>
                    <tr className=' shadow-sm p-3 mb-5 bg-white rounded text-center'>    
                        <td>
                            <Link to="/Experience"></Link>
                        </td>

                    </tr><br/>
                    <tr className=' shadow-sm p-3 mb-5 bg-white rounded text-center'>    
                        <td>
                            <Link to="/Certificate">Certificate</Link>
                        </td>

                    </tr><br/>
                    <tr className=' shadow-sm p-3 mb-5 bg-white rounded text-center'>    
                        <td>
                            <Link to="/Socialmedia">Socialmedia</Link>
                        </td>

                    </tr>
                   
                </tbody>



            </table>

        </div>
        </>
    );
}