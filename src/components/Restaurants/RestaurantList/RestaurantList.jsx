import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRestaurants,
  deleteRestaurant,
} from '../../../redux/features/restaurantSlice';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
// Loader
import Loader from '../../Loader/CustomLoader';

const RestaurantList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { restaurants, status, error } = useSelector(
    (state) => state.restaurants
  );

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed === true) {
        dispatch(deleteRestaurant(id))
          .unwrap()
          .then(() => {
            toast.success('Restaurant deleted successfully', {
              id: 'delete-toast',
            });
            dispatch(fetchRestaurants());
          })
          .catch((error) => {
            console.log(error);
            toast.error('Failed to delete restaurant', { id: 'delete-toast' });
          });
      }
    });
  };

  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Restaurants List
        <Button
          variant='contained'
          color='primary'
          style={{ float: 'right', marginBottom: '10px' }}
          onClick={() => navigate('/restaurant/add')}>
          Add Restaurant
        </Button>
      </Typography>

      {/* {status === 'loading' && <Typography>Loading...</Typography>} */}
      {error && <Typography color='error'>{error}</Typography>}
      {status === 'loading' ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Actions</TableCell>
                <TableCell>Categories</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurants.data?.length > 0 ? (
                restaurants.data?.map((restaurant) => (
                  <TableRow key={restaurant._id}>
                    <TableCell>{restaurant.name}</TableCell>
                    <TableCell>{restaurant.email}</TableCell>
                    <TableCell>{restaurant.phone}</TableCell>
                    <TableCell>
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={() =>
                          navigate(`/restaurant/edit/${restaurant._id}`)
                        }>
                        Edit
                      </Button>
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => handleDelete(restaurant._id)}
                        style={{ marginLeft: 10 }}>
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant='contained'
                        color='success'
                        onClick={() =>
                          navigate(`/add-category/${restaurant._id}`)
                        }>
                        Add Category
                      </Button>
                      <Button
                        variant='contained'
                        color='info'
                        onClick={() =>
                          navigate(`/categories/${restaurant._id}`)
                        }
                        style={{ marginLeft: 10 }}>
                        View Category
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5}>No restaurants found.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default RestaurantList;
