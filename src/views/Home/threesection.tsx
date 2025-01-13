import React from 'react'

const page = () => {
  return (
    <div className='container text-[#07076D]'>

   
    <div className="flex flex-col lg:flex-row lg:gap-20 ">
  
    <div className='w-full lg:w-[555px]'>
      <img
        src="/images/second pic.png"
        alt="image"
        className="object-cover rounded-lg w-full"
        width={355}
        height={120}
      />
    </div>
  
    
    <div className="grid grid-cols-2 md:gap-20 gap-16  lg:w-[95%] w-full mt-8 mb-8">
    
      <div>
        <h3 className="font-semibold text-lg">Parkeergelegenheid</h3>
        <p className='text-[12px]  border-b-[1px] border-[rgba(0, 0, 0, 0.3)]'>Parkeergarage, op eigen terrein, op afgesloten terrein</p>
      </div>
      <div>
        <h3 className="font-semibold text-lg">Tuin</h3>
        <p className='text-[12px]  border-b-[1px] border-[rgba(0, 0, 0, 0.3)]'>Geen tuin</p>
      </div>
      <div>
        <h3 className="font-semibold text-lg">Ligging</h3>
        <p className='text-[12px]  border-b-[1px] border-[rgba(0, 0, 0, 0.3)]'>In woonwijk, vrij uitzicht</p>
      </div>
      <div>
        <h3 className="font-semibold text-lg">Voorzieningen</h3>
        <p className='text-[12px]  border-b-[1px] border-[rgba(0, 0, 0, 0.3)] '>Mechanische ventilatie, tv kabel, lift, schulpuil, natuurlijke ventilatie</p>
      </div>
  

      <div>
        <h3 className="font-semibold text-lg">Isolatie</h3>
        <p className='text-[12px]  border-b-[1px] border-[rgba(0, 0, 0, 0.3)]'>Dakisolatie, muurisolatie, vloerisolatie, dubbel glas, hr glas</p>
      </div>
      <div>
        <h3 className="font-semibold text-lg">Verwarming</h3>
        <p className='text-[12px] border-b-[1px] border-[rgba(0, 0, 0, 0.3)]'>Cv ketel, vloerverwarming geheel</p>

      </div>
      <div>
        <h3 className="font-semibold text-lg">Warm water</h3>
        <p className='text-[12px]  border-b-[1px] border-[rgba(0, 0, 0, 0.3)]'>Cv ketel</p>
      </div>
      <div>
        <h3 className="font-semibold text-lg">CV-ketel</h3>
        <p className='text-[12px]  border-b-[1px] border-[rgba(0, 0, 0, 0.3)]'>Intergas hre</p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default page