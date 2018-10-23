import Main from '@/view/main'

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          hideInMenu: true,
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      icon: 'gear-a',
      title: '管理员'
    },
    component: Main,
    children: [
      {
        path: 'administrator',
        name: 'administrator',
        meta: {
          icon: 'person',
          title: '管理员操作'
        },
        component: () => import('@/view/user/administrator.vue')
      }
    ]
  },
  // 文章
  {
    path: '/article',
    name: 'article',
    meta: {
      icon: 'images',
      title: '文章管理'
    },
    component: Main,
    children: [
      {
        path: 'list',
        name: 'articleList',
        meta: {
          icon: 'ios-paper',
          title: '文章列表'
        },
        component: () => import('@/view/article/list.vue')
      },
      {
        path: 'add',
        name: 'articleAdd',
        meta: {
          icon: 'plus',
          title: '新增文章'
        },
        component: () => import('@/view/article/add.vue')
      }
    ]
  },
  // 用户
  {
    path: '/member',
    name: 'member',
    meta: {
      icon: 'person-stalker',
      title: '用户管理'
    },
    component: Main,
    children: [
      {
        path: 'list',
        name: 'memberList',
        meta: {
          icon: 'ios-paper',
          title: '用户列表'
        },
        component: () => import('@/view/member/list.vue')
      }
    ]
  },
  // 资源分享
  {
    path: '/share',
    name: 'share',
    meta: {
      icon: 'share',
      title: '分享管理'
    },
    component: Main,
    children: [
      {
        path: 'list',
        name: 'shareList',
        meta: {
          icon: 'ios-paper',
          title: '分享列表'
        },
        component: () => import('@/view/share/list.vue')
      },
      {
        path: 'add',
        name: 'shareAdd',
        meta: {
          icon: 'plus',
          title: '新增分享'
        },
        component: () => import('@/view/share/add.vue')
      }
    ]
  },
  // 评论
  {
    path: '/comment',
    name: 'comment',
    meta: {
      icon: 'chatbubble-working',
      title: '评论管理'
    },
    component: Main,
    children: [
      {
        path: 'list',
        name: 'commentList',
        meta: {
          icon: 'ios-paper',
          title: '评论列表'
        },
        component: () => import('@/view/comment/list.vue')
      }
    ]
  },
  // 权限
  {
    path: '/permission',
    name: 'permission',
    meta: {
      icon: 'locked',
      title: '权限管理'
    },
    component: Main,
    children: [
      {
        path: 'permission',
        name: 'permissionDistribution',
        meta: {
          icon: 'toggle',
          title: '权限分配'
        },
        component: () => import('@/view/permission/index.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    component: () => import('@/view/error-page/404.vue')
  }
]
