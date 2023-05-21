
import { Routes as Router, Route } from "react-router-dom"

/* layout */
import { MainLayout } from "../layouts/MainLayout"

import { Home } from "../pages/Home.jsx"
/* auth */
import { Register } from "../pages/auth_pages/Register"
import { VerifyCode } from "../pages/auth_pages/VerifyCode"
import { Login } from "../pages/auth_pages/Login"

/* become member */
import { BecomeMember } from "../pages/become_member/BecomeMember"
import { CompanyForm } from "../pages/become_member/CompanyForm"
import { AuthorForm } from "../pages/become_member/AuthorForm"

/* mangas */
import { Mangas } from "../pages/explore_mangas/Mangas"
import { MangaDetails } from "../pages/explore_mangas/manga_details/MangaDetails"
import { Chapters } from "../pages/explore_mangas/manga_details/Chapters"
import { ReadChapter } from "../pages/explore_mangas/ReadChapter"
import { AuthorProfile } from "../pages/explore_mangas/AuthorProfile"

/* author/company dashboard */
import { MyMangas } from "../pages/my_mangas/MyMangas"
import { CreateManga } from "../pages/my_mangas/CreateManga"
import { DeleteManga } from "../pages/my_mangas/DeleteManga"
import { UpdateManga } from "../pages/my_mangas/UpdateManga"
import { MyChapters } from "../pages/my_chapters/MyChapters"
import { UpdateChapter } from "../pages/my_chapters/UpdateChapter"
import { DeleteChapter } from "../pages/my_chapters/DeleteChapter"
import { CreateChapter } from "../pages/my_chapters/CreateChapter"

/* admin dashboard */
import { AdminDashBoard } from "../pages/admin_pages/AdminDashboard"
import { Authors } from "../pages/admin_pages/Authors"
import { Companies } from "../pages/admin_pages/Companies"


import {MyProfile} from "../pages/user/MyProfile"
import {DeleteAccount} from "../pages/user/DeleteAccount"
import {UpdateProfile} from "../pages/user/UpdateProfile"

/* feedback */
import { ErrorPage } from "../pages/ErrorPage"
import { ProtectedRoute } from "./ProtectedRoute"
import { Description } from "../pages/explore_mangas/manga_details/Description"




export function Routes() {
    return (
        <Router>
            {/* home */}
            <Route
                path="/"
                element={<MainLayout>
                    <Home />
                </MainLayout>} />

            {/* admin dashboard */}
            <Route path="admin" element={<ProtectedRoute role={[3]}><AdminDashBoard /></ProtectedRoute>}>
                <Route index element={<Companies />} />
                <Route path="authors" element={<Authors />} />
            </Route>

            {/* auth pages */}
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/verify" element={<VerifyCode />} />

            {/* member pages */}
            <Route path="become-member" element={<ProtectedRoute role={[0]}><BecomeMember /></ProtectedRoute>} />

            <Route path="become-member/author-form" element={<ProtectedRoute role={[0]}><AuthorForm /></ProtectedRoute>} />

            <Route path="become-member/cia-form" element={<ProtectedRoute role={[0]}><CompanyForm /></ProtectedRoute>} />

            {/* TODO / COMMENTS */}

            {/* mangas pages */}

            <Route path="mangas/:page" element={<ProtectedRoute role={[0, 1, 2]}><Mangas /></ProtectedRoute>} />

            <Route path="manga/:manga_id" element={<ProtectedRoute role={[0, 1, 2]}><MangaDetails /></ProtectedRoute>}>
                <Route index element={<Description />} />
                <Route path='chapters/:page' element={<Chapters />} />
            </Route>

            <Route path="read/:chapter_id/:page" element={<ProtectedRoute role={[0, 1, 2]}><ReadChapter /></ProtectedRoute>} />

            <Route path="profile/author/:author_id" element={<ProtectedRoute role={[0, 1, 2]}><AuthorProfile /></ProtectedRoute>} />

            {/* author/company manga dashboard */}
            <Route path="mymangas/:page" element={<ProtectedRoute role={[1, 2]}><MyMangas /></ProtectedRoute>}>
                <Route index element={<></>} />
                <Route path='add-manga' element={<CreateManga />} />
                <Route path='update/:manga_id' element={<UpdateManga />} />
                <Route path='delete/:manga_id' element={<DeleteManga />} />
            </Route>

            {/* author/company chapter dashboard */}

            <Route path="mymangas/:page/:manga_id/chapters/:chapters_page" element={<ProtectedRoute role={[1, 2]}><MyChapters /></ProtectedRoute>}>
                <Route index element={<></>} />
                <Route path='add-chapter' element={<CreateChapter />} />
                <Route path='update/:chapter_id' element={<UpdateChapter />} />
                <Route path='delete/:chapter_id' element={<DeleteChapter />} />
            </Route>

            {/* user pages */}

            <Route path="profile/user/:user_id" element={<ProtectedRoute role={[0,1,2,3]}><MyProfile/></ProtectedRoute>}>
                <Route index element={<></>}/>
                <Route path="delete" element={<DeleteAccount/>}/>
                <Route path="update" element={<UpdateProfile/>}/>
            </Route>



            {/* feedback pages */}
            <Route path="*" element={<ErrorPage />} />


        </Router>
    )
}