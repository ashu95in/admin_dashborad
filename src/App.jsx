import "./App.css";
import LoginPage from "./pages/Login";
import Homepage from "./pages/Home";
import { Routes, Route, Router } from "react-router-dom";
import Dashboard from "./pages/NestedPage/Dashboard";
import Index from "./pages/NestedPage/WithdrawReq/Index";
import PIndex from "./pages/NestedPage/PlanEdite/Index";
import UIndex from "./pages/NestedPage/UserControle/Index";
import UserReqDet from "./pages/NestedPage/WithdrawReq/UserReqDet";
import WithdrawReqList from "./pages/NestedPage/WithdrawReq/WithdrawReqList";
import UserControle from "./pages/NestedPage/UserControle";
import Plandetail from "./pages/NestedPage/PlanEdite/Plandetail";
import PlanList from "./pages/NestedPage/PlanEdite/PlanList";
import Leaderboard from "./pages/NestedPage/Leaderboard";
import UserDetails from "./pages/NestedPage/UserControle/UserDetails";
import UserList from "./pages/NestedPage/UserControle/UserList";
import EditeBanner from "./pages/NestedPage/EditeBanner";
import VIndex from "./pages/NestedPage/videoControle/Index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/var";
import VideoList from "./pages/NestedPage/videoControle/VideoList";
import VideoEdit from "./pages/NestedPage/videoControle/VideoEdit";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Homepage />}>
            <Route path="/home/dashboard" element={<Dashboard />} />
            <Route path="/home/WithdrawReq" element={<Index />}>
              <Route
                path="/home/WithdrawReq/user/:userId/:amount/:status/:widrowlType/:upiId/:createdAt/:bankName/:accountNumber/:ifscCode" //
                element={<UserReqDet />}
              />
              <Route path="/home/WithdrawReq" element={<WithdrawReqList />} />
            </Route>
            <Route path="/home/UserControler" element={<UIndex />}>
              <Route path="/home/UserControler/" element={<UserList />} />
              <Route
                path="/home/UserControler/user/:id"
                element={<UserDetails />}
              />
            </Route>
            <Route path="/home/PlaneEdite" element={<PIndex />}>
              <Route path="/home/PlaneEdite/" element={<PlanList />} />

              <Route
                path="/home/PlaneEdite/Plan/:id/:title/:taskprice/:p/:task"
                element={<Plandetail />}
              />
              <Route
                path="/home/PlaneEdite/Plan/:id/*"
                element={<Plandetail />}
              />
            </Route>
            <Route path="/home/Leaderboard" element={<Leaderboard />} />
            <Route path="/home/Banner" element={<EditeBanner />} />
            <Route path="/home/VideoControle" element={<VIndex />}>
              <Route path="/home/VideoControle" element={<VideoList />} />
              <Route
                path="/home/VideoControle/:id/:vlink/:ilink/:title"
                element={<VideoEdit />}
              />
              <Route path="/home/VideoControle/:id" element={<VideoEdit />} />
            </Route>
            <Route path="/home/" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </QueryClientProvider>

      {/* <Routes>
          <Route  path="/" element={<LoginPage/>}  />
          <Route path="/home" element={<Homepage/>} />
          <Route index element={<Dashboard/>}  />
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="withdraw" element={<Index />}>
            <Route path="user" element={<UserReqDet />} />
          </Route>
          <Route path="UserControler" element={<UserControle />} />
        </Routes> */}
    </>
  );
}

export default App;
