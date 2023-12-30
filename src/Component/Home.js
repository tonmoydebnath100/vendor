import React from 'react';

const Home = () => {
    return (
        <div className='flex divide-x'>
            <div className='overflow-x  w-1/3 bg-base-200'>
                <form>
                    <table className='m-2'>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Order</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Vendor Order</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Payment Status</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Vendor</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
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
                            <th>Order</th>
                            <th>Vendor Order</th>
                        </tr>
                        </thead>
                        
                        <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        
                        {/* row 2 */}
                        <tr>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <div className='flex'>
                    <table className='m-2'>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Vendor</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Contact</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Phone</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Vendor Address</label></th>
                            <td><textarea type="text" className="pe-6 px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        
                    </table>
                    <table className='m-2'>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Terms</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>V. Order</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Location</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Merchandiser</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        
                    </table>
                    <table className='m-2'>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Order</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Date</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Status</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Ship-To Address</label></th>
                            <td><textarea type="text" className="pe-6 px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        
                    </table>
                </div>
                <div>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                        <tr>
                            <th></th> 
                            <th>Item</th> 
                            <th>Description</th> 
                            <th>Vendor Product</th> 
                            <th>Quantity</th> 
                            <th>Unit Price</th> 
                            <th>Disc</th>
                            <th>Sub-Total</th>
                        </tr>
                        </thead> 
                        <tbody>
                        <tr>
                            <th>1</th> 
                            <td>Cy Ganderton</td> 
                            <td>Quality Control Specialist</td> 
                            <td>Littel, Schaden and Vandervort</td> 
                            <td>Canada</td> 
                            <td>12/16/2020</td> 
                            <td>Blue</td>
                        </tr>
                        <tr>
                            <th>2</th> 
                            <td>Hart Hagerty</td> 
                            <td>Desktop Support Technician</td> 
                            <td>Zemlak, Daniel and Leannon</td> 
                            <td>United States</td> 
                            <td>12/5/2020</td> 
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>3</th> 
                            <td>Brice Swyre</td> 
                            <td>Tax Accountant</td> 
                            <td>Carroll Group</td> 
                            <td>China</td> 
                            <td>8/15/2020</td> 
                            <td>Red</td>
                        </tr>
                        <tr>
                            <th>4</th> 
                            <td>Marjy Ferencz</td> 
                            <td>Office Assistant I</td> 
                            <td>Rowe-Schoen</td> 
                            <td>Russia</td> 
                            <td>3/25/2021</td> 
                            <td>Crimson</td>
                        </tr>
                        
                        
                        </tbody> 
                        
                    </table>
                    </div>
                </div>
                <div className='flex'>
                    <table className='m-2'>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Carrier</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Due Date</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Taxing Scheme</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Non-Vendor Costs</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Currency</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        
                    </table>
                    <table className='m-2'>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Req. Ship Date</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Remarks</label></th>
                            <td><textarea type="text" className="ps-6 px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th></th>
                            <div>
                            <td><button  className='mt-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' >Fulfilled</button></td>
                            <td><button  className='mt-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' >Pay</button></td>
                            </div>
                        </tr>
                        
                       
                        
                    </table>
                    <table className='m-2'>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Sub-Total</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Freight</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Total</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Paid</label></th>
                            <td><input type="text" className="px-2 ms-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"/></td>
                        </tr>
                        <tr>
                            <th className='text-left'><label className='text-sm font-bold'>Balance</label></th>
                            <td className='text-right'><label className='text-sm font-bold'>0000 tk</label></td>
                        </tr>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;