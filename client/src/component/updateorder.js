import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './navbarproduct';
import labimg from './images/labtop.jpeg'
import phoneimg from './images/phone.jpeg'
import accimg from './images/acc.jpg';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function Updateorder(){
    let userid=localStorage.getItem('userid');
    const {s_no}=useParams();
    const [userdetails,setUserdetails] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/Get_userdetails/'+userid)
        .then(responsive=>responsive.json())
        .then(json=>setUserdetails(json));
    },[]);

    const [laptop,setLaptop]=useState('');
    const [phone,setPhone]=useState('');
    const [accessories,setAccessories]=useState('');

    useEffect(()=>{
        fetch('http://localhost:3000/Get_updateorder/'+s_no)
        .then(response=>response.json())
        .then(function(res){
            setLaptop(res[0].laptop);
            setPhone(res[0].phone);
            setAccessories(res[0].accessories);

        })
        .catch(function(error){
           alert(error);
               
        })
    },[])
    const handleupdate= async (event)=>{
        
        event.preventDefault();
        var datastring =new FormData(event.target);
        var config={Headers:{'enctype':'multipart/form-data'}}

        await axios.put('http://localhost:3000/Update_orderdata/'+s_no+'',datastring,config)
        .then(function(response)
        {
            if(response.data.status==='error')
            {
                alert('query error');
                window.location.reload();
            }
            else if(response.data.status==='success')
            {
                alert('successfully update your order');
                window.location.href ="/products";
            }
            else{
                alert('conact admin');
                window.location.reload();
            }
        })

        .catch(function(error)
        {
            if(error)
            {
                alert('Error');
                window.location.reload();
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
        <div className='text-center mt-5'>
            {userdetails.map((v,i)=>(
                <h1 className='te_col'>Welcome {v.username} update your order here</h1>
                )
    
                )}

            </div>
        <div className='container-fluid '>
        <form onSubmit={handleupdate}>
            <div className='row mt-5'>
              
                <div className='col-lg-4 p-3'>
                    <img src={labimg} className='col-lg-12' />
                    <h3 className="text-center">laptops</h3>
                        <label className=" p-2 text-center"> <h6>Lapbrands</h6></label>
                        <select name="laptop" id="laptop" value={laptop} onChange={(e)=>setLaptop(e.target.value)} className="custom-select col-lg-5">
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
                    <h3 className="text-center">phonebrands</h3>
                        <label className=" p-2 text-center"> <h6>phonebrands</h6></label>
                        <select name="phone" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} className="custom-select col-lg-5">
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
                    <h3 className="text-center">accessories</h3>
                        <label className=" p-2 text-center"> <h6>lists</h6></label>
                        <select name="accessories" id="accessories" value={accessories} onChange={(e)=>setAccessories(e.target.value)} className="custom-select col-lg-5">
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
                <div className='col-lg-4 text-center mt-5'>
                    <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary m-3">update order</button> 
                    {/* <input type="hidden" name="userid" id="userid" value={userid} className="form-control"/> */}
                    

                </div>
                <div className='col-lg-4'>&nbsp;

                </div>
             
            </div>
            </form>
            </div>
        </>
    );
}