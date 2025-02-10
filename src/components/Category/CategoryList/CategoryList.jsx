import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategories,
  deleteCategory,
} from '../../../redux/features/categorySlice.js';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Box,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
// Loader
import { DotLoader } from 'react-spinners';

const CategoryList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories, status, error } = useSelector(
    (state) => state.categories
  );
  console.log(categories);
  useEffect(() => {
    dispatch(fetchCategories(id));
  }, [dispatch, id]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCategory(id))
          .unwrap()
          .then(() => {
            toast.success('Category deleted successfully');
            dispatch(fetchCategories());
          })
          .catch(() => {
            toast.error('Failed to delete category');
          });
      }
    });
  };

  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Categories List
        <Button
          variant='contained'
          color='primary'
          style={{ float: 'right', marginBottom: '10px' }}
          onClick={() => navigate(`/add-category/${id}`)}>
          Add Category
        </Button>
      </Typography>

      {/* {loading && <Typography>Loading...</Typography>} */}
      {error && <Typography color='error'>{error}</Typography>}
      {status === 'loading' ? (
        <>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='90vh'>
            <DotLoader
              color='#000'
              margin={2}
              radius={20}
              speedMultiplier={1}
              aria-label='loading'
              data-testid='loader'
              size={100}
            />
          </Box>
        </>
      ) : (
        <>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Category Name</TableCell>
                <TableCell>Actions</TableCell>
                <TableCell>Menus</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories?.length > 0 ? (
                categories.map((category, index) => (
                  <TableRow key={category._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{category.name}</TableCell>
                    <TableCell>
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={() =>
                          navigate(`/edit-category/${category._id}`)
                        }>
                        Edit
                      </Button>
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => handleDelete(category._id)}
                        style={{ marginLeft: 10 }}>
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant='contained'
                        color='success'
                        onClick={() => navigate(`/add-menu/${category._id}`)}
                        style={{ marginLeft: 10 }}>
                        Add Menu
                      </Button>
                      <Button
                        variant='contained'
                        color='info'
                        onClick={() => navigate(`/view-menu/${category._id}`)}
                        style={{ marginLeft: 10 }}>
                        View Menu
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={2}>No categories found.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default CategoryList;
