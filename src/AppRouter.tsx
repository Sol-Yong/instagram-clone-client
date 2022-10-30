import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLogin from './Pages/MainLogin';
import AccountJoin from './Pages/Account/AccountJoin';
import AccountLogin from './Pages//Account/AccountLogin';
import MainFeed from './Pages/MainFeed';
import PersonalFeed from './Pages/PersonalFeed';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLogin />} />
          {/* '/home'은 임시 경로임 로그인 가입하기 작업 시 '/' 경로로 교체 */}
          <Route path="/home" element={<MainFeed />} />
          <Route path="/:userid" element={<PersonalFeed />}>
            <Route path="saved" element={<PersonalFeed />} />
            <Route path="tagged" element={<PersonalFeed />} />
          </Route>
          <Route path="/accounts/emailsignup" element={<AccountJoin />} />
          <Route path="/accounts/login" element={<AccountLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
