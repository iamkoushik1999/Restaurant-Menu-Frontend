import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRestaurant,
  updateRestaurant,
  fetchRestaurantById,
} from '../../../redux/slices/restaurantSlice';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const RestaurantForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { restaurantDetails, createStatus, updateStatus } = useSelector(
    (state) => state.restaurants
  );

  const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    phone: '',
    email: '',
    website: '',
  };

  const [restaurant, setRestaurant] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      dispatch(fetchRestaurantById(id));
    } else {
      setRestaurant(initialState); // Reset form when adding a new restaurant
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (id && restaurantDetails) {
      setRestaurant({
        _id: restaurantDetails._id || '',
        name: restaurantDetails.name || '',
        address: restaurantDetails.address || '',
        city: restaurantDetails.city || '',
        state: restaurantDetails.state || '',
        country: restaurantDetails.country || '',
        zip: restaurantDetails.zip || '',
        phone: restaurantDetails.phone || '',
        email: restaurantDetails.email || '',
        website: restaurantDetails.website || '',
      });
    }
  }, [restaurantDetails, id]);

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

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          if (id) {
            await dispatch(updateRestaurant(restaurant)).unwrap();
            toast.success('Restaurant updated successfully', {
              id: 'update-toast',
            });
          } else {
            await dispatch(addRestaurant(restaurant)).unwrap();
            toast.success('Restaurant added successfully', { id: 'add-toast' });

            setRestaurant(initialState); // Clear form after successful addition
          }
          navigate('/restaurant');
        } catch (error) {
          toast.error('Failed to save restaurant', { id: 'error-toast' });
        }
      }
    });
  };

  const handleCancel = () => {
    navigate('/restaurant'); // Redirect to restaurant list when clicking Cancel
  };

  return (
    <Container>
      <Typography variant='h4'>
        {id ? 'Edit Restaurant' : 'Add Restaurant'}
      </Typography>
      <Box component='form' onSubmit={handleSubmit}>
        {[
          'name',
          'address',
          'city',
          'state',
          'country',
          'zip',
          'phone',
          'email',
          'website',
        ].map((field) => (
          <TextField
            key={field}
            name={field}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            value={restaurant[field] || ''}
            onChange={handleChange}
            fullWidth
            margin='normal'
            error={!!errors[field]}
            helperText={errors[field] || ''}
          />
        ))}
        <Box display='flex' justifyContent='space-between' mt={2}>
          <Button type='submit' variant='contained' color='primary'>
            Save
          </Button>
          <Button variant='contained' color='secondary' onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RestaurantForm;
