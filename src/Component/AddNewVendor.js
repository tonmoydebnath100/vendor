import React, { useState } from 'react';
import Select from 'react-select';

const AddNewVendor = () => {
    const [selectedOptions, setSelectedOptions] = useState('');
    const optionList = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
        { value: "blue", label: "Blue" },
        { value: "white", label: "White" }
      ];
    
      // Function triggered on selection
      function handleSelect(data) {
        setSelectedOptions(data);
      }
    const handlesubmit=event=>{
        event.preventDefault();
        const form = event.target;
        const Name=form.name1.value;
        const Balance =form.balance.value;
        const Credit=form.credit.value;
        const Address =form.address.value;
        const Name2 =form.name2.value;
        const Phone2 =form.phone2.value;
        const Fax =form.fax.value;
        const Email =form.email.value;
        const Website =form.website.value;
        const PaymentTerms =form.pt.value;
        const Discount =form.discount.value;
        const Currency =form.currency.value;
        const TaxingScheme =form.ts.value;
        const Remarks =form.remarks.value;
    
        const data={
          Name,
          Balance,
          Credit,
          Address,
          Name2,
          Phone2,
          Fax,
          Email,
          Website,
          PaymentTerms,
          Discount,
          Currency,
          TaxingScheme,
          Remarks
        }
        console.log(data);
        
        console.log(data);
        fetch('https://vendor-server.vercel.app/add',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.status===201){
            console.log('added');
          
          }
          else{
            console.log('error');
           
          }
          
        })
        form.reset();
      } 
    return (
        <div className='flex divide-x'>
            <div className='overflow-x  w-1/3 bg-base-200'>
                <form>
                    <table className='m-2'>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Name</label></th>
                            <td><Select className='w-52'
                                options={optionList}
                                placeholder="Select Name"
                                value={selectedOptions}
                                onChange={handleSelect}
                                isSearchable={true}
                            /></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Contact</label></th>
                            <td><input name='contact' type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Phone</label></th>
                            <td><input name='phone' type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        
                        <tr>
                            
                            <td><input type='submit' className='mt-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' value='Search'/></td>
                        </tr>
                        
                    </table>
                    
                </form>
                <div className="overflow-x-auto">
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                        </thead>
                        
                        <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <td>Quality Control Specialist</td>
                        </tr>
                        
                        {/* row 2 */}
                        <tr>
                            <td>Desktop Support Technician</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>Tax Accountant</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <form className='w-2/3' onSubmit={handlesubmit}>
            <div >
                <div className='flex justify-around'>
                
                    <table className='m-2'>
                        <tr>
                            <h1 className='font-bold text-indigo-700'>Basic</h1>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Name</label></th>
                            <td><input name='name1' type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Balance</label></th>
                            <td><input name='balance' type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Credit</label></th>
                            <td><input name='credit' type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        
                        
                    </table>
                    <table className='m-2'>
                        <tr>
                            <h1 className='font-bold text-indigo-700'>Addresses</h1>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Business Address</label></th>
                            <td><textarea name='address' type="text" className="ps-6 px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        
                        
                    </table>
                    
                </div>
               
                <div className='flex justify-around mt-5'>

                    <table className='m-2'>
                        <tr>
                            <h1 className='font-bold text-indigo-700'>Contact</h1>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Name</label></th>
                            <td><input name='name2' type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Phone</label></th>
                            <td><input name='phone2' type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Fax</label></th>
                            <td><input name='fax' type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Email</label></th>
                            <td><input name='email' type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Website</label></th>
                            <td><input name='website' type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        
                    </table>
                    <table className='m-2'>
                        <tr>
                            <h1 className='font-bold text-indigo-700'>Purchasing Info</h1>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Payment Terms</label></th>
                            <td><input name='pt' type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Discount</label></th>
                            <td><input name='discount' type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Currency</label></th>
                            <td><input name='currency' type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Taxing Scheme</label></th>
                            <td><input name='ts' type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        
                        
                    </table>
                    
                    
                </div>
                <div className='mt-5 flex ms-16'>  
                    <label className='text-sm font-bold'>Remarks</label>
                    <textarea name='remarks' type="text" className="textarea-lg w-full max-w-xs ps-6 px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/>
                        
                </div>
                <div className='text-right mx-16 mb-5'>
                    <input type='submit' className='mt-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' value='SAVE'/>
                </div>
                
            </div>
            </form>
        </div>
    );
};

export default AddNewVendor;