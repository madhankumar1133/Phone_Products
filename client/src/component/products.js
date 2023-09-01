import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './navbarproduct';
import Menu from './menu';
import labimg from './images/labtop.jpeg'
import phoneimg from './images/phone.jpeg'
import accimg from './images/acc.jpg'
import axios from "axios";
import {useState,useEffect} from 'react';

export default function Products(){
    let userid=localStorage.getItem('userid');

    const [userdetails,setUserdetails] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/Get_userdetails/'+userid)
        .then(responsive=>responsive.json())
        .then(json=>setUserdetails(json));
    },[]);

    const [orderproducts,setOrderproducts] = useState([]);
    let[showData,setShowData]=useState(false)
    useEffect(()=>{
        fetch('http://localhost:3000/Get_orderdetails/'+userid)
        .then(responsive=>responsive.json())
        .then(json=>setOrderproducts(json));
    },[]);
   

const Sample=()=>{
    setShowData(!showData);
};

    const handleorder=(event)=>{
        event.preventDefault();
        var datastring=new FormData(event.target);
        var config={Headers:{"enctype":"multipart/form-data"}};

        axios.post('http://localhost:3000/Add_orders',datastring,config)
        .then(function(response)
        {
            if(response.data.status==='error')
            {
                alert('error11');
                window.location.reload();
            }
            else if(response.data.status==='uploaded')
            {
                alert('successfully your order placed');
                window.location.reload();
            }
            else{
                alert('contact admin');
                window.location.reload();
            }
        })
        .catch(function(error)
        {
            alert('error');
            window.location.reload();
        })
    }
    const delete1=(s_no)=>{
        var key={s_no}
        var value={Headers:{"enctype":"multipart/form-data"}}
  
        axios.post("http://localhost:3000/Delete_order",key,value)
        .then(function(response){
          if(response.data.status==="error")
          {
              alert("error");
  
          }
          else if(response.data.status ==="delete")
          {
              alert(" your order was deleted");
              window.location.reload();
          }
          else{
              alert("contact admin")
          }
        })
      }
    return(
        <>  
           
            <div className='container-fluid bg_products'>
            
                <div className='row'>
                    <div className='col-lg-12'>
                       <Navbar/>
                    </div>
                </div>

            </div>
            <div className='container-fluid '>
                <div className='text-center mt-5 '>
                   {userdetails.map((v,i)=>(
                        <h1 className='te_col'>Welcome {v.username}</h1>
                      )
    
                    )}

                </div>
            </div>
            
            
            <div className='container-fluid '>
            <form onSubmit={handleorder}>
                <div className='row mt-5'>
                  
                    <div className='col-lg-4 p-3'>
                        <img src={labimg} className='col-lg-12' />
                        <h3 className="text-center mt-2">laptops</h3>
                            <label className=" p-2 text-center"> <h6>Lapbrands</h6></label>
                            <select name="laptop" id="laptop" className="custom-select col-lg-5">
                                <option selected></option>
                                <option value="Samsung">Samsung</option>
                                <option value="Accer">Accer</option>
                                <option value="lenovo">lenovo</option>
                                <option value="Dell">Dell</option>
                                <option value="Hewlett Packard">Hewlett Packard</option>
                                <option value="Asus">Asus</option>
                            </select>
                       
                    </div>
                    <div className='col-lg-4 p-3'>
                        <img src={phoneimg} className='col-lg-12' />
                        <h3 className="text-center mt-2">phonebrands</h3>
                            <label className=" p-2 text-center"> <h6>phonebrands</h6></label>
                            <select name="phone" id="phone" className="custom-select col-lg-5">
                                <option selected></option>
                                <option value="Samsung">Samsung</option>
                                <option value="Realme">Realme</option>
                                <option value="Redme">Redme</option>
                                <option value="Vivo">Vivo</option>
                                <option value="Oppo">Oppo</option>
                                <option value="Nokia">Nokia</option>
                            </select>
                       
                    </div>
                    <div className='col-lg-4 p-3'>
                        <img src={accimg} className='col-lg-12' />
                        <h3 className="text-center mt-2">accessories</h3>
                            <label className=" p-2 text-center"> <h6>lists</h6></label>
                            <select name="accessories" id="accessories" className="custom-select col-lg-5">
                                <option selected></option>
                                <option value="Batteries">Batteries</option>
                                <option value="Headsets">Headsets</option>
                                <option value="Charger">Charger</option>
                                <option value="Cable">Cable</option>
                                <option value="Mouse">Mouse</option>
                                <option value="Harddrive">Harddrive</option>
                            </select>
                       
                    </div>
                    <div className='col-lg-4'>&nbsp;
 
                    </div>
                    <div className='col-lg-4 text-center mt-3'>
                        <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary m-3">place Order </button> 
                        <input type="hidden" name="userid" id="userid" value={userid} className="form-control"/>
                        <input type='button' name='data_display' id='data_display' value='View order' className='btn btn-success ml-3' onClick={Sample} />

                    </div>
                    <div className='col-lg-4'>&nbsp;

                    </div>
                 
                </div>
                </form>

                {
        showData &&(
          <div className="container-fluid">
          <div className="row">
              <div className="col-lg-2">&nbsp;</div>
              <div className="col-lg-8 mt-5">
                  <div className="table-responsive mt-3">
                      <table className="table table-bordered">
                          <thead>
                              <tr className='text-center text-primary'>
                                  
                                  <th>labtops</th>
                                  <th>phone</th>
                                  <th>accessories</th>
                                  <th>edit order</th>
                              </tr>
                          </thead>
                          <tbody className='text-center text-dark'>
                          {
                              orderproducts.map((v,i)=>(
                                  <tr>
                                     <td>{v.laptop}</td>
                                      <td>{v.phone}</td>
                                      <td>{v.accessories}</td>
                                      
                                      <td>
                                        <Link to={"/updateorder/"+v.s_no}><button type='submit' value='submit' className='btn btn-primary'>update</button></Link>
                                        <button type="button" name="data_del" id="data_del" className="btn btn-danger" onClick={()=>{delete1(v.s_no)}}>Delete</button> 
                                        </td>
                                  </tr>
                              ))
                          }
                          </tbody>
                      </table>
                  </div>
                  
              </div>
              <div className="col-lg-2">&nbsp;</div>
          </div>
          </div>

         )
       } 
            </div>


        </>
    );
}