import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import ROUTE_PATH from './constants';
import {
  ErrorPage,
  Intro,
  Register,
  Slide,
  UploadVerification,
  VerificationWalk,
  Setting,
  Home,
  Grid,
  Calendar,
  KakaoLogIn,
  GridByUser,
  SendingInvitation,
  FamilyList,
} from '../pages';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    path: ROUTE_PATH.ROOT,
    children: [
      {
        element: <Home />,
        path: ROUTE_PATH.HOME,
      },
      {
        element: <Intro />,
        path: ROUTE_PATH.INTRO,
      },
      {
        element: <KakaoLogIn />,
        path: ROUTE_PATH.KAKAO_LOGIN,
      },
      {
        element: <Register />,
        path: ROUTE_PATH.REGISTER_PET,
      },
      {
        element: <Slide />,
        path: ROUTE_PATH.SLIDE,
      },
      {
        element: <Grid />,
        path: ROUTE_PATH.GRID_BY_TYPE,
      },
      {
        element: <GridByUser />,
        path: ROUTE_PATH.GRID_BY_USER,
      },
      {
        element: <Calendar />,
        path: ROUTE_PATH.CALENDAR,
      },
      {
        element: <Setting />,
        path: ROUTE_PATH.SETTING,
      },
      {
        element: <SendingInvitation />,
        path: ROUTE_PATH.SENDING_INVITATION,
      },
      {
        element: <FamilyList />,
        path: ROUTE_PATH.FAMILY,
      },
      {
        element: <VerificationWalk />,
        path: ROUTE_PATH.VERIFICATIONWALK,
      },
      {
        element: <UploadVerification />,
        path: ROUTE_PATH.UPLOAD_VERIFICATION,
      },
    ],
  },
]);

export default router;
