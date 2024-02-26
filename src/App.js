
import { Route, Routes } from 'react-router-dom';
import CodeGymList from './pages/List';
import CodeGymCreate from './pages/Create';
import CodeGymEdit from './pages/Edit';
import CodeGymDelete from './pages/Delete';
import CodeGymDetail from './pages/Detail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CodeGymList />} />
        <Route path="/create" element={<CodeGymCreate />} />
        <Route path="/edit/:id" element={<CodeGymEdit />} />
        <Route path="/delete/:id" element={<CodeGymDelete />} />
        <Route path="/details/:id" element={<CodeGymDetail />} />
      </Routes>
    </>
  );
}

export default App;