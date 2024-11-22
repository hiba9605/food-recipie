// import React, { useEffect, useState } from 'react';
// import { Row, Col } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchRecipies, filterRecipiesByCuisine } from '../redux/slices/recipeSlice';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { allRecipies, loading, errorMsg, filteredRecipies } = useSelector(
//     (state) => state.RecipieReducer
//   );

//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const recipiesPerPage = 6;

//   const recipesToDisplay = filteredRecipies?.length > 0 ? filteredRecipies : allRecipies;

//   const totalPages = Math.ceil(recipesToDisplay?.length / recipiesPerPage);
//   const currentPageProductLastIndex = currentPage * recipiesPerPage;
//   const currentPageProductFirstIndex = currentPageProductLastIndex - recipiesPerPage;
//   const visibleAllProducts = recipesToDisplay?.slice(
//     currentPageProductFirstIndex,
//     currentPageProductLastIndex
//   );

//   const navigatetoNext = () => {
//     if (currentPage !== totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const navigatetoPrevious = () => {
//     if (currentPage !== 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     dispatch(filterRecipiesByCuisine(query)); 
//   };

//   useEffect(() => {
//     dispatch(fetchRecipies()); 
//   }, [dispatch]);

//   return (
//     <div>
//       <input
//         style={{
//           marginLeft: '100px',
//           padding: '10px',
//           width: '80%',
//           marginTop: '50px',
//         }}
//         type="text"
//         placeholder="Search by cuisine"
//         value={searchQuery}
//         onChange={handleSearchChange} 
//       />

//       <div style={{ marginLeft: '100px', marginTop: '30px' }}>
//         {loading && <div>Loading...</div>}
//         {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}

//         <Row>
//           {recipesToDisplay?.length > 0 ? (
//             visibleAllProducts.map((recipe) => (
//               <Col md={4} key={recipe.id}>
//                 <Card style={{ width: '18rem', marginBottom: '20px' }}>
//                   <Card.Img
//                     variant="top"
//                     src={recipe.image}
//                     alt={recipe.name}
//                   />
//                   <Card.Body>
//                     <Card.Title>{recipe.name}</Card.Title>
//                     <Card.Text>
//                     </Card.Text>
//                     <Link to={`/${recipe.id}/view`}>
//                       <Button variant="primary">View Recipe</Button>
//                     </Link>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))
//           ) : (
//             !loading && <div>No recipes found</div>
//           )}
//         </Row>
//       </div>

//       <div className="text-2xl text-center font-bold mt-20">
//         <span onClick={navigatetoPrevious} className="cursor-pointer">
//           <i className="fa-solid fa-backward me-5"></i>
//         </span>
//         <span>
//           {currentPage} of {totalPages}
//         </span>
//         <span onClick={navigatetoNext} className="cursor-pointer">
//           <i className="fa-solid fa-forward ms-5"></i>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useState } from 'react'; 
import { Row, Col } from 'react-bootstrap'; 
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom'; 
import { fetchRecipies, filterRecipiesByCuisine } from '../redux/slices/recipeSlice';  

const Home = () => { 
  const dispatch = useDispatch(); 
  const { allRecipies, loading, errorMsg, filteredRecipies } = useSelector(
    (state) => state.RecipieReducer
  ); 

  const [searchQuery, setSearchQuery] = useState(''); 
  const [currentPage, setCurrentPage] = useState(1); 
  const recipiesPerPage = 6; 

  const recipesToDisplay = filteredRecipies?.length > 0 ? filteredRecipies : allRecipies; 
  const totalPages = Math.ceil(recipesToDisplay?.length / recipiesPerPage); 
  const currentPageProductLastIndex = currentPage * recipiesPerPage; 
  const currentPageProductFirstIndex = currentPageProductLastIndex - recipiesPerPage; 
  const visibleAllProducts = recipesToDisplay?.slice(
    currentPageProductFirstIndex,
    currentPageProductLastIndex
  ); 

  const navigatetoNext = () => { 
    if (currentPage !== totalPages) { 
      setCurrentPage(currentPage + 1); 
    } 
  }; 

  const navigatetoPrevious = () => { 
    if (currentPage !== 1) { 
      setCurrentPage(currentPage - 1); 
    } 
  }; 

  const handleSearchChange = (e) => { 
    const query = e.target.value; 
    setSearchQuery(query); 
    dispatch(filterRecipiesByCuisine(query));
  }; 

  useEffect(() => { 
    dispatch(fetchRecipies());
  }, [dispatch]); 

  return ( 
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)' }}>
      <input
        style={{
          margin: '30px auto',
          display: 'block',
          padding: '15px',
          width: '80%',
          border: '1px solid #ccc',
          borderRadius: '20px',
          fontSize: '16px',
          transition: 'all 0.3s ease',
        }}
        type="text"
        placeholder="Search by cuisine"
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={(e) => e.target.style.borderColor = '#007bff'}
        onBlur={(e) => e.target.style.borderColor = '#ccc'}
      />

      <div style={{ marginTop: '30px' }}>
        {loading && <div style={{ textAlign: 'center', color: '#6c757d' }}>Loading...</div>}
        {errorMsg && <div style={{ color: 'red', textAlign: 'center' }}>{errorMsg}</div>}

        <Row>
          {recipesToDisplay?.length > 0 ? (
            visibleAllProducts.map((recipe) => (
              <Col md={4} key={recipe.id} style={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  style={{
                    width: '90%',
                    border: 'none',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={recipe.image}
                    alt={recipe.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title style={{ fontWeight: 'bold', color: '#343a40' }}>
                      {recipe.name}
                    </Card.Title>
                    <Link to={`/${recipe.id}/view`}>
                      <Button
                        variant="primary"
                        style={{
                          borderRadius: '20px',
                          padding: '10px 20px',
                          backgroundColor: '#007bff',
                          borderColor: '#007bff',
                        }}
                      >
                        View Recipe
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            !loading && (
              <div style={{ textAlign: 'center', color: '#6c757d', marginTop: '20px' }}>
                No recipes found
              </div>
            )
          )}
        </Row>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '18px', fontWeight: 'bold' }}>
        <span
          onClick={navigatetoPrevious}
          style={{
            cursor: 'pointer',
            marginRight: '20px',
            color: '#007bff',
            fontSize: '20px',
          }}
        >
          <i className="fa-solid fa-backward me-5"></i>
        </span>
        <span style={{ color: '#343a40' }}>
          {currentPage} of {totalPages}
        </span>
        <span
          onClick={navigatetoNext}
          style={{
            cursor: 'pointer',
            marginLeft: '20px',
            color: '#007bff',
            fontSize: '20px',
          }}
        >
          <i className="fa-solid fa-forward ms-5"></i>
        </span>
      </div>
    </div>
  );
};

export default Home;






