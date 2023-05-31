import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);

  return (
    <div className='expense-item'>
      <div>Date</div>
      <div className='expense-item__description'>
        <h2>Title</h2>
        <div className='expense-item__price'>Amount</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
