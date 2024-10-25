import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './SellerForm.css';
import LocationPicker from './LocationPicker';

const schema = yup.object().shape({
  itemName: yup.string().required('Item Name is required').min(3, 'Min 3 chars'),
  itemDescription: yup.string().required('Required').min(10, 'Min 10 chars'),
  itemPrice: yup.number().required('Required').positive('Must be positive'),
  location: yup.string().required('Location is required'),
  startDate: yup.date().required('Required'),
  endDate: yup.date().required('Required').min(yup.ref('startDate'), 'End must be after start'),
  manufactureYear: yup.number()
    .required('Manufacture Year is required')
    .min(1900, 'Year must be after 1900')
    .max(new Date().getFullYear(), 'Year cannot be in the future'),
  make: yup.string().required('Make is required'),
  model: yup.string().required('Model is required'),
  bodyCondition: yup.string().required('Body Condition is required'),
  mileage: yup.number().required('Mileage is required').positive('Must be positive'),
  transmission: yup.string().required('Transmission type is required'),
  fuelType: yup.string().required('Fuel type is required'),
});

const CompactSellerForm = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isManualInput, setIsManualInput] = useState(false);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLocationSelect = (location) => {
    const locationString = `Lat: ${location.lat}, Lng: ${location.lng}`;
    setSelectedLocation(locationString);
    setValue('location', locationString);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setValue('images', files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  const toggleLocationInput = () => {
    setIsManualInput(!isManualInput);
    setSelectedLocation('');
  };

  // Watch form fields for summary updates
  const formValues = watch();

  // Body condition options
  const bodyConditions = [
    'Excellent',
    'Very Good',
    'Good',
    'Fair',
    'Poor',
    'Salvage'
  ];

  // Transmission options
  const transmissionTypes = [
    'Automatic',
    'Manual',
    'CVT',
    'Semi-Automatic',
    'Dual-Clutch'
  ];

  // Fuel type options
  const fuelTypes = [
    'Gasoline',
    'Diesel',
    'Electric',
    'Hybrid',
    'Plug-in Hybrid',
    'Natural Gas'
  ];

  return (
    <div className="form-container">
  <form onSubmit={handleSubmit(onSubmit)} className="compact-form">
    <header className="form-header">
      <h5>Sell Your Vehicle</h5>
      <p className="header-description">Fill in the details below to list your vehicle for sale.</p>
    </header>

    {/* Basic Vehicle Information */}
    <div className="form-section">
      <h6 className="section-title">Basic Information</h6>

      <div className="form-row">
        <div className="form-column">
          <div className="form-group">
            <label htmlFor="manufactureYear">Manufacture Year</label>
            <input
              id="manufactureYear"
              type="number"
              {...register('manufactureYear')}
              className={`form-control ${errors.manufactureYear ? 'is-invalid' : ''}`}
              placeholder="Enter year (e.g., 2020)"
            />
            <div className="error">{errors.manufactureYear?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="model">Model</label>
            <input
              id="model"
              type="text"
              {...register('model')}
              className={`form-control ${errors.model ? 'is-invalid' : ''}`}
              placeholder="Enter model (e.g., Camry)"
            />
            <div className="error">{errors.model?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="transmission">Transmission</label>
            <select
              id="transmission"
              {...register('transmission')}
              className={`form-control ${errors.transmission ? 'is-invalid' : ''}`}
            >
              <option value="">Select Transmission</option>
              {transmissionTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <div className="error">{errors.transmission?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="bodyCondition">Body Condition</label>
            <select
              id="bodyCondition"
              {...register('bodyCondition')}
              className={`form-control ${errors.bodyCondition ? 'is-invalid' : ''}`}
            >
              <option value="">Select Condition</option>
              {bodyConditions.map((condition) => (
                <option key={condition} value={condition}>{condition}</option>
              ))}
            </select>
            <div className="error">{errors.bodyCondition?.message}</div>
          </div>
        </div>

        <div className="form-column">
          <div className="form-group">
            <label htmlFor="make">Make</label>
            <input
              id="make"
              type="text"
              {...register('make')}
              className={`form-control ${errors.make ? 'is-invalid' : ''}`}
              placeholder="Enter make (e.g., Toyota)"
            />
            <div className="error">{errors.make?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="mileage">Mileage</label>
            <input
              id="mileage"
              type="number"
              {...register('mileage')}
              className={`form-control ${errors.mileage ? 'is-invalid' : ''}`}
              placeholder="Enter mileage"
            />
            <div className="error">{errors.mileage?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="fuelType">Fuel Type</label>
            <select
              id="fuelType"
              {...register('fuelType')}
              className={`form-control ${errors.fuelType ? 'is-invalid' : ''}`}
            >
              <option value="">Select Fuel Type</option>
              {fuelTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <div className="error">{errors.fuelType?.message}</div>
          </div>
        </div>
      </div>
    </div>

    {/* Listing Details */}
    <div className="form-section">
      <h6 className="section-title">Listing Details</h6>

      <div className="form-row">
        <div className="form-column">
          <div className="form-group">
            <label htmlFor="itemName">Title</label>
            <input
              id="itemName"
              type="text"
              {...register('itemName')}
              className={`form-control ${errors.itemName ? 'is-invalid' : ''}`}
              placeholder="Enter a title for your listing"
            />
            <div className="error">{errors.itemName?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="itemPrice">Asking Price ($)</label>
            <input
              id="itemPrice"
              type="number"
              {...register('itemPrice')}
              className={`form-control ${errors.itemPrice ? 'is-invalid' : ''}`}
              placeholder="Enter your asking price"
            />
            <div className="error">{errors.itemPrice?.message}</div>
          </div>
        </div>

        <div className="form-column">
          <div className="form-group">
            <label htmlFor="itemDescription">Description</label>
            <textarea
              id="itemDescription"
              rows="3"
              {...register('itemDescription')}
              className={`form-control ${errors.itemDescription ? 'is-invalid' : ''}`}
              placeholder="Describe your vehicle's condition, features, and history"
            ></textarea>
            <div className="error">{errors.itemDescription?.message}</div>
          </div>
        </div>
      </div>
    </div>

    {/* Images */}
    <div className="form-section">
      <h6 className="section-title">Vehicle Images</h6>

      <div className="form-group">
        <label htmlFor="images">Upload Images</label>
        <input
          id="images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="form-control"
        />
        {imagePreviews.length > 0 && (
          <div className="image-previews">
            {imagePreviews.map((src, index) => (
              <img key={index} src={src} alt={`Preview ${index + 1}`} />
            ))}
          </div>
        )}
      </div>
    </div>

    {/* Location and Dates */}
    <div className="form-section">
      <h6 className="section-title">Location and Availability</h6>

      <div className="form-row">
        <div className="form-column">
          <div className="form-group">
            <label>Location</label>
            <br></br>
            <div className="location-toggle">
              <button type="button" onClick={toggleLocationInput} className="btn-small btn-outline">
                {isManualInput ? 'Use Map' : 'Enter Manually'}
              </button>
              
            </div>
            <br></br>
            {isManualInput ? (
              <input
                type="text"
                value={selectedLocation}
                onChange={(e) => {
                  setSelectedLocation(e.target.value);
                  setValue('location', e.target.value);
                }}
                className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                placeholder="Enter address manually"
              />
            ) : (
              <div>
                <input
                  type="text"
                  value={selectedLocation}
                  className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                  placeholder="Select location on map"
                  readOnly
                />
                <LocationPicker onLocationSelect={handleLocationSelect} />
              </div>
            )}
            <div className="error">{errors.location?.message}</div>
          </div>
        </div>

        <div className="form-column">
          <div className="form-group">
            <label htmlFor="startDate">Listing Start Date</label>
            <input
              id="startDate"
              type="datetime-local"
              {...register('startDate')}
              className={`form-control ${errors.startDate ? 'is-invalid' : ''}`}
            />
            <div className="error">{errors.startDate?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="endDate">Listing End Date</label>
            <input
              id="endDate"
              type="datetime-local"
              {...register('endDate')}
              className={`form-control ${errors.endDate ? 'is-invalid' : ''}`}
            />
            <div className="error">{errors.endDate?.message}</div>
          </div>
        </div>
      </div>
    </div>

    <button type="submit" className="submit-btn">List Vehicle</button>
  </form>
</div>


    
   
  );
};

export default CompactSellerForm;
