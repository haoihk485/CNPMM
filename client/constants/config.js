export const API_NOTIFICATION_MESSAGES = {
    networkError: {
        title: 'Error',
        message: 'Không có kết nối Internet. Kiểm tra kết nối của bạn và thử lại'
    }
}

export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: "POST" },
    userLogin: { url: '/login', method: "POST" },
    createPost: {
        url: '/post/create', method: 'POST', headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': sessionStorage.getItem('accessToken') ? sessionStorage.getItem('accessToken') : 'null'
        }
    },
    createPostNoImage: {
        url: '/post/createNoImage', method: 'POST', headers: {
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('accessToken') ? sessionStorage.getItem('accessToken') : 'null'
        }
    },
    getAllPosts: {
        url: '/posts', method: 'GET', params: true, headers:
        {
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('accessToken') ? sessionStorage.getItem('accessToken') : 'null'
        }
    },
    getPostById: {
        url: '/post', method: 'GET', query: true, headers:
        {
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('accessToken') ? sessionStorage.getItem('accessToken') : 'null'
        }
    },
    updatePost: {
        url: '/post/update', method: 'PUT', headers:
        {
            'Content-Type': 'multipart/form-data',
            'Authorization': sessionStorage.getItem('accessToken') ? sessionStorage.getItem('accessToken') : 'null'
        }
    },
    updatePostNoImage: {
        url: '/post/updateNoImage', method: 'PUT', headers:
        {
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('accessToken') ? sessionStorage.getItem('accessToken') : 'null'
        }
    },
    deletePost: {
        url: '/post/delete', method: 'DELETE', headers:
        {
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('accessToken') ? sessionStorage.getItem('accessToken') : 'null'
        }
    },
    addComment: {
        url: '/comment/create', method: 'POST', headers:
        {
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('accessToken') ? sessionStorage.getItem('accessToken') : 'null'
        }
    },
    getAllComments: {
        url: '/comments', method: 'GET', query: true, headers:
        {
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('accessToken') ? sessionStorage.getItem('accessToken') : 'null'
        }
    }
}