import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './AdvanceSeller.css'; // Make sure to import your CSS file

const schema = yup.object().shape({
  manufactureYear: yup.number().required('Manufacture Year is required').positive('Manufacture Year must be a positive number'),
  make: yup.string().required('Make is required'),
  model: yup.string().required('Model is required'),
  bodyStyle: yup.string().required('Body Style is required'),
  vin: yup.string().required('VIN/SN is required'),
  odometer: yup.number().required('Odometer is required').positive('Odometer must be a positive number'),
  engine: yup.string().required('Engine Make/Model is required'),
  cylinders: yup.number().required('Cylinders are required').positive('Cylinders must be a positive number'),
  fuelType: yup.string().required('Fuel Type is required'),
  transmission: yup.string().required('Transmission Type is required'),
  axleType: yup.string().required('Single/Dual Axle is required'),
  tireSize: yup.string().required('Tire Size/Type is required'),
  tireCondition: yup.string().required('Tire Condition is required'),
  drivetrain: yup.string().required('Drivetrain is required'),
  operationalStatus: yup.string().required('Operational Status is required'),
  startingStatus: yup.string().required('Starting Status is required'),
  keysAvailable: yup.string().required('Keys Availability is required'),
  ownershipDocuments: yup.string().required('Ownership Documents are required'),
  mechanicalCondition: yup.string().required('Mechanical Condition is required'),
  mechanicalNotes: yup.string(),
  bodyCondition: yup.string().required('Body Condition is required'),
  bodyNotes: yup.string(),
  interiorCondition: yup.string().required('Interior Condition is required'),
  miscInfo: yup.string(),
});

const SellerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div className="form-container">
      <div className="row">
        {/* Left side - Form for additional details */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)} className="seller-form">
            <header className="form-header">
              <h5>Sell Your Vehicle</h5>
              <p className="header-description">Please provide detailed information about your vehicle.</p>
            </header>

            {/* Vehicle details fields */}
            <div className="mb-3">
              <label htmlFor="manufactureYear" className="form-label">Manufacture Year</label>
              <input
                id="manufactureYear"
                type="number"
                placeholder="Enter manufacture year"
                {...register('manufactureYear')}
                className={`form-control ${errors.manufactureYear ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.manufactureYear?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="make" className="form-label">Make</label>
              <input
                id="make"
                type="text"
                placeholder="Enter vehicle make"
                {...register('make')}
                className={`form-control ${errors.make ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.make?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="model" className="form-label">Model</label>
              <input
                id="model"
                type="text"
                placeholder="Enter vehicle model"
                {...register('model')}
                className={`form-control ${errors.model ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.model?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="bodyStyle" className="form-label">Body Style</label>
              <input
                id="bodyStyle"
                type="text"
                placeholder="Enter body style"
                {...register('bodyStyle')}
                className={`form-control ${errors.bodyStyle ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.bodyStyle?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="vin" className="form-label">VIN/SN</label>
              <input
                id="vin"
                type="text"
                placeholder="Enter VIN/SN"
                {...register('vin')}
                className={`form-control ${errors.vin ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.vin?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="odometer" className="form-label">Odometer (miles)</label>
              <input
                id="odometer"
                type="number"
                placeholder="Enter odometer number"
                {...register('odometer')}
                className={`form-control ${errors.odometer ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.odometer?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="engine" className="form-label">Engine Make/Model</label>
              <input
                id="engine"
                type="text"
                placeholder="Enter engine make/model"
                {...register('engine')}
                className={`form-control ${errors.engine ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.engine?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="cylinders" className="form-label">Cylinders</label>
              <input
                id="cylinders"
                type="number"
                placeholder="Enter number of cylinders"
                {...register('cylinders')}
                className={`form-control ${errors.cylinders ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.cylinders?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="fuelType" className="form-label">Fuel Type</label>
              <input
                id="fuelType"
                type="text"
                placeholder="Enter fuel type"
                {...register('fuelType')}
                className={`form-control ${errors.fuelType ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.fuelType?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="transmission" className="form-label">Transmission Type</label>
              <input
                id="transmission"
                type="text"
                placeholder="Enter transmission type"
                {...register('transmission')}
                className={`form-control ${errors.transmission ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.transmission?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="axleType" className="form-label">Single/Dual Axle</label>
              <input
                id="axleType"
                type="text"
                placeholder="Enter axle type"
                {...register('axleType')}
                className={`form-control ${errors.axleType ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.axleType?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="tireSize" className="form-label">Tire Size/Type</label>
              <input
                id="tireSize"
                type="text"
                placeholder="Enter tire size/type"
                {...register('tireSize')}
                className={`form-control ${errors.tireSize ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.tireSize?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="tireCondition" className="form-label">Tire Condition</label>
              <input
                id="tireCondition"
                type="text"
                placeholder="Enter tire condition"
                {...register('tireCondition')}
                className={`form-control ${errors.tireCondition ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.tireCondition?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="drivetrain" className="form-label">Drivetrain</label>
              <input
                id="drivetrain"
                type="text"
                placeholder="Enter drivetrain"
                {...register('drivetrain')}
                className={`form-control ${errors.drivetrain ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.drivetrain?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="operationalStatus" className="form-label">Operational Status</label>
              <input
                id="operationalStatus"
                type="text"
                placeholder="Operational status"
                {...register('operationalStatus')}
                className={`form-control ${errors.operationalStatus ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.operationalStatus?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="startingStatus" className="form-label">Starting Status</label>
              <input
                id="startingStatus"
                type="text"
                placeholder="Starting status"
                {...register('startingStatus')}
                className={`form-control ${errors.startingStatus ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.startingStatus?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="keysAvailable" className="form-label">Keys Available</label>
              <input
                id="keysAvailable"
                type="text"
                placeholder="Keys available?"
                {...register('keysAvailable')}
                className={`form-control ${errors.keysAvailable ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.keysAvailable?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="ownershipDocuments" className="form-label">Ownership Documents</label>
              <input
                id="ownershipDocuments"
                type="text"
                placeholder="Ownership documents"
                {...register('ownershipDocuments')}
                className={`form-control ${errors.ownershipDocuments ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.ownershipDocuments?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="mechanicalCondition" className="form-label">Mechanical Condition</label>
              <input
                id="mechanicalCondition"
                type="text"
                placeholder="Mechanical condition"
                {...register('mechanicalCondition')}
                className={`form-control ${errors.mechanicalCondition ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.mechanicalCondition?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="mechanicalNotes" className="form-label">Mechanical Notes</label>
              <textarea
                id="mechanicalNotes"
                placeholder="Enter mechanical notes"
                {...register('mechanicalNotes')}
                className={`form-control ${errors.mechanicalNotes ? 'is-invalid' : ''}`}
              ></textarea>
              <div className="invalid-feedback">{errors.mechanicalNotes?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="bodyCondition" className="form-label">Body Condition</label>
              <input
                id="bodyCondition"
                type="text"
                placeholder="Enter body condition"
                {...register('bodyCondition')}
                className={`form-control ${errors.bodyCondition ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.bodyCondition?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="bodyNotes" className="form-label">Body Notes</label>
              <textarea
                id="bodyNotes"
                placeholder="Enter body notes"
                {...register('bodyNotes')}
                className={`form-control ${errors.bodyNotes ? 'is-invalid' : ''}`}
              ></textarea>
              <div className="invalid-feedback">{errors.bodyNotes?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="interiorCondition" className="form-label">Interior Condition</label>
              <input
                id="interiorCondition"
                type="text"
                placeholder="Enter interior condition"
                {...register('interiorCondition')}
                className={`form-control ${errors.interiorCondition ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.interiorCondition?.message}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="miscInfo" className="form-label">Miscellaneous Information</label>
              <textarea
                id="miscInfo"
                placeholder="Any additional info"
                {...register('miscInfo')}
                className={`form-control ${errors.miscInfo ? 'is-invalid' : ''}`}
              ></textarea>
              <div className="invalid-feedback">{errors.miscInfo?.message}</div>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        {/* Right side - Summary of Vehicle Details */}
        <div className="col-md-6 vehicle-details">
          <h5>Vehicle Details Summary</h5>
          {/* Here you can display a summary of the vehicle details as needed */}
        </div>
      </div>
    </div>
  );
};

export default SellerForm;
