import { TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { useState } from "react"
import { CreateBlogButton, StyledTable } from "./style/sideBarStyle.js"
import { useNavigate } from "react-router"
import { Link, useSearchParams } from "react-router-dom"

const SideBar = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [allCate, setAllCate] = useState([
        { id: 1, type: 'Security' },
        { id: 2, type: 'Cloud' },
        { id: 3, type: 'Technology' },
        { id: 4, type: 'Experience' },
        { id: 5, type: 'Product' },
        { id: 6, type: 'IoT' },
        { id: 7, type: 'Software' },
        { id: 8, type: 'VR' },
        { id: 9, type: 'News' },
        { id: 10, type: 'AI' }
    ])
    const category = searchParams.get('category')

    return (
        <>
            <CreateBlogButton variant="contained" onClick={() => navigate(`/post/create?category=${category || ''}`)}>Viết Blog</CreateBlogButton>

            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <p
                                onClick={() => {
                                    navigate(`/home`);
                                    window.location.reload();
                                }
                                }
                                style={{ textDecoration: 'none', color: '#000', margin: '0', cursor: 'pointer' }}>Tất cả danh mục
                            </p>

                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allCate.map(cate => {
                        return (
                            <TableRow key={cate.id}>
                                <TableCell>
                                    {/* <Link to={`/home?category=${cate.type}`} style={{ textDecoration: 'none', color: '#000' }}>{cate.type}</Link> */}
                                    <p
                                        onClick={() => {
                                            navigate(`/home?category=${cate.type}`);
                                            window.location.reload();
                                        }
                                        }
                                        style={{ textDecoration: 'none', color: '#000', margin: '0', cursor: 'pointer' }}>{cate.type}
                                    </p>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </StyledTable>
        </>
    )
}
export default SideBar