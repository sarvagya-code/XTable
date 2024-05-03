import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const data = 
  [
  
      { date: "2022-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-02", views: 150, article: "Article 2" },
  
      { date: "2023-09-02", views: 120, article: "Article 3" },
  
      { date: "2020-09-03", views: 200, article: "Article 4" }
  
  ];

  const [sortBy, setSortBy] = useState(null);
  const [sortedOrder, setSortedOrder] = useState('asc');

  const handleSort = (key) => {
    if(sortBy === key){
      setSortedOrder(sortedOrder === 'asc' ? 'dsc' : 'asc')
    }else{
      setSortBy(key);
      setSortedOrder('asc')
    }
  };

  const sortedData = [...data].sort((a,b) => {
    if(sortBy){
      if(sortedOrder === 'asc'){
        return a[sortBy] > b[sortBy] ? 1 : -1;
      }else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    }else {
      return 0;
    }
  })
  
  
  return (
    <div className='App'>
        <h1>Date and Views Table</h1>
        <div style={{paddingBottom: '2rem'}}>
            <button onClick={() => handleSort('date')}>Sort by Date</button>
            <button onClick={() => handleSort('views')}>Sort by Views</button>
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Article</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((row, index) => (
                    <tr key={index}>
                        <td>{row.date}</td>
                        <td>{row.views}</td>
                        <td>{row.article}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
}

export default App;
