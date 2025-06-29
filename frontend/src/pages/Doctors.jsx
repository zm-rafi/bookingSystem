import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

const Doctors = () => {
  const { speciality } = useParams();
  const { address } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    let filteredDoctors = doctors;

    // Filter by speciality
    if (speciality && speciality !== 'All') {
      filteredDoctors = filteredDoctors.filter((doc) => doc.speciality === speciality);
    }

    // Filter by address
    if (address && address !== 'All') {
      filteredDoctors = filteredDoctors.filter((doc) => {
        // Check if the doctor's address contains the specified address
        return doc.address && doc.address.hospital === address;
      });
    }

    setFilterDoc(filteredDoctors);
  };

  useEffect(() => {
    applyFilter(); // Apply the filters whenever the `doctors`, `speciality`, or `address` changes
  }, [doctors, speciality, address]);

  const handleSpecialityChange = (event) => {
    const selectedSpeciality = event.target.value;
    if (selectedSpeciality === 'All') {
      navigate('/doctors');
    } else {
      navigate(`/doctors/${selectedSpeciality}`);
    }
  };

  const handleHospitalChange = (event) => {
    const selectedHospital = event.target.value;
    if (selectedHospital === 'All') {
      navigate('/doctors');
    } else {
      navigate(`/doctors/${speciality || 'All'}/${selectedHospital}`);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-gray-600">Browse through the doctors specialist.</p>

        {/* Dropdown for Hospital */}
        <select
          onChange={handleHospitalChange}
          value={address || 'All'}
          className="border p-2 rounded text-sm"
        >
          <option value="All">All Hospitals</option>
          <option value="United Medical">United Medical</option>
          <option value="Evercare">Evercare</option>
          <option value="Ibna sina">Ibna sina</option>
          <option value="Square">Square</option>
          <option value="BRB">BRB</option>
          <option value="Popolar Diagonestic">Popolar Diagonestic</option>
        </select>

        {/* Dropdown for Speciality */}
        <select
          onChange={handleSpecialityChange}
          value={speciality || 'All'}
          className="border p-2 rounded text-sm"
        >
          <option value="All">All Specialities</option>
          <option value="General physician">General physician</option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Pediatricians">Pediatricians</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Gastroenterologist">Gastroenterologist</option>
        </select>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Filters Button */}
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}
        >
          Filters
        </button>

        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
              className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-[#EAEFFF]" src={item.image} alt="" />
              <div className="p-4">
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-gray-500'}`}></p>
                  <p>{item.available ? 'Available' : 'Not Available'}</p>
                </div>
                <p className="text-[#262626] text-lg font-medium">{item.name}</p>
                <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
