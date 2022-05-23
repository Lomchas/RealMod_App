import React, { useState } from 'react'
import './addProperty.css'
import { GrFormUpload } from "react-icons/gr";
import logo from './Image/title_add_property.png'
import { AiFillPlusCircle } from "react-icons/ai";
import { useForm } from '../../Hooks/UseForm';
import { FileUp } from '../../Helpers/FileUp';
import { useDispatch } from 'react-redux';
import { actionAddAsync } from '../../Redux/Actions/ActionProperties';



const AddProperty = () => {
    const dispatch = useDispatch()
    const [isChecked, setisChecked] = useState({
        smart: false,
        parking: false,
        pool: false,
        security: false,
        medicalCenter: false,
        library: false,
        kingBeds: false,
        playland: false
    })


    const [formValue, handleInputChange, reset, setValues] = useForm({
        property_title: '',
        property_photo: '',
        property_price: '',
        property_post_type: '',
        property_type_build: '',
        property_location: '',
        property_beds: '',
        property_bathrooms: '',
        property_size: '',
        smart_property: isChecked.smart,
        parking_property: isChecked.parking,
        pool_property: isChecked.pool,
        security_property: isChecked.security,
        medicalCenter_property: isChecked.medicalCenter,
        library_property: isChecked.library,
        kingBeds_property: isChecked.kingBeds,
        playland_property: isChecked.playland
    })

    const { property_title,
        property_photo,
        property_price,
        property_post_type,
        property_type_build,
        property_location,
        property_beds,
        property_bathrooms,
        property_size } = formValue;

    const handleChecked = ({ target }) => {
        if (target.name === 'smart_property') {
            setisChecked({
                ...isChecked,
                smart: !isChecked.smart
            })
            setValues({
                ...formValue,
                smart_property: !isChecked.smart
            })
        }
        else if (target.name === 'parking_property') {
            setisChecked({
                ...isChecked,
                parking: !isChecked.parking
            })
            setValues({
                ...formValue,
                parking_property: !isChecked.parking
            })
        }
        else if (target.name === 'pool_property') {
            setisChecked({
                ...isChecked,
                pool: !isChecked.pool
            })
            setValues({
                ...formValue,
                pool_property: !isChecked.pool
            })
        }
        else if (target.name === 'security_property') {
            setisChecked({
                ...isChecked,
                security: !isChecked.security
            })
            setValues({
                ...formValue,
                security_property: !isChecked.security
            })
        }
        else if (target.name === 'medicalCenter_property') {
            setisChecked({
                ...isChecked,
                medicalCenter: !isChecked.medicalCenter
            })
            setValues({
                ...formValue,
                medicalCenter_property: !isChecked.medicalCenter
            })
        }
        else if (target.name === 'library_property') {
            setisChecked({
                ...isChecked,
                library: !isChecked.library
            })
            setValues({
                ...formValue,
                library_property: !isChecked.library
            })
        }
        else if (target.name === 'kingBeds_property') {
            setisChecked({
                ...isChecked,
                kingBeds: !isChecked.kingBeds
            })
            setValues({
                ...formValue,
                kingBeds_property: !isChecked.kingBeds
            })
        }
        else if (target.name === 'playland_property') {
            setisChecked({
                ...isChecked,
                playland: !isChecked.playland
            })
            setValues({
                ...formValue,
                playland_property: !isChecked.playland
            })
        }
    }


    const handleFileChange = (e) => {
        console.log(e.target.files)
        FileUp(e.target.files[0])
            .then((res) => {
                setValues({
                    ...formValue,
                    property_photo: res
                })
            })
            .catch(err => console.warn(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (property_title.length === 0 || property_photo.length === 0 || property_price.length === 0 || property_post_type.length === 0 || property_type_build.length === 0 || property_location.length === 0 || property_beds.length === 0 || property_bathrooms.length === 0 || property_size.length === 0){
            alert('Hay espacios en Blanco')
        }
        else{
            dispatch(actionAddAsync(formValue))
            console.log(formValue)
            reset()
        }
    }

 
    return (
        <div className='container-add-property'>
            <img src={logo} alt='Add property' className='title-add-property' />
            <form className='item-form-add-property' onSubmit={handleSubmit}>
                <input type='text' name='property_title' value={property_title} onChange={handleInputChange} placeholder='Property title' />
                <label className='file-image-property' htmlFor='file_property'>
                    <p>Upload property image</p>
                    <GrFormUpload />
                    <input type='file' name='property_photo' onChange={handleFileChange} id='file_property' />
                </label>
                <input type='number' name='property_price' value={property_price} onChange={handleInputChange} placeholder='Property Price' />
                <select name='property_post_type' value={property_post_type} onChange={handleInputChange}>
                    <option defaultValue>Select post type</option>
                    <option>For Buy</option>
                    <option>For Rent</option>
                </select>
                <input type='text' name='property_type_build' value={property_type_build} onChange={handleInputChange} placeholder='Type build (example: Studio home)' />
                <input type='text' name='property_location' value={property_location} onChange={handleInputChange} placeholder='city/state (example: LA/California)' />
                <input type='number' name='property_beds' value={property_beds} onChange={handleInputChange} placeholder="Beds number" />
                <input type='number' name='property_bathrooms' value={property_bathrooms} onChange={handleInputChange} placeholder="Bathrooms number" />
                <input type='number' name='property_size' value={property_size} onChange={handleInputChange} placeholder="Property size (sqft)" />
                <label className='plusProperty' htmlFor='plusProperty_smart'>
                    Smart property?
                    <span></span>
                    <input type='checkbox' name='smart_property' checked={isChecked?.smart} onChange={({ target }) => {
                        handleChecked({ target })
                    }} id='plusProperty_smart' />
                </label>

                <label className='plusProperty' htmlFor='plusProperty_parking'>
                    Parking Space?
                    <span></span>
                    <input type='checkbox' name='parking_property' checked={isChecked?.parking} onChange={({ target }) => {
                        handleChecked({ target })
                    }} id='plusProperty_parking' />
                </label>

                <label className='plusProperty' htmlFor='plusProperty_pool'>
                    Swimming Pool?
                    <span></span>
                    <input type='checkbox' name='pool_property' checked={isChecked?.pool} onChange={({ target }) => {
                        handleChecked({ target })
                    }} id='plusProperty_pool' />
                </label>
                <label className='plusProperty' htmlFor='plusProperty_security'>
                    Private Security?
                    <span></span>
                    <input type='checkbox' name='security_property' checked={isChecked?.security} onChange={({ target }) => {
                        handleChecked({ target })
                    }} id='plusProperty_security' />
                </label>
                <label className='plusProperty' htmlFor='plusProperty_medical'>
                    Medical Center near?
                    <span></span>
                    <input type='checkbox' name='medicalCenter_property' checked={isChecked?.medicalCenter} onChange={({ target }) => {
                        handleChecked({ target })
                    }} id='plusProperty_medical' />
                </label>
                <label className='plusProperty' htmlFor='plusProperty_library'>
                    Library Area?
                    <span></span>
                    <input type='checkbox' name='library_property' checked={isChecked?.library} onChange={({ target }) => {
                        handleChecked({ target })
                    }} id='plusProperty_library' />
                </label>
                <label className='plusProperty' htmlFor='plusProperty_kingsBeds'>
                    King size beds?
                    <span></span>
                    <input type='checkbox' name='kingBeds_property' checked={isChecked?.kingBeds} onChange={({ target }) => {
                        handleChecked({ target })
                    }} id='plusProperty_kingsBeds' />
                </label>
                <label className='plusProperty' htmlFor='plusProperty_playland'>
                    Kid's Playland?
                    <span></span>
                    <input type='checkbox' name='playland_property' checked={isChecked?.playland} onChange={({ target }) => {
                        handleChecked({ target })
                    }} id='plusProperty_playland' />
                </label>

                <button className='btn-add-property'>
                    <span type='button'>
                        <AiFillPlusCircle />
                    </span>
                    <p>Add property</p>
                </button>
            </form>

            <p>{formValue?.smart_property}</p>

        </div>
    )
}

export default AddProperty