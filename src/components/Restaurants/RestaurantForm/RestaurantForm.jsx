import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRestaurant,
  updateRestaurant,
} from '../../../redux/Slices/restaurantSlice';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const RestaurantForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { restaurants, createStatus, updateStatus } = useSelector(
    (state) => state.restaurants
  );

  const [restaurant, setRestaurant] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    phone: '',
    email: '',
    website: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id && restaurants.data) {
      const existingRestaurant = restaurants.data.find((r) => r._id === id);
      if (existingRestaurant) setRestaurant(existingRestaurant);
    }
  }, [id, restaurants]);

  const validate = () => {
    let tempErrors = {};
    if (!restaurant.name) tempErrors.name = 'Name is required';
    if (!restaurant.address) tempErrors.address = 'Address is required';
    if (!restaurant.city) tempErrors.city = 'City is required';
    if (!restaurant.state) tempErrors.state = 'State is required';
    if (!restaurant.country) tempErrors.country = 'Country is required';
    if (!restaurant.zip || isNaN(restaurant.zip))
      tempErrors.zip = 'Zip must be a number';
    if (!restaurant.phone) tempErrors.phone = 'Phone is required';
    if (!restaurant.email) tempErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(restaurant.email))
      tempErrors.email = 'Invalid email format';
    if (!restaurant.website) tempErrors.website = 'Website is required';
    // else if (!/^https?:\/\/.+/.test(restaurant.website))
    //   tempErrors.website = 'Invalid website URL';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it!',
    }).then((result) => {
      if (result.isConfirmed) {
        if (id) {
          dispatch(updateRestaurant(restaurant))
            .unwrap()
            .then(() => toast.success('Restaurant updated successfully'))
            .catch(() => toast.error('Failed to update restaurant'));
        } else {
          dispatch(addRestaurant(restaurant))
            .unwrap()
            .then(() => toast.success('Restaurant added successfully'))
            .catch(() => toast.error('Failed to add restaurant'));
        }
        navigate('/');
      }
    });
  };

  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        {id ? 'Edit Restaurant' : 'Add Restaurant'}
      </Typography>
      <Box component='form' onSubmit={handleSubmit}>
        {Object.keys(restaurant).map((field) => (
          <TextField
            key={field}
            name={field}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            value={restaurant[field]}
            onChange={handleChange}
            fullWidth
            margin='normal'
            error={!!errors[field]}
            helperText={errors[field] || ''}
          />
        ))}
        <Button
          type='submit'
          variant='contained'
          color='primary'
          disabled={createStatus === 'loading' || updateStatus === 'loading'}>
          {createStatus === 'loading' || updateStatus === 'loading'
            ? 'Saving...'
            : 'Save'}
        </Button>
      </Box>
    </Container>
  );
};

export default RestaurantForm;
