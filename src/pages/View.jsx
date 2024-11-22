// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useParams } from 'react-router-dom';

// const View = () => {
//   const { id } = useParams(); 
//   const [recipie, setRecipie] = useState({}); 

//   useEffect(() => {
//     if (sessionStorage.getItem('allRecipies')) {
//       const allRecipies = JSON.parse(sessionStorage.getItem('allRecipies'));
//       const selectedRecipie = allRecipies.find((item) => item.id == id); 
//       setRecipie(selectedRecipie || {}); 
//     }
//   }, [id]);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
//       {recipie ? (
//         <Card style={{ width: '30rem' }}>
//           <Card.Img
//             variant="top"
//             src={recipie.image  } 
//             alt={recipie.name }
//           />
//           <Card.Body>
//             <Card.Title>{recipie.name || 'Recipe Name'}</Card.Title>
//             <Card.Text>
//               <strong>Description:</strong> {recipie.description || 'No description available'}
//             </Card.Text>
//             <Card.Text>
//               <strong>Ingredients:</strong> {recipie.ingredients?.join(', ') || 'No ingredients available.'}
//             </Card.Text>
//             <Card.Text>
//               <strong>Instructions:</strong> {recipie.instructions || 'No instructions provided.'}
//             </Card.Text>
//             <Button variant="primary" href="/" style={{ marginTop: '10px' }}>
//               Back to Home
//             </Button>
//           </Card.Body>
//         </Card>
//       ) : (
//         <div>Recipe not found.</div>
//       )}
//     </div>
//   );
// };

// export default View;


import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

const View = () => {
  const { id } = useParams(); 
  const [recipie, setRecipie] = useState({}); 

  useEffect(() => {
    if (sessionStorage.getItem('allRecipies')) {
      const allRecipies = JSON.parse(sessionStorage.getItem('allRecipies'));
      const selectedRecipie = allRecipies.find((item) => item.id == id); 
      setRecipie(selectedRecipie || {}); 
    }
  }, [id]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', padding: '20px' }}>
      {recipie ? (
        <Card
          style={{
            width: '100%',
            maxWidth: '500px',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
          }}
        >
          <Card.Img
            variant="top"
            src={recipie.image || 'https://via.placeholder.com/500'}
            alt={recipie.name}
            style={{
              height: '300px',
              objectFit: 'cover',
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
            }}
          />
          <Card.Body
            style={{
              padding: '20px',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            <Card.Title style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
              {recipie.name || 'Recipe Name'}
            </Card.Title>
            <Card.Text style={{ fontSize: '16px', color: '#555', marginTop: '15px' }}>
              <strong>Description:</strong> {recipie.description || 'No description available.'}
            </Card.Text>
            <Card.Text style={{ fontSize: '16px', color: '#555', marginTop: '10px' }}>
              <strong>Ingredients:</strong> {recipie.ingredients?.join(', ') || 'No ingredients available.'}
            </Card.Text>
            <Card.Text style={{ fontSize: '16px', color: '#555', marginTop: '10px' }}>
              <strong>Instructions:</strong> {recipie.instructions || 'No instructions provided.'}
            </Card.Text>
            <Button
              variant="primary"
              href="/"
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                borderRadius: '20px',
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                fontSize: '16px',
              }}
            >
              Back to Home
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <div
          style={{
            fontSize: '18px',
            color: '#555',
            textAlign: 'center',
            marginTop: '50px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Recipe not found.
        </div>
      )}
    </div>
  );
};

export default View;
