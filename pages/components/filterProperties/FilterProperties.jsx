import React, { useState } from 'react'
import styles from './filterProperties.module.css'
const FilterProperties = () => {
  const[selected,setSelected]=useState(null)
 
  let propertyDetails=[
{
  id:0,
  name:'Properties by Complex',
},

{
  id:1,
  name:'Properties by Locality',
},

{
  id:2,
  name:'Properties by Configuration',
},
  ]

  return (
    <>
    <div className={styles.filterContainer}>
    {propertyDetails.map((item)=>{
      return <li key={item.id} onClick={()=> setSelected(item.id)}  className={`${styles.filterHeading} ${selected===item.id?`${styles.active}`: ``}`}>{item.name}</li>
    })}
    </div>  
   {/* <div className={styles.underline}></div> */}

   <div className={styles.heading}>
    {selected === 2 && <>
   <div className={styles.filterResults}>
    <h1 className={styles.filterSubheadings} >For Sale</h1>

   <div className={styles.filterColumns1}>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
   </div>

   <div className={styles.filterColumns2}>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
   </div>

   </div>
   
   <div className={styles.filterResults}>
    <h1 className={styles.filterSubheadings} >For Sale</h1>

   <div className={styles.filterColumns1}>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
   </div>

   <div className={styles.filterColumns2}>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
    <p>Flats for sale in Andheri</p>
   </div>

   </div>
   </>}

   {selected === 1 && <>
   <div className={styles.filterResults}>
    <h1 className={styles.filterSubheadings} >For Sale</h1>

   <div className={styles.filterColumns1}>
    <p>2BHK flats on sale in Belapur</p>
    <p>2BHK flats on sale in Vashi</p>
    <p>2BHK flats on sale in Seawoods</p>
    <p>2BHK flats on sale in Khargar</p>
    <p>2BHK flats on sale in Keylong</p>
    <p>2BHK flats on sale in Srinagar</p>
    <p>2BHK flats on sale in Khargar</p>
    <p>2BHK flats on sale in Belapur</p>
    <p>2BHK flats on sale in Vashi</p>
    <p>2BHK flats on sale in Seawoods</p>
    <p>2BHK flats on sale in Khargar</p>
    <p>2BHK flats on sale in Keylong</p>
    <p>2BHK flats on sale in Srinagar</p>
   </div>

   <div className={styles.filterColumns2}>
    <p>2BHK flats on sale in Belapur</p>
    <p>2BHK flats on sale in Vashi</p>
    <p>2BHK flats on sale in Seawoods</p>
    <p>2BHK flats on sale in Khargar</p>
    <p>2BHK flats on sale in Keylong</p>
    <p>2BHK flats on sale in Srinagar</p>
    <p>2BHK flats on sale in Khargar</p>
    <p>2BHK flats on sale in Belapur</p>
    <p>2BHK flats on sale in Vashi</p>
    <p>2BHK flats on sale in Seawoods</p>
    <p>2BHK flats on sale in Khargar</p>
    <p>2BHK flats on sale in Keylong</p>
    <p>2BHK flats on sale in Srinagar</p>
   </div>

   </div>
   
   <div className={styles.filterResults}>
    <h1 className={styles.filterSubheadings} >For Rent</h1>

   <div className={styles.filterColumns1}>
    <p>2BHK flats on sale in Belapur</p>
    <p>2BHK flats on sale in Vashi</p>
    <p>2BHK flats on sale in Seawoods</p>
    <p>2BHK flats on sale in Khargar</p>
    <p>2BHK flats on sale in Keylong</p>
    <p>2BHK flats on sale in Srinagar</p>
    <p>2BHK flats on sale in Khargar</p>
    <p>2BHK flats on sale in Belapur</p>
    <p>2BHK flats on sale in Vashi</p>
    <p>2BHK flats on sale in Seawoods</p>
    <p>2BHK flats on sale in Khargar</p>
    <p>2BHK flats on sale in Keylong</p>
    <p>2BHK flats on sale in Srinagar</p>
   </div>

   <div className={styles.filterColumns2}>
    <p>2BHK flats on sale in Belapur</p>
    <p>2BHK flats on sale in Vashi</p>
    <p>2BHK flats on sale in Seawoods</p>
    <p>2BHK flats on sale in Khargar</p>
    <p>2BHK flats on sale in Keylong</p>
    <p>2BHK flats on sale in Srinagar</p>
    <p>2BHK flats on sale in Khargar</p>
    <p>2BHK flats on sale in Belapur</p>
    <p>2BHK flats on sale in Vashi</p>
    <p>2BHK flats on sale in Seawoods</p>
    <p>2BHK flats on sale in Khargar</p>
    <p>2BHK flats on sale in Keylong</p>
    <p>2BHK flats on sale in Srinagar</p>
   </div>

   </div>
   </>}


   
   </div>

    </>
  )
}

export default FilterProperties