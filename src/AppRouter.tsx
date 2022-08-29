import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLogin from './Pages/MainLogin';
import AccountJoin from './Pages/Account/AccountJoin';
import AccountLogin from './Pages//Account/AccountLogin';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLogin />} />
          <Route path="/accounts/emailsignup" element={<AccountJoin />} />
          <Route path="/accounts/login" element={<AccountLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
