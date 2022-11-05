const Card = ({ expenseData }) => {
  return (
    <div
      style={{
        background: 'wheat',
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
        borderRadius: '1rem',
      }}
    >
      <div>
        <span
          style={{ fontWeight: '500', fontSize: '1rem', marginRight: '0.5rem' }}
        >
          Category:
        </span>
        <span style={{ fontWeight: '500', color: '#000029' }}>
          {expenseData.category.name}
        </span>
      </div>
      <div>
        <span
          style={{ fontWeight: '500', fontSize: '1rem', marginRight: '0.5rem' }}
        >
          Total Cost:
        </span>
        <span style={{ fontWeight: '500', color: '#000029' }}>
          <strong style={{ color: '#000' }}>₹ </strong>
          {expenseData.cost}
        </span>
      </div>
      <div>
        <span
          style={{ fontWeight: '500', fontSize: '1rem', marginRight: '0.5rem' }}
        >
          Created by :
        </span>
        <span style={{ fontWeight: '500', color: '#000029' }}>
          {expenseData.created_by.first_name}
        </span>
      </div>
      <div>
        <span
          style={{ fontWeight: '500', fontSize: '1rem', marginRight: '0.5rem' }}
        >
          Pic of user created this:
        </span>{' '}
        <img
          src={expenseData.created_by.picture.medium}
          alt=""
          width="50px"
          height="50px"
        />
      </div>
      <div>
        <span
          style={{ fontWeight: '500', fontSize: '1rem', marginRight: '0.5rem' }}
        >
          Date:
        </span>
        <span style={{ fontWeight: '500', color: '#000029' }}>
          {expenseData.date.split('T')[0]}
        </span>
      </div>
      <div>
        <span
          style={{ fontWeight: '500', fontSize: '1rem', marginRight: '0.5rem' }}
        >
          Descrption :
        </span>
        <span style={{ fontWeight: '500', color: '#000029' }}>
          {expenseData.description}
        </span>
      </div>
    </div>
  );
};

export default Card;
